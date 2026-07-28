import { HORIZONS, type Forecast, type Horizon } from "./domain";

export interface ScoredForecast {
  outcomes: Record<Horizon, boolean>;
  brierScore: number;
  absoluteTimingErrorMinutes: number | null;
}

export function scoreForecast(forecast: Forecast, actualResetAtUtc: string | null): ScoredForecast {
  const actual = actualResetAtUtc ? Date.parse(actualResetAtUtc) : null;
  const start = Date.parse(forecast.forecastAtUtc);
  const outcomes = Object.fromEntries(HORIZONS.map((hours) => [
    hours,
    actual !== null && actual >= start && actual <= start + hours * 3_600_000,
  ])) as Record<Horizon, boolean>;
  const brierScore = HORIZONS.reduce((sum, hours) => {
    const error = forecast.probabilities[hours] - Number(outcomes[hours]);
    return sum + error * error;
  }, 0) / HORIZONS.length;
  const intervalCenter = (Date.parse(forecast.likelyStartUtc) + Date.parse(forecast.likelyEndUtc)) / 2;
  return {
    outcomes,
    brierScore,
    absoluteTimingErrorMinutes: actual === null ? null : Math.round(Math.abs(actual - intervalCenter) / 60_000),
  };
}

export function summarizeScores(rows: ScoredForecast[]) {
  if (!rows.length) return { brierScore: null, falseAlarmRate: null, missedEventRate: null };
  const brierScore = rows.reduce((sum, row) => sum + row.brierScore, 0) / rows.length;
  const alerts = rows.filter((row) => row.outcomes[6] || row.brierScore > 0.2);
  const falseAlarms = rows.filter((row) => !row.outcomes[6] && row.brierScore > 0.2).length;
  const positives = rows.filter((row) => row.outcomes[6]);
  const missed = positives.filter((row) => row.brierScore > 0.35).length;
  return {
    brierScore,
    falseAlarmRate: alerts.length ? falseAlarms / alerts.length : 0,
    missedEventRate: positives.length ? missed / positives.length : 0,
  };
}

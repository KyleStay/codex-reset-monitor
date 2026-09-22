export function browserTimeZone(value = Intl.DateTimeFormat().resolvedOptions().timeZone): string | null {
  if (!value) return null;
  try {
    new Intl.DateTimeFormat("en", { timeZone: value }).format();
    return value;
  } catch {
    return null;
  }
}

export function localDateTimeToUtc(value: string): string {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,3}))?)?$/);
  if (!match) throw new Error("Enter a valid date and time.");
  const [, year, month, day, hour, minute, second = "0", fraction = "0"] = match;
  const parts = [year, month, day, hour, minute, second].map(Number);
  const milliseconds = Number(fraction.padEnd(3, "0"));
  const date = new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5], milliseconds);
  const matchesWallTime = (candidate: Date) => candidate.getFullYear() === parts[0]
    && candidate.getMonth() === parts[1] - 1
    && candidate.getDate() === parts[2]
    && candidate.getHours() === parts[3]
    && candidate.getMinutes() === parts[4]
    && candidate.getSeconds() === parts[5]
    && candidate.getMilliseconds() === milliseconds;
  if (!matchesWallTime(date)) throw new Error("Enter a valid date and time.");
  for (let offsetMinutes = 1; offsetMinutes <= 180; offsetMinutes += 1) {
    const offsetMs = offsetMinutes * 60_000;
    if (matchesWallTime(new Date(date.getTime() - offsetMs)) || matchesWallTime(new Date(date.getTime() + offsetMs))) {
      throw new Error("Enter an unambiguous date and time.");
    }
  }
  return date.toISOString();
}

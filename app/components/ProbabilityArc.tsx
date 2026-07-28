export function ProbabilityArc({ value, label }: { value: number; label: string }) {
  const percent = Math.round(value * 100);
  return (
    <div className="probability" aria-label={`${percent}% chance within ${label}`}>
      <div className="arc" style={{ "--p": `${percent * 3.6}deg` } as React.CSSProperties}>
        <div><strong>{percent}%</strong><span>{label}</span></div>
      </div>
    </div>
  );
}

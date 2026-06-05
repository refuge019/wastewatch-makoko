export function calculatePriority(type, severity) {
  let score = 0;

  if (severity === "High") score += 3;
  if (severity === "Medium") score += 2;
  if (severity === "Low") score += 1;

  if (type === "Plastic") score += 2;
  if (type === "Mixed Waste") score += 3;
  if (type === "Metal") score += 2;
  if (type === "Organic") score += 1;

  if (score >= 6) return "CRITICAL";
  if (score >= 4) return "HIGH";
  return "LOW";
}
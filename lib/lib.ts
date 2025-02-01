export function roundOff(num: number, decimal: number) {
  const factor = Math.pow(10, decimal);
  return Math.round(factor * num) / factor;
}

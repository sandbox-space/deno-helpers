export function sleep (ms: number): Promise<void> {
  return new Promise(resolve => setInterval(resolve, ms));
}
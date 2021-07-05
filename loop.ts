import { sleep } from "./sleep.ts"

export async function loop(intervalSeconds: number, func: () => void): Promise<void> {
  for (;;) {
    func();
    await sleep(intervalSeconds * 1000);
  }
}
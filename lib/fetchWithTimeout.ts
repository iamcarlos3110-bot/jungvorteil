// lib/fetchWithTimeout.ts

export async function fetchWithTimeout<T>(
  promise: PromiseLike<T>,
  ms = 1000
): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(`Operation timed out after ${ms}ms`)), ms)
    ),
  ]);
}

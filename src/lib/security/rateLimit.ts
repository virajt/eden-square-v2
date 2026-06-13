const cache = new Map<string, { count: number, lastReset: number }>();

export function checkRateLimit(ip: string, limit: number = 100, windowMs: number = 60000) {
  const now = Date.now();
  const entry = cache.get(ip) || { count: 0, lastReset: now };

  if (now - entry.lastReset > windowMs) {
    entry.count = 1;
    entry.lastReset = now;
  } else {
    entry.count++;
  }

  cache.set(ip, entry);
  return entry.count <= limit;
}

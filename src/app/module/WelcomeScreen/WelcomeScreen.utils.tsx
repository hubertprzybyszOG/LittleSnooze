export type HalftoneDot = {
  x: number;
  y: number;
  size: number;
};

export const HALFTONE_DOTS = createHalftoneDots();

export function createHalftoneDots(): HalftoneDot[] {
  const dots: HalftoneDot[] = [];
  const spacing = 10;
  const radius = 250;
  const center = -24;

  for (let y = 0; y <= 240; y += spacing) {
    for (let x = 0; x <= 240; x += spacing) {
      const distance = Math.hypot(x - center, y - center);
      const wave = Math.sin(x * 0.08) * 12 + Math.cos(y * 0.07) * 10;

      if (distance > radius + wave) {
        continue;
      }

      const density = Math.max(0, 1 - distance / radius);
      const noise = ((x * 17 + y * 31) % 9) / 10;
      const size = Math.max(1.4, Math.min(8.5, density * 8 + noise));

      dots.push({ x, y, size });
    }
  }

  return dots;
}

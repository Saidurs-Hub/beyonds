import { describe, expect, it } from "vitest";
import { easeOutCubic, formatStat, parseStat } from "./statCount";

describe("statCount", () => {
  it("keeps the + suffix and comma grouping while counting to 1,200+", () => {
    const parts = parseStat("1,200+");
    expect(parts).toEqual({ prefix: "", value: 1200, suffix: "+" });
    expect(formatStat(parts, 0)).toBe("0+");
    expect(formatStat(parts, 1200)).toBe("1,200+");
  });

  it("keeps the BDT prefix and M suffix for BDT 62M", () => {
    const parts = parseStat("BDT 62M");
    expect(parts).toEqual({ prefix: "BDT ", value: 62, suffix: "M" });
    expect(formatStat(parts, 0)).toBe("BDT 0M");
    expect(formatStat(parts, 62)).toBe("BDT 62M");
  });

  it("keeps commas on the way to 5,000+", () => {
    const parts = parseStat("5,000+");
    expect(parts.value).toBe(5000);
    expect(formatStat(parts, 1500)).toBe("1,500+");
    expect(formatStat(parts, 5000)).toBe("5,000+");
  });

  it("eases out, starting fast and ending slow", () => {
    expect(easeOutCubic(0)).toBe(0);
    expect(easeOutCubic(1)).toBe(1);
    expect(easeOutCubic(0.5)).toBeGreaterThan(0.5);
  });
});

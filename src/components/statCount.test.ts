import { describe, expect, it } from "vitest";
import { easeOutCubic, formatStat, parseStat } from "./statCount";

describe("statCount", () => {
  it("keeps the + suffix and comma grouping while counting to 1,200+", () => {
    const parts = parseStat("1,200+");
    expect(parts).toEqual({ prefix: "", value: 1200, suffix: "+", decimals: 0, grouped: true });
    expect(formatStat(parts, 0)).toBe("0+");
    expect(formatStat(parts, 1200)).toBe("1,200+");
  });

  it("keeps the BDT prefix and M suffix for BDT 62M", () => {
    const parts = parseStat("BDT 62M");
    expect(parts).toEqual({ prefix: "BDT ", value: 62, suffix: "M", decimals: 0, grouped: false });
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

  it.each([
    ["20.93%", 20.93, "10.47%"],
    ["80,000+ kWh", 80000, "40,000+ kWh"],
    ["BDT 1.5 crore", 1.5, "BDT 0.8 crore"],
    ["1.5M", 1.5, "0.8M"],
    ["4M+", 4, "2M+"],
    ["2.5M+", 2.5, "1.3M+"],
    ["65 lakh+", 65, "33 lakh+"],
  ])("preserves precision and units for %s", (raw, value, halfway) => {
    const parts = parseStat(raw);
    expect(parts.value).toBe(value);
    expect(formatStat(parts, value / 2)).toBe(halfway);
    expect(formatStat(parts, value)).toBe(raw);
  });
});

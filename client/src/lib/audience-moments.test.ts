import { describe, expect, it } from "vitest";
import { getAudienceMoments } from "./audience-moments";

describe("getAudienceMoments", () => {
  it("returns three clear school moments with parent and safety support", () => {
    const moments = getAudienceMoments("education");

    expect(moments).toHaveLength(3);
    expect(moments.map(({ title }) => title)).toEqual([
      "Entry that stays clear.",
      "Parents get the right update.",
      "Safety is close at hand.",
    ]);
  });

  it("returns three clear workplace moments with access and safety support", () => {
    const moments = getAudienceMoments("enterprise");

    expect(moments).toHaveLength(3);
    expect(moments.map(({ badge }) => badge)).toEqual([
      "Access control",
      "Live schedule",
      "Emergency alerts",
    ]);
  });
});

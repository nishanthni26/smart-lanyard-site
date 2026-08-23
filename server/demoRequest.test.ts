import { describe, expect, it } from "vitest";
import { demoRequestInputSchema } from "../shared/demoRequest";

describe("demoRequestInputSchema", () => {
  const validRequest = {
    fullName: "Jordan Smith",
    workEmail: "jordan@northstar.example",
    organisation: "Northstar School",
    organisationType: "School or university" as const,
    teamSize: "51-250" as const,
  };

  it("accepts a complete demo request", () => {
    expect(demoRequestInputSchema.safeParse(validRequest).success).toBe(true);
  });

  it("rejects a request without a valid work email", () => {
    expect(demoRequestInputSchema.safeParse({ ...validRequest, workEmail: "not-an-email" }).success).toBe(false);
  });
});

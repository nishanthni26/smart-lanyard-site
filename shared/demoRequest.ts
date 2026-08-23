import { z } from "zod";

export const demoRequestInputSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name.").max(160),
  workEmail: z.string().trim().email("Please enter a valid work email.").max(320),
  organisation: z.string().trim().min(2, "Please enter your organisation name.").max(160),
  organisationType: z.enum(["School or university", "Workplace", "Other"]),
  teamSize: z.enum(["1-50", "51-250", "251-1000", "1000+"]),
  phone: z.string().trim().max(64).optional(),
  message: z.string().trim().max(1200).optional(),
});

export type DemoRequestInput = z.infer<typeof demoRequestInputSchema>;

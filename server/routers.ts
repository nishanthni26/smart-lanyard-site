import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createDemoRequest } from "./db";
import { demoRequestInputSchema } from "../shared/demoRequest";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  demoRequest: router({
    submit: publicProcedure.input(demoRequestInputSchema).mutation(async ({ input }) => {
      await createDemoRequest({
        fullName: input.fullName,
        workEmail: input.workEmail,
        organisation: input.organisation,
        organisationType: input.organisationType,
        teamSize: input.teamSize,
        phone: input.phone || null,
        message: input.message || null,
      });
      return { success: true } as const;
    }),
  }),
});

export type AppRouter = typeof appRouter;

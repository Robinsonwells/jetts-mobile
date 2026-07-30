import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const estimateSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(7).max(30),
  message: z.string().trim().min(1).max(2000),
});

export const submitEstimateRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => estimateSchema.parse(data))
  .handler(async ({ data }) => {
    const { insertEstimateRequest } = await import("./estimates.server");
    return insertEstimateRequest(data);
  });

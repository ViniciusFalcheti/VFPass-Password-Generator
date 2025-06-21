import { z } from "zod";

export const passwordSchema = z.object({
  length: z
    .number({ required_error: "Informe o tamanho da senha" })
    .min(6, "Mínimo 6 caracteres")
    .max(64, "Máximo 64 caracteres"),
  numbers: z.boolean(),
  caps: z.boolean(),
  symbols: z.boolean()
});

export type PasswordSchema = z.infer<typeof passwordSchema>;
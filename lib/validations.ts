import { z } from "zod"

export const registrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
  event: z.string().min(1, "Please select an event"),
  language: z.string().min(1, "Please select a language"),
})

export type RegistrationData = z.infer<typeof registrationSchema>

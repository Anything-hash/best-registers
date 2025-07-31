"use server"

import { z } from "zod"

const RegistrationSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name must be less than 50 characters." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email address." }).trim(),
  phone: z.string().regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits." }),
  event: z.string().min(1, { message: "Please select an event." }),
  language: z.string().min(1, { message: "Please select your favorite web technology." }),
})

export type FormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        phone?: string[]
        event?: string[]
        language?: string[]
      }
      message?: string
      success?: boolean
    }
  | undefined

export async function submitRegistration(prevState: FormState, formData: FormData): Promise<FormState> {
  // Validate form fields
  const validatedFields = RegistrationSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    event: formData.get("event"),
    language: formData.get("language"),
  })

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors below.",
    }
  }

  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real application, you would:
  // 1. Save to database
  // 2. Send confirmation email
  // 3. Handle any errors

  try {
    // Simulate successful registration
    console.log("Registration data:", validatedFields.data)

    return {
      success: true,
      message: "Registration completed successfully!",
    }
  } catch (error) {
    return {
      message: "Something went wrong. Please try again.",
    }
  }
}

import { z } from "zod";

export const userSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters."),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters."),

  email: z.email("Please enter a valid email address."),

  age: z.coerce
    .number()
    .min(1, "Age must be greater than 0.")
    .max(120, "Age cannot exceed 120."),
});

export const defaultUserValues = {
  firstName: "",
  lastName: "",
  email: "",
  age: "",
};
import type { SafeParseReturnType, ZodFormattedError } from "zod";

type ValidationError = {
  field: string;
  message: string;
};

type FormatValidationResponse = {
  success: boolean;
  errors: ValidationError[];
  users: null;
};

export function formatValidationErrors<T, U>(
  validation: SafeParseReturnType<T, U>
): FormatValidationResponse {
  const formattedErrors = Object.entries(
    (validation.error?.format?.() ?? {}) as ZodFormattedError<T>
  )
    .filter(([key]) => key !== "_errors")
    .map(([field, value]) => ({
      field,
      message: (value as { _errors?: string[] })._errors?.[0] || "Erro desconhecido",
    }));

  return {
    success: false,
    errors: formattedErrors,
    users: null,
  };
}

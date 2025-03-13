import type { SafeParseReturnType } from "zod";

type FormatValidationResponse = {
  success: boolean;
  errors: { field: string; message: string }[];
  users: null;
};

export function formatValidationErrors(
  validation: SafeParseReturnType<any, any>
): FormatValidationResponse {
  const formattedErrors = Object.entries(
    validation?.error?.format?.() ?? {}
  )
    .filter(([key]) => key !== "_errors")
    .map(([field, value]: [string, any]) => ({
      field,
      message: Object.values(value)[0]?.[0] || "Erro desconhecido",
    }));

  return {
    success: false,
    errors: formattedErrors,
    users: null,
  };
}
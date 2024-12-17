import { type ErrorDetail } from "./types";
import { AxiosError } from "axios";

export const errorMessageHandler = (
  error: unknown,
  defaultMessage: string = "An Error occurred"
): string => {
  if (
    error instanceof AxiosError &&
    error.response?.data?.error?.details?.errors
  ) {
    const errors: ErrorDetail[] = error.response.data.error.details.errors;
    return errors.map((item) => item.message).join(", ");
  }
  return defaultMessage;
};

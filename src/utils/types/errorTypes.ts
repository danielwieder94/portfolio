// types.ts (You can place this in a separate file)
export type ValidationRule = (value: any) => boolean;
export type ErrorMessage = string;

export interface FieldValidation {
  rule: ValidationRule;
  message: ErrorMessage;
}

export interface ValidationSchema {
  [key: string]: FieldValidation;
}

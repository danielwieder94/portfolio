// useFormValidation.ts
import { useState } from "react";

const useFormValidation = (fields: string[]) => {
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const validate = (formData: FormData) => {
    const newErrors = fields.reduce((acc, field) => {
      acc[field] = !formData.get(field);
      return acc;
    }, {} as { [key: string]: boolean });

    setErrors(newErrors);
    return !Object.values(newErrors).some((value) => value);
  };

  return { errors, validate };
};

export default useFormValidation;

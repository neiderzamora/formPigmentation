export const validateFullname = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateEmail = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const validatePhoneNumber = (value: string): boolean => {
  const phoneRegex: RegExp = /^\d{10}$/;
  return phoneRegex.test(value) && value.length == 10;
};

export const validateDocumentNumber = (value: string | number): boolean => {
  const numberRegex: RegExp = /^\d+$/;
  const stringValue = typeof value === 'number' ? value.toString() : value;

  return numberRegex.test(stringValue);
};


export const validateOccupation = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateTermsConditions = (isChecked: boolean): boolean => {
  return isChecked;
};

export const validatePrivacity = (isChecked: boolean): boolean => {
  return isChecked;
};

export const validateTypeDoc = (value: string | null): boolean => {
  return value !== null && value.trim().length > 0;
};

export const validateGender = (value: string | null): boolean => {
  return value !== null && value.trim().length > 0;
};

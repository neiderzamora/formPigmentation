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

export const validateDocumentNumber = (value: string): boolean => {
  const phoneRegex: RegExp = /^\d{10}$/;
  return phoneRegex.test(value);
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

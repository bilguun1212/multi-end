export const isEmpty = (value) => !value?.trim?.();

export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isPhoneNumber = (phonenumber) =>
  /^\+?[1-9]\d{1,14}$/.test(phonenumber);

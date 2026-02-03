export const isEmpty = (value) => {
  if (value === null || value === undefined) return true;
  return String(value).trim().length === 0;
};

export const isEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const isPhoneNumber = (phoneNumber) => {
  const phoneRegex = /^[0-9]{8}$/;
  return phoneRegex.test(phoneNumber);
};

export const isOver18 = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age >= 18;
};

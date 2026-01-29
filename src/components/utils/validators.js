import { isEmpty } from "./validators-utils";

export const validateStepOne = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.lastName)) {
    errors.lastName = "Овгоо оруулна уу";
  }
  if (isEmpty(formValues.userName)) {
    errors.userName = "Хэрэглэгчийн нэрээ оруулна уу";
  }
  if (isEmpty(formValues.fristName)) {
    errors.fristName = "Нэрээ оруулна уу";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};

export const validateStepTwo = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.email)) {
    errors.email = "Имэйл хаягаа оруулна уу";
  }
  if (isEmpty(formValues.phoneNumber)) {
    errors.phoneNumber = "Утасны дугаараа оруулна уу";
  }
  if (isEmpty(formValues.password)) {
    errors.password = "Нууц үгээ оруулна уу";
  }
  if (isEmpty(formValues.confirmPassword)) {
    errors.confirmPassword = "Нууц үгээ давтан оруулна уу";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};

export const validateStepThree = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.birthDay)) {
    errors.birthDay = "Төрсөн огноо оруулна уу";
  }
  if (isEmpty(formValues.profile)) {
    errors.profile = "Профайл зураг оруулна уу";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};

import { isEmpty, isEmail, isPhoneNumber, isOver18 } from "./validators-utils";

export const validateStepOne = (formValues) => {
  const errors = {};
  const nameRegex = /^[a-zA-Z]+$/;
  if (isEmpty(formValues.firstName)) errors.firstName = "Нэрээ оруулна уу";
  else if (!nameRegex.test(formValues.firstName))
    errors.firstName = "Зөвхөн Англи үсэг";

  if (isEmpty(formValues.lastName)) errors.lastName = "Овгоо оруулна уу";
  else if (!nameRegex.test(formValues.lastName))
    errors.lastName = "Зөвхөн Англи үсэг";

  if (isEmpty(formValues.userName)) errors.userName = "Username оруулна уу";
  return { errors, isValid: Object.keys(errors).length === 0 };
};

export const validateStepTwo = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.email)) errors.email = "Email оруулна уу";
  else if (!isEmail(formValues.email)) errors.email = "Email хаяг буруу байна";

  if (isEmpty(formValues.phoneNumber)) errors.phoneNumber = "Утас оруулна уу";
  else if (!isPhoneNumber(formValues.phoneNumber))
    errors.phoneNumber = "8 оронтой тоо бичнэ үү";

  if (isEmpty(formValues.password)) errors.password = "Нууц үг оруулна уу";
  else if (formValues.password.length < 8)
    errors.password = "8-аас дээш тэмдэгт";

  if (formValues.password !== formValues.confirmPassword) {
    errors.confirmPassword = "Нууц үг зөрүүтэй байна";
  }
  return { errors, isValid: Object.keys(errors).length === 0 };
};

export const validateStepThree = (formValues) => {
  const errors = {};
  if (isEmpty(formValues.birthDay)) {
    errors.birthDay = "Огноо оруулна уу";
  } else {
    const selected = new Date(formValues.birthDay);
    if (selected > new Date()) errors.birthDay = "Ирээдүйд байж болохгүй";
    else if (!isOver18(formValues.birthDay))
      errors.birthDay = "18 нас хүрсэн байх ёстой";
  }
  if (isEmpty(formValues.profile)) errors.profile = "Зураг оруулна уу";
  return { errors, isValid: Object.keys(errors).length === 0 };
};

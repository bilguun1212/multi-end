import {
  PrivateInfo,
  ContactInfo,
  ProfileImage,
  Success,
} from "@/components/steps";
import { useState } from "react";
import { motion } from "framer-motion";


const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  birthday: "",
  profile: "",
};

const Home = () => {
  const [step, setStep] = useState(0);

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);

  const totalSteps = 4;

  const handleClick = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormErrors((previous) => ({ ...previous, [name]: "" }));
    setFormValues((previous) => ({ ...previous, [name]: value }));
  };

  const Container = [PrivateInfo, ContactInfo, ProfileImage, Success][step];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f4f4] p-7 font-semibold">
      <div className="bg-white flex gap-7 flex-col rounded-md w-120 text-center">
        <Container
          totalSteps={totalSteps}
          step={step}
          handlePrev={handlePrev}
          handleClick={handleClick}
          handleChange={handleChange}
          formValues={formValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          setFormValues={setFormValues}
        />
      </div>
    </div>
  );
};

export default Home;
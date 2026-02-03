import {
  PrivateInfo,
  ContactInfo,
  ProfileImage,
  Success,
} from "@/components/steps";
import { useState, useEffect } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  birthDay: "",
  profile: "",
};

const Home = () => {

  const [step, setStep] = useState(() => {
    if (typeof window !== "undefined") {
      const savedStep = localStorage.getItem("currentStep");
   
      return savedStep ? parseInt(savedStep, 10) : 0;
    }
    return 0;
  });

  const [formValues, setFormValues] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("formValues");
      return saved ? JSON.parse(saved) : initialValues;
    }
    return initialValues;
  });

  const [formErrors, setFormErrors] = useState({});


  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);


  useEffect(() => {
    localStorage.setItem("currentStep", step.toString());
  }, [step]);

 
  const totalSteps = 4;

  const handleClick = () => {
    if (step < totalSteps - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
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
      <div className="bg-white flex gap-7 flex-col rounded-md w-120 text-center shadow-lg">
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
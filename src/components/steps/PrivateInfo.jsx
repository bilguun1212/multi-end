import React from "react";
import { Header } from "@/components/layer/Header";
import { motion } from "framer-motion";
import { animationVariant } from "../../constant/animation-variants";
import { validateStepOne } from "../utils/validators";
import { Button } from "@/components/ui/Button";
 
export const PrivateInfo = ({
  step,
  totalSteps,
  handlePrev,
  handleClick,
  handleChange,
  formValues,
  formErrors,
  setFormErrors,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepOne(formValues);
    if (!isValid) {
      setFormErrors(errors);
      return;
    }
    handleClick();
  };

  return (
    <motion.div
      initial="enter"
      animate="active"
      exit="exit"
      variants={animationVariant}
      transition={{ duration: 0.5 }}
      className="flex gap-3 flex-col p-7" 
    >
      <div>
        <Header />
      </div>
      
   
      <div className="flex flex-col gap-2 pt-7">
        <div className="flex gap-1 font-semibold text-sm text-[#334155]">
          First Name <span className="text-[#E14942]">*</span>
        </div>
        <input
          className="flex pl-4 w-104 h-11 border-[1px] border-gray-100 rounded-md focus:outline-none focus:ring-gray-200 text-[#8B8E95] font-extralight"
          type="text"
          name="firstName" 
          placeholder="Your first name"
          value={formValues.firstName || ""}
          onChange={handleChange}
        />
        <p className="text-red-500 text-[14px] flex font-normal">
          {formErrors.firstName} 
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-1 font-semibold text-sm text-[#334155]">
          Last Name <span className="text-[#E14942]">*</span>
        </div>
        <input
          className="flex pl-4 w-104 h-11 border-[1px] border-gray-100 rounded-md focus:outline-none focus:ring-gray-200 text-[#8B8E95] font-extralight"
          type="text"
          name="lastName"
          placeholder="Your last name"
          value={formValues.lastName || ""}
          onChange={handleChange}
        />
        <p className="text-red-500 text-[14px] flex font-normal">
          {formErrors.lastName}
        </p>
      </div>

     
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 font-semibold text-sm text-[#334155]">
          Username <span className="text-[#E14942]">*</span>
        </div>
        <input
          className="flex pl-4 w-104 h-11 border-[1px] border-gray-100 rounded-md focus:outline-none focus:ring-gray-200 text-[#8B8E95] font-extralight"
          type="text"
          name="userName"
          placeholder="Your username"
          value={formValues.userName || ""}
          onChange={handleChange}
        />
        <p className="text-red-500 text-[14px] flex font-normal">
          {formErrors.userName}
        </p>
      </div>

      <div>
        <Button
          totalSteps={totalSteps}
          step={step}
          handlePrev={handlePrev}
          handleSubmit={handleSubmit} 
        />
      </div>
    </motion.div>
  );
};
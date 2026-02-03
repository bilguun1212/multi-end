import React from "react";
import { Header } from "@/components/layer/Header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { validateStepTwo } from "../utils/validators";
 
export const ContactInfo = ({
  step,
  totalSteps,
  handlePrev,
  handleChange,
  handleClick,
  formValues,
  formErrors,
  setFormErrors,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepTwo(formValues);
    if (!isValid) {
      setFormErrors(errors);
      return;
    }
    handleClick();
  };


  const getBorderClass = (fieldName) => {
    return formErrors[fieldName] 
      ? "border-red-500 ring-1 ring-red-500" 
      : "border-[#cbd5e1]";
  };

  return (
    <motion.div
      initial="enter"
      animate="active"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="flex gap-3 flex-col p-7"
    >
      <div>
        <Header />
      </div>

    
      <div className="flex flex-col gap-2 pt-7">
        <div className="flex gap-1 font-semibold text-sm text-[#334155]">
          Email <span className="text-[#E14942]">*</span>
        </div>
        <input
          className={`flex pl-4 w-104 h-11 border-[1px] rounded-md focus:outline-none focus:ring-blue-300 text-[#334155] font-extralight ${getBorderClass("email")}`}
          type="text"
          name="email"
          placeholder="Your email"
          value={formValues.email || ""}
          onChange={handleChange}
        />
        <p className="text-red-500 flex text-[14px] font-normal">{formErrors.email}</p>
      </div>

 
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 font-semibold text-sm text-[#334155]">
          Phone number <span className="text-[#E14942]">*</span>
        </div>
        <input
          className={`flex pl-4 w-104 h-11 border-[1px] rounded-md focus:outline-none focus:ring-blue-300 text-[#334155] font-extralight ${getBorderClass("phoneNumber")}`}
          type="text"
          name="phoneNumber"
          placeholder="Your phone number"
          value={formValues.phoneNumber || ""}
          onChange={handleChange}
        />
        <p className="text-red-500 flex text-[14px] font-normal">{formErrors.phoneNumber}</p>
      </div>

 
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 font-semibold text-sm text-[#334155]">
          Password <span className="text-[#E14942]">*</span>
        </div>
        <input
          className={`flex pl-4 w-104 h-11 border-[1px] rounded-md focus:outline-none focus:ring-blue-300 text-[#334155] font-extralight ${getBorderClass("password")}`}
          type="password"
          name="password"
          placeholder="Your password"
          value={formValues.password || ""}
          onChange={handleChange}
        />
        <p className="text-red-500 text-[14px] flex font-normal">{formErrors.password}</p>
      </div>

 
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 font-semibold text-sm text-[#334155]">
          Confirm password <span className="text-[#E14942]">*</span>
        </div>
        <input
          className={`flex pl-4 w-104 h-11 border-[1px] rounded-md focus:outline-none focus:ring-blue-300 text-[#334155] font-extralight ${getBorderClass("confirmPassword")}`}
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formValues.confirmPassword || ""}
          onChange={handleChange}
        />
        <p className="text-red-500 text-[14px] flex font-normal">{formErrors.confirmPassword}</p>
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


import React, { useState, useRef } from "react";
import { Header } from "@/components/layer/Header";
import { validateStepThree } from "../utils/validators";
import { Button } from "@/components/ui/Button";
import { Image } from "lucide-react";
import { motion } from "framer-motion";
// Файл системтэй чинь тааруулж замыг засав
import { animationVariant } from "@/constant/animation-variants";

export const ProfileImage = ({
  step,
  totalSteps,
  handlePrev,
  handleClick,
  formErrors,
  formValues,
  setFormValues,
  setFormErrors,
}) => {
  const inputRef = useRef();
  const [imageUrl, setImageUrl] = useState(formValues.profile || null);
  const [isDragging, setIsDragging] = useState(false);

  const handleBrowserClick = () => inputRef.current.click();

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "birthDay") {
      setFormValues((prev) => ({ ...prev, [name]: value }));
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    } 
    else if (files && files.length > 0) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setFormValues((prev) => ({ ...prev, profile: url }));
      setFormErrors((prev) => ({ ...prev, profile: "" }));
    }
  };

  const handleSubmit = () => {
    const { errors, isValid } = validateStepThree(formValues);
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
      className="flex gap-3 flex-col p-7 text-left"
    >
      <Header />
      <div className="flex flex-col gap-3">
        <label className="text-sm font-semibold text-[#334155]">Date of birth *</label>
        <input
          type="date"
          name="birthDay"
          value={formValues.birthDay || ""}
          onChange={handleChange}
          className="border border-[#cbd5e1] rounded-lg w-full h-11 p-3"
        />
        {formErrors.birthDay && <p className="text-red-500 text-xs">{formErrors.birthDay}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-[#334155]">Profile image *</label>
        <div
          onClick={handleBrowserClick}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          className={`relative h-45 w-full bg-gray-100 rounded-md flex flex-col justify-center items-center border-2 cursor-pointer transition-all ${
            isDragging ? "border-blue-500 border-dashed" : "border-transparent"
          }`}
        >
          {imageUrl ? (
            <img src={imageUrl} className="w-full h-full object-cover rounded-md" />
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full flex justify-center items-center bg-white mb-2 shadow-sm">
                <Image className="w-5 h-5 text-gray-400" />
              </div>
              <span className="text-sm text-[#334155] font-light">Add image</span>
            </div>
          )}
          <input type="file" name="profile" hidden ref={inputRef} accept="image/*" onChange={handleChange} />
        </div>
        {formErrors.profile && <p className="text-red-500 text-xs mt-1">{formErrors.profile}</p>}
      </div>

      <Button totalSteps={totalSteps} step={step} handlePrev={handlePrev} handleSubmit={handleSubmit} />
    </motion.div>
  );
};


// import React, { useState, useRef } from "react";
// import { Header } from "@/components/layer/Header";
// import { validateStepThree } from "../utils/validators";
// import { Button } from "@/components/ui/Button";
// import { Image } from "lucide-react";
// import {motion} from "framer-motion";
// import {animationVariant} from "../../constant/animation-variants";
// export const ProfileImage = ({
//   step,
//   totalSteps,
//   handlePrev,
//   handleClick,
//   formErrors,
//   formValues,
//   setFormValues,
//   setFormErrors,
// }) => {
//   const inputRef = useRef();
//   const [imageUrl, setImageUrl] = useState(formValues.profile || null);
//   const [isDragging, setIsDragging] = useState(false);

//   const handleBrowserClick = () => {
//     if (inputRef.current) inputRef.current.click();
//   };

//   const handleChange = (event) => {
//     const { name, value, files } = event.target;

   
//     if (name === "birthDay") {
//       setFormValues((prev) => ({ ...prev, [name]: value }));
//       setFormErrors((prev) => ({ ...prev, [name]: "" }));
//     } 
    
//     else if (files && files.length > 0) {
//       const file = files[0];
//       const url = URL.createObjectURL(file);
//       setImageUrl(url);
//       setFormValues((prev) => ({ ...prev, profile: url }));
//       setFormErrors((prev) => ({ ...prev, profile: "" }));
//     }
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setIsDragging(false);
//     const files = event.dataTransfer.files;
//     if (files && files.length > 0) {
//       const file = files[0];
//       const url = URL.createObjectURL(file);
//       setImageUrl(url);
//       setFormValues((prev) => ({ ...prev, profile: url }));
//       setFormErrors((prev) => ({ ...prev, profile: "" }));
//     }
//   };

//   const handleSubmit = () => {
//     const { errors, isValid } = validateStepThree(formValues);
//     if (!isValid) {
//       setFormErrors(errors);
//       return;
//     }
//     handleClick();
//   };

//   return (
//     <div className="flex gap-3 flex-col p-7 text-left">
//       <Header />

//       <div className="flex flex-col gap-3">
//         <label className="text-sm font-semibold text-[#334155]">
//           Date of birth <span className="text-red-500">*</span>
//         </label>
//         <input
//           type="date"
//           name="birthDay"
//           value={formValues.birthDay || ""}
//           onChange={handleChange}
//           className="border border-[#cbd5e1] rounded-lg w-full h-11 p-3 text-[#334155]"
//         />
//         {formErrors.birthDay && (
//           <p className="text-red-500 text-[14px]">{formErrors.birthDay}</p>
//         )}
//       </div>

//       <div className="flex flex-col gap-1">
//         <label className="text-sm font-semibold text-[#334155]">
//           Profile image <span className="text-red-500">*</span>
//         </label>
        
//         <div
//           onDrop={handleDrop}
//           onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
//           onDragLeave={() => setIsDragging(false)}
//           onClick={handleBrowserClick}
//           className={`relative h-45 w-full bg-gray-100 rounded-md flex flex-col justify-center items-center border-2 cursor-pointer transition-all ${
//             isDragging ? "border-blue-500 border-dashed bg-blue-50" : "border-transparent"
//           }`}
//         >
//           {imageUrl ? (
//             <img src={imageUrl} alt="profile" className="w-full h-full object-cover rounded-md" />
//           ) : (
//             <>
//               <div className="w-10 h-10 rounded-full flex justify-center items-center bg-white mb-2 shadow-sm">
//                 <Image className="w-5 h-5 text-gray-400" />
//               </div>
//               <div className="text-sm text-[#334155] font-light">Add image</div>
//             </>
//           )}
//           <input
//             type="file"
//             name="profile"
//             hidden
//             ref={inputRef}
//             accept="image/*"
//             onChange={handleChange}
//           />
//         </div>
//         {formErrors.profile && (
//           <p className="text-red-500 text-[14px] mt-1">{formErrors.profile}</p>
//         )}
//       </div>

//       <Button
//         totalSteps={totalSteps} 
//         step={step}
//         handlePrev={handlePrev}
//         handleSubmit={handleSubmit}
//       />
//     </div>
//   );
// };


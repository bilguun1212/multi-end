import { ChevronLeft, ChevronRight } from "lucide-react";
export const Button = ({ step, totalSteps, handlePrev, handleSubmit }) => {
  return (
    <div className="flex gap-3 flex-row-reverse pt-30">
      {step >= 0 && (
        <button
          onClick={handleSubmit}
          className="bg-black h-11 w-full flex justify-center items-center font-medium px-3 py-[10] rounded-md text-white cursors-pointer"
        >
          Continue {step + 1}/ {totalSteps - 1}
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
      {step > 0 && (
        <button
          className="bg-white h-11 w-50 flex justify-center text-black items-center font-medium px-3 py-[10] rounded-md border border-gray-300 cursor-pointer hover:bg-gray-100"
          onClick={handlePrev}
        >
          <ChevronLeft className="w-6 h-6" /> Back
        </button>
      )}
    </div>
  );
};
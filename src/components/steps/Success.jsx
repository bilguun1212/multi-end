import { Button } from "../ui/Button";

export const Success = ({ totalSteps, step, handlePrev, handleClick }) => {
  return (
    <div className="flex h-48.25 flex-col items-start justify-start p-7 gap-2 text-left">
      <div className="w-15 h-15">
        <img src="pine.png" alt="logo" />
      </div>
      <div className="text-[#202124] text-[26px] font-semibold">
        You're All Set 🔥
      </div>
      <div className="text-lg text-[#8e8e8e] font-light">
        We have received your submission. Thank you!
      </div>
    </div>
  );
};
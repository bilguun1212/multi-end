export const Header = () => {
  return (
    <div className="">
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="w-15 h-15">
          <img src="pine.png" alt="" />
        </div>
        <div className="text-[#202124] text-[26px] font-semibold text-shadow-lg items-start">
          Join Us! 😎
        </div>
        <div className="text-lg text-[#8e8e8e] font-light">
          Please provide all current information accurately.
        </div>
      </div>
    </div>
  );
};
const CallMobile = () => {
  const handleCall = () => {
    window.location.href = "tel:+1234567890";
  };

  return (
    <button
      onClick={handleCall}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight 
                 bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      Contact Us Now
    </button>
  );
};

export default CallMobile;

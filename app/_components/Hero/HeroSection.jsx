// import TypingAnimation from "@/app/_components/lib/TypingAnimation";

const HeroSection = () => {
  const shouldAnimate = true; 
  return (
    // <section className="w-full bg-[url('/cover.jpg')] bg-cover bg-center px-4 sm:px-16 lg:px-28 py-10">
    <section className="w-full bg-[#2F476D] bg-cover bg-center px-4 sm:px-16 lg:px-28 py-10">
      <div className="max-w-full mx-auto flex flex-col items-start">
        {/* <TypingAnimation shouldAnimate={shouldAnimate} /> */}
        <div className="w-full sm:w-[70%] lg:w-[63%] pt-[43px] pb-[30px]">
          <h1 className="text-secondarycolor font-arabic font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-justify">
            نوفر لك امتلاك سكنك المثالي المتميز بتصاميم عصرية وتقنيات حديثة،
            <br />
            لتعيش حياة أفضل في منزلك براحة وأمان
          </h1>
        </div>
      </div>
    </section>
  );
};


export default HeroSection;

import Image from "next/image";
import React from "react";

const ValueSection = () => {
  return (
    <section className="w-full  py-12 md:py-24" id="demo">
      {/* Heading */}
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 md:mb-4 text-[#D3EAF2]">
          Try it for yourself
        </h1>
        <p className="text-white text-center  mb-12 md:mb-20  ">
          See some result&apos; from our user&apos;s
        </p>
      </div>

      {/* Phone Mockups */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">
          {["/confi_img.jpg", "/confi2_img.jpg"].map((item) => (
            <div
              key={item}
              className="relative h-[400px] w-[200px] xs:h-[450px] xs:w-[225px] 
                         sm:h-[500px] sm:w-[250px] md:h-[550px] md:w-[275px] 
                         lg:h-[600px] lg:w-[300px] border-[10px] md:border-[12px] 
                         lg:border-[14px] border-zinc-900 rounded-[40px] md:rounded-[50px] 
                         shadow-xl lg:shadow-2xl overflow-hidden"
            >
              {/* Screen content */}
              <div className="absolute inset-0 rounded-[30px] md:rounded-[36px] overflow-hidden">
                <Image
                  src={item}
                  alt="App demonstration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;

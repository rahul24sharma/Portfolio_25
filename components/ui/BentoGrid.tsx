// import { useState } from "react";
// import { IoCopyOutline } from "react-icons/io5";

// // Also install this npm i --save-dev @types/react-lottie
// import Lottie from "react-lottie";

// import { cn } from "@/lib/utils";


// import { BackgroundGradientAnimation } from "./GradientBg";
// import GridGlobe from "./GridGlobe";
// import animationData from "@/data/confetti.json";
// import MagicButton from "../MagicButton";

// export const BentoGrid = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
//         "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const BentoGridItem = ({
//   className,
//   id,
//   title,
//   description,
//   //   remove unecessary things here
//   img,
//   imgClassName,
//   titleClassName,
//   spareImg,
// }: {
//   className?: string;
//   id: number;
//   title?: string | React.ReactNode;
//   description?: string | React.ReactNode;
//   img?: string;
//   imgClassName?: string;
//   titleClassName?: string;
//   spareImg?: string;
// }) => {
//   const leftLists = ["ReactJS", "JavaScript", "Typescript"];
//   const rightLists = ["VueJS", "NodeJS", "SQL"];

//   const [copied, setCopied] = useState(false);

//   const defaultOptions = {
//     loop: copied,
//     autoplay: copied,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   const handleCopy = () => {
//     const text = "sharma.rahul1@northeastern.edu"; 
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//   };

//   return (
//     <div
//       className={cn(
//         // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
//         "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
//         className
//       )}
//       style={{
//         //   add these two
//         //   you can generate the color from here https://cssgradient.io/
//         background: "rgb(4,7,29)",
//         backgroundColor:
//           "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//       }}
//     >
//       {/* add img divs */}
//       <div className={`${id === 6 && "flex justify-center"} h-full`}>
//         <div className="w-full h-full absolute">
//           {img && (
//             <img
//               src={img}
//               alt={img}
//               className={cn(imgClassName, "object-cover object-center ")}
//             />
//           )}
//         </div>
//         <div
//           className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
//             } `}
//         >
//           {spareImg && (
//             <img
//               src={spareImg}
//               alt={spareImg}
//               //   width={220}
//               className="object-cover object-center w-full h-full"
//             />
//           )}
//         </div>
//         {id === 6 && (
//           // add background animation , remove the p tag
//           <BackgroundGradientAnimation>
//             <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
//           </BackgroundGradientAnimation>
//         )}

//         <div
//           className={cn(
//             titleClassName,
//             "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
//           )}
//         >
//           {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
//           <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
//             {description}
//           </div>
//           {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
//           {/* remove mb-2 mt-2 */}
//           <div
//             className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
//           >
//             {title}
//           </div>

//           {/* for the github 3d globe */}
//           {id === 2 && <GridGlobe />}

//           {/* Tech stack list div */}
//           {id === 3 && (
//             <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
//               {/* tech stack lists */}
//               <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
//                 {leftLists.map((item, i) => (
//                   <span
//                     key={i}
//                     className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
//                     lg:opacity-100 rounded-lg text-center bg-[#10132E]"
//                   >
//                     {item}
//                   </span>
//                 ))}
//                 <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
//               </div>
//               <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
//                 <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
//                 {rightLists.map((item, i) => (
//                   <span
//                     key={i}
//                     className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
//                     lg:opacity-100 rounded-lg text-center bg-[#10132E]"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}
//           {id === 6 && (
//             <div className="mt-5 relative">
//               {/* button border magic from tailwind css buttons  */}
//               {/* add rounded-md h-8 md:h-8, remove rounded-full */}
//               {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
//               {/* add handleCopy() for the copy the text */}
//               <div
//                 className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
//                   }`}
//               >
//                 {/* <img src="/confetti.gif" alt="confetti" /> */}
//                 <Lottie options={defaultOptions} height={200} width={400} />
//               </div>

//               <MagicButton
//                 title={copied ? "Email is Copied!" : "Copy my email address"}
//                 icon={<IoCopyOutline />}
//                 position="left"
//                 handleClick={handleCopy}
//                 otherClasses="!bg-[#161A31]"
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "JavaScript", "Typescript", "Next.js", "VueJS", "Redux"];
  const rightLists = ["NodeJS", "Express", "Django", "Fastapi", "Spring", "GraphQL"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "sharma.rahul1@northeastern.edu";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
  <div className="flex flex-col w-full gap-4 absolute -right-3 lg:-right-2">
    {/* Title at the top */}
    <div className="text-2xl text-[#ffffff]  font-bold tracking-wide">
      My Tech Stack
    </div>

    <div className="flex gap-4 w-full">
      {/* Left tech stack list (Frontend) */}
      <div className="flex flex-col gap-2 w-[45%]">
        <div className="text-xs text-[#ffffff] mb-1">Frontend</div>
        <div className="relative overflow-hidden h-10 group">
          <div className="flex absolute top-0 left-0 animate-horizontal-scroll whitespace-nowrap">
            {[...leftLists, ...leftLists].map((item, i) => (
              <span
                key={`left-${i}`}
                className="mx-1 px-3 py-1 text-xs rounded-lg bg-[#10132E] text-[#C1C2D3]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right tech stack list (Backend) */}
      <div className="flex flex-col gap-2 w-[45%]">
        <div className="text-xs text-[#ffffff] mb-1">Backend</div>
        <div className="relative overflow-hidden h-10 group">
          <div className="flex absolute top-0 left-0 animate-horizontal-scroll-reverse whitespace-nowrap">
            {[...rightLists, ...rightLists].map((item, i) => (
              <span
                key={`right-${i}`}
                className="mx-1 px-3 py-1 text-xs rounded-lg bg-[#10132E] text-[#C1C2D3]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)}


          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

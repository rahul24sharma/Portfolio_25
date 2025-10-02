// import { gridItems } from "@/data";
// import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

// const Grid = () => {
//   return (
//     <section id="about">
//       <BentoGrid className="w-full py-20">
//         {gridItems.map((item, i) => (
//           <BentoGridItem
//             id={item.id}
//             key={i}
//             title={item.title}
//             description={item.description}
//             // remove icon prop
//             // remove original classname condition
//             className={item.className}
//             img={item.img}
//             imgClassName={item.imgClassName}
//             titleClassName={item.titleClassName}
//             spareImg={item.spareImg}
//           />
//         ))}
//       </BentoGrid>
//     </section>
//   );
// };

// export default Grid;

import { gridItems } from "@/data";
import dynamic from 'next/dynamic';

// Dynamically import BentoGrid to avoid Lottie SSR issues
const BentoGrid = dynamic(() => import("./ui/BentoGrid").then(mod => ({
  default: mod.BentoGrid
})), {
  ssr: false,
  loading: () => (
    <section id="about" className="w-full py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {gridItems.map((_, i) => (
          <div 
            key={i} 
            className="h-64 bg-gray-800/20 animate-pulse rounded-lg"
          />
        ))}
      </div>
    </section>
  )
});

const BentoGridItem = dynamic(() => import("./ui/BentoGrid").then(mod => ({
  default: mod.BentoGridItem
})), {
  ssr: false
});

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={item.id || i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
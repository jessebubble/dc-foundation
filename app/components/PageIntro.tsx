import { motion } from 'framer-motion';
import clsx from 'clsx';

export function PageIntro() {
   return (
      <div className="">
         <div className="relative flex h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-neutral-950 lg:h-screen">
            <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-neutral-950 [mask-image:radial-gradient(transparent,white)]" />

            <Boxes />
            <h1 className="relative z-20 text-balance text-center text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
               Digital Canvas{' '}
               <span
                  className="block"
                  style={{
                     background:
                        'linear-gradient(180deg, #00b2a9 0%, #00b2a9 100%)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     backgroundClip: 'text',
                  }}
               >
                  Foundation
               </span>
            </h1>
            <p className="relative z-20 mt-6 max-w-3xl text-balance text-center text-xl text-centroGreen">
               Nonprofit Organization
            </p>
         </div>
      </div>
   );
}

const Boxes = ({ className, ...rest }: { className?: string }) => {
   const rows = new Array(150).fill(1);
   const cols = new Array(100).fill(1);
   const colors = [
      '#00b2a9',
      '#ACDB6B',
      '#1DB7BA',
      '#FFC700',
      '#FF6D00',
      '#FF4848',
      '#FF00A9',
      '#00A9FF',
      '#00FFA9',
      '#FFA900',
      '#A900FF',
      '#FF00A9',
      '#00A9FF',
      '#00FFA9',
   ];

   const getRandomColor = () => {
      return colors[Math.floor(Math.random() * colors.length)];
   };

   return (
      <div
         style={{
            transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
         }}
         className={clsx(
            'absolute -top-1/4 left-1/4 z-0 flex  h-full w-full -translate-x-1/2 -translate-y-1/2 p-4 ',
            className
         )}
         {...rest}
      >
         {rows.map((_, i) => (
            <motion.div
               key={`row` + i}
               className="relative h-8  w-16  border-l border-neutral-700"
            >
               {cols.map((_, j) => (
                  <motion.div
                     whileHover={{
                        backgroundColor: getRandomColor(),
                        transition: { duration: 0 },
                     }}
                     animate={{
                        transition: { duration: 2 },
                     }}
                     key={`col` + j}
                     className="relative h-8  w-16 border-r border-t border-neutral-700"
                  >
                     {j % 2 === 0 && i % 2 === 0 ? (
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="pointer-events-none absolute -left-[22px] -top-[14px] h-6 w-10 stroke-[1px] text-neutral-700"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m6-6H6"
                           />
                        </svg>
                     ) : null}
                  </motion.div>
               ))}
            </motion.div>
         ))}
      </div>
   );
};

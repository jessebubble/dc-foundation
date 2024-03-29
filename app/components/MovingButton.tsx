import {
   motion,
   useAnimationFrame,
   useMotionTemplate,
   useMotionValue,
   useTransform,
} from 'framer-motion';
import clsx from 'clsx';
import { useRef, useState } from 'react';

export function MovingButton({
   borderRadius = '1.75rem',
   children,
   as: Component = 'button',
   containerClassName,
   borderClassName,
   duration,
   className,
   ...otherProps
}: {
   borderRadius?: string;
   children: React.ReactNode;
   as?: any;
   containerClassName?: string;
   borderClassName?: string;
   duration?: number;
   className?: string;
   [key: string]: any;
}) {
   const [isHovered, setIsHovered] = useState(false);

   return (
      <Component
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         className={clsx(
            'relative overflow-hidden bg-transparent p-[1px]',
            containerClassName
         )}
         style={{
            borderRadius: borderRadius,
         }}
         {...otherProps}
      >
         {isHovered && (
            <div
               className="absolute inset-0"
               style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
            >
               <MovingBorder duration={duration} rx="30%" ry="30%">
                  <div
                     className={clsx('h-4 w-4 opacity-[0.8]', borderClassName)}
                     style={{
                        background: `radial-gradient(#00a8ff 40%, transparent 60%)`,
                     }}
                  />
               </MovingBorder>
            </div>
         )}
         <div
            className={clsx(
               'relative inline-flex justify-center rounded-lg bg-neutral-800 px-3 py-2 text-sm font-semibold text-white outline-2 outline-offset-2 transition-colors hover:bg-neutral-900 active:bg-neutral-800 active:text-white/80',
               className
            )}
            style={{
               borderRadius: `calc(${borderRadius} * 0.96)`,
            }}
         >
            {children}
         </div>
      </Component>
   );
}

const MovingBorder = ({
   children,
   duration = 2000,
   rx,
   ry,
   ...otherProps
}: {
   children: React.ReactNode;
   duration?: number;
   rx?: string;
   ry?: string;
   [key: string]: any;
}) => {
   const pathRef = useRef<any>();
   const progress = useMotionValue<number>(0);

   useAnimationFrame((time) => {
      const length = pathRef.current?.getTotalLength();
      if (length) {
         const pxPerMillisecond = length / duration;
         progress.set((time * pxPerMillisecond) % length);
      }
   });

   const x = useTransform(
      progress,
      (val) => pathRef.current?.getPointAtLength(val).x
   );
   const y = useTransform(
      progress,
      (val) => pathRef.current?.getPointAtLength(val).y
   );

   const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

   return (
      <>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="absolute h-full w-full"
            width="100%"
            height="100%"
            {...otherProps}
         >
            <rect
               fill="none"
               width="100%"
               height="100%"
               rx={rx}
               ry={ry}
               ref={pathRef}
            />
         </svg>
         <motion.div
            style={{
               position: 'absolute',
               top: 0,
               left: 0,
               display: 'inline-block',
               transform,
            }}
         >
            {children}
         </motion.div>
      </>
   );
};

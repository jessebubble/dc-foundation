import { useState } from 'react';
import { Link } from '@remix-run/react';
import { AnimatePresence, motion } from 'framer-motion';

export function NavLinks() {
   let [hoveredIndex, setHoveredIndex] = useState(null);

   return [
      ['Contact us', '#contact-us'],
      ['Form 990', '#form-990'],
      ['Annual Report', '#annual-report'],
      ['Board of Directors', '#board-of-directors'],
   ].map(([label, href], index) => (
      <Link
         key={label}
         href={href}
         className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-neutral-950 transition-colors delay-150 hover:text-neutral-800 hover:delay-[0ms]"
         onMouseEnter={() => setHoveredIndex(index)}
         onMouseLeave={() => setHoveredIndex(null)}
      >
         <AnimatePresence>
            {hoveredIndex === index && (
               <motion.span
                  className="absolute inset-0 rounded-lg bg-neutral-100"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                     opacity: 0,
                     transition: { duration: 0.15, delay: 0.2 },
                  }}
               />
            )}
         </AnimatePresence>
         <span className="relative z-10">{label}</span>
      </Link>
   ));
}

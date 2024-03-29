import { Link } from '@remix-run/react';
import { Popover } from '@headlessui/react';
import { MovingButton } from '~/components/MovingButton';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { Logo } from '~/components/Logo';
import {
   AnimatePresence,
   motion,
   useMotionTemplate,
   useScroll,
   useTransform,
} from 'framer-motion';

let clamp = (number, min, max) => Math.min(Math.max(number, min), max);

function useBoundedScroll(bounds) {
   let { scrollY } = useScroll();
   const scrollYBounded = useTransform(scrollY, (value) =>
      clamp(value, 0, bounds)
   );
   const scrollYBoundedProgress = useTransform(
      scrollYBounded,
      [0, bounds],
      [0, 1]
   );

   return { scrollYBounded, scrollYBoundedProgress };
}

export function Header() {
   const { scrollYBoundedProgress } = useBoundedScroll(100);
   const headerHeight = useTransform(scrollYBoundedProgress, [0, 1], [80, 50]);
   const headerOpacity = useTransform(scrollYBoundedProgress, [0, 1], [1, 0.1]);

   return (
      <header>
         <nav
            className="fixed top-0 z-50 w-full bg-neutral-950"
            style={{ height: headerHeight, opacity: headerOpacity }}
         >
            <Container className="relative z-50 flex justify-between py-4">
               <div className="relative z-10 flex items-center">
                  <Link to="/" aria-label="Home" className="flex items-center">
                     <Logo className="h-10 w-auto" />
                     <div className="ml-4">
                        <p className="text-base font-semibold text-white">
                           Digital Canvas{' '}
                           <span
                              className="text-centroPink block md:flex"
                              style={{
                                 animation:
                                    'rotate-gradient 5s linear infinite',
                              }}
                           >
                              Foundation
                           </span>
                        </p>
                     </div>
                  </Link>
               </div>
               <div className="flex items-center gap-6">
                  <HeaderMobile />
                  <div className="hidden lg:font-medium lg:flex lg:items-center lg:gap-4">
                     <MovingButton borderRadius="1.75rem" className="">
                        Donate
                     </MovingButton>
                  </div>
               </div>
            </Container>
         </nav>
         <style>
            {`   
               @keyframes rotate-gradient {
                  0%, 100% {
                     background: linear-gradient(to right in oklch, oklch(90% .3 230), oklch(70% .3 340));
                     -webkit-background-clip: text;
                     color: transparent;
                  }
                  25% {
                     background: linear-gradient(to right in oklch, oklch(87% .4 142), oklch(100% .4 95));
                     -webkit-background-clip: text;
                     color: transparent;
                  }
                  50% {
                     background: linear-gradient(to right in oklab, oklch(100% .25 160), oklch(75% .5 260));
                     -webkit-background-clip: text;
                     color: transparent;
                  }
                  75% {
                     background: linear-gradient(to right in oklab, oklch(100% .4 95), oklch(55% .45 350));
                     -webkit-background-clip: text;
                     color: transparent;
                  }
               }
            `}
         </style>
      </header>
   );
}

function HeaderMobile() {
   return (
      <>
         <Popover className="lg:hidden">
            {({ open }) => (
               <>
                  <Popover.Button
                     className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-neutral-400 p-2 hover:bg-neutral-200/50 hover:stroke-neutral-600 active:stroke-neutral-950 [&:not(:focus-visible)]:focus:outline-none"
                     aria-label="Toggle site navigation"
                  >
                     {({ open }) =>
                        open ? (
                           <ChevronUpIcon className="h-6 w-6" />
                        ) : (
                           <MenuIcon className="h-6 w-6" />
                        )
                     }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                     {open && (
                        <>
                           <Popover.Overlay
                              static
                              as={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className={`fixed inset-0 z-0 bg-neutral-300/60 ${open ? 'backdrop-blur' : ''}`}
                           />
                           <Popover.Panel
                              static
                              as={motion.div}
                              initial={{ opacity: 0, y: -32 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{
                                 opacity: 0,
                                 y: -32,
                                 transition: { duration: 0.2 },
                              }}
                              className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-neutral-50 px-6 pb-6 pt-32 shadow-2xl shadow-neutral-900/20"
                           >
                              <div className="space-y-4">
                                 <MobileNavLink href="#form">
                                    Form 990
                                 </MobileNavLink>
                                 <MobileNavLink href="#annual-report">
                                    Annual Report
                                 </MobileNavLink>
                                 <MobileNavLink href="#contact">
                                    Contact Foundation
                                 </MobileNavLink>
                                 <MobileNavLink href="/board-of-directors">
                                    Board of Directors
                                 </MobileNavLink>
                              </div>
                              <div className="mt-8 flex flex-col gap-4">
                                 <Button href="#">Donate</Button>
                              </div>
                           </Popover.Panel>
                        </>
                     )}
                  </AnimatePresence>
               </>
            )}
         </Popover>
      </>
   );
}

function MenuIcon(props) {
   return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
         <path
            d="M5 6h14M5 18h14M5 12h14"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
}

function ChevronUpIcon(props) {
   return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
         <path
            d="M17 14l-5-5-5 5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
}

function MobileNavLink({ children, ...props }) {
   return (
      <Popover.Button
         as={Link}
         className="block text-base leading-7 tracking-tight text-neutral-700"
         {...props}
      >
         {children}
      </Popover.Button>
   );
}

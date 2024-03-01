import { Link } from '@remix-run/react';
import { Container } from '~/components/Container';
import { Logo } from '~/components/Logo';
import { NavLinks } from '~/components/NavLinks';
import qrCode from '~/images/qr-code.svg';

function QrCodeBorder(props) {
   return (
      <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
         <path
            d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
            strokeWidth="2"
            strokeLinecap="round"
         />
      </svg>
   );
}

export function Footer() {
   return (
      <footer className="border-t border-neutral-200">
         <Container>
            <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
               <div>
                  <div className="">
                     <Link to="/" className="flex items-center">
                        <Logo className="h-10 w-auto" />
                        <div className="ml-4">
                           <p className="text-base font-semibold text-neutral-950">
                              Digital Canvas{' '}
                              <span className="text-centroPink">
                                 Foundation
                              </span>
                           </p>
                        </div>
                     </Link>
                  </div>
                  <nav className="mt-11 flex gap-8">
                     <NavLinks />
                  </nav>
               </div>
               <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-neutral-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
                  <div className="relative flex h-24 w-24 flex-none items-center justify-center">
                     <QrCodeBorder className="absolute inset-0 h-full w-full stroke-neutral-300 transition-colors group-hover:stroke-cyan-500" />
                     <img src={qrCode} alt="qrcode" />
                  </div>
                  <div className="ml-8 lg:w-64">
                     <p className="text-base font-semibold text-neutral-950">
                        <Link to="#">
                           <span className="absolute inset-0 sm:rounded-2xl" />
                           Donate Today
                        </Link>
                     </p>
                     <p className="mt-1 text-sm text-neutral-700">
                        Empowering young minds to pixelate their potential
                        through digital art and technology education programs
                     </p>
                  </div>
               </div>
            </div>
         </Container>
      </footer>
   );
}

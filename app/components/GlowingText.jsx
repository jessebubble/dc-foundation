import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';

export const GlowingText = () => {
   return (
      <Container className="mt-16">
         <FadeIn>
            <div className="mx-auto flex max-w-2xl items-center justify-center">
               <h2
                  className="text-4xl font-semibold tracking-tight sm:text-5xl"
                  style={{ animation: 'rotate-gradient 5s linear infinite' }}
               >
                  Empowering young minds to pixelate their potential
               </h2>
            </div>
         </FadeIn>
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
      </Container>
   );
};

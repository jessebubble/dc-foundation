import type { MetaFunction } from '@remix-run/node';
import { StickyContent } from '~/components/StickyContent';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { PageIntro } from '~/components/PageIntro';
import { Team } from '~/components/Team';

export const meta: MetaFunction = () => {
   return [
      { title: 'Digital Canvas Foundation' },
      {
         name: 'description',
         content:
            'Introducing Digital Canvas Foundation, the non-profit organization providing a platform for youths in the city who love to draw',
      },
   ];
};

export default function Index() {
   return (
      <>
         <Header />
         <PageIntro />
         <StickyContent />
         <Team />
         <Footer />
      </>
   );
}
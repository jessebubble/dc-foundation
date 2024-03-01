import type { MetaFunction } from '@remix-run/node';
import { HeroBoxes } from '~/components/HeroBoxes';

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
         <HeroBoxes />
      </>
   );
}

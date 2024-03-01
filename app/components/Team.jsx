import { Container } from '~/components/Container';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';
import { Border } from '~/components/Border';
import { SectionIntro } from '~/components/SectionIntro';

export function Team() {
   return (
      <div className="mb-24 mt-24 py-24 sm:mt-32 ">
         <SectionIntro
            eyebrow="Board of Directors"
            title="Commited to responsible financial management and transparency"
            invert={false}
         >
            <p>
               The Digital Canvas Foundation is a registered 501(c)(3) nonprofit organization
            </p>
         </SectionIntro>
         <Container className="mt-16">
            <div className="py-24 space-y-24">
               {team.map((group) => (
                  <FadeInStagger key={group.title}>
                     <Border as={FadeIn} invert={false} />
                     <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                        <FadeIn>
                           <h2 className="font-display text-2xl font-semibold text-neutral-950">
                              {group.title}
                           </h2>
                        </FadeIn>
                        <div className="lg:col-span-3">
                           <ul
                              role="list"
                              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                           >
                              {group.people.map((person) => (
                                 <li key={person.name}>
                                    <FadeIn>
                                       <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                                          <img
                                             alt=""
                                             {...person.image}
                                             className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                                          />
                                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                                             <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                                {person.name}
                                             </p>
                                             <p className="mt-2 text-sm text-white">
                                                {person.role}
                                             </p>
                                          </div>
                                       </div>
                                    </FadeIn>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </FadeInStagger>
               ))}
            </div>
         </Container>
      </div>
   );
}

const team = [
   {
      title: 'Board of Directors',
      people: [
         {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708540839/printify/Lifestyle_alkmqv.jpg',
            },
         },
         {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_4_Front_do9uon.jpg',
            },
         },
         {
            name: 'Dries Vincent',
            role: 'Partner & Business Relations',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_1_szs1sg.png',
            },
         },
      ],
   },
   {
      title: 'Volunteer Team',
      people: [
         {
            name: 'Chelsea Hagon',
            role: 'Senior Developer',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_3_Front_p196aj.jpg',
            },
         },
         {
            name: 'Emma Dorsey',
            role: 'Senior Designer',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_3_Context_g7z6bl.jpg',
            },
         },
      ],
   },
];

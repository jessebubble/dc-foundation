import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { SectionIntro } from '~/components/SectionIntro';
import { GridList, GridListItem } from '~/components/GridList';
import { useState, useRef, useEffect } from 'react';
import {
   motion,
   useTransform,
   useScroll,
   useVelocity,
   useSpring,
} from 'framer-motion';
import clsx from 'clsx';

export function StickyContent() {
   return (
      <>
         <div className="mt-24 sm:mt-32 lg:mt-40 py-24">
            <SectionIntro
               eyebrow="Our Foundation"
               title="Unlocking the creative potential of young minds"
               invert={false}
            >
               <p>
                  The Digital Canvas Foundation empowers young minds (K-12)
                  through after-school programs, scholarships, and connections to industry professionals, 
                  preparing them for future success in the creative and digital fields
               </p>
            </SectionIntro>
            <Container className="mt-16">
               <GridList className="">
                  <GridListItem
                     title="Engaging workshops"
                     invert={false}
                     className=""
                  >
                     Powered by industry-standard software like Adobe Creative
                     Cloud and Figma
                  </GridListItem>
                  <GridListItem
                     title="Scholarships"
                     invert={false}
                     className=""
                  >
                     Assisting high school seniors pursue their artistic dreams
                     by awarding scholarships
                  </GridListItem>
                  <GridListItem
                     title="Connecting students"
                     invert={false}
                     className=""
                  >
                     With local organizations and professionals, fostering
                     mentorship and career exploration
                  </GridListItem>
               </GridList>
            </Container>
         </div>

         <div className="mb-24 mt-24 rounded-3xl bg-neutral-950 px-6 py-24 sm:mb-32 sm:mt-32 sm:py-32">
         <SectionIntro
               eyebrow="Our Impact"
               title="Bridging the creative gap"
               invert={true}
            >
               <p>
                  Our flagship program, "Pixels & Possibilities," equips K-12 students with the tools and knowledge they need to excel in the world of digital art and design
               </p>
            </SectionIntro>
            <Container className="mt-16">
               <FadeIn>
                  <TracingBeam className="px-6 py-4">
                     <div className="relative pt-4 antialiased">
                        {foundationContent.map((item, index) => (
                           <div key={`content-${index}`} className="mb-10">
                              <h2 className="font-display mb-6 block px-4 py-2 text-base font-semibold text-centroPink lg:px-6 lg:py-0">
                                 {item.badge}
                              </h2>

                              <p className="font-display block text-balance px-4 py-2 text-2xl font-semibold tracking-tight text-neutral-50 lg:px-6 lg:py-0">
                                 {item.title}
                              </p>
                              <div className="mt-6 px-4 py-2 lg:px-6 lg:py-0">
                                 {item?.image && (
                                    <img
                                       src={item.image}
                                       alt="blog thumbnail"
                                       className="rounded-3xl object-cover"
                                    />
                                 )}
                              </div>

                              <div className="prose mt-6 text-balance px-4 py-2 text-xl text-neutral-300 lg:px-6 lg:py-0">
                                 {item.description}
                              </div>
                           </div>
                        ))}
                     </div>
                  </TracingBeam>
               </FadeIn>
            </Container>
         </div>
      </>
   );
}

const TracingBeam = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) => {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start start', 'end start'],
   });

   const contentRef = useRef<HTMLDivElement>(null);
   const [svgHeight, setSvgHeight] = useState(0);

   useEffect(() => {
      if (ref.current) {
         setSvgHeight(ref.current.offsetHeight);
      }
   }, []);

   const y1 = useSpring(
      useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
      {
         stiffness: 500,
         damping: 90,
      }
   );
   const y2 = useSpring(
      useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
      {
         stiffness: 500,
         damping: 90,
      }
   );

   return (
      <motion.div
         ref={ref}
         className={clsx('relative', className)}
      >
         <div className="absolute -left-4 top-3 md:-left-20">
            <motion.div
               transition={{
                  duration: 0.2,
                  delay: 0.5,
               }}
               animate={{
                  boxShadow:
                     scrollYProgress.get() > 0
                        ? 'none'
                        : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
               }}
               className="border-netural-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
            >
               <motion.div
                  transition={{
                     duration: 0.2,
                     delay: 0.5,
                  }}
                  animate={{
                     backgroundColor:
                        scrollYProgress.get() > 0
                           ? 'white'
                           : 'var(--emerald-500)',
                     borderColor:
                        scrollYProgress.get() > 0
                           ? 'white'
                           : 'var(--emerald-600)',
                  }}
                  className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
               />
            </motion.div>
            <svg
               viewBox={`0 0 20 ${svgHeight}`}
               width="20"
               height={svgHeight} // Set the SVG height
               className=" ml-4 block"
               aria-hidden="true"
            >
               <motion.path
                  d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                  fill="none"
                  stroke="#9091A0"
                  strokeOpacity="0.16"
                  transition={{
                     duration: 10,
                  }}
               ></motion.path>
               <motion.path
                  d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="1.25"
                  className="motion-reduce:hidden"
                  transition={{
                     duration: 10,
                  }}
               ></motion.path>
               <defs>
                  <motion.linearGradient
                     id="gradient"
                     gradientUnits="userSpaceOnUse"
                     x1="0"
                     x2="0"
                     y1={y1} // set y1 for gradient
                     y2={y2} // set y2 for gradient
                  >
                     <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                     <stop stopColor="#18CCFC"></stop>
                     <stop offset="0.325" stopColor="#6344F5"></stop>
                     <stop
                        offset="1"
                        stopColor="#AE48FF"
                        stopOpacity="0"
                     ></stop>
                  </motion.linearGradient>
               </defs>
            </svg>
         </div>
         <div ref={contentRef}>{children}</div>
      </motion.div>
   );
};

const foundationContent = [
   {
      title: 'Where imagination takes flight',
      description: (
         <>
            <p>
               Led by passionate instructors, students:
               <ul className="pl-4">
                  <li>
                     Learn the fundamentals of Adobe Creative Cloud applications
                     like Photoshop and Illustrator
                  </li>
                  <li>
                     Master the art of user interface (UI) and user experience
                     (UX) design using Figma
                  </li>
                  <li>
                     Develop critical thinking and problem-solving skills
                     through creative exploration
                  </li>
                  <li>
                     Showcase their talent through interactive projects and
                     community events
                  </li>
               </ul>
            </p>
            <p>
               <strong className="text-white">Measurable Impact:</strong>
               <ul className="pl-4">
                  <li>
                     We aim to reach 1,000 students across San Antonio by 2024
                  </li>
                  <li>
                     Our goal is to award scholarships to 10 high school seniors
                     each year
                  </li>
                  <li>
                     We strive to provide tuition assistance to 5
                     underprivileged students annually
                  </li>
               </ul>
            </p>
         </>
      ),
      badge: 'Programs and Impact',
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1709156287/foundatin4_sy0ion.png',
   },
   {
      title: 'Scholarships and Tuition Assistance',
      description: (
         <>
            <p>
               <strong className="text-white">Eligibility Criteria:</strong>
               <ul className="pl-4">
                  <li>
                     Students currently enrolled in grades K-12 residing in San
                     Antonio.
                  </li>
                  <li>
                     Financial need demonstrated through free/reduced lunch
                     program participation or household income documentation
                  </li>
                  <li>
                     A strong passion for art and design, demonstrated through a
                     portfolio or letter of recommendation
                  </li>
               </ul>
            </p>
         </>
      ),
      badge: 'Eligibility',
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1709156287/foundation3_q356dr.png',
   },
   {
      title: 'Meet Sarah - Scholarship Recipient',
      description: (
         <>
            <p>
            The Digital Canvas Foundation ignited a passion for art I never knew I had. 
            Before, I was just doodling in notebooks. Now, I'm creating intricate digital illustrations that I never thought possible. 
            Thanks to the foundation's support and guidance, I'm empowered to pursue my dream of a career in the creative field. 
            I'm incredibly grateful for their impact on my life!
               <span className="mt-4 block text-neutral-500">
                  - Sarah M., Scholarship recipient (2023)
               </span>
            </p>
         </>
      ),
      badge: 'Success Stories',
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1708287141/disability1_gvuaut.png',
   },
];

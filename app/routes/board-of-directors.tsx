import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import { PageIntro } from '~/components/PageIntro';
import { Team } from '~/components/Team';

export default function BoardDirectors() {
   return (
      <>
         <Header />
         <PageIntro
            eyebrow="Board of Directors"
            title="Committed to responsible financial management and transparency"
            centered
         >
            <p>
               The Digital Canvas Foundation is a registered 501(c)(3) nonprofit
               organization
            </p>
         </PageIntro>

         <Team />
         <Footer />
      </>
   );
}

import { Header } from '~/components/Header';
import { StickyContent } from '~/components/StickyContent';
import { Footer } from '~/components/Footer';
import { PageIntro } from '~/components/PageIntro';

export default function Mission() {
   return (
      <>
         <Header />
         <PageIntro
            eyebrow="Our Mission"
            title="Imagination meets creation"
            centered={true}
         >
            <p>
               At the Digital Canvas Foundation, we{' '}
               <strong>unlock the artistic potential of young minds</strong>{' '}
               through after-school programs, scholarships, and connections to
               industry professionals, preparing them for future success in the
               creative and digital fields
            </p>
         </PageIntro>
         <StickyContent />
         <Footer />
      </>
   );
}


import Hero from '../components/Hero';
import Services from '../components/Services';
import FAQ from '../components/FAQ';



export default function Home() {
  return (
    <div className="pt-0 bg-background">
      <Hero />
      <Services />
      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}

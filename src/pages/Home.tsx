

import Hero from '../components/Hero';
import FAQ from '../components/FAQ';
import About from '../components/About';



export default function Home() {
  return (
    <div className="pt-0 bg-background">
      <Hero />
      <About />
      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}

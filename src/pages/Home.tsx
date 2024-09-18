import DescriptionWithBlocks from '@/components/Description';
import HeroSectionCentredWithImage from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSectionCentredWithImage />
      <DescriptionWithBlocks />
      <Footer />
    </>
  );
}

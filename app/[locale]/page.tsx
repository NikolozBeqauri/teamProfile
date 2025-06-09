import Hero from '../components/Hero/Hero';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import NavigationRender from '../components/NavigationRender/NavigationRender';
import OurCases from '../components/OurCases/OurCases';
import OurPartners from '../components/OurPartners/OurPartners';
import OurTeam from '../components/OurTeam/OurTeam';
import ServiceSection from '../components/ServiceSection/ServiceSection';


export default function HomePage() {
  return (
    <div>
      <NavigationRender />
      <Hero/>
      <ServiceSection/>
      <OurPartners/>
      <HowWeWork/>
      <OurCases/>
      <OurTeam/>
    </div>
  );
}
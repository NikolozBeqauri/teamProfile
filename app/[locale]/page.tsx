import Hero from '../components/Hero/Hero';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import NavigationRender from '../components/NavigationRender/NavigationRender';
import ServiceSection from '../components/ServiceSection/ServiceSection';


export default function HomePage() {
  return (
    <div>
      <NavigationRender />
      <Hero/>
      <ServiceSection/>
      <HowWeWork/>
    </div>
  );
}

import Section1 from "../components/Section1";
import SectionGridFotos1 from "../components/SectionGridFotos1";
import SectionGridFotos2 from "../components/SectionGridFotos2";
import SectionHistory from "../components/SectionHistory";
import SectionD20 from "../components/SectionD20";
import SectionTT from "../components/SectionTT";
import SectionNextWelcome from "../components/SectionNextWelcome";


const Home = () => {
  return (
    <>      
      <Section1 />
      <SectionNextWelcome/>
      <SectionHistory />
      <SectionD20 />
      <SectionTT />
      <SectionGridFotos1 />
      <SectionGridFotos2 />
    </>
  );
};

export default Home;

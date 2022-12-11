import Section1 from "../components/Section1";
import SectionGridFotos1 from "../components/SectionGridFotos1";
import SectionGridFotos2 from "../components/SectionGridFotos2";
import SectionHistory from "../components/SectionHistory";
import SectionD20 from "../components/SectionD20";
import SectionTT from "../components/SectionTT";
import SectionNextWelcome from "../components/SectionNextWelcome";

import { useInView } from 'react-intersection-observer';


const Home = () => {


  const { ref: myRefD20, inView: isVisibleD20} = useInView();
  const { ref: myRefHistory, inView: isVisibleHistory} = useInView();
  const { ref: myRefTT, inView: IsVisibleTT} = useInView();
  const { ref: myRefG1, inView: IsVisibleG1} = useInView();
  const { ref: myRefG2, inView: IsVisibleG2} = useInView();

  return (
    <>      
      <Section1  />
      <SectionNextWelcome />
      <SectionHistory myRefHistory={myRefHistory} isVisibleHistory={isVisibleHistory}  />
      <SectionD20 myRefD20={myRefD20} isVisibleD20={isVisibleD20} />
      <SectionTT myRefTT={myRefTT} IsVisibleTT={IsVisibleTT}  />
      <SectionGridFotos1 myRefG1={myRefG1} IsVisibleG1={IsVisibleG1}  />
      <SectionGridFotos2 myRefG2={myRefG2} IsVisibleG2={IsVisibleG2}  />
    </>
  );
};

export default Home;

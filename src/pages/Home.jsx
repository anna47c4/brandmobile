import FifthSection from "../components/FifthSection";
import FirstSection from "../components/firstSection";
import FourthSection from "../components/FourthSection";
import HeroSection from "../components/HeroSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <main>
        <HeroSection></HeroSection>
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
        <FourthSection></FourthSection>
        <FifthSection></FifthSection>
        <Footer></Footer>
      </main>
    </>
  );
}

export default Home;

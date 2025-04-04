import Header from '../components/home/Header.jsx'
import Layout1 from "../components/home/Layout1.jsx";
import Layout2 from "../components/home/Layout2.jsx";
import Layout3 from "../components/home/Layout3.jsx";
import Testimonial from "../components/home/Testimonial.jsx";
import Cta1 from "../components/home/Cta1.jsx";
import Cta2 from "../components/home/Cta2.jsx";
import Layout4 from "../components/home/Layout4.jsx";

const Home = () => {
  return (
    <>
      <Header/>
      <Layout1/>
      <Layout2/>
      <Layout3/>
      <Layout4/>
      <Testimonial/>
      <Cta1/>
      <Cta2/>
    </>
  )
}

export default Home;
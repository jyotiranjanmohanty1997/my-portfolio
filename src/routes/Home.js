import React from 'react'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Heroimage1 from '../components/Heroimage1';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Skill from '../components/Skill';

const Home = () => {
  return (
    <>
      <Banner/>
      <Services/>
      <Skill/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default Home;

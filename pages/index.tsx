// react
import * as React from 'react';
// custom component
import MainLayout from 'components/layout/MainLayout';
import About from 'components/section/About';
import HireMe from 'components/section/HireMe';
import HomeHero from 'components/section/HomeHero';
import Skills from 'components/section/Skills';
// custom context
import ConstantsContext from 'context/constantsContext';
// type
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <>
      <MainLayout pageData={pages!.home}>
        <HomeHero />
        <About />
        <Skills />
        <HireMe />
      </MainLayout>
    </>
  );
};

export default Home;

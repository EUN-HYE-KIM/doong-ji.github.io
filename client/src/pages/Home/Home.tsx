import HomeMain from '@/components/Home/HomeMain';
import DoongjiAbout from '@/components/Home/DoongjiAbout';
import ProjectCarousel from '@/components/Home/ProjectCarousel';
import PartAbout from '@/components/Home/PartAbout';
import QuestionList from '@/components/Home/QuestionList';
import DoongjiJoin from '@/components/Home/DoongjiJoin';
import { HomeWrap } from './styled';

import { FC } from 'react';
const Home: FC = () => {
  return (
    <HomeWrap className="home_wrap">
      <p>zz</p>
      <HomeMain />
      <DoongjiAbout />
      <ProjectCarousel />
      <PartAbout />
      <QuestionList />
      <DoongjiJoin />
    </HomeWrap>
  );
};

export default Home;

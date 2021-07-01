import { Button, Carousel } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { FC, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectItem, SiteLayoutBackground } from './styeld';
// import { CaroulsCss } from './styeld';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, Thumbs, EffectFade } from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

const data = [
  {
    id: '1',
    title: '둥지 홈페이지',
    coment: '당신의 개발실력을 늘려보세요 ~!',
    period: '2021-04 - 2021-08',
    Thumbnail: 'http://lorempixel.com/1500/900/cats/1/',
  },
  {
    id: '2',
    title: '콜라 맵',
    coment: '콜라 vs 펩시 당신의 선택은 ?',
    period: '2021-04 - 2021-08',
    Thumbnail: 'http://lorempixel.com/1500/900/cats/2/',
  },
  {
    id: '3',
    title: '둥카오톡',
    coment: '카카오톡 오늘도 울리는군요',
    period: '2021-04 - 2021-08',
    Thumbnail: 'http://lorempixel.com/1500/900/cats/3/',
  },
];

const ProjectCarousel: FC = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, Thumbs]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="section">
      <Content>
        <SiteLayoutBackground>
          <ProjectItem>
            <h2 className="main_title">
              <span style={{ display: 'block' }}>둥지는</span>
              <span>어떤 프로젝트를 하나요?</span>
            </h2>
            <p className="sub_title">다양한 경험으로 당신의 커리어를 완성해보세요</p>
            <div className="project_slide">
              <div className="swiper_container_img">
                <Swiper
                  className="swiper_container1"
                  thumbs={{ swiper: thumbsSwiper }}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={1.5}
                  navigation={true}
                >
                  {data.map((item) => {
                    return (
                      <div key={item.id}>
                        <SwiperSlide>
                          <img src={item.Thumbnail} />
                        </SwiperSlide>
                      </div>
                    );
                  })}
                  ;
                </Swiper>
              </div>

              <div className="swiper_container_txt">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  className="swiper-container2"
                  style={{ width: '100%' }}
                  spaceBetween={0}
                  slidesPerView={1}
                  onSlideChange={() => {
                    swiper: thumbsSwiper;
                  }}
                  effect={'fade'}
                  loop={true}
                  watchSlidesVisibility={true}
                  watchSlidesProgress={true}
                >
                  <div>
                    {data.map((item) => {
                      return (
                        <div key={item.id}>
                          <SwiperSlide className="project_contnet_sliders">
                            <h2>{item.title}</h2>
                            <h3>{item.coment}</h3>
                          </SwiperSlide>
                        </div>
                      );
                    })}
                    ;
                  </div>
                </Swiper>

                <Link className="to_project_link" to="project">
                  VIEWMORE
                </Link>
              </div>
            </div>
          </ProjectItem>
        </SiteLayoutBackground>
      </Content>
    </section>
    // <Content className="site-layout" style={{ padding: '0 50px' }}>
    //   <SiteLayoutBackground style={{ padding: 24, minHeight: 380 }}>
    //     <Carousel effect="fade">
    //       {data.map((item) => {
    //         return (
    //           <div key={item.id}>
    //             <ProjectItem>
    //               <h1>{item.title}</h1>
    //               <h2>{item.coment}</h2>
    //               <img src={item.Thumbnail} />
    //               <Button type="primary" shape="round">
    //                 <Link to={`project/${item.id}`}>바로가기</Link>
    //               </Button>
    //             </ProjectItem>
    //           </div>
    //         );
    //       })}
    //     </Carousel>
    //   </SiteLayoutBackground>
    // </Content>
  );
};

export default ProjectCarousel;

import styled from '@emotion/styled';

export const ProjectItem = styled.div`
  .project_slide {
    position: relative;
    padding-bottom: 35vw;
  }
  .swiper_container_img {
    width: 100%;
    position: absolute;
    bottom: 0vw;
    right: 0;
    z-index: 2;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper_container_txt {
    padding: 20vw;
    background: #457ef2;
    .project_contnet_sliders {
      background: #457ef2;
    }
    h2 {
      font-size: 2rem;
      color: #fff;
    }
    h3 {
      font-size: 1.8rem;
      color: #fff;
    }
  }
  .swiper_container1 {
    margin-right: 0;
    width: 80vw;
    height: 52vw;
  }
  .swiper_container2 {
  }
  .to_project_link {
    display: inline-block;
    margin-top: 10px;
    padding: 3px 0;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 700;
    border-bottom: 3px solid;
  }
`;

export const SiteLayoutBackground = styled.div`
  background: #fff;
  .
`;

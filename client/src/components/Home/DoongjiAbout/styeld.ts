import styled from '@emotion/styled';

export const SiteLayoutBackground = styled.div`
  .doongji_about_content {
    width: 100%;
    .img_box {
      position: relative;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  /*둥지*/
  .doongji_about_content.fir {
    padding-top: 2vw;
    .flex_box {
      display: flex;
      justify-content: flex-start;
      .sub_title {
        width: 60%;
        justify-content: flex-end;
      }
    }
    .img_box {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      img {
        width: 50%;
      }
    }
  }

  .doongji_about_content.two {
    padding-top: 2vw;
    .flex_box {
      display: flex;
      justify-content: flex-end;
      .sub_title {
        width: 50%;
      }
    }
    .img_box {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      img {
        width: 50%;
      }
    }
  }
  @media only screen and (min-width: 769px) {
    .doongji_about_content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .img_box {
        position: relative;
        img {
          display: block;
          width: 100%;
        }
      }
    }
    /*둥지*/
    .doongji_about_content.fir {
      padding-top: 10vw;
      .sub_title {
        width: 40%;
      }
      .img_box {
        width: 50%;
      }
    }
    .doongji_about_content.fir {
    }
  }
`;

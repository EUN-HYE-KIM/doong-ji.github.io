import styled from '@emotion/styled';

export const SiteLayoutBackground = styled.div`
  position: relative;
  width: 100%;
  padding: 0 14px;
  .part_img {
    width: 100%;
    padding: 0 27px;
    margin: 39px auto 20px;
    img {
      width: 100%;
    }
  }

  /*Tab Content*/
  .part_tabs_wrap {
    flex-direction: column-reverse;
    /*Tab*/
    .ant-tabs-nav {
      margin-top: 20vw;
      font-weight: 600;
      .ant-tabs-nav-wrap {
        justify-content: flex-end;
      }
      .ant-tabs-nav-list {
        display: block;
        .ant-tabs-tab {
          display: block;
          padding: 6px 0;
        }
      }
      .ant-tabs-tab {
        font-size: 17px;
      }
      .ant-tabs-tab + .ant-tabs-tab {
        margin: 0;
      }
      .ant-tabs-ink-bar-animated {
        display: none;
      }
    }
    .ant-tabs-nav::before {
      border: none;
    }
    .ant-tabs-nav-wrap::after {
      box-shadow: none;
    }

    /*Content*/
    .tabs_content_wrap {
      margin-top: 20px;
      h2 {
        display: inline-block;
        height: 13px;
        padding-right: 13px;
        line-height:.7;
        background: rgba(255, 180, 52, 0.44);
        span {
          position: relative;
          bottom: 16px;
        }
      }
      p {
        word-break: keep-all;
        width: 70%;
      }
    }
  }
  @media only screen and (min-width: 769px) {
    padding: 0 9.9vw;
    .part_img {
      position: absolute;
      top: 9vw;
      right: 9.9vw;
      width: 458px;
      height: 463px;
      padding: 0;
      margin: 0;
      img {
        height: 100%;
      }
    }
    .part_tabs_wrap {
      margin-top: 8vw;
      flex-direction: column-reverse;
      /*Tab*/
      .ant-tabs-nav {
        margin-top: 4vw;
        font-weight: 600;
        .ant-tabs-nav-wrap {
          justify-content: flex-start;
        }
      }
      /*Content*/
      .tabs_content_wrap {
        margin-top: 20px;
        line-height: 1;
      h2 {
        span {
          position: relative;
          bottom: 16px;
        }
      }
      p {
        word-break: keep-all;
        width: 30%;
      }    
    }
  }
`;

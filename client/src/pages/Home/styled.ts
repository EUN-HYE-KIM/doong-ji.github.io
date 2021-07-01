import styled from '@emotion/styled';

export const HomeWrap = styled.div`
  background: #fff;
  h2 {
    font-size: 1.8rem;
    font-weight: 700;
  }
  .main_title {
    font-size: 2rem;
    font-weight: 900;
    line-height: 2.5rem;
    span {
      display: block;
    }
  }
  .sub_title {
    font-size: 1.1rem;
    line-height: 1.3;
    font-weight: 500;
  }
  @media only screen and (min-width: 769px) {
    background: white;
    .main_title {
      font-size: 2.8rem;
      font-weight: 900;
      line-height: 3.5rem;
    }
    .sub_title {
      font-size: 1.4rem;
      line-height: 1.7;
    }
  }
`;

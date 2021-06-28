import styled from '@emotion/styled';
import { Link as LinkR } from 'react-router-dom';
export const Logo = styled(LinkR)`
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.2);
`;
export const HeaderBox = styled.div`
  .nav {
    flex: 1;
    ul {
      display: flex;
      > li {
        padding: 5px 40px;
        > a {
          color: #fff;
        }
      }
    }
  }
  .login {
    display: flex;
    > div {
      padding: 5px;
      > a {
        color: #fff;
      }
    }
  }
`;

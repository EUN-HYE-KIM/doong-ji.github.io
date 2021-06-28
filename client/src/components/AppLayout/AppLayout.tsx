import Layout, { Footer, Header } from 'antd/lib/layout/layout';
import { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { HeaderBox, Logo } from './styled';
import { animateScroll as scroll } from 'react-scroll';
const AppLayout: FC = ({ children }) => {
  const toggleHome = useCallback(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <HeaderBox>
      <Layout>
        <Header
          style={{
            zIndex: 1,
            width: '100%',
            transition: '0.8s all ease',
            marginBottom: '64px',
            display: 'flex',
          }}
        >
          <Logo to="/" className="logo" onClick={toggleHome} />
          <div className="nav">
            <ul>
              <li>
                <Link to="about">소개</Link>
              </li>

              <li>
                <Link to="project">프로젝트</Link>
              </li>

              <li>
                <Link to="calendar">캘린더</Link>
              </li>

              <li>
                <Link to="community">커뮤니티</Link>
              </li>

              <li>
                <Link to="question">Q&A</Link>
              </li>
            </ul>
          </div>
          <div className="login">
            <div className="signin">
              <Link to="signin">로그인</Link>
            </div>
            <div className="signup">
              <Link to="signup">회원가입</Link>
            </div>
          </div>
        </Header>
        {children}
        <Footer
          style={{
            marginTop: '64px',
          }}
        >
          Footer
        </Footer>
      </Layout>
    </HeaderBox>
  );
};

export default AppLayout;

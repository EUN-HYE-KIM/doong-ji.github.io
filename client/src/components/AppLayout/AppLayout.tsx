import Layout, { Footer, Header } from 'antd/lib/layout/layout';
import { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { HeaderBox, Logo } from './styled';
import { animateScroll as scroll } from 'react-scroll';
import { Dropdown, Icon } from 'semantic-ui-react';

const trigger = (
  <span>
    <Icon name="user" /> Hello, Bob
  </span>
);
const alam = (
  <span>
    <Icon name="user" />
  </span>
);
const options = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
    ),
    disabled: true,
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'stars', text: 'Your Stars' },
  { key: 'explore', text: 'Explore' },
  { key: 'integrations', text: 'Integrations' },
  { key: 'help', text: 'Help' },
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' },
];

const AppLayout: FC = ({ children }) => {
  const location = useLocation().pathname.split('/')[1];
  const [isLogin, setIsLogin] = useState(false);
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
                <Link to="/about" className={location === 'about' ? 'active' : ''}>
                  소개
                </Link>
              </li>

              <li>
                <Link to="/project" className={location === 'project' ? 'active' : ''}>
                  프로젝트
                </Link>
              </li>

              <li>
                <Link to="/calendar" className={location === 'calendar' ? 'active' : ''}>
                  캘린더
                </Link>
              </li>

              <li>
                <Link to="/community" className={location === 'community' ? 'active' : ''}>
                  커뮤니티
                </Link>
              </li>

              <li>
                <Link to="/question" className={location === 'question' ? 'active' : ''}>
                  Q&A
                </Link>
              </li>
            </ul>
          </div>
          {isLogin ? (
            <div className="login">
              <div className="signin">
                <Link to="/signin" className={location === 'signin' ? 'active' : ''}>
                  로그인
                </Link>
              </div>
              <div className="signup">
                <Link to="/signup" className={location === 'signup' ? 'active' : ''}>
                  회원가입
                </Link>
              </div>
            </div>
          ) : (
            <div className="login">
              <div className="signup">
                <Dropdown trigger={trigger} options={options} />
              </div>
              <div className="signup">
                <Dropdown trigger={alam} options={options} />
              </div>
            </div>
          )}
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

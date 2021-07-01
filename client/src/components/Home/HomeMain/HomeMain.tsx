import { FC } from 'react';
import { Content } from 'antd/lib/layout/layout';
import { SiteLayoutBackground } from './styeld';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const HomeMain: FC = () => {
  return (
    <section className="section">
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <SiteLayoutBackground style={{ padding: 24, minHeight: 380 }}>
          <Button type="primary" shape="round">
            <Link to="signup">바로가기</Link>
          </Button>
        </SiteLayoutBackground>
      </Content>
    </section>
  );
};

export default HomeMain;

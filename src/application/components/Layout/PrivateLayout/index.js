import React from 'react';
import Header from './Header';
import { Layout, Content } from './styles';

const PrivateLayout = ({ children }) => (
  <Layout>
    <Header />
    <Content>
      <main>{children}</main>
    </Content>
  </Layout>
);

export default PrivateLayout;

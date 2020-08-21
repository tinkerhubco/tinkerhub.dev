import React, { ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
    margin: 0;
  }
`;

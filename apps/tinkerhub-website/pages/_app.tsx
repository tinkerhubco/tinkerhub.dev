import React, { ComponentType } from 'react';

import { Helmet } from '../components/Helmet';

type Props = {
  Component: ComponentType;
  pageProps: unknown;
};
const App = ({ Component, pageProps }: Props) => (
  <>
    <Helmet title="Tinkerhub" description="Tinkerhub website">
      <link rel="icon" href="/favicon.png" />
    </Helmet>
    <Component {...pageProps} />
  </>
);

export default App;

import React from 'react';

import { Box } from 'rebass';

import { Layout } from '../../components/Layout';

import backgroundLogo from '../../assets/backgrounds/logo.png';

export const LandingPageContainer = () => (
  <>
    <Layout>
      <Box
        sx={{
          backgroundImage: `url(${backgroundLogo})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
        }}
      />
    </Layout>
  </>
);

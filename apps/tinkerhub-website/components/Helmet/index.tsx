import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  // Required
  title: string;
  description: string;
} & Partial<{
  // Optional
  robots:
    | 'index, follow'
    | 'noindex, follow'
    | 'index, nofollow'
    | 'noindex, nofollow';
  viewport: string;
  children: ReactNode;
}>;

const MetaNameLookup = {
  Canonical: 'canonical',
  Viewport: 'viewport',
  Description: 'description',
  Robots: 'robots',
};

export const Helmet = ({
  title,
  description,
  robots,
  viewport = 'width=device-width, initial-scale=1.0',
  children,
}: Props) => (
  <Head>
    <title>{title}</title>
    <meta name={MetaNameLookup.Viewport} content={viewport} />
    <meta name={MetaNameLookup.Description} content={description} />
    <meta name={MetaNameLookup.Robots} content={robots} />
    {children}
  </Head>
);

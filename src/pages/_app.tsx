import type { AppProps } from 'next/app'
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import client from '../../apollo-client';
import { ApolloProvider } from '@apollo/client/react';
import { SessionProvider } from "next-auth/react"

import '../../styles/globals.css';

import "@fortawesome/fontawesome-svg-core/styles.css";

import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <UserProvider>
      <ApolloProvider client={client}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ApolloProvider>
    </UserProvider>
  )
}

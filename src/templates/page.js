import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from '../components/Section';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { colors, responsive } from '../styles';

const SPage = styled(Section)`
  padding: 56px 0 12px;
  font-size: 14px;
  min-height: ${({ article }) => (article ? 0 : 'calc(100vh - 136px)')};
  & article * {
    padding-bottom: 20px;
    opacity: 0.9;
  }
  & h1 {
    margin-bottom: 11px;
    font-size: 2.5em;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1.04;
  }

  & h2 {
    margin: 48px 0 11px 0;
    font-size: 1.75em;
    font-weight: 700;
    letter-spacing: -0.6px;
    line-height: 1.04;
  }
  ${({ viewport }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
  `} @media screen and (${responsive.sm.max}) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const SPageContent = styled.div`
  & p {
    margin-bottom: 29px;
    font-family: ${({ article }) => (article ? 'FreightText' : 'inherit')};
    font-size: 1.3125em;
    line-height: 1.5714285714;
  }
  & a {
    display: inline-block;
    font-weight: 400;
    background-image: linear-gradient(
      to bottom,
      rgba(51, 51, 51, 0.75) 50%,
      rgba(51, 51, 51, 0) 50%
    );
    background-repeat: repeat-x;
    background-size: 2px 0.1em;
    background-position: 0 1.25em;
  }
  & a:active {
    -webkit-transform: scale(0.95) translate3d(0, 0, 0);
    -webkit-transition: 0.06s ease;
  }
`;

const layoutTheme = {
  fontWeight: '400',
  linkColor: colors.lightBlue,
  linkHover: colors.lightBlue,
  mobileToggleColor: colors.lightGrey,
  mobileToggleOpacity: '1',
  logoColor: colors.lightBlue,
  logoHover: colors.lightBlue
};

const Page = ({ children, title, article, siteTitle }) => (
  <div>
    <Helmet
      title={`${title} - ${siteTitle}`}
      meta={[{ name: 'twitter:title', content: title }, { name: 'og:title', content: title }]}
    />
    <Header theme={layoutTheme} />
    <SPage article={article} maxWidth={700} fontColor={colors.white}>
      {!article ? (
        <SPageContent>{children}</SPageContent>
      ) : (
        <article>
          <h1>{title}</h1>
          <SPageContent>{children}</SPageContent>
        </article>
      )}
    </SPage>
    <Footer theme={layoutTheme} />
  </div>
);

export default Page;

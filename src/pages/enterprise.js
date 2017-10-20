import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubscribeForm from '../components/SubscribeForm';
import balanceCoinbase from '../assets/balance-preview-coinbase.png';
import balanceXero from '../assets/balance-preview-xero.png';
import circularArrows from '../assets/circular-arrows.svg';
import trianglesEnterprise from '../assets/triangles-enterprise.svg';
import featureSearch from '../assets/feature-search.svg';
import featureInstitutions from '../assets/feature-institutions.svg';
import featureSecurity from '../assets/feature-security.svg';
import featureSync from '../assets/feature-sync.svg';
import { colors, fonts, responsive } from '../styles';

const SSection = styled.section`
  width: 100%;
  height: 100%;
  min-height: 900px;
  background: 'transparent';
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(${colors.white});
  position: relative;
  overflow: hidden;
  @media screen and (${responsive.md.max}) {
    min-height: 0;
    height: auto;
  }
`;

const SBackground = styled.div`
  position: absolute;
  top: -43%;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  @media screen and (${responsive.sm.max}) {
    top: -55%;
  }
`;

const SContent = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  z-index: 0;
`;

const SInner = styled.div`padding: 68px 0 34px;`;

const SBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100vw;
  mask-image: url(${trianglesEnterprise});
  mask-repeat: no-repeat;
  mask-position: 50% 50%;
  mask-size: cover;
  background-image: linear-gradient(to bottom, rgb(${colors.darkerGrey}), rgb(${colors.softerGrey}));
`;

const STitle = styled.h1`
  width: 100%;
  max-width: 28rem;
  padding: 0 10px;
  font-size: 2.25rem;
  margin: 60px auto;
  font-weight: 400;
  text-align: center;
  @media screen and (${responsive.sm.max}) {
    letter-spacing: -1px;
  }
`;

const SSubTitle = styled.h3`
  font-weight: 400;
  margin-bottom: 40px;
`;

const SAppPreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px 0;
  @media screen and (${responsive.sm.max}) {
    flex-direction: column;
  }
`;

const SAppPreview = styled.div`
  width: 100%;
  max-width: 400px;
  height: 250px;
  margin: 0;
  background: ${({ img }) => `url(${img}) no-repeat`};
  background-size: 90%;
  background-position: center;
`;

const SReconcileWrapper = styled.div`
  min-width: 150px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${circularArrows}) no-repeat;
  background-size: 100% 100%;
  @media screen and (${responsive.sm.max}) {
    height: 150px;
  }
`;

const SGreenButton = styled.div`
  cursor: pointer;
  padding: 8px 12px;
  color: rgb(${colors.white});
  border-radius: 8px;
  text-align: center;
  background-image: linear-gradient(102deg, rgb(${colors.lightGreen}), rgb(${colors.darkGreen}));
  box-shadow: 0 2px 3px 0 rgba(${colors.black}, 0.1);
`;

const SContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
`;

const SFeatures = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const SFeatureBlock = styled.div`
  display: flex;
  width: 50%;
  @media screen and (${responsive.sm.min}) {
    &:nth-child(-n + 2) {
      margin-bottom: 80px;
    }
  }
  @media screen and (${responsive.sm.max}) {
    width: 100%;
    margin: 20px 0 40px;
  }
`;

const SFeatureIconWrapper = styled.div`
  width: 25%;
  padding: 0 10px;

  & img {
    width: 100%;
  }

  @media screen and (${responsive.sm.max}) {
    width: 70%;
    padding: 0;
  }
`;

const SFeatureInfoWrapper = styled.div`padding: 0 10px;`;

const STagline = styled.p`
  font-weight: 600;
  font-size: ${fonts.large};
  line-height: 1.25;
  margin-bottom: 10px;
  @media screen and (${responsive.sm.max}) {
    font-size: ${fonts.h4};
  }
`;

const SDescription = styled.p`
  font-size: ${fonts.h6};
  padding-right: 40px;
  line-height: 1.4;
  @media screen and (${responsive.sm.max}) {
    padding-right: 0;
    letter-spacing: -0.7px;
    font-size: ${fonts.h5};
  }
`;

const SCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (${responsive.sm.max}) {
    flex-direction: column;
  }
`;

const SCard = styled.div`
  padding: 30px;
  width: 100%;
  border-radius: 8px;
  background: rgb(${colors.white});
  color: rgba(${colors.dark}, 0.9);
  & > p {
    line-height: 2;
    margin-bottom: 15px;
    @media screen and (${responsive.sm.max}) {
      letter-spacing: -0.5px;
    }
  }
  &:nth-child(2) {
    margin: 0 36px;
  }
  @media screen and (${responsive.sm.max}) {
    &:nth-child(2) {
      margin: 36px 0;
    }
  }
`;

const SCardButton = styled(SGreenButton)`
  padding: 15px;
  font-size: ${fonts.big};
  @media screen and (${responsive.sm.max}) {
    padding: 12px;
    font-size: ${fonts.h3};
  }
`;

const layoutTheme = {
  linkColor: colors.white,
  linkHover: colors.white,
  mobileToggleColor: colors.white,
  mobileToggleOpacity: '0.7',
  logoColor: colors.white,
  logoHover: colors.white
};

const features = [
  {
    name: 'search',
    icon: featureSearch,
    tagline: 'Research the future',
    description:
      'If your team want to experiment with smart contracts on the Ethereum blockchain, they will need to spend a balance of Ether to run their code.'
  },
  {
    name: 'institutions',
    icon: featureInstitutions,
    tagline: 'Support the open financial system',
    description:
      'The vast majority of the world’s assets are stored on old databases using legacy technology. Blockchain-based protocols provide a new, open-source alternative.'
  },
  {
    name: 'security',
    icon: featureSecurity,
    tagline: 'Prepare for ransomware',
    description:
      'Companies that have been hit by ransomware attacks are paralysed by the requests for bitcoin. Storing currencies as insurance.'
  },
  {
    name: 'sync',
    icon: featureSync,
    tagline: 'Automated accounting',
    description:
      'Digital assets are built on top of a blockchain ledger. Synchronising transactions with double-entry accounting systems now will reduce costs in the future.'
  }
];

const subscribeOptions = {
  server: 'money.us11',
  userId: 'a3f87e208a9f9896949b4f336',
  listId: '38021a64b6',
  origin: 'enterprise'
};

const Enterprise = ({ data }) => {
  const title = 'Enterprise';
  const siteTitle = data.site.siteMetadata.title;
  return (
    <SSection>
      <SBackground>
        <SBackgroundImage />
      </SBackground>
      <SContent>
        <Helmet
          title={`${title} - ${siteTitle}`}
          meta={[{ name: 'twitter:title', content: title }, { name: 'og:title', content: title }]}
        />
        <Header theme={layoutTheme} />
        <SInner>
          <STitle>Hold digital currencies on your balance sheet</STitle>

          <SAppPreviewContainer>
            <SAppPreview img={balanceCoinbase} />
            <SReconcileWrapper>
              <SGreenButton>Reconcile</SGreenButton>
            </SReconcileWrapper>
            <SAppPreview img={balanceXero} />
          </SAppPreviewContainer>

          <SContainer>
            <SSubTitle>Why should companies hold digital currencies?</SSubTitle>
            <SFeatures>
              {features.map(feature => (
                <SFeatureBlock key={feature.name}>
                  <SFeatureIconWrapper>
                    <img src={feature.icon} alt={feature.name} />
                  </SFeatureIconWrapper>
                  <SFeatureInfoWrapper>
                    <STagline>{feature.tagline}</STagline>
                    <SDescription>{feature.description}</SDescription>
                  </SFeatureInfoWrapper>
                </SFeatureBlock>
              ))}
            </SFeatures>
          </SContainer>

          <SContainer>
            <SSubTitle>How much do you want this?</SSubTitle>
            <SCardsContainer>
              <SCard>
                <h3>Interested</h3>
                <p>Let me know when you ship it</p>
                <SubscribeForm white options={subscribeOptions} />
              </SCard>
              <SCard>
                <h3>Supportive</h3>
                <p>I will pay for beta access</p>
                <SCardButton>Pay $99</SCardButton>
              </SCard>
              <SCard>
                <h3>Early Adopter</h3>
                <p>I really need alpha access</p>
                <SCardButton>Pay $999</SCardButton>
              </SCard>
            </SCardsContainer>
          </SContainer>
        </SInner>
        <Footer theme={layoutTheme} />
      </SContent>
    </SSection>
  );
};

export default Enterprise;

export const query = graphql`
  query EnterpriseQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

import type { NextPage } from "next";
import styled from "@emotion/styled";
import GlobalStyle from "../styles/GlobalStyle";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 80px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 80px 16px;
`;

const SectionWithFooter = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EmojiWrapper = styled.div`
  position: absolute;
  bottom: 80px;
  font-size: 2rem;
  cursor: pointer;
`;

const Title = styled.h1`
  font-family: "Merriweather", serif;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Subtitle = styled.h2`
  font-family: "Merriweather", serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Paragraph = styled.p`
  color: #999;
  font-size: 1.5rem;
  line-height: 1.75;
  font-weight: 300;
  margin-bottom: 16px;
`;

const ClosingTitle = styled(Title)`
  font-size: 1.75em;
`;

const ClosingParagraph = styled(Paragraph)`
  font-size: 1em;
  margin-bottom: 32px;
`;

const BlockTitle = styled(Subtitle)`
  font-size: 1.25rem;
`;

const BlockContent = styled(Paragraph)`
  font-size: 1rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  max-width: 800px;
  margin: 0 auto;
  align-items: start;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Emoji = styled.span`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const Contact = styled.a`
  display: inline-block;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-style: dashed;
  font-size: 1.25rem;
  cursor: pointer;
  margin-top: 16px;
  text-align: left;
`;

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Home: NextPage = () => {
  return (
    <Container>
      <Section>
        <LogoWrapper>
          <Image src="/saohaus.svg" alt="SAOHAUS" width={64} height={24} />
        </LogoWrapper>
        <ContentWrapper>
          <Title>Augmenting Innovation</Title>
          <Paragraph>
            Guiding and partnering with fast-paced startups and SMBs looking to
            weave AI/ML into their product development and design processes.
          </Paragraph>
        </ContentWrapper>
        <EmojiWrapper onClick={() => scrollToSection("value-prop")}>
          👇
        </EmojiWrapper>
      </Section>
      <Section id="value-prop">
        <ContentWrapper>
          <ClosingTitle>Empowering Businesses of All Sizes</ClosingTitle>
          <ClosingParagraph>
            Whether you&apos;re a nimble startup, an ambitious small-to-medium
            business (SMB), or a larger enterprise seeking to foster a culture
            of innovation, we&apos;re here to support your journey.
          </ClosingParagraph>
          <ClosingTitle>Embrace the Future of Product and Design</ClosingTitle>
          <ClosingParagraph>
            Join us on an adventure of discovery and innovation. Together,
            we&apos;ll explore the potential of AI/ML to create outstanding user
            experiences and shape the future of your business.
          </ClosingParagraph>
        </ContentWrapper>
      </Section>
      <SectionWithFooter id="our-offerings">
        <ContentWrapper>
          <Title>Our offerings</Title>
          <GridContainer>
            <ContentBlock>
              <Emoji>⚡</Emoji>
              <BlockTitle>Collaborative Learning</BlockTitle>
              <BlockContent>
                Engage in interactive sessions designed to demystify AI/ML and
                inspire your team to harness its capabilities in your product
                development and design.
              </BlockContent>
            </ContentBlock>
            <ContentBlock>
              <Emoji>🦾</Emoji>
              <BlockTitle>Advisory Support</BlockTitle>
              <BlockContent>
                Benefit from insights and advice as we explore best practices
                for integrating cutting-edge technologies into your
                organization&apos;s workflow and decision-making.
              </BlockContent>
            </ContentBlock>
            <ContentBlock>
              <Emoji>🗺️</Emoji>
              <BlockTitle>Strategy Development</BlockTitle>
              <BlockContent>
                Develop a comprehensive strategy that aligns AI/ML with your
                organization&apos;s goals, values, and vision for the future.
                Our approach fosters collaboration and alignment, setting the
                stage for success.
              </BlockContent>
            </ContentBlock>
            <ContentBlock>
              <Emoji>🚀</Emoji>
              <BlockTitle>Build Next-Gen Teams</BlockTitle>
              <BlockContent>
                Cultivate the product and design teams of tomorrow. We&apos;ll
                guide you in assembling and nurturing teams skilled in
                leveraging innovative technologies, fostering a culture of
                innovation, and delivering exceptional results.
              </BlockContent>
            </ContentBlock>
          </GridContainer>
        </ContentWrapper>
        <Contact href="mailto:silas@sao.haus">Get in touch</Contact>
      </SectionWithFooter>
    </Container>
  );
};

export default Home;

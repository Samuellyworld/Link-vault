import { Section } from "@/utils/section";
import {
    BodyText,
    Container,
    Content,
    ContentWrapper,
    Header,
    LastSection,
    MainText,
    SecondTitle,
    Title
} from "./splash-section.styles";

const SplashSection = () => {
    return (
        <>
            <Container>
                <Header>
                    <MainText>Our Services</MainText>
                </Header>
                <BodyText>
                    <Content>
                        <div className="assets">
                            <img src="/assets/bank.png" alt="bank" />
                            <ContentWrapper>
                                <Title>Credit Bank Accounts</Title>
                                <p className="final-text">
                                    Send money from anywhere to the recipient's local bank account. They'll receive
                                    funds in the local currency too.
                                </p>
                            </ContentWrapper>
                        </div>
                        <div>
                            <img src="/assets/svg/africa.svg" alt="usdc" />
                            <ContentWrapper>
                                <SecondTitle>Pay different bills across Africa</SecondTitle>
                                <p className="final-text">
                                    Pay over 17,000 bills spanning across electricity, airtime, internet and cable TV
                                    across Africa
                                </p>
                            </ContentWrapper>
                        </div>
                    </Content>
                </BodyText>
            </Container>
            <LastSection>
                <MainText>Why us?</MainText>
                <div className="last-header">
                    {
                        Section.map((item, i) => {
                            return (
                                <div key={i} className="section-container">
                                    <img src={item.image_url} alt="bank" />
                                    <h3 className="header">{item.header}</h3>
                                    <p className="description">{item.description}</p>
                                </div>
                            );

                        })
                    }
                </div>
            </LastSection>
        </>
    );
};

export default SplashSection;
import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  margin: auto;
`;
export const BodyText = styled.div`
  display: flex;
  margin-left: 2rem;
  @media screen and (max-width: 450px) {
    margin-left: 1.2rem;
  }

  @media screen and (max-width: 400px) {
    justify-content: center;
    align-items: center;
    width: 96%;
    margin: unset;
    padding: 0.5rem 0.5rem;
  }
`;
export const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;

`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .assets {
    display : flex;
    margin-right: 2rem;
  }
  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
  }

  div {
    display: flex;
    width: 100%;
    gap: 1rem;

    img {
      width: 95.698px;
      height: 95.698px;
      flex-shrink: 0;
      @media screen and (max-width: 460px) {
        width: 65.698px;
        height: 65.698px;
      }
      @media screen and (max-width: 425px) {
        width: 45.698px;
        height: 45.698px;
      }
    }
  }
`;
export const ImageDiv = styled.img`
  width: 130%;
  background-size: cover;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 80%;
  flex-direction: column;


  .final-text {
    font-size : 14px;
  }

  @media screen and (max-width: 450px) {
    gap: 0.4rem;
  }
  span {
    color: #545454;
    text-align: center;
    margin: auto;

    font-family: Sora-Regular, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 175%;
  }
  p {
    color: #545454;
    width: 20rem;
    font-family: Sora-Regular, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 175%;
  }
`;
export const SecondTitle = styled.div`
  font-size: 16px;
  color: black;
  font-weight: 600;
  font-family: var(--font-family-nista);
  @media screen and (max-width: 460px) {
    font-size: 14px;
  }
`;
export const Title = styled.div`
  font-size: 16px;
  color: black;
  font-weight: 600;
  font-family: var(--font-family-nista);
  @media screen and (max-width: 460px) {
    font-size: 14px;
  }
`;
export const MainText = styled.p`

  font-family: var(--font-family-geom);

  padding-top: 2rem;
  font-size: 30px;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 100%;
`;

export const MidSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  img {
    margin-top: 1rem;
    cursor: pointer;
    &:hover {
      scale: 1.1;
    }
  }
`;

export const LastSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 10rem 0rem;
    @media screen and (max-width: 760px) {
        flex-direction: column;
        gap: 1rem;
    }

    h2 {
        font-size: 24px;
        font-weight: 600;
        color: black;
        @media screen and (max-width: 460px) {
            font-size: 20px;
        }
    }

    .last-header {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       gap: 1rem;

       .section-container {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              align-items: center;
              justify-content: center;
              background: #f5f5f5;
              width : 25rem;
              padding: 1rem 1rem;
              border-radius: 0.5rem;  
    
              img {
                width: 3.5rem;
                // height: 1;
              }
    
              .header {
                font-size: 20px;
                font-weight: 600;
                color: black;
                @media screen and (max-width: 460px) {
                     font-size: 16px;
                }
              }
    
              .description {
                font-size: 14px;
                color: #545454;
                text-align: center;
                @media screen and (max-width: 460px) {
                     font-size: 12px;
                }
       }
    }


`;



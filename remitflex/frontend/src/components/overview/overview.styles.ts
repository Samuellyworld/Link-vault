import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const Title = styled.p`
  font-family: var(--font-family-geom);
  font-size: 1.5em;
  background: linear-gradient(to left, #84e681, #409099);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding: 1rem;
  margin-top: -1rem;
  margin-bottom: -2rem;
  margin-left: 2rem;
`;
export const Content = styled.div`
  padding: 2rem;
`;
export const MainDiv = styled.div`
  background: #fafffa;
  width: 700px; // come check this later
  height: 300px;
  margin: auto;
  margin-left: 0.5rem;
  border-radius: 1rem;
  div {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 42%;
    margin: auto;
    width: 2rem;
  }
`;
export const TextStyle = styled.p`
  font-size: 14px;
  font-family: Sora-Regular;
  width: 120px !important;
  margin-top: 0.1rem;
  opacity: 0.6;
  margin-left: -2rem !important;
`;
export const BottomData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -1.5rem;

  div {
    display: flex;
    p {
      color: #a9a9a9;
      font-size: 14px;
      opacity: 0.7rem;
    }
  }
`;
export const DataField = styled.div`
  display: flex;
  flex-direction: column;
  height: 7rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  width: 700px !important;
  &:nth-child(odd) {
    border-radius: 15px;
    background: #fafffa;
  }
`;
export const Top = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonImage = styled.img`
  cursor: pointer;
  height: 200px !important;
  width: 420px !important;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0rem 1rem;
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;
export const TopData = styled.div`
  display: flex;
  justify-content: space-between !important;

  p {
    color: #409099;
    font-family: Sora-SemiBold;
    font-size: 20px;
    font-weight: 900 !important;
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;
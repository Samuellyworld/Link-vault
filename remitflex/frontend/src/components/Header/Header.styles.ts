import styled from "styled-components";

export const Image = styled.img`
  position: relative;
  width: 30px;
  height: 35.5px;
`;
export const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  .link-wrapper {
    display: flex;
    text-decoration: none;
    gap: 0.5rem;

    p {
      margin-top:;
    }
  }
`;
export const HeaderTextsDiv = styled.div`
  display: flex;
  margin-top: 1.8rem;
`;
export const HeaderLinks = styled.a`
  color: #a9a9a9;
  font-size: 17px;
  cursor: pointer;
  opacity: 0.7rem;
  font-family: Sora-Regular;
  text-decoration: none;
  &:hover {
    color: #409099;
  }
`;
export const Text = styled.p`
  color: #409099;
  font-family: "var(--font-family-nista)", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  span {
    color: #6ec06c;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    font-family: var(--font-family-nista);
    line-height: normal;
  }
`;

//impoorting styled from styled components
import styled from "styled-components";

// pay bill container styles
export const PayBillContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family-nista);
  font-style: normal;

  .algo__link {
    color: #409099;
  }

  .successful__ {
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 8px 42px 0px rgba(0, 0, 0, 0.05);
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .successful__text {
      font-family: var(--font-family-geom);
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      color: #409099;
    }
  }

  .react-tel-input {
    border: 1px solid #959595;
    // background : rgba(255,131,0,0.05) !important;
  }

  .css-b62m3t-container {
    width: 26rem;

    @media screen and (max-width: 470px) and (min-width: 400px) {
      width: 90%;
    }
    @media screen and (max-width: 400px) {
      width: 100%;
    }
  }
  .css-m2atif-control {
    padding: 0.3rem;
  }

  .react-tel-input {
    width: 26rem;

    @media screen and (max-width: 470px) and (min-width: 400px) {
      width: 90%;
    }
    @media screen and (max-width: 400px) {
      width: 100%;
    }
  }
  input {
    // background : rgba(255,131,0,0.05) !important;
  }
  .flag-dropdown {
    // background : rgba(255,131,0,0.005) !important;
  }
  .form-control {
    // background : rgba(255,131,0,0.005) !important;
  }
  .input {
    width: 24.2rem;

    @media screen and (max-width: 470px) and (min-width: 400px) {
      width: 90%;
    }
    @media screen and (max-width: 400px) {
      width: 100%;
    }
  }
`;
// pay bill inner container styles
export const PayBillInnerContainer = styled.div`
  width: 45%;
  margin-top: 1rem;

  @media only screen and (max-width: 967px) {
    width: 50%;
  }

  @media only screen and (max-width: 879px) {
    width: 60%;
  }

  @media only screen and (max-width: 727px) {
    width: 80%;
  }

  @media only screen and (max-width: 547px) {
    width: 90%;
  }

  @media only screen and (max-width: 482px) {
    width: 98%;
  }
`;
// pay bill header styles
export const PayBillHeader = styled.span`
  font-size: 1.5rem;
  display: block;
  font-weight: 700;
  text-transform: capitalize;
  margin-left: 30px;
  color: #002846;
  font-family: var(--font-family-geom);
  // @media only screen and (max-width: 488px) {
  //     margin-left: 1rem;
  // }
`;

// pay bill form styles
export const PayBillForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem 2rem;

  .inputClass {
    width: 500px;
  }
`;
export const PayBillGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;

  width: 100%;
`;
// p
export const PayBillLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 200;
  display: block;
  width: 100%;
  color: #2c2c2c;
`;

export const PayBillAmoutCont = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  width: 100%;
`;

export const PayBillInput = styled.input`
  border: 1px solid #959595;
  border-radius: 5px;
  outline: none;
  padding: 0.85rem;
  // background : rgba(255, 131, 0, 0.05);
`;

export const PayBillAmountIn = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 1rem;
`;

export const PayBillAmountInText = styled.span`
  font-size: 0.9rem;
  color: #959595;
  font-weight: 200;

  @media only screen and (max-width: 445px) {
    font-size: 0.8rem;
  }
`;
export const PayBillSQLInText = styled.span`
  font-size: 1.1rem;
  font-weight: 400;

  @media only screen and (max-width: 445px) {
    font-size: 1rem;
  }
`;

export const PayBillButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  position: relative;
  width: fit-content;
  margin-top: 1rem;
  width: 26rem;

  @media screen and (max-width: 470px) and (min-width: 400px) {
    width: 90%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }

  // @media only screen and (max-width: 450px) {
  //     gap : 0.7rem;
  // }

  // @media only screen and (max-width: 370px) {
  //     flex-direction: row;
  //     max-height: fit-content;
  //     gap: 0.2rem;
  // }
`;

export const PayBillButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 0.8rem;

  padding: 0.5rem 1rem;
  height: fit-content;
  background-color: #2c2c2c;
  color: white;
  outline: none;
  border: none;
  border-radius: 5px;

  .payBackIcon {
    height: 1rem;
    margin: 0 0.2rem 0 0.4rem;
  }

  .boldText {
    font-weight: bold;
  }
  @media only screen and (max-width: 568px) {
    padding: 0.5rem 0.8rem;
  }

  @media only screen and (max-width: 445px) {
    padding: 0.5rem 0.5rem;
  }

  @media only screen and (max-width: 429px) {
    padding: 0.5rem 0.3rem;
    font-size: 0.7rem;

    .payBackIcon {
      height: 1rem;
      margin: 0 0.1rem 0 0.2rem;
    }
  }

  @media only screen and (max-width: 411px) {
    padding: 0.5rem 0.35rem;
    font-size: 0.7rem;

    .payBackIcon {
      height: 1rem;
      margin: 0 0.1rem 0 0.1rem;
    }
  }

  @media only screen and (max-width: 370px) {
    padding: 0.5rem 0.3rem;
    font-size: 0.65rem;
  }
`;

export const PayBillButtonTwo = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;

  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  height: fit-content;
  background-color: white;
  border: 1px solid #2c2c2c;
  color: #2c2c2c;
  outline: none;
  border-radius: 5px;

  @media only screen and (max-width: 568px) {
    padding: 0.5rem 0.8rem;
  }

  @media only screen and (max-width: 445px) {
    padding: 0.5rem 0.5rem;
  }

  @media only screen and (max-width: 429px) {
    padding: 0.5rem 0.3rem;
    font-size: 0.7rem;
  }

  @media only screen and (max-width: 411px) {
    padding: 0.5rem 0.35rem;
    font-size: 0.7rem;
  }

  @media only screen and (max-width: 370px) {
    padding: 0.5rem 0.3rem;
    font-size: 0.65rem;
  }
`;

export const PayBillPrice = styled.span`
  display: block;

  font-size: 0.85rem;
  padding: 0.4rem 1rem;
  background-color: #2c2c2c;
  color: white;
  border-radius: 5px;

  position: absolute;
  top: 90%;
  right: 0;

  z-index: -1;
`;
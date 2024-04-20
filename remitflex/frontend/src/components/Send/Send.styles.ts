import styled from "styled-components";

type ActiveProps = {
  active: boolean;
};

export const SendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  margin: auto;
  padding: 2rem 0rem;
  gap: 3rem;

  @media screen and (max-width: 700px) {
    width: 90%;
  }
  @media screen and (max-width: 400px) {
    width: 95%;
  }

  @media screen and (max-width: 380px) {
    width: 100%;
    padding: 0rem 0.8rem;
  }

  .algo__link {
    color: #409099;
  }

  .account__name {
    font-size: 0.8rem;
    margin-top: -0.6rem;
    color: green;
  }
  .amount__info {
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 8px 42px 0px rgba(0, 0, 0, 0.05);
    padding: 1rem;
    margin-top: 1rem;
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

  .bank__info {
    display: flex;
    flex-direction: column;
    padding: 0rem 0rem 1rem 0rem;
    gap: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #a9a9a9;
  }

  .position__step {
    display: flex;
    margin-right: auto;
    width: 100%;
  }

  .init__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .fees {
    display: flex;
    flex-direction: column;
    padding: 0rem 0rem 1rem 0rem;
    gap: 1rem;
    border-bottom: 1px solid #a9a9a9;
  }
  .amount__paid {
    display: flex;
    flex-direction: column;
    padding: 0rem 0rem 1rem 0rem;
    gap: 1rem;
  }

  .send__money {
    display: flex;
    flex-direction: column;
    width: 100%;

    .send-head {
      color: #409099;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: var(--font-family-geom);
    }

    &__form {
      display: flex;
      flex-direction: column;
      width: 400px;
      gap: 1rem;
      margin-top: 1rem;

      @media screen and (max-width: 500px) {
        width: 90%;
      }

      .rate {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .toggle_money {
          width: 40px;
          cursor: pointer;
        }
      }
    }
  }
`;

export const SendHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

// Styled components
export const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 500px) {
    margin: auto;
  }
`;

export const StepDiv = styled.div<ActiveProps>`
  color: ${props => (props.active ? "#409099" : "grey")};
`;

export const Step = styled.div`
  flex: 1;
  position: relative;
`;

export const StepNumber = styled.div<ActiveProps>`
  position: relative;
  z-index: 2;
  width: 30px;
  height: 30px;
  border: 2px solid #409099;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.active ? "#409099" : "white")};
  color: ${props => (props.active ? "white" : "#409099")};
`;

export const StepTitle = styled.div`
  margin-top: 10px;
  text-align: center;
`;
export const DashedBorder = styled.div<ActiveProps>`
  position: absolute;
  top: 15px;
  left: 50%;
  height: 2px;
  width: 100%;
  transform: translateX(-50%);
  background: ${props =>
    props.active
      ? "linear-gradient(to right, #409099 50%, transparent 50%)"
      : "linear-gradient(to right, #ccc 50%, transparent 50%)"};
  background-size: 10px 100%;
  background-position: 0 0;
`;
import { useNavigate } from "react-router-dom";
import { ButtonWrap, ButtonImage, Top, MainContainer } from "./overview.styles";

const Overview = () => {
  const navigate = useNavigate();
  const payBills = () => {
    navigate("/products");
  };
  const sendMoney = () => {
    navigate("/remit");
  };

  return (
    <MainContainer>
      <Top>
        <ButtonWrap>
          <ButtonImage onClick={sendMoney} src="/assets/svg/sendmoney.svg" />
          <ButtonImage onClick={payBills} src="/assets/svg/paybills.svg" />
        </ButtonWrap>
      </Top>
    </MainContainer>
  );
};

export default Overview;
import { InputField } from "@/widgets/inputField";
import {
  SendContainer,
  StepContainer,
  Step,
  StepNumber,
  DashedBorder,
  StepDiv
} from "./send.styles";
import { Button } from "@/widgets/button";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { banks } from "@/services/protected/banksAPI";
import { paymentControl } from "@/services/protected/paymentAPI";
import Select from "react-select";
import { customStyles } from "@/utils/select";
import { commaFormat } from "@/utils/addons";
import  { Spinner } from "@/widgets/spinner";

const Send = () => {
  const [switchBtn, setSwitchBtn] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [banksOptions, setBanksOptions] = useState([]);
  const [account, setAccount] = useState<any>(null);
  const [currentRate, setCurrentRate] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    amount: "",
    recipient: "",
    reason: "",
    bankName: null,
    accountNumber: "",
    youPay: "",
    rate: "",
    fee: "",
    transferTime: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const localBanks: any = await banks.getAllLocalBanks();
      const TRANSFORMED_BANK_OPTIONS = localBanks?.data?.data?.map((item: any) => ({
        value: item.id,
        label: item.name,
        option: item
      }));
      setBanksOptions(TRANSFORMED_BANK_OPTIONS);
    })();
  }, []);
  useMemo(() => {
    (async () => {
      const data: any = await paymentControl.getNGNrate();
      setCurrentRate(data?.rate);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (account) return;
      if (data.accountNumber.length > 7) {
        const body = {
          account_number: data.accountNumber,
        //   @ts-ignore
          account_bank: data.bankName.code
        };
        const account = await banks.resolveAccount(body);
        //@ts-ignore
        setAccount(account?.data?.data.account_name);
      }
    })();
  }, [data.accountNumber]);
  const handleNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };
  const renderDollar = () => {
    return <img src="/assets/svg/dola.svg" alt="icon" />;
  };
  const renderNaira = () => {
    return <img src="/assets/svg/naira.svg" alt="icon" />;
  };

  const toggleBtn = () => {
    setSwitchBtn(!switchBtn);
  };

  const handleOnChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSendMoneyOnclick = () => {
    if (data.youPay) {
      handleNextStep();
    }
  };

  const handleRecipientDetailsOnclick = () => {
    if (data.bankName && account && data.reason) {
      handleNextStep();
    }
  };



  const remitPayment = async () => {
    setIsLoading(true);
    // add a loading spinner to button
    const body = {
        //@ts-ignore
      account_bank: data.bankName.code,
      reference : Date.now(),
      amount: parseFloat(data.youPay) * currentRate,
      account_number: data.accountNumber,
      currency: "NGN",
      narration: data.reason,
      debit_currency: "NGN"
    };
    const payment = await paymentControl.createInvoice(body);
    setIsLoading(false);
    handleNextStep();
    if(payment) {
        //@ts-ignore
       return window.location.href = payment.checkoutLink;
    }

    //@ts-ignore
  };

  return (
    <SendContainer>
      {currentStep < 4 && (
        <StepContainer>
          <Step>
            <StepDiv active={currentStep === 1}>
              <StepNumber active={currentStep === 1}>1</StepNumber>
              <p>Send Money</p>
            </StepDiv>
            <DashedBorder active={currentStep >= 1} />
          </Step>

          <Step>
            <StepDiv active={currentStep === 2}>
              <StepNumber active={currentStep === 2}>2</StepNumber>
              <p> Recipient Details</p>
            </StepDiv>
            <DashedBorder active={currentStep >= 2} />
          </Step>

          <Step>
            <StepDiv active={currentStep === 3}>
              <StepNumber active={currentStep === 3}>3</StepNumber>
              <p>Review Transfer</p>
            </StepDiv>
          </Step>
        </StepContainer>
      )}

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="position__step">
          {currentStep === 1 && (
            <div className="send__money">
              <p className="send-head"> Send Money</p>
              <div className="send__money__form">
                <InputField
                  label={"Send"}
                  name={"youPay"}
                  value={data.youPay}
                  placeholder={""}
                  //@ts-ignore
                  onChange={handleOnChange}
                  leftIcon={switchBtn ? renderNaira() : renderDollar()}
                  rightIcon={<></>}
                  disabled={false}
                  isPassword={false}
                  error={""}
                  type="number"
                />
                <div className="rate">
                  <img
                    src="/assets/svg/toggle.svg"
                    className="toggle_money"
                    onClick={toggleBtn}
                    alt="toggle"
                  />
                  <p className="current_rate">$1 = ₦{currentRate && commaFormat(currentRate)}</p>
                </div>
                <InputField
                  label={"Recipient Gets"}
                  name={"recipient"}
                  // @ts-ignore
                  value={commaFormat((data.youPay * currentRate).toFixed(2)) ?? "0"}
                  placeholder={""}
                  //@ts-ignore
                  onChange={handleOnChange}
                  leftIcon={switchBtn ? renderDollar() : renderNaira()}
                  rightIcon={<></>}
                  disabled={false}
                  isPassword={false}
                  error={""}
                  type="text"
                  readonly={true}
                />

                <div className="fees">
                  <div className="init__header">
                    <span>Fee</span>
                    <span> $ 0</span>
                  </div>
                  <div className="init__header">
                    <span>Transfer Time</span>
                    <span>Instantly</span>
                  </div>
                </div>
                <div className="amount__paid">
                  <div className="init__header">
                    <span>Amount to Pay</span>
                    <span>$ {commaFormat(data.youPay) || "0"}</span>
                  </div>
                  <div className="init__header">
                    <span>Recipient gets</span>
                    <span>
                      ₦{commaFormat((parseFloat(data.youPay) * currentRate).toFixed(2)) || "0"}
                    </span>
                  </div>
                  <Button
                    title="Proceed"
                    onClick={handleSendMoneyOnclick}
                    className={!data.youPay ? "disabled-state" : ""}
                    // onClick={handleOnclick}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="send__money">
              <p className="send-head"> Recipient Details</p>
              <div className="send__money__form">
                <Select
                  options={banksOptions}
                  placeholder="Select Bank"
                  onChange={(e: any) =>
                    setData({
                      ...data,
                      bankName: e.option
                    })
                  }
                  styles={customStyles}
                />
                <InputField
                  label={"Account Number"}
                  name={"accountNumber"}
                  value={data.accountNumber}
                  placeholder={""}
                  //@ts-ignore
                  onChange={handleOnChange}
                  leftIcon={<></>}
                  rightIcon={<></>}
                  disabled={false}
                  isPassword={false}
                  error={""}
                  type="number"
                />
                {account && <p className="account__name">{account}</p>}
                <InputField
                  label={"Reason"}
                  name={"reason"}
                  value={data.reason}
                  placeholder={""}
                  //@ts-ignore
                  onChange={handleOnChange}
                  leftIcon={<></>}
                  rightIcon={<></>}
                  disabled={false}
                  isPassword={false}
                  error={""}
                  type="text"
                />
                <Button
                  title="Proceed"
                  onClick={handleRecipientDetailsOnclick}
                  className={!(data.bankName && account && data.reason) ? "disabled-state" : ""}
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="send__money">
              <p className="send-head">Review Transfer</p>
              <div className="send__money__form">
                <div className="amount__info">
                  <div className="bank__info">
                    <div className="init__header">
                      <span>Bank Name</span>
                         {/* @ts-ignore */}
                      <span>{data?.bankName.name}</span>
                    </div>
                    <div className="init__header">
                      <span>Account Number</span>
                      <span>{data?.accountNumber}</span>
                    </div>
                    <div className="init__header">
                      <span>Reason</span>
                      <span>{data?.reason}</span>
                    </div>
                  </div>
                  <div className="bank__info">
                    <div className="init__header">
                      <span>You are sending</span>
                      <span>${commaFormat(data.youPay)}</span>
                    </div>
                    <div className="init__header">
                      <span>Recipient gets</span>

                      <span>
                        ₦{commaFormat(((parseFloat(data.youPay) ?? 0 )* currentRate).toFixed(2))}
                      </span>
                    </div>
                    <div className="init__header">
                      <span>Transfer time</span>
                      <span>Within minutes</span>
                    </div>
                    <div className="init__header">
                      <span>Transaction fee</span>
                      <span>$ 0</span>
                    </div>
                    <div className="init__header">
                      <span>Exchange rate</span>
                      <span>$1 = ₦{currentRate && commaFormat(currentRate)}</span>
                    </div>
                  </div>
                  <div className="amount__paid">
                    <div className="init__header">
                      <span>You Pay</span>
                      <span>${data?.youPay}</span>
                    </div>
                  </div>
                  <Button title="Proceed" onClick={remitPayment} />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="successful__">
              <img src="/assets/successful.svg" alt="successful" />
              <p className="successful__text">Redirecting to BTC Pay</p>
              <Button
                title="Go to Dashboard"
                onClick={() => {
                  navigate("/dashboard");
                }}
              />
            </div>
          )}
        </div>
      )}
    </SendContainer>
  );
};

export default Send;
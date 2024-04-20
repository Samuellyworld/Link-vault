import { SendContainer } from "./send.styles";
import { Button } from "@/widgets/button";
import { useNavigate } from "react-router-dom";

const Processing = () => {

    const navigate = useNavigate();
    return (
        <SendContainer>
            <div className="position__step">
                <div className="successful__">
                    <img src="/assets/successful.svg" alt="successful" />
                    <p className="successful__text">Your transaction is processing ..</p>
                    <Button
                        title="Go to Dashboard"
                        onClick={() => {
                            navigate("/dashboard");
                        }}
                    />
                </div>
            </div>
        </SendContainer>
    )
}

export default Processing;
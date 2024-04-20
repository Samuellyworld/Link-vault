import { Button } from "@/widgets/button";
import { Main, Container } from "./footer.styles";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Main>
       <Container>
          <p className="hero">Seize the opportunity!</p>
           <h3>Unlock the power of RemitFlex</h3>
           <p className="powered">
                    powered by  <span className="voltage"> voltage cloud </span><img className="powerImg" src="/assets/lightning.png" alt="powered" />
           </p>
            <p> 
            <Button title="Get Started" onClick={() => navigate("/dashboard")} />
            </p>
       </Container>
    </Main>
  );
};

export default Footer; 
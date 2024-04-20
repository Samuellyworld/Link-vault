import { Button } from "@/widgets/button"
import { HeroContainer } from "./hero.styles";
import { useNavigate } from "react-router-dom";
import { ImageLazyLoad } from "@/widgets/image-loader";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <HeroContainer>
            <div className="hero__left">
                <h3>
                    Send money & <br className="break" /> pay bills in Africa 
                </h3>
                <div className="btnGo">
                    <Button title="Go to App" onClick={() => navigate("/dashboard")} />
                </div>
                <p className="powered">
                    powered by  <span className="voltage"> voltage cloud </span><img className="powerImg" src="/assets/lightning.png" alt="powered" />
                </p>
            </div>
            <div className="hero__right">
                <ImageLazyLoad src="/assets/right.png" alt="hero" />
            </div>
        </HeroContainer>
    );
};

export default Hero;
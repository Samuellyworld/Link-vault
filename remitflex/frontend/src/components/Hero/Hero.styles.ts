import styled from "styled-components";
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  padding:1rem 0.5rem 0 2rem;
  width: 100%;
  height: 40rem;

  @media screen and (max-width : 500px) {
    height : unset;
  }

  .bitcoin {
   margin-top: 1rem;
  }

  .hero__left {
    margin-top: -7rem;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width: 800px) {
      margin-bottom:0rem;
      width:100%;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      position:relative;
      margin-top:0rem;
    }
    h3 {
      font-size: 50px;
      white-space: nowrap;
      background: linear-gradient(45deg, #409099, #84e681);
      font-style: normal;
      font-weight: 700;
      line-height: 3.8rem;
      letter-spacing:0.25rem;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      font-family: var(--font-family-geom);

      @media screen and (max-width: 1000px) {
        font-size:45px;
        line-height:normal;
        letter-spacing:0.2rem;
        white-space: normal;
       }
      
      @media screen and (max-width: 760px) {
       font-size: 56px;
       line-height:normal;
       text-align:center;
     }

     @media screen and (max-width: 600px) {

      font-size: 45px;
      line-height:normal;
      text-align:center;
     }

     @media screen and (max-width: 400px) {
      font-size: 40px;
      line-height:normal;
      text-align:center;
      white-space: no-wrap;
     }
    
   
    }

    .btnGo{
      width:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      
    }

    button {
      display:flex;
      width: 50%;
      justify-content:center;
      padding: 0.5rem 0.2rem;
      margin-top:0.8rem;
      margin-bottom:0.1rem;

      @media screen and (max-width: 800px) {
        width: 50%;
        margin-top:1rem;
        align-items:center;
        margin : auto;
      }
    }

    .powered {
      margin-top:1.5rem;
      display: flex;
      align-items: center;
      
      @media screen and (max-width: 760px) {
        margin-top:3rem;
        justify-content:center;
        font-size: 1rem;
     }
   }

   .voltage {
    padding : 0rem 0.2rem;
    font-weight: 700;
   }
   .powerImg{
      width: 1.5rem;
   }
   .break{
    @media screen and (max-width:900px){
      display:none;
    }
  }
  .scan{
    margin-top:1rem;
    margin-bottom:1rem;
  }
    }
  }

  .hero__right {
   width:45rem;

    @media screen and (max-width: 1350px) {
      img {
        width: 40rem;
      }
    }
    @media screen and (max-width: 865px) {
      img {
        width: 35rem;
      }
    }
    @media screen and (max-width: 788px) {
      img {
        width: 31rem;
      }
    }
    @media screen and (max-width: 800px) {
      display: none;
    }
 
  }
`;
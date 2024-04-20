import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(118.21deg, #409099 4.43%, #84E681 100%);
  height : 20rem;
  border-radius : 0.5rem 0.5rem 0 0;
`;

export const Container = styled.div`
  width: 45rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  background : #000000;
  align-items : center;
  padding : 1rem;
  border-radius : 0.5rem;

  .hero, h3 {
    background: linear-gradient(118.21deg, #84E681 4.43%, #409099 100%);
    -webkit-background-clip: text; /* For Safari */
    background-clip: text;
    color: transparent;
  }

  h3 {
    font-size : 30px; 
  }

  .powered {
    margin:1.5rem 0rem;
    display: flex;
    align-items: center;
    color: #fff;
    
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

 button {
    width : 20rem;
    margin : auto;
    justify-content: center;
 }

`;

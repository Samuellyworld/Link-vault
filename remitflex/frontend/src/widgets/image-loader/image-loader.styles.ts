import styled from "styled-components";

export const ImageLoaderWrapper = styled.div`
.lazy-image-container {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  
  .loading-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  
  
    &.visible {
      opacity: 1;
    }
  }
  
  .loading-card {
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
    animation: pulse 1s infinite ease-in-out;
    -webkit-animation: pulse 1s infinite ease-in-out;
  }
  
  .lazy-image {
    display: block;
    width: 100%;
    height: auto;
    opacity: 0;
  
    &.visible {
      filter: none;
      opacity: 1;
    }
  }
  
  @keyframes pulse {
    0% {
      opacity: 0.28;
    }
    50% {
      opacity: 0.33;
    }
    100% {
      opacity: 0.35;
    }
  }
  
  @-webkit-keyframes pulse {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.3;
    }
  }
  
`
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const Spinner: () => JSX.Element = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;
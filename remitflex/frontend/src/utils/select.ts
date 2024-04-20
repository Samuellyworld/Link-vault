// airtime options
// export const airtimeOptions : string[] = ["MTN", "Airtel", "9 Mobile", "Glo"]

export const customStyles: any = {
  control: (provided: any, state: { isFocused: boolean }) => ({
    ...provided,
    paddingLeft: "25px", // add left padding to accommodate icon
    width: "100%",
    border: "1px solid black",
    fontFamily: "var(--font-family-nista)",
    fontSize: "0.8rem",
    cursor: "pointer",
    boxShadow: state.isFocused ? "none" : "none",
    "&:hover": { borderColor: state.isFocused ? "none" : "none" }
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (provided: any, state: { isFocused: boolean; isHovered: boolean }) => ({
    ...provided,
    color: state.isFocused ? "black" : "#B2B2B2",
    transform: state.isFocused || state?.isHovered ? "rotate(180deg)" : null,
    transition: "transform 0.2s ease-in-out",
    cursor: "pointer"
  }),
  singleValue: (provided: any) => ({
    ...provided,
    display: "flex", // display single value as flex
    alignItems: "center", // center contents vertically,
    color: "black",
    fontSize: "0.8rem"
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    display: "flex", // display option as flex
    alignItems: "center", // center contents vertically
    paddingLeft: "30px", // add left padding to accommodate icon
    background: state.isSelected ? "#eee" : "white", // highlight selected option
    color: "black",
    fontSize: "0.8rem",
    cursor: "pointer",
    fontFamily: "var(--font-family-nista)"
  }),
  optionLabel: (provided: any) => ({
    ...provided,
    paddingLeft: "10px" // add left padding to space out label from icon
  }),
  optionIcon: {
    width: "10px", // set width of icon
    marginRight: "10px" // add right margin to space out icon from label
  }
};

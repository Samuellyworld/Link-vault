// import relevant module
import { useState } from "react";
// import custom styles
import {
  ProductsContainer,
  ProductsTopRight,
  ProductsTop,
  ProductsTopLeft,
  ProductsMiniContainer,
  ProductsBoxesContainer,
  ProductsBox,
  ProductsBoxIcon,
  ProductsBoxText
} from "./bills.styles";
// import select;
import Select from "react-select";
// import utils objects
import { customStyles } from "@/utils/select";
import { options } from "@/utils/options";
import { services } from "@/utils/section";
import * as billAPI from "@/services/protected/billsAPI";
// use navigate
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBills } from "@/store/user/user.reducer";
import { Spinner } from "@/widgets/spinner";


const Bills = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dispatch = useDispatch();
  // use useNavigate
  const Navigate = useNavigate();
  // sort bill payments and link
  const payService = async (category: string) => {
    setIsLoading(true);
    console.log(category);
    if (category === "false") return;
    const res = await billAPI.billings.getCategories({
      country: selectedOption.value,
      category: category
    });
    if (res) {
      //@ts-ignore
      dispatch(setBills(res.data));
      setIsLoading(false);
      Navigate("/services/pay", { state: category });
    }
  };

  return (
    <ProductsContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <ProductsMiniContainer>
          <ProductsTop>
            <ProductsTopLeft>What bill do you want to pay?</ProductsTopLeft>
            <ProductsTopRight>
              <div className="SelectAndIconCont">
                <img src="/assets/svg/MapPin.svg" className="map-icon" alt="map icon" />
                <Select
                  options={options}
                  styles={customStyles}
                  defaultValue={selectedOption}
                  onChange={(e : any) => setSelectedOption(e)}
                />
              </div>
            </ProductsTopRight>
          </ProductsTop>

          <ProductsBoxesContainer>
            {services?.map((service: any, i: number) => (
              <ProductsBox notPart={false} key={i} onClick={() => payService(service?.category)}>
                <ProductsBoxIcon src={service?.image} />
                <ProductsBoxText>{service?.name}</ProductsBoxText>
              </ProductsBox>
            ))}
            <ProductsBox notPart={true}>
              <ProductsBoxText>More to come!</ProductsBoxText>
            </ProductsBox>
          </ProductsBoxesContainer>
        </ProductsMiniContainer>
      )}
    </ProductsContainer>
  );
};

export default Bills;
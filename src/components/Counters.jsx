import React, { useState } from "react";
import styled from "styled-components";
import numeral from "numeral";
import CountUp from "react-countup";

const Counters = ({ briefData, country, showGlobalData, backtoGlobalData }) => {
  const formatNumbers = (number, f) => {
    if (f === "de") return new Intl.NumberFormat("de-DE").format(number);
    // if (f === "fr") return new Intl.NumberFormat("us-US").format(number);
  };

  console.log("counters", showGlobalData);
  // if (!data.todayDeaths) {
  //   return `loading...`;
  // }

  // const [global, setGlobal] = useState(true);

  // const backToGlobal = () => {
  //   setGlobal((global) => !global);
  // };

  return (
    <SectionWrapper>
      <SectionTitle>
        {country && !showGlobalData ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // border: "1px solid red",
            }}
          >
            <FlagImg src={country.countryInfo.flag} />
            <div style={{ marginLeft: ".75vw" }}>{country.country}</div>
            <SectionTitleLink onClick={backtoGlobalData}>
              back to global data
            </SectionTitleLink>
          </div>
        ) : (
          "Global data"
        )}
      </SectionTitle>

      <CountersWrapper>
        <Counter theme="infected">
          <IconContainer theme="infected">
            <i className="fas fa-viruses" style={iconStyle}></i>
          </IconContainer>
          <BriefContainer theme="infected">
            <Label>infected</Label>
            <TodayWrapper>
              +{" "}
              {country && !showGlobalData
                ? formatNumbers(country.todayCases, "de")
                : formatNumbers(briefData.todayCases, "de")}
              {/* <CountUp
                end={country ? country.todayCases : data.todayCases}
                start={0}
                duration={5}
                separator={"."}
              ></CountUp>{" "} */}
            </TodayWrapper>
            <TotalWrapper>
              {country && !showGlobalData
                ? formatNumbers(country.cases, "de")
                : // numeral(country.cases).format("0,0a")
                  formatNumbers(briefData.confirmed, "de")}
              {/* numeral(data.confirmed).format("0,0a") */}
              {/* {country
              ? formatNumbers(country.cases, "de")
              : formatNumbers(data.confirmed, "de")} */}
            </TotalWrapper>
          </BriefContainer>
        </Counter>
        <Counter theme="severe">
          <IconContainer theme="severe">
            <i className="fas fa-lungs-virus" style={iconStyle}></i>
          </IconContainer>
          <BriefContainer theme="severe">
            <Label>severe</Label>
            <TodayWrapper>
              +{" "}
              {country && !showGlobalData
                ? formatNumbers(country.critical, "de")
                : formatNumbers(briefData.critical, "de")}
              {/* <CountUp
                start={0}
                end={country ? country.critical : data.critical}
                duration={5}
                separator={"."}
              ></CountUp> */}
            </TodayWrapper>
            <TotalWrapper>
              {/* {country
              ? numeral(country.cases).format("0,0a")
              : numeral(data.confirmed).format("0,0a")} */}
              {country && !showGlobalData
                ? formatNumbers(country.critical, "de")
                : formatNumbers(briefData.critical, "de")}
            </TotalWrapper>
          </BriefContainer>
        </Counter>
        <Counter theme="death">
          <IconContainer theme="death">
            <i className="fas fa-skull-crossbones" style={iconStyle}></i>
          </IconContainer>
          <BriefContainer theme="death">
            <Label>deaths</Label>
            <TodayWrapper>
              +{" "}
              {country && !showGlobalData
                ? formatNumbers(country.todayDeaths, "de")
                : formatNumbers(briefData.todayDeaths, "de")}
              {/* <CountUp
                end={country ? country.todayDeaths : data.todayDeaths}
                start={0}
                duration={5}
                separator={"."}
              ></CountUp> */}
            </TodayWrapper>
            <TotalWrapper>
              {/* {country
              ? numeral(country.cases).format("0,0a")
              : numeral(data.confirmed).format("0,0a")} */}
              {country && !showGlobalData
                ? formatNumbers(country.deaths, "de")
                : formatNumbers(briefData.deaths, "de")}
            </TotalWrapper>
          </BriefContainer>
        </Counter>
        <Counter theme="recovered">
          <IconContainer theme="recovered">
            <i className="fas fa-virus-slash" style={iconStyle}></i>
          </IconContainer>
          <BriefContainer theme="recovered">
            <Label>recovered</Label>
            <TodayWrapper>
              +{" "}
              {country && !showGlobalData
                ? formatNumbers(country.todayRecovered, "de")
                : formatNumbers(briefData.todayRecovered, "de")}
              {/* <CountUp
                end={country ? country.todayRecovered : data.todayRecovered}
                start={0}
                duration={5}
                separator={"."}
              ></CountUp> */}
            </TodayWrapper>
            <TotalWrapper>
              {/* {country
              ? numeral(country.cases).format("0,0a")
              : numeral(data.confirmed).format("0,0a")} */}
              {country && !showGlobalData
                ? formatNumbers(country.recovered, "de")
                : formatNumbers(briefData.recovered, "de")}
            </TotalWrapper>
          </BriefContainer>
        </Counter>
        <Counter theme="vaccinated">
          <IconContainer theme="vaccinated">
            <i className="fas fa-syringe" style={iconStyle}></i>
          </IconContainer>
          <BriefContainer theme="vaccinated">
            <Label>vaccinated</Label>
          </BriefContainer>
        </Counter>
      </CountersWrapper>
    </SectionWrapper>
  );
};
export default Counters;

const theme = {
  infected: {
    default: "#fce903",
  },

  severe: {
    default: "#f44336",
  },
  death: {
    default: "#A19C9C",
    // "#A19C9C",
  },
  recovered: {
    default: "#2196f3",
  },
  vaccinated: {
    default: "green",
  },
};

const SectionWrapper = styled.div`
  grid-row: 2;
  /* height: 18vh; */
  /* margin-top: 2vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid yellow;
`;
//----------------------------------------------------------------
const SectionTitle = styled.div`
  font-size: 1rem;
  color: white;
  padding-left: 1.5vw;
  text-transform: uppercase;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-bottom: 1vh; */
  position: relative;
  border: 1px solid red;
`;

const SectionTitleLink = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 5.5vw;
  /* border: 1px solid red; */
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 34%;
    right: 0;
    background-color: white;
  }
  &:hover {
    cursor: pointer;
  }
`;

const FlagImg = styled.img`
  height: 6vh;
  width: 5vw;
  border-radius: 2px;
`;
//----------------------------------------------------------------
const CountersWrapper = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid pink;
`;
//----------------------------------------------------------------
const Counter = styled.div`
  border: 1px solid lightblue;
  width: 19%;
  height: 100%;
  display: grid;
  grid-template-columns: 35% 7.5% 1fr;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: #eeee;
  border-radius: 3px;
  background-color: #35353535;
  position: relative;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    /* right: 0;
    top: 0; */
    width: 60%;
    height: 1px;
    background-color: transparent;
    /* border-bottom-left-radius: 3px; */
    border-bottom-right-radius: 3px;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    &::after {
      background-color: ${(props) => theme[props.theme].default};
    }
  }
  /* @media (max-width: 800px) {
    width: 30%;
    height: 100%;
  } */
`;

const IconContainer = styled.div`
  grid-column: 1;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => theme[props.theme].default};
  border: 1px solid blue;
`;

const iconStyle = {
  fontSize: "1.6rem",
  color: "white",
};

const BriefContainer = styled.div`
  grid-column: 3;
  padding: "0";
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  /* border: 1px solid ${(props) => theme[props.theme].default}; */
`;

const Label = styled.div`
  font-size: 0.8rem;
  text-transform: capitalize;
  margin-top: -0.75vh;
  /* border: 1px solid red; */
  font-weight: 700;
`;

const TotalWrapper = styled.div`
  /* border: 1px solid red; */
  padding: 0;
  margin: 0;
  font-size: 0.85rem;
`;
const TodayWrapper = styled.div`
  /* border: 1px solid red; */
  padding: 0;
  margin: 0;
  font-size: 0.85rem;
  &:hover {
    animation: bleep 1s infinite;
  }
`;

//----------------------------------------------------------------
const Title = styled.div`
  grid-row: 2;
  align-self: center;
  position: relative;
  &::after {
    content: "";
    width: 80%;
    height: 1px;
    background-color: lightgray;
    position: absolute;
    bottom: -1.25vh;
    left: 10%;
  }
`;
const TitleSpan = styled.span`
  color: rgb(50, 50, 50);
  text-transform: uppercase;
  font-weight: 800;
`;

//----------------------------------------------------------------

// const BriefLoader = styled.div`
//   width: 100%;
//   text-align: center;
//   text-transform: uppercase;
//   font-style: italic;
//   display: flex;
//   justify-content: center;
// `;
// const Loader = styled.div`
//   height: 20px;
//   width: 20px;
//   border-top: 2px solid blue;
//   background-color: transparent;
// `;

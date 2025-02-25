import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Link from "next/link";
import SearchResults from "./SearchResults";
import SearchbarDropdown from "./SearchbarDropdown";
import { GiCoinsPile } from "react-icons/gi";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [propTypeVal, setPropTypeVal] = useState("");
  const [bussTypeVal, setBussTypeVal] = useState("");
  const [priceVal, setPriceVal] = useState(""); // default value
  const [startPriceVal, setStartPriceVal] = useState("0");
  const [endPriceVal, setEndPriceVal] = useState("");
  const [areaVal, setAreaVal] = useState("");
  const [results, setResults] = useState([]);


  const handleSearchBtn = (value) => {
    // call function
    getSearch();
  };

  const handleOptionChange = (e) => {
    if (e.target.id === "option1") {
      setBussTypeVal(e.target.value);
    } else if (e.target.id === "option2") {
      setPropTypeVal(e.target.value);
    } else if (e.target.id === "option3") {
      setStartPriceVal(e.target.value);
    } else if (e.target.id === "option4") {
      console.log("priceVal", e.target.value);
      setPriceVal(e.target.value);
      // split the start and end price and set them
      const price = e.target.value.split("--");
      // split Rs.  also from the price
      price[0] = price[0].split("Rs. ");
      setStartPriceVal(price[0][1]);
      price[1] = price[1].split("Rs. ");
      setEndPriceVal(price[1][1]);
      console.log("startPriceVal", startPriceVal);
      console.log("endPriceVal", endPriceVal);
    } else if (e.target.id === "option5") {
      setAreaVal(e.target.value);
    }
  };

  console.log(input, propTypeVal, bussTypeVal, startPriceVal, endPriceVal, areaVal);



  const getData = async (value) => {
    try {
      console.log("value", value);
      const response = await axios.get(
        `http://localhost:3000/api/properties/suggest?q=${value}&propType=${propTypeVal}&bussType=${bussTypeVal}&startPrice=${startPriceVal}&endPrice=${endPriceVal}&area=${areaVal}`
        // type word in search bar and see the result
      );
      
      setResults(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    getData(value);
  };

  const clearInput = () => {
    console.log("clearing input");
    setInput("");
    setResults([]);
  };

  return (
    <section className="bg-[#0D0D0D] py-16 pb-20 ">
      <Typography className="text-[#FFFFFF] lg:mx-0 mx-14  Anton text-center md:text-[40px] text-[32px] lg:font-normal md:font-extralight	font-extralight	 md:leading-[60.13px] leading-[48.1px]">
        SEARCH YOUR
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#2934FE] to-[#BF32EC]">
          {" "}
          DIGITAL PROPERTY
        </span>
      </Typography>

      <div className=" mx-[24px] px-2 lg:mt-12 mt-8">
        <div className="flex justify-between items-center lg:gap-3 md:text-sm text-[12px] ">
          <div className="bg-[#3A0242] flex w-full flex-row items-center gap-2 rounded-[8px]	">
            <div className="relative grid h-full w-full min-w-[200px] p-3 ">
              <input
                rows="1"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Type your house, City/ Village"
                className=" peer h-full  min-h-full w-full resize-y rounded-[8px] !border-0  border-t-transparent bg-transparent p-0 Satoshi  leading-[27px] lg:leading-[18.9px] text-[14px] font-normal text-white outline outline-0 transition-all placeholder:text-[#FFFFFF] placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-[#FFFFFF]-200 focus:border-2 focus:border-gray-900 focus:border-transparent focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[14px] leading-[27px] lg:leading-[18.9px] font-normal  text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[14px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
            <div>
              <button
                className="relative  h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-[14px] font-normal Satoshi text-center align-middle Raleway leading-[27px] lg:leading-[18.9px]   uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={clearInput}
              >
                <XMarkIcon className="h-8 w-6 text-white" />
              </button>
            </div>
          </div>

          {/* how to give href with queries */}
          {/* <Link   href={`/search?q=` + input  + `&bussType=` + bussTypeVal + `&lowPrice=` + startPriceVal + `&highPrice=` + endPriceVal + `&propType=` + propTypeVal + `&area=` + areaVal} > */}


          <Link
        href={`/search?q=${encodeURIComponent(input)}&lowPrice=${encodeURIComponent(startPriceVal)}&highPrice=${encodeURIComponent(endPriceVal)}&propType=${encodeURIComponent(propTypeVal)}`}
      >
            <button className="hidden lg:block bg-gradient-to-r from-[#2934FE] to-[#BF32EC] Satoshi font-normal	 rounded-[46px] text-[#FFFFFF]  text-[20px] leading-[27px] lg:leading-[18.9px]	 md:px-24 px-14  lg:py-[17px] py-3">
              Search
            </button>
          </Link>
        </div>
        {results.length > 0 && <SearchResults results={results} />}
        <div className="mt-3">
          <div className=" flex justify-between w-full lg:flex-row flex-col lg:gap-2.5 gap-[14px] Satoshi font-normal text-sm">
            <select
              onChange={handleOptionChange}
              value={bussTypeVal}
              id="option1"
              className="!border-t-[#3A0242] focus:!border-t-[#3A0242] py-3  px-1 bg-[#3A0242] text-white w-full rounded-lg border-none"
              menuprops={{
                className:
                  "p-2 bg-[#3A0242] border-none Satoshi font-normal text-[14px]",
              }}
            >
              <option
                value=""
                className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white"
              >Type of Bussniss</option>
              <option
                value="individual"
                className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white"
              >
                Individual
              </option>
              <option
                value="business"
                className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white"
              >
                Business
              </option>
            </select>
            <select
              onChange={handleOptionChange}
              value={propTypeVal}
              id="option2"
              className="!border-t-[#3A0242] focus:!border-t-[#3A0242] py-3  px-1 bg-[#3A0242] text-white w-full rounded-lg border-none"
              menuprops={{
                className:
                  "p-2 bg-[#3A0242] border-none Satoshi font-normal text-[14px]",
              }}
            >
              <option
                value=""
                className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white text-[14px]"
              >Type of Property</option>
              <option
                value="house"
                className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white text-[14px]"
              >
                House
              </option>
              <option
                value="rent"
                className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white text-[14px]"
              >
                Rent
              </option>
              <option
                value="lease"
                className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white text-[14px]"
              >
                Lease
              </option>
            </select>
            
            <select
              onChange={handleOptionChange}
              value={priceVal}
              id="option4"
              className="!border-t-[#3A0242] focus:!border-t-[#3A0242] py-3  px-1 bg-[#3A0242] text-white w-full rounded-lg border-none"
              menuprops={{
                className:
                  "p-2 bg-[#3A0242] border-none Satoshi font-normal  text-[14px]",
              }}
            >
              <option
                value=""
                className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white"
              >Price</option>
              <option
                value="Rs. 20000--Rs. 40000"
                className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white"
              >
                Rs. 20000 -- Rs. 40,000
              </option>
              <option
                value="Rs. 20000--Rs. 30000"
                className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white"
              >
                Rs. 20000 -- Rs. 30,000
              </option>
              <option
                value="Rs. 10000--Rs. 100000"
                className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white"
              >
                Rs. 10000 -- Rs. 10,0000
              </option>
            </select>

            <select
              onChange={handleOptionChange}
              value={areaVal}
              id="option5"
              className="!border-t-[#3A0242] focus:!border-t-[#3A0242] py-3  px-1 bg-[#3A0242] text-white w-full rounded-lg border-none"
              menuprops={{
                className:
                  "p-2 bg-[#3A0242] border-none Satoshi font-normal text-[14px]",
              }}
            >
              <option
                value=""
                className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white"
              >Area</option>
              <option
                value="600"
                className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white"
              >
                600 sq.ft
              </option>
              <option
                value="800"
                className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white"
              >
                800 sq.ft
              </option>
              <option
                value="1000"
                className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white"
              >
                1000 sq.ft
              </option>
            </select>
           

              
            {/* <SearchbarDropdown title="Area" o1="4000 sq" o2="6000 sq" /> */}
          </div>
        </div>
        <button
          onClick={handleSearchBtn}
          className="w-full mt-[16px] lg:hidden block bg-gradient-to-r from-[#2934FE] to-[#BF32EC] Satoshi font-normal	rounded-[46px] text-[#FFFFFF]  text-[20px] leading-[27px] lg:leading-[18.9px] py-2.5"
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Searchbar;

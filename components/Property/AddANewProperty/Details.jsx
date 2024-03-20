import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import InputBox from "@/components/Input/InputBox";
import Stepper from "./Stepper";
import TextAreaInputBox from "@/components/Input/TextAreaInputBox";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import HeaderTitle from "../HeaderTitle";
import ToggleButton from "@/components/Buttons/ToggleButton";

export default function Detials({ incrementStep, decrementStep, activeStep }) {
  const [propName, setPropName] = useState();
  const [ownerName, setOwnerName] = useState();
  const [list, setListType] = useState(true);
  const [sale, setSale] = useState("sale");
  const [price, setPrice] = useState();
  const [address, setAddress] = useState();
  const [pincode, setPincode] = useState();
  const [details, setDetails] = useState();
  const [premium, setPremium] = useState(true);
  const [propType, setPropType] = useState("house");
  const [busType, setBusType] = useState("individual");
  const [area, setArea] = useState();
  const [bhk, setBhk] = useState();
  const [bathroom, setBathroom] = useState();
  const [carParking, setCarParking] = useState();
  const [facing, setFacing] = useState();
  const [floors, setFloors] = useState();

  useEffect(() => {
    const item = localStorage.getItem("key");
    localStorage.setItem("propName", propName);
    localStorage.setItem("ownerName", ownerName);
    localStorage.setItem("listType", list);
    localStorage.setItem("sale", sale);
    localStorage.setItem("price", price);
    localStorage.setItem("address", address);
    localStorage.setItem("pincode", pincode);
    localStorage.setItem("details", details);
    localStorage.setItem("premium", premium);
    localStorage.setItem("propType", propType);
    localStorage.setItem("busType", busType);
    localStorage.setItem("area", area);
    localStorage.setItem("bhk", bhk);
    localStorage.setItem("bathroom", bathroom);
    localStorage.setItem("carParking", carParking);
    localStorage.setItem("facing", facing);
    localStorage.setItem("floors", floors);
  }, [
    propName,
    ownerName,
    list,
    sale,
    price,
    address,
    pincode,
    details,
    premium,
    propType,
    busType,
    area,
    bhk,
    bathroom,
    carParking,
    facing,
    floors,
  ]);

  const handlePremiumCheckboxChange = (e) => {
    setPremium(e.target.checked);
  };

  const handleCancel = () => {
    // Clear all local storage data
    localStorage.clear();
    setPropName("");
    setOwnerName("");
    setListType(false);
    setSale("");
    setPrice("");
    setAddress("");
    setPincode("");
    setDetails("");
    setPremium(false);
    setArea("");
    setBhk("");
    setBathroom("");
    setCarParking("");
    setFacing("");
    setFloors("");
    setPropType("");
    setBusType("");
};

  return (
    <div className="bg-[#160019] flex min-h-screen flex-col items-center justify-between p-24 sm:p-8 md:p-12 lg:p-16 gap-1 sm:gap-8 mt-[100px]">
      <div className="text-center items-center justify-center">
        <HeaderTitle />
      </div>
      <div className="my-5">
        <Stepper
          activeStep={activeStep}
          className={
            "md:w-[30rem] lg:w-[30rem] xl:w-[30rem] 2xl:w-[30rem] w-[15rem]"
          }
        />
      </div>
      <div className="w-full max-w-[30rem]">
        <label className="text-white">Property Name</label>
        <input
          type="text"
          value={propName}
          onChange={(e) => setPropName(e.target.value)}
          className="w-full p-2 border rounded bg-transparent text-white mt-1"
          placeholder="Property Name"
        />
      </div>
      <div className="w-full max-w-[30rem]">
        <label className="text-white">Owner Name</label>
        <input
          type="text"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          className="w-full max-w-[30rem] p-2 border rounded bg-transparent text-white mt-1"
          placeholder="Owner Name"
        />
      </div>

      {/*<div className="w-full max-w-[30rem]">
        <label className="">Listing Type</label>
        <select
          value={sale}
          onChange={(e) => setSale(e.target.value)}
          className="w-full p-2 border rounded bg-transparent text-white mt-1"
        >
          <option value="sale" className="text-black">
            Sale
          </option>
          <option value="rent" className="text-black">
            Rent
          </option>
        </select>
      </div>*/}

      <div className="w-full max-w-[30rem]">
        <label className="text-white">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded bg-transparent text-white mt-1"
          placeholder="Price"
        />
      </div>

      <div className="w-full max-w-[30rem]">
        <label className="text-white">Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full max-w-[30rem] p-2 border rounded bg-transparent text-white mt-1"
          placeholder="Address"
        />
      </div>
      <div className="w-full max-w-[30rem]">
        <label className="text-white">Pincode</label>
        <input
        type="number"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        className="w-full max-w-[30rem] p-2 border rounded bg-transparent text-white mt-1"
        placeholder="Pincode"
      />
      </div>

      <div className="w-full max-w-[30rem]">
        <label className="">Listing Type</label>
        <select
          value={sale}
          onChange={(e) => setSale(e.target.value)}
          className="w-full p-2 border rounded bg-transparent text-white mt-1"
        >
          <option value="sale" className="text-black">
            Sale
          </option>
          <option value="rent" className="text-black">
            Rent
          </option>
          <option value="showcase" className="text-black">
            Showcase
          </option>
          <option value="private" className="text-black">
            Private
          </option>
          <option value="lease" className="text-black">
            Lease
          </option>
        </select>
      </div>

      <div className="w-full max-w-[30rem]">
        <label className="">Property Type</label>
        <select
          value={propType}
          onChange={(e) => setPropType(e.target.value)}
          className="w-full p-2 border rounded bg-transparent text-white mt-1"
        >
          <option value="investment" className="text-black">
            Investment
          </option>
          <option value="residential" className="text-black">
            Residential
          </option>
        </select>
      </div>

      <div className="w-full max-w-[30rem]">
        <label className="">Business Type</label>
        <select
          value={busType}
          onChange={(e) => setBusType(e.target.value)}
          className="w-full p-2 border rounded bg-transparent text-white mt-1"
        >
          <option value="individual" className="text-black">
            Individual
          </option>
          <option value="business" className="text-black">
            Business
          </option>
        </select>
      </div>

      <div className="w-full max-w-[30rem]">
        <label className="text-white">Area</label>
        <input
        type="number"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        className="w-full max-w-[30rem] p-2 border rounded bg-transparent text-white mt-1"
        placeholder="Pincode"
      />
      </div>

      <div className="w-full max-w-[30rem]">
        <label className="text-white">Bhk</label>
        <input
        type="number"
        value={bhk}
        onChange={(e) => setBhk(e.target.value)}
        className="w-full max-w-[30rem] p-2 border rounded bg-transparent text-white mt-1"
        placeholder="Bhk"
      />
      </div>

      <div className="w-full max-w-[30rem]">
        <label className="text-white">Bathroom</label>
        <input
        type="number"
        value={bathroom}
        onChange={(e) => setBathroom(e.target.value)}
        className="w-full max-w-[30rem] p-2 border rounded bg-transparent text-white mt-1"
        placeholder="Bathroom"
      />
      </div>

      <div className="w-full max-w-[30rem]">
        <label className="text-white">Car Parking</label>
        <input
        type="number"
        value={carParking}
        onChange={(e) => setCarParking(e.target.value)}
        className="w-full max-w-[30rem] p-2 border rounded bg-transparent text-white mt-1"
        placeholder="Enter number of car parking"
      />
      </div>

      <div className="w-full max-w-[30rem]">
        <label className="">Facing</label>
        <select
          value={facing}
          onChange={(e) => setFacing(e.target.value)}
          className="w-full p-2 border rounded bg-transparent text-white mt-1"
        >
          <option value="sale" className="text-black">
            East
          </option>
          <option value="rent" className="text-black">
            West
          </option>
          <option value="rent" className="text-black">
            South
          </option>
          <option value="rent" className="text-black">
            North
          </option>
        </select>
      </div>

      <div className="w-full max-w-[30rem]">
        <label className="text-white">Number of Floors</label>
        <input
        type="number"
        value={floors}
        onChange={(e) => setFloors(e.target.value)}
        className="w-full max-w-[30rem] p-2 border rounded bg-transparent text-white mt-1"
        placeholder="Enter number of floors"
      />
      </div>

      <div className="w-full max-w-[30rem]">
        <label className="text-white">Details</label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full max-w-[30rem] p-2 border rounded bg-transparent text-white mt-1"
          placeholder="Details"
        />
      </div>


      <div className="flex items-center w-full max-w-[30rem]">
        <input
          type="checkbox"
          checked={premium}
          onChange={handlePremiumCheckboxChange}
        />
        <p className="text-white text-sm ml-2">Mark Property as Premium</p>
      </div>

      <div className="justify-end flex flex-row gap-4 w-full max-w-[30rem] ">
        <Button onClick={handleCancel} className="bg-transparent">
          Cancel
        </Button>
        <Button
          onClick={() => incrementStep()}
          className={
            "text-white bg-[#160019] rounded-[47px] border-[#FD93C6] border lg:px-12"
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
}

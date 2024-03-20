import { NavigationBar } from "@/components/Admin/Navbar";
import React, { useEffect, useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import axios from "axios";

const AddService = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState();
  const [fileInput, setFileInput] = useState("");
  const [source, setSource] = useState("/assets/image.png");

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const [token, setToken] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(
        document.cookie
          .split(";")
          .find((c) => c.includes("token"))
          .split("=")[1]
      );
    }
  }, []);

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSource(reader.result);
    };
  };

  const handleFileSubmit = async (e) => {
    console.log("Submitting the form");
    e.preventDefault();

    if (!source || !title || !description || !estimatedPrice) return;
    
    // Prepare the data
    const formData = new FormData();
    console.log("Form data:",  description, estimatedPrice);
    formData.append("file", source);
    console.log(source);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("estimatedPrice", estimatedPrice);


    const data ={
      name:title,
      description: description,
      price: estimatedPrice,
      picture: source
    }

    console.log(data);

    // console.log("Form data:", formData);

    try {
      // Make a POST request to your API endpoint
      const response = await axios.post("http://localhost:3000/api/requests/services", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Service added successfully:", response.data);
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  const handleRemoveImage = () => {
    setSource(null);
  };

  


  return (
    <>
      <div className="mt-[100px] container mx-auto px-4">
        <div className="">
          <Typography
            variant="h1"
            className="text-[#FFFFFF] Anton text-center lg:text-[60px] md:text-[40px] text-[26px] lg:font-normal md:font-extralight	font-extralight	 md:leading-[88.8px] leading-3"
          >
            ADD A NEW{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2934FE] to-[#BF32EC]">
              SERVICE
            </span>
          </Typography>
        </div>
        <div className="flex flex-row justify-center">
          <form className="mt-8 mb-2 lg:w-3/6 w-full mx-3">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="white" className="-mb-3">
                Add Tittle
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className=" !border-t-white-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mb-1 flex flex-col gap-6 justify-center">
              <div class="pt-4">
                <label class="mb-4 block  font-semibold text-[#FFFFFF]">
                  Upload File
                </label>

                <div class="">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    class="sr-only"
                    onChange={handleFileInput}
                    value={fileInput}
                  />
                  <label
                    for="file"
                    class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                  >
                    <div>
                      <span class="mb-3 block text-[14px]  font-normal text-[#FFFFFF] leading-[17.64px]">
                        Drag and drop your files anywhere or
                      </span>
                      {/* <span class="mb-2 block text-base font-medium text-[#FFF]">
                        Or
                      </span> */}
                      <span class="inline-flex border border-[#FB3C98] text-[#FB3C98] py-2 px-5 rounded-[47px] bg-[white]">
                        Upload a file
                      </span>
                    </div>
                  </label>
                </div>
              </div>
              <div class="flex flex-row justify-center">
              {source &&(<div className="relative w-56 h-54 border">
                   
                    <img
                      className="w-52 h-52 rounded-lg"
                      src={source}
                      alt="image"
                    />
                  
                  <div onClick={handleRemoveImage} className="absolute top-1 right-1 border px-2 py-[2px] border-[#FB3C98] text-[#FB3C98] bg-white  cursor-pointer rounded-[100%]">
                    X
                  </div>
                </div>)}
              </div>
            </div>
            <div className="mb-1 flex flex-col gap-4 mt-4">
              <Typography variant="h6" color="white" className="mb-1">
                Add Description
              </Typography>
              <textarea
                className="resize rounded-md border-white border focus:!border-t-gray-900 bg-transparent items-center p-2"
                placeholder="Describle "
                value={description}
  onChange={(e) => setDescription(e.target.value)}
                style={{ height: "200px", width: "100%" }}
              ></textarea>
            </div>
            <div className="mb-1 flex flex-col gap-6 mt-6">
              <Typography variant="h6" color="white" className="-mb-3">
              Add Estimated Price
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                value={estimatedPrice}
  onChange={(e) => setEstimatedPrice(e.target.value)}
                className=" !border-t-white-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex flex-row justify-between my-10">
              <div></div>
              <div></div>
              <Button
          className="px-12 bg-white text-black"
          onClick={handleFileSubmit} // Call the submit function when the button is clicked
        >Add Service</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddService;

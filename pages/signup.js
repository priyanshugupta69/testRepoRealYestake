import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {  useRouter } from "next/router";
import { redirect } from "next/navigation";

export default function SignUp() {
  const router = useRouter()
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [pincode, setPincode] = useState();
  const [dob, setDob] = useState();
  const [username, setUsername] = useState();
  const [selectedOption, setSelectedOption] = useState("individual");

  const handleChange = (e) => {
    if (e.target.id === "firstname") {
      setFirstName(e.target.value);
    } else if (e.target.id === "username") {
      setUsername(e.target.value);
    } else if (e.target.id === "lastname") {
      setLastName(e.target.value);
    } else if (e.target.id === "phone") {
      setPhone(e.target.value);
    } else if (e.target.id === "dob") {
      setDob(e.target.value);
    } else if (e.target.id === "address") {
      setAddress(e.target.value);
    } else if (e.target.id === "pincode") {
      setPincode(e.target.value);
    } else if (e.target.id === "option") {
      setSelectedOption(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    console.log("submit");
    e.preventDefault();
    const data = {
      userName: username,
      firstName: firstName,
      lastName: lastName,
      phoneNo: phone,
      email: email,
      password:  password,
      dateOfBirth: dob,
      address: address,
      pincode: pincode,
      cusType: selectedOption,
    };
    const response = await axios.post(
      "http://localhost:3000/api/signup",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Success:", response);

    console.log(response.success);
    setEmail("");
    setPassword("");
    setFirstName("");
    if(response.status === 201) {
      toast.success("Signup Successful!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push(`/verify?email=${email}`);
      }, 1000);
    }
    else{
      toast.error("Signup Failed!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row flex-col mt-14 items-center">
          <div className="ml-14">
            <Image
              src="/assets/signup.png"
              width={300}
              height={300}
              alt="sign-up Iamge"
              priority={true}
            />
          </div>
          <div className="ml-16">
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" color="white">
                Register
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to register.
              </Typography>
              <form className="mt-4  mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-4">
                  <Typography variant="h6" color="white" className="-mb-3">
                    Username
                  </Typography>
                  <Input
                    type="text" placeholder="Username"
                    color="white"
                    onChange={handleChange}
                    value={username}
                    id="username"
                    size="lg"
                    className=" !border-t-white focus:!border-t-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="white" className="-mb-3">
                    firstName Name
                  </Typography>
                  <Input
                    type="text"
                    color="white"
                    onChange={handleChange}
                    value={firstName}
                    id="firstname"
                    size="lg"
                    placeholder="ABC"
                    className=" !border-t-white focus:!border-t-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="white" className="-mb-3">
                    Last Name
                  </Typography>
                  <Input
                    type="text"
                    color="white"
                    onChange={handleChange}
                    value={lastName}
                    id="lastname"
                    size="lg"
                    placeholder="XYZ"
                    className=" !border-t-white focus:!border-t-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="white" className="-mb-3">
                    Phone Number
                  </Typography>
                  <Input
                    onChange={handleChange}
                    value={phone}
                    color="white"
                    id="phone"
                    size="lg"
                    type="phone"
                    placeholder="xxx xxx xxxx"
                    className=" !border-t-white focus:!border-t-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="white" className="-mb-3">
                    Date of Birth
                  </Typography>
                  <Input
                    onChange={handleChange}
                    value={dob}
                    color="white"
                    id="dob"
                    size="lg"
                    type="date"
                    placeholder="dd/mm/yyyy"
                    className=" !border-t-white focus:!border-t-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="white" className="-mb-3">
                    Address
                  </Typography>
                  <Input
                    onChange={handleChange}
                    color="white"
                    value={address}
                    id="address"
                    size="lg"
                    type="text"
                    placeholder="Street, City, State, Country"
                    className=" !border-t-white focus:!border-t-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="white" className="-mb-3">
                    Pincode
                  </Typography>
                  <Input
                    onChange={handleChange}
                    color="white"
                    value={pincode}
                    id="pincode"
                    size="lg"
                    type="pincode"
                    placeholder="xxxxxx"
                    className=" !border-t-white focus:!border-t-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {/* select one out of two options */}
                  <Typography variant="h6" color="white" className="-mb-3">
                    Customer Type
                  </Typography>
                  <select
                    onChange={handleChange}
                    value={selectedOption}
                    id="option"
                    className="!border-t-white focus:!border-t-white py-2  px-1 bg-transparent text-white w-full rounded-lg border"
                    menuProps={{
                      className: "p-2 bg-[#3A0242] border-none Satoshi font-normal text-[14px]"
                    }}
                  >
                    <option value="individual" className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white">Individual</option>
                    <option value="business"  className="bg-[#3A0242] rounded-none hover:bg-[#3A0242] text-white">Business</option>
                  </select>
                  <Typography variant="h6" color="white" className="-mb-3">
                    Your Email
                  </Typography>
                  <Input
                    onChange={handleChange}
                    value={email}
                    type="email"
                    id="email"
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-white focus:!border-t-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />

                  <Typography variant="h6" color="white" className="-mb-3">
                    Password
                  </Typography>
                  <Input
                    onChange={handleChange}
                    value={password}
                    id="password"
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-white focus:!border-t-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                
                <Button
                  onClick={handleSubmit}
                  className="mt-4 normal-case text-[#FFFFFF] rounded-[47px] bg-gradient-to-r from-[#2934FE] to-[#BF32EC]"
                  fullWidth
                >
                  Sign Up
                </Button>
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  Already have an account?{" "}
                  <a href="#" className="font-medium text-white">
                    Login
                  </a>
                </Typography>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

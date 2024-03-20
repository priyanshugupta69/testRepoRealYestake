import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ForgotPassword = () => {
  
  

  const { push } = useRouter();
  const [otp, setOtp] = useState();

  const handleChange = (e) => {
    if (e.target.id === "otp") {
      setOtp(e.target.value);
    } 
  };




  const handleSubmit = async (e) => {
    console.log("submit");
    console.log(otp, email);
    // console all data
    e.preventDefault();
    const data = {
      otp: otp,
      email: email,
    };
    const response = await axios.post("http://localhost:3000/api/forgot-password", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      toast.success("Resent Otp!", {
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
        // reload the page
        push("/login");
      }, 1000);
    } else {
      toast.error("Email not found!", {
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
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#160019] py-2">
        <div className="relative bg-transparent px-6 pt-8 pb-0 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-8">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Enter your Email Address</p>
              </div>
              {/* <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email {email}</p>
              </div> */}
            </div>

            <div>
              <form action="" method="post" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-6 ">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-full h-12 ">
                      <input
                      onChange={handleChange}
                      value={otp}
                      type="text"
                      id="otp"
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border text-white border-white text-lg bg-transparent focus:bg-transparent focus:ring-1 ring-blue-700"
                        placeholder="Enter Email Address"
                      />
                    </div>
                  </div>
                  

                  <div className="flex flex-col space-y-5">
                    <div className="flex justify-center">
                    <div className="items-center">
                      <div></div>
                      <Button  type="submit" className="normal-case text-[#FFFFFF] rounded-[47px]   bg-gradient-to-r from-[#2934FE] to-[#BF32EC] px-16 text-[12px]"  >Forgot Password</Button>
                      <div></div>
                    </div>

                    </div>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

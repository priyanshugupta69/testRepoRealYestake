import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import Image from "next/image";
  import Link from "next/link";
  import { useRouter } from "next/router";
  import { useState } from "react";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import axios from "axios";
  
  export default function Login() {
      // const router = useRouter();
      const { push } = useRouter();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const handleChange = (e) => {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      } else if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        emailUsername: email,
        password: password,
      };
      try{
        const response = await axios.post(
          "http://localhost:3000/api/login",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setEmail("");
        setPassword("");
        console.log(response);
        if(response.status === 200) {
          document.cookie = `token=${response.data.token}; expires=${new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7).toUTCString(
            )}; path=/; sameSite=strict;`;
          // add role to cookie
          document.cookie = `role=${response.data.user.role}; expires=${new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7).toUTCString(
            )}; path=/; sameSite=strict;`;
          
    
          toast.success("Login Successful!", {
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
              push('/admin');
          }, 1000);
        }
        else{
          const res = response.data;
          toast.error("Login failed!", {
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
      }
      catch(error){
  
        console.log(error);
        let res = error.response.data;
          console.log(res);
          toast.error(`${error.response.data.message}`, {
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
        <div className="container mx-auto px-4 lg:mt-[140px]">
          <div className="flex md:flex-row flex-col lg:mt-14 items-center">
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
                  Login
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  Nice to meet you! Enter your details to register.
                </Typography>
                <form className="mt-4  mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                  <div className="mb-1 flex flex-col gap-4">
                    <Typography variant="h6" color="white" className="-mb-3">
                      Your Email
                    </Typography>
                    <Input
                      onChange={handleChange}
                      value={email}
                      id="email"
                      size="lg"
                      placeholder="name@mail.com"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <div className="flex items-between justify-end gap-0 text-gray-400">
                    
                    <Link href="/forgot-password" className="font-medium text-[12px]"> Forgot passsword?</Link>
                    
                    </div>
                  </div>
                  
                  <Button
                  type="submit"
                    className="mt-4 normal-case text-[#FFFFFF] rounded-[47px] bg-gradient-to-r from-[#2934FE] to-[#BF32EC]"
                    fullWidth
                  >
                    Sign In
                  </Button>
                  <Typography
                    color="gray"
                    className="mt-4 text-center font-normal"
                  >
                    Already have an account?{" "}
                    <a href="#" className="font-medium text-white">
                      Register
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
  
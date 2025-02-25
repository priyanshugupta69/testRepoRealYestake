import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useRouter } from "next/router";
import Link from "next/link";
import LoginUser from "../User/LoginUser";
import LogoutUser from "../User/LogoutUser";


 
export function NavigationBar({logout, user, role}) {
  console.log(role);

  const router = useRouter()
  // console.log(router.pathname);
  const pathname = router.pathname;
  let path = pathname.split("/")[1];
  console.log("path", path);

  // change the color of the link when the page is active
 

  let demoUrl="/"
  if(user.value && role==="customer") {
    demoUrl="/book-a-demo"
  } else {
    demoUrl="/demo"
  }

  const LinknessHome = (type=null) => {
    if (path === undefined) {
      path = "home";
    }
    let classes = 'flex items-center hover:text-[#C732FF] cursor-pointer';
    if (type === path) {
      classes += " text-[#C732FF] font-bold Outfit";
    } else if (path.includes("requests")) {
      if (type === "request-page") {
        classes += " text-[#C732FF] font-bold Outfit";
      }
    }
     else {
      classes += " text-white Outfit";
    }
    return classes;
  }

  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);


 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="flex items-center gap-x-2 p-1 font-medium text-[16px]"
      >
        <Link href="/" className={LinknessHome("home")}>
          Home
        </Link>
      </Typography>

<Typography
        as="li"
        variant="small"
        color="white"
        className="flex items-center gap-x-2 p-1 font-medium text-[16px]"
      >
        <Link href="/properties" className={LinknessHome("properties")}>
          Properties
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white"
        className="flex items-center gap-x-2 p-1 font-medium text-[16px]"
      >
        <Link href="/services" className={LinknessHome("services")}>
          Services
        </Link>
      </Typography>
      {user.value && role==="customer" && (
        <Typography
        as="li"
        variant="small"
        color="white"
        className="flex items-center gap-x-2 p-1 font-medium text-[16px]"
      >
        <Link href="/library" className={LinknessHome("library")}>
          Library
        </Link>
      </Typography>
      )}
      {user.value &&  role==="customer"  && (
        <Typography
        as="li"
        variant="small"
        color="white"
        className="flex items-center gap-x-2 p-1 font-medium text-[16px]"
      >
        <Link href="/favourites" className={LinknessHome("favourites")}>
          Favourites
        </Link>
      </Typography>
      )}
      <Typography
        as="li"
        variant="small"
        color="white"
        className="flex items-center gap-x-2 p-1 font-medium text-[16px]" 
      >
        <Link href="/contact-us" className={LinknessHome("contact-us")}>
          Contact Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="flex items-center gap-x-2 p-1 font-medium text-[16px]"
      >
        <Link href={demoUrl} className={demoUrl==="/demo"? LinknessHome("demo"): LinknessHome("book-a-demo")}>
          Book A Demo
        </Link>
      </Typography>
    
    </ul>
  );

 
  return (

    <Navbar className="fixed top-0 z-50  max-w-full rounded-none  bg-[#160019] border-none py-2">
      <div className="flex items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
            className="mr-4 cursor-pointer font-normal Bauhaus-93 lg:text-[32px] md:text-[24px] text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#2934FE] to-[#BF32EC]"
        >
          RealYesTake
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-3">
          {user.value && role!=="customer" &&  <LogoutUser />}
          {user.value && role==="customer" && <LoginUser logout={logout} />}
          {!user.value &&  <LogoutUser />}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-start gap-y-2 flex-col w-full">
            <Button variant="text" className="w-full text-white Outfit normal-case hover:border hover:rounded-[47px]">Log In</Button>
            <PrimaryButton title="Sign Up"  customClassName="w-full  Outfit"/>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
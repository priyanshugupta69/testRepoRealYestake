import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

export function UserCard() {
  return (
    <Card className="mt-6 w-full rounded-md border-2 border-white/20 bg-[#110213] text-white px-[1rem] py-[6px]">
      <CardBody className="flex flex-col pl-[1rem] pr-[1rem] gap-[1.5rem]">
        <div className="flex flex-row gap-[1.5rem]">
          <img src="https://iili.io/J5Rcv4I.png" className="w-[10rem] h-[10rem] rounded-sm" />
          <div className="flex flex-col justify-center text-start">
            <Typography color="gray" className="text-[32px] Outfit  text-white font-bold">John Doe</Typography>
            <Typography color="gray" className="text-[16px] Outfit font-normal text-white/50">Businesses</Typography>
          </div>
        </div>
        <div className="flex flex-row gap-[1.5rem] text-start justify-center my-1">
          <Typography color="gray" className="text-[14px] text-white/90 Outfit font-normal">
            <span className="text-[16px]">Short Bio</span>: edfeu0df weuf0e we0f89ue09fu we09fuwe09f wer09fuwer09 er9fu we09fu 0re09e4 34089tu0 0u. we237r8 r734rt7 br46yweyru wed79fewyf .</Typography>
        </div>
        <div className="flex flex-col gap-2 text-start justify-center">
          <div className="flex flex-row items-center Outfit font-normal my-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".75" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
            </svg>
            <Typography color="gray" className="text-[16px] text-white/90 pl-2 Outfit font-normal">
              johndoe@mail.com
            </Typography>
          </div>
          <div className="flex flex-row items-center Outfit font-normal my-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".75" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <Typography color="gray" className="text-[16px] text-white/90 pl-2 Outfit font-normal">
              +91 89067 76585
            </Typography>
          </div>
          <div className="flex flex-row items-center Outfit font-normal my-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".75" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <Typography color="gray" className="text-[16px] text-white/90 pl-2 Outfit font-normal">
              Ernakulam
            </Typography>
          </div>
          <div className="flex flex-row gap-[0.5rem] text-start justify-between my-1">
            <div className="flex flex-row items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".75" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>

              <Typography color="gray" className="text-[12px] text-white/50 pl-2 Outfit font-normal">
                New Company
              </Typography>
            </div>
            <div className="flex flex-row items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".75" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>

              <Typography color="gray" className="text-[12px] text-white/50 pl-2 Outfit font-normal">
                Media and Marketing
              </Typography>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-0 w-full">
        <Link href="#" className="inline-block w-full justify-center  mt-0">
          <Button size="sm" className="rounded-full border border-white w-full text-white bg-[#110213] ">
            <Typography color="white" className="Outfit font-normal text-[16px] capitalize">View Profile</Typography>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import { HeaderNavigation } from "@/components/HeaderNavigation";
import { UserCard } from "@/components/TransferCard/UserCard";
import { Typography } from "@material-tailwind/react";
import { Inter } from "next/font/google";
import { PropertyCard } from "./PropertyCard";

const inter = Inter({ subsets: ["latin"] });

export default function DeleteRequest() {
  return (
    <main
      className={` container mx-auto min-h-screen items-center justify-between bg-[#160019] py-24 px-10 ${inter.className}`}
    >
      <div className="flex flex-col text-start w-full h-full rounded-2xl">
        <HeaderNavigation
          title={"New Transfer Request from John Doe for PineApt"}
          showBackButton={true}
        />
      </div>
      <div className="flex lg:flex-row flex-col justify-start gap-8 items-center mt-4">
        <div className="w-full max-w-[460px]">
          <UserCard />
        </div>
        <div className="w-full max-w-[460px]">
          <PropertyCard
            title="okayy yaayy"
            content="i fault it and you are not fool oka i i fault it and you are not fool okay fault it and you are not fool okayy?"
            place="23 Mall Road, Mandi"
            price="2378"
          />
        </div>
        <div className="flex flex-col items-start  lg:mt-6 mt-2 gap-4">
          <div>
            <Typography className="text-white  lg:text-[12px] text-[12px] font-normal Outfit">
              John Doe is requesting for his property Pine apt to be removed
              from the website
            </Typography>
          </div>
          {/* two button accept and reject */}
          <div className="flex flex-col justify-around gap-3  w-full">
            <SecondaryButton
              title="Reject with Reason"
              customClassName="px-[50px] Outfit font-normal text-[16px]"
            />
            <PrimaryButton
              title="Accept Request"
              customClassName="px-[54px] Outfit font-normal text-[16px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

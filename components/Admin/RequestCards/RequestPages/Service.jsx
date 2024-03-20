import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import { HeaderNavigation } from "@/components/HeaderNavigation";
import { PropertyCard } from "@/components/TransferCard/PropertyCard";
import { UserCard } from "@/components/TransferCard/UserCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ServiceRequest() {
  return (
    <main
      className={`container mx-auto min-h-screen items-center justify-between bg-[#160019] py-20 px-10 ${inter.className}`}
    >
      <div className="flex flex-col text-start w-full h-full rounded-2xl">
        <HeaderNavigation
          title={"New Request from John Doe for Service Name"}
          showBackButton={true}
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <div></div>
        <div className="w-full max-w-[460px]">
          <UserCard />
        </div>
        <div></div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div></div>
        <div className="w-full max-w-[460px]">
        <div className="flex justify-around">
        <SecondaryButton title="Reject with Reason" customClassName="lg:px-[40px] px-[30px]  Outfit font-normal text-[16px]" />
        <PrimaryButton title="Accept Request" customClassName="lg:px-[40px] px-[30px]  Outfit font-normal text-[16px]" />
        </div>
        </div>
        <div></div>
      </div>
      
    </main>
  );
}

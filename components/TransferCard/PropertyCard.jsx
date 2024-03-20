import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import SecondaryButton from "../Buttons/SecondaryButton";
import PrimaryButton from "../Buttons/PrimaryButton";
export function PropertyCard() {
    return (
        <Card className="mt-6 w-full bg-[#160019] text-white py-[2rem]">
            <CardBody className="flex flex-col pl-[1rem] pr-[1rem] items-center text-center justify-center gap-[1.5rem]">
                <div className="flex flex-col gap-[1.5rem] justify-center text-center items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/d3f9/c8ba/aad2294ab50858dc44cd71ea1563d75f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adB6z8Id6KS62HY73C9W307dcasqhI1wyJ7Y05Ao9eQIvZJHxh6yomtlWAs~sUTYdFVifOcMbttZhsDFGfHb6PefQ2fViOk1jVjuW17wGx1BmgsalDRyLc-5IDvTyBw1VSGLY54v453G3MSLrWLDNDHNe3Vc12vylI18mXVvnQOXN59f-0cGIY1sbvVfB3BgSbe5pVkjvW-5mzZI5Xbq9hLwSDckBFBenz0rT7u839pH30RHu~H~VHBCRAEf7m0fEUyYkT6iMhr0od2AyVtHTxwLh4Rvdt29f6OlKV9Uo8ckEY~mAkqefaHnmJQLCTzySsJ0SS8tMaQhpbF0ktOM2g__" className="w-[10rem] h-[6rem]" />
                    <div className="lg:block md:block xl:block 2xl:block hidden">
                    <div className="rounded-full bg-white/20 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-start justify-center">
                    <Typography variant="h2" color="gray" className="text-md font-normal text-center text-white/90">92 ALLIUM PLACE, ORLANDO FL 32827</Typography>
                    <Typography variant="h4" color="gray" className="text-sm text-center font-normal text-white/90">Transfer from
                        <span className="font-bold"> Miss Jenny</span> to John Doe
                    </Typography>
                </div>
            </CardBody>
            <CardFooter className="pt-0 w-full">
                <div className="flex flex-row gap-2 justify-center">
                    <SecondaryButton title="Reject with Reason" className={'font-normal normal-case'}>
                        Reject with Reason
                    </SecondaryButton>
                    <PrimaryButton title="Accept Request" className={'font-normal normal-case'}>
                        Accept Request
                    </PrimaryButton>
                </div>
                <Button className="bg-transparent border-2 rounded-full w-full mt-2 border-white">
                    View Property
                </Button>
            </CardFooter>
        </Card>
    );
}
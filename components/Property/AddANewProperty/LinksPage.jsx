import React from 'react';
import { Button, Typography } from '@material-tailwind/react';
import InputBox from '@/components/Input/InputBox';
import HeaderTitle from '../HeaderTitle';
import UploadButton from '@/components/Buttons/UploadButton';
import SecondaryButton from '@/components/Buttons/SecondaryButton';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Stepper from './Stepper';
import { Input } from 'postcss';

export default function LinksPage({incrementStep, decrementStep, activeStep}) {

  const [dLink, setDLink] = React.useState('');
  const [sLink, setSLink] = React.useState('');

  return (
    <div className='bg-[#160019] flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 gap-2 sm:gap-2 mt-[100px]'>
      <HeaderTitle />
      <div className='my-5'>
        <Stepper activeStep={activeStep} className={'md:w-[30rem] lg:w-[30rem] xl:w-[30rem] 2xl:w-[30rem] w-[15rem]'} />
      </div>
      <div className="w-full max-w-[30rem]">
        <label className="text-white">Add 3D Link</label>
        <input
          type="link"
          value={dLink}
          className="w-full p-2 border rounded bg-transparent text-white mt-1"
          placeholder="Enter 3D Link"
        />
      </div>
      <div className="w-full max-w-[30rem]">
        <label className="text-white">Add Street Video Link</label>
        <input
          type="link"
          value={sLink}
          onChange={(e) => setSLink(e.target.value)}
          className="w-full max-w-[30rem] p-2 border rounded bg-transparent text-white mt-1"
          placeholder="Enter Street Video Link"
        />
      </div>
      <div className='justify-between flex flex-row gap-4 w-[20rem]'>
        <Button className='bg-transparent'>
          Cancel
        </Button>
        <Button className={'text-[#FB3C98] border-[#FD93C6] border'} onClick={() => decrementStep()}>
          Previous
        </Button>
        <Button onClick={() => incrementStep()}>
          Next
        </Button>
      </div>
    </div>
  );
}

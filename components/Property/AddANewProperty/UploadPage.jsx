import React from 'react';
import TinyCarousel from './tinyCarousel';
import { Typography } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import DragAndDropArea from '@/components/Input/DragAndDrop';
import InputBox from '@/components/Input/InputBox';
import HeaderTitle from '../HeaderTitle';
import Stepper from './Stepper';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import SecondaryButton from '@/components/Buttons/SecondaryButton';

export default function UploadPage({incrementStep, decrementStep, activeStep}) {
  return (
    <div className='bg-[#160019] flex flex-col min-h-screen justify-between p-4 sm:p-8 md:p-12 lg:p-16 gap-4 sm:gap-8 lg:mt-[80px]'>
      <div className='text-center'>
        <HeaderTitle />
      </div>
      <div className='my-5 flex justify-center'>
        <Stepper activeStep={activeStep} className='w-full max-w-[30rem]' />
      </div>
      <Typography className='text-white text-center'>
        Upload Photos
      </Typography>
      <DragAndDropArea />
      <TinyCarousel />
      <div className='flex flex-col items-center justify-center mt-20'>
        <div className='flex flex-row w-full max-w-[35rem] mt-2 mb-2'>
          <Typography className='text-white text-start'>
            Add Youtube Video Links
          </Typography>
        </div>
        <div className='mb-5 w-full max-w-[30rem] mx-auto flex flex-col sm:flex-row gap-2'>
          <InputBox className='w-full sm:w-3/4 h-[2.5rem]' placeholder='Add 3d Link' />
          <Button className='w-full sm:w-1/4 px-12 text-[#FB3C98] border-[#FB3C98] mt-2 sm:mt-0 border'>
            Add
          </Button>
        </div>
      </div>
      <TinyCarousel />
      <div className='justify-center flex flex-row gap-4 w-full container mx-auto'>
        <Button className='bg-transparent'>
          Cancel
        </Button>
        <Button className={'text-[#FB3C98] border-[#FD93C6] border'} onClick={() => decrementStep()}>
          Previous
        </Button>
        <Button onClick={() => console.log('Created')}>
          Create
        </Button>
      </div>
    </div>
  );
}

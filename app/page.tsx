import { Check } from "lucide-react";
import Image from "next/image";
import Footer from "./(components)/Footer";
import MaxWidthWrapper from "./(components)/MaxWidthWrapper";
import PatientDetailsForm from "./(components)/PatientDetailsForm";
import Workflow from "./(components)/Workflow";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="grainy mt-16 p-10">
        <div className="flex flex-col gap-y-10 lg:flex-row justify-between items-center">
          <div className="max-w-[32rem] text-center sm:text-left">
            <span>Introducing !!!</span>
            <h1 className="relative tracking-tight font-bold sm:!leading-[4rem] text-gray-900 sm:text-5xl text-4xl">NeuroKn
              <span className="relative">i</span>
              <span className='absolute sm:left-[10.75rem] left-[8.30rem] translate-x-[15px] md:translate-x-[4.5px] md:-top-[1.15rem]'>
                <Image
                  alt='knight-emoji'
                  src='/knight.png'
                  height={50}
                  width={40}
                  className='hidden md:block'
                />
              </span>
              ghtMRI</h1>
            <p className="text-balance text-sm sm:text-base !leading-[1.75rem]">where cutting-edge machine learning prowess meets the battlefield against brain tumors, revolutionizing <span className="font-bold text-red-500">detection</span> and <span className="font-bold text-red-500">classification</span> with unparalleled precision.</p>
            <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
              <div className='space-y-2'>
                <li className='flex gap-1.5 items-center'>
                  <Check className='h-5 w-5 shrink-0 text-red-500' /> 5 Machine Learning Model Architectures
                </li>
                <li className='flex gap-1.5 items-center'>
                  <Check className='h-5 w-5 shrink-0 text-red-500' /> Pretty accurate
                </li>
                <li className='flex gap-1.5 items-center'>
                  <Check className='h-5 w-5 shrink-0 text-red-500' /> 100%
                  free & open-source
                </li>
              </div>
            </ul>
          </div>
          <div className="relative">
            <Image
              src='/try-it.png'
              height={100}
              width={200}
              alt="try-it"
              className="absolute left-[21rem] top-[15rem] rotate-90 select-none hidden sm:block z-20"
            />
            <PatientDetailsForm />
          </div>
        </div>
      </MaxWidthWrapper>
      <Workflow />
      <Footer />
    </>
  );
}

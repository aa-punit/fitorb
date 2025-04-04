import React from 'react'

const Layout = () => {
  return (
    <div className="w-[1440px] px-16 py-28 bg-Color-Scheme-2-Background inline-flex flex-col justify-start items-center gap-20 overflow-hidden">
      <div className="w-[768px] flex flex-col justify-start items-center gap-4">
        <div className="size- inline-flex justify-start items-center">
          <div className="text-center justify-start text-Color-Scheme-2-Text text-base font-semibold font-['Inter'] leading-normal">Empower</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-center gap-6">
          <div className="self-stretch text-center justify-start text-Color-Scheme-2-Text text-5xl font-normal font-['Nunito'] leading-[57.60px]">Transform Your Health with Tailored Plans</div>
          <div className="self-stretch text-center justify-start text-Color-Scheme-2-Text text-lg font-normal font-['Inter'] leading-relaxed">Our health plans are designed to meet your unique needs. Experience personalized exercise routines and diet plans that adapt as you progress.</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-16">
        <div className="w-[1312px] inline-flex justify-center items-start gap-12">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-8 overflow-hidden">
            <img className="self-stretch h-60 rounded-2xl" src="https://placehold.co/405x240" />
            <div className="self-stretch flex flex-col justify-start items-center gap-6">
              <div className="self-stretch text-center justify-start text-Color-Scheme-2-Text text-3xl font-normal font-['Nunito'] leading-10">Stay on Track with Progress Monitoring</div>
              <div className="self-stretch text-center justify-start text-Color-Scheme-2-Text text-base font-normal font-['Inter'] leading-normal">Track your daily and weekly achievements effortlessly.</div>
            </div>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-8 overflow-hidden">
            <img className="self-stretch h-60 rounded-2xl" src="https://placehold.co/405x240" />
            <div className="self-stretch flex flex-col justify-start items-center gap-6">
              <div className="self-stretch text-center justify-start text-Color-Scheme-2-Text text-3xl font-normal font-['Nunito'] leading-10">Never Miss a Beat with Reminders</div>
              <div className="self-stretch text-center justify-start text-Color-Scheme-2-Text text-base font-normal font-['Inter'] leading-normal">Receive timely reminders for workouts and meals.</div>
            </div>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-8 overflow-hidden">
            <img className="self-stretch h-60 rounded-2xl" src="https://placehold.co/405x240" />
            <div className="self-stretch flex flex-col justify-start items-center gap-6">
              <div className="self-stretch text-center justify-start text-Color-Scheme-2-Text text-3xl font-normal font-['Nunito'] leading-10">Personalized Plans for Every Fitness Level</div>
              <div className="self-stretch text-center justify-start text-Color-Scheme-2-Text text-base font-normal font-['Inter'] leading-normal">Whether you're underfit or fit, we have you covered.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="size- inline-flex justify-start items-center gap-6">
        <div data-alternate="False" data-icon-position="No icon" data-small="False" data-style="Secondary" className="size- px-6 py-2.5 rounded-md outline outline-1 outline-background flex justify-center items-center gap-2 overflow-hidden">
          <div className="justify-start text-Color-Neutral-Darkest text-base font-medium font-['Inter'] leading-normal">Learn More</div>
        </div>
        <div data-alternate="False" data-icon-position="Trailing" data-small="False" data-style="Link" className="size- rounded-md flex justify-center items-center gap-2 overflow-hidden">
          <div className="justify-start text-Color-Neutral-Darkest text-base font-medium font-['Inter'] leading-normal">Sign Up</div>
          <div data-svg-wrapper className="relative">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.207 16.9492L15.914 11.2422L10.207 5.53516L8.79297 6.94916L13.086 11.2422L8.79297 15.5352L10.207 16.9492Z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Layout

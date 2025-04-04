import React from 'react'

  const Layout3 = () => {
  return (
    <div className="w-full self-stretch px-16 py-28 bg-background inline-flex flex-col justify-start items-center gap-20 overflow-hidden">
      <div className="w-[768px] flex flex-col justify-start items-center gap-4">
        <div className="size- inline-flex justify-start items-center">
          <div className="text-center justify-start text-text text-base font-semibold font-['Inter'] leading-normal">Empower</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-center gap-6">
          <div className="self-stretch text-center justify-start text-border text-5xl font-normal font-['Nunito'] leading-[57.60px]">Transform Your Health with Our Features</div>
          <div className="self-stretch text-center justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Our platform offers essential tools to help you achieve your health goals. From BMI calculations to tailored plans, we’ve got you covered.</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-center items-center gap-16">
        <div className="w-[1312px] inline-flex justify-center items-start gap-12">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-8 overflow-hidden">
            <img className="self-stretch h-60 rounded-2xl" src="/images/home/home-image-3.jpg" />
            <div className="self-stretch flex flex-col justify-start items-center gap-6">
              <div className="self-stretch text-center justify-start text-border text-3xl font-normal font-['Nunito'] leading-10">Accurate BMI Calculation for Everyone</div>
              <div className="self-stretch text-center justify-start text-white text-base font-normal font-['Inter'] leading-normal">Quickly assess your body mass index to understand your health status.</div>
            </div>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-8 overflow-hidden">
            <img className="self-stretch h-60 rounded-2xl" src="/images/home/home-image-4.jpg" />
            <div className="self-stretch flex flex-col justify-start items-center gap-6">
              <div className="self-stretch text-center justify-start text-border text-3xl font-normal font-['Nunito'] leading-10">Personalized Plans for Your Unique Journey</div>
              <div className="self-stretch text-center justify-start text-white text-base font-normal font-['Inter'] leading-normal">Receive customized diet and exercise plans tailored to your needs.</div>
            </div>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-8 overflow-hidden">
            <img className="self-stretch h-60 rounded-2xl" src="/images/home/home-image-5.jpg" />
            <div className="self-stretch flex flex-col justify-start items-center gap-6">
              <div className="self-stretch text-center justify-start text-border text-3xl font-normal font-['Nunito'] leading-10">Track Your Progress with Ease</div>
              <div className="self-stretch text-center justify-start text-white text-base font-normal font-['Inter'] leading-normal">Monitor your journey with insightful graphs and reminders.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="size- inline-flex justify-center items-center gap-6">
        <div data-alternate="False" data-icon-position="No icon" data-small="False" data-style="Secondary" className="size- px-6 py-2.5 rounded-md outline outline-1 outline-border flex justify-center items-center gap-2 overflow-hidden">
          <div className="justify-start text-border text-base font-medium font-['Inter'] leading-normal">Learn More</div>
        </div>
        <div data-alternate="False" data-icon-position="Trailing" data-small="False" data-style="Link" className="size- rounded-md flex justify-center items-center gap-2 overflow-hidden">
          <div className="justify-start text-border text-base font-medium font-['Inter'] leading-normal">Sign Up</div>
          <div data-svg-wrapper className="relative">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.207 16.9492L15.914 11.2422L10.207 5.53516L8.79297 6.94916L13.086 11.2422L8.79297 15.5352L10.207 16.9492Z" fill="#AFFA01"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Layout3

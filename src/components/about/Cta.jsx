import React from 'react'

const Cta = () => {
  return (
    <div className="self-stretch px-16 py-28 bg-background inline-flex flex-col justify-start items-start gap-20 overflow-hidden">
      <div className="self-stretch inline-flex justify-start items-start gap-20">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
          <div className="self-stretch justify-start text-white text-5xl font-normal font-['Nunito'] leading-[57.60px]">Start Your Health Journey Today</div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
          <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Unlock your potential with our user-friendly health dashboard. Get personalized plans and track your progress effortlessly!</div>
          <div className="size- inline-flex justify-start items-start gap-4">
            <div data-alternate="True" data-icon-position="No icon" data-small="False" data-style="Primary" className="size- px-6 py-2.5 bg-border rounded-md outline outline-1 outline-border flex justify-center items-center gap-2">
              <div className="justify-start text-background text-base font-medium font-['Inter'] leading-normal">Get Started</div>
            </div>
            <div data-alternate="False" data-icon-position="No icon" data-small="False" data-style="Secondary" className="size- px-6 py-2.5 rounded-md outline outline-1 outline-border flex justify-center items-center gap-2">
              <div className="justify-start text-border text-base font-medium font-['Inter'] leading-normal">Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cta

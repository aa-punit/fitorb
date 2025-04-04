import React from 'react'

const Cta1 = () => {
  return (
    <div className="self-stretch px-16 py-28 bg-foreground inline-flex flex-col justify-start items-start gap-20 overflow-hidden">
      <div className="self-stretch inline-flex justify-between items-center">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-start text-white text-5xl font-normal font-['Nunito'] leading-[57.60px]">Transform Your Health Journey Today</div>
            <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Join us to access personalized health plans and track your progress effortlessly.</div>
          </div>
          <div className="size- inline-flex justify-start items-start gap-4">
            <div data-alternate="False" data-icon-position="No icon" data-small="False" data-style="Primary" className="size- px-6 py-2.5 bg-border rounded-md outline-1 outline-border flex justify-center items-center gap-2">
              <div className="justify-start text-black text-base font-medium font-['Inter'] leading-normal">Sign Up</div>
            </div>
            <div data-alternate="True" data-icon-position="No icon" data-small="False" data-style="Secondary" className="size- px-6 py-2.5 rounded-md outline-1 outline-white/20 flex justify-center items-center gap-2">
              <div className="justify-start text-white text-base font-medium font-['Inter'] leading-normal">Learn More</div>
            </div>
          </div>
        </div>
        <img className="w-[616px] h-96 rounded-2xl" src="/images/home/home-image-7.jpg" />
      </div>
    </div>
  )
}
export default Cta1

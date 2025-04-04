import React from 'react'

const Header = () => {
  return (
    <div className="pm__header-about w-full self-stretch px-16 py-28 bg-black/50 inline-flex flex-col justify-start items-center gap-20 overflow-hidden">
      <div className="w-[768px] flex flex-col justify-start items-center gap-8">
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
          <div className="size- inline-flex justify-start items-center">
            <div className="text-center justify-start text-white text-base font-semibold font-['Inter'] leading-normal">Thrive</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-center gap-6">
            <div className="self-stretch text-center justify-start text-white text-6xl font-normal font-['Nunito'] leading-[67.20px]">Empower Your Health</div>
            <div className="self-stretch text-center justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Transform your wellness journey with tailored plans designed just for you.</div>
          </div>
        </div>
        <div className="size- inline-flex justify-start items-start gap-4">
          <div data-alternate="False" data-icon-position="No icon" data-small="False" data-style="Primary" className="size- px-6 py-2.5 bg-border rounded-md outline-1 outline-border flex justify-center items-center gap-2">
            <div className="justify-start text-black text-base font-medium font-['Inter'] leading-normal">Get Started</div>
          </div>
          <div data-alternate="True" data-icon-position="No icon" data-small="False" data-style="Secondary" className="size- px-6 py-2.5 rounded-md outline-1 outline-border flex justify-center items-center gap-2">
            <div className="justify-start text-border text-base font-medium font-['Inter'] leading-normal">Learn More</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header

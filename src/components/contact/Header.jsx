import React from 'react'

const Header = () => {
  return (
    <div className="w-full self-stretch px-16 py-28 bg-background inline-flex flex-col justify-start items-start gap-20 overflow-hidden">
      <div className="w-[768px] flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="size- inline-flex justify-start items-center">
            <div className="justify-start text-white text-base font-semibold font-['Inter'] leading-normal">Connect</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-start text-text text-6xl font-normal font-['Nunito'] leading-[67.20px]">Get in Touch</div>
            <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">We’re here to assist you with any questions, support, or feedback you may have.</div>
          </div>
        </div>
        <div className="size- inline-flex justify-start items-start gap-4">
          <div data-alternate="True" data-icon-position="No icon" data-small="False" data-style="Primary" className="size- px-6 py-2.5 bg-border rounded-md outline-1 outline-border flex justify-center items-center gap-2">
            <div className="justify-start text-background text-base font-medium font-['Inter'] leading-normal">Submit</div>
          </div>
          <div data-alternate="False" data-icon-position="No icon" data-small="False" data-style="Secondary" className="size- px-6 py-2.5 rounded-md outline-1 outline-border flex justify-center items-center gap-2">
            <div className="justify-start text-border text-base font-medium font-['Inter'] leading-normal">Inquire</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header

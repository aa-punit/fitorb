import React from 'react'

const Cta = () => {
  return (
    <div className="w-[1440px] px-16 py-28 bg-background inline-flex flex-col justify-start items-start gap-20 overflow-hidden">
      <div className="self-stretch inline-flex justify-start items-center gap-20">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-start text-white text-5xl font-normal font-['Nunito'] leading-[57.60px]">Stay Updated with Health Tips</div>
            <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Subscribe to our newsletter for the latest health tips and personalized advice delivered to you.</div>
          </div>
          <div className="size- inline-flex justify-start items-start gap-4">
            <div data-alternate="True" data-icon-position="No icon" data-small="False" data-style="Primary" className="size- px-6 py-2.5 bg-border rounded-md outline outline-1 outline-border flex justify-center items-center gap-2">
              <div className="justify-start text-background text-base font-medium font-['Inter'] leading-normal">Subscribe</div>
            </div>
            <div data-alternate="False" data-icon-position="No icon" data-small="False" data-style="Secondary" className="size- px-6 py-2.5 rounded-md outline outline-1 outline-border flex justify-center items-center gap-2">
              <div className="justify-start text-border text-base font-medium font-['Inter'] leading-normal">Follow</div>
            </div>
          </div>
        </div>
        <img className="flex-1 h-96 rounded-2xl" src="https://placehold.co/616x400" />
      </div>
    </div>
  )
}
export default Cta

import React from 'react'

const Cta2 = () => {
  return (
    <div className="w-full self-stretch px-16 py-28 bg-background inline-flex flex-col justify-start items-start gap-20 overflow-hidden">
      <div className="self-stretch inline-flex justify-between items-center">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-start text-border text-5xl font-normal font-['Nunito'] leading-[57.60px]">Stay Updated with Health Tips</div>
            <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Subscribe to our newsletter for the latest health insights!</div>
          </div>
          <div className="w-[513px] flex flex-col justify-start items-start gap-4">
            <div className="self-stretch inline-flex justify-start items-start gap-4">
              <div data-alternate="False" data-type="Default" className="flex-1 px-3 py-2 bg-black/5 rounded-md outline outline-1 outline-accent flex justify-start items-center gap-2">
                <div className="flex-1 justify-start text-accent text-base font-normal font-['Inter'] leading-normal">Your Email Here</div>
              </div>
              <div data-alternate="True" data-icon-position="No icon" data-small="False" data-style="Primary" className="size- px-6 py-2.5 bg-background rounded-md outline outline-1 outline-border flex justify-center items-center gap-2">
                <div className="justify-start text-border text-base font-medium font-['Inter'] leading-normal">Join Now</div>
              </div>
            </div>
            <div className="self-stretch justify-start text-Backgrounds-(Grouped)-Secondary text-xs font-normal font-['Inter'] leading-none">By clicking Join Now, you agree to our Terms and Conditions.</div>
          </div>
        </div>
        <img className="w-[616px] h-96 rounded-2xl" src="/images/home/home-image-8.jpg" />
      </div>
    </div>
  )
}
export default Cta2

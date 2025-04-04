import React from 'react'

const Layout2 = () => {
  return (
    <div className="w-[1440px] px-16 py-28 bg-Color-Scheme-2-Background inline-flex flex-col justify-start items-start gap-20 overflow-hidden">
      <div className="self-stretch inline-flex justify-start items-center gap-20">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="size- inline-flex justify-start items-center">
                <div className="justify-start text-Color-Scheme-2-Text text-base font-semibold font-['Inter'] leading-normal">Achieve</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-6">
                <div className="self-stretch justify-start text-Color-Scheme-2-Text text-5xl font-normal font-['Nunito'] leading-[57.60px]">Unlock Your Potential with the Fit Plan</div>
                <div className="self-stretch justify-start text-Color-Scheme-2-Text text-lg font-normal font-['Inter'] leading-relaxed">Our Fit plan is designed for those who want to maintain a healthy lifestyle. It combines tailored exercises, nutritious meal suggestions, and effective progress tracking.</div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch py-2 inline-flex justify-start items-start gap-6">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch justify-start text-Color-Scheme-2-Text text-xl font-normal font-['Nunito'] leading-7">Exercise Routine</div>
                  <div className="self-stretch justify-start text-Color-Scheme-2-Text text-base font-normal font-['Inter'] leading-normal">Engage in cardio, strength training, and flexibility exercises for a balanced fitness regimen.</div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch justify-start text-Color-Scheme-2-Text text-xl font-normal font-['Nunito'] leading-7">Diet Suggestions</div>
                  <div className="self-stretch justify-start text-Color-Scheme-2-Text text-base font-normal font-['Inter'] leading-normal">Enjoy a balanced diet rich in lean proteins, whole grains, and fresh vegetables.</div>
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
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.70697 17.4492L15.414 11.7422L9.70697 6.03516L8.29297 7.44916L12.586 11.7422L8.29297 16.0352L9.70697 17.4492Z" fill="black"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <img className="flex-1 h-[640px] rounded-2xl" src="https://placehold.co/616x640" />
      </div>
    </div>
  )
}
export default Layout2

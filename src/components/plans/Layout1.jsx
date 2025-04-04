import React from 'react'

const Layout1 = () => {
  return (
    <div className="w-[1440px] px-16 py-28 bg-background inline-flex flex-col justify-start items-start gap-20 overflow-hidden">
      <div className="self-stretch inline-flex justify-start items-center gap-20">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="size- inline-flex justify-start items-center">
              <div className="justify-start text-white text-base font-semibold font-['Inter'] leading-normal">Transform</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch justify-start text-border text-5xl font-normal font-['Nunito'] leading-[57.60px]">Your Journey to Fitness with the Underfit Plan</div>
              <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">The Underfit plan is designed to help you build strength and endurance gradually. With tailored exercises and nutritious diet suggestions, you'll track your progress and stay motivated every step of the way.</div>
            </div>
          </div>
          <div className="size- inline-flex justify-start items-center gap-6">
            <div data-alternate="False" data-icon-position="No icon" data-small="False" data-style="Secondary" className="size- px-6 py-2.5 rounded-md outline outline-1 outline-border flex justify-center items-center gap-2 overflow-hidden">
              <div className="justify-start text-border text-base font-medium font-['Inter'] leading-normal">Learn More</div>
            </div>
            <div data-alternate="False" data-icon-position="Trailing" data-small="False" data-style="Link" className="size- rounded-md flex justify-center items-center gap-2 overflow-hidden">
              <div className="justify-start text-border text-base font-medium font-['Inter'] leading-normal">Sign Up</div>
              <div data-svg-wrapper className="relative">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.70697 17.4492L15.414 11.7422L9.70697 6.03516L8.29297 7.44916L12.586 11.7422L8.29297 16.0352L9.70697 17.4492Z" fill="white"/>
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
export default Layout1

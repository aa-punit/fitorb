import React from 'react'

const Layout2 = () => {
  return (
    <div className="w-full self-stretch px-16 py-28 bg-background inline-flex flex-col justify-start items-start gap-20 overflow-hidden">
      <div className="self-stretch inline-flex justify-center items-center gap-20">
        <div className="w-[616px] inline-flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="size- inline-flex justify-start items-center">
                <div className="justify-start text-text text-base font-semibold font-['Inter'] leading-normal">Empower</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-6">
                <div className="self-stretch justify-start text-border text-5xl font-normal font-['Nunito'] leading-[57.60px]">Unlock Your Health Potential with Our Dashboard</div>
                <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Experience a transformative approach to health management. Our dashboard offers personalized insights and tools to help you achieve your fitness goals.</div>
              </div>
            </div>
            <div className="self-stretch py-2 flex flex-col justify-start items-start gap-4">
              <div className="self-stretch inline-flex justify-start items-center gap-6">
                <div className="w-[595px] justify-start text-white text-base font-normal font-['Inter'] leading-normal">Track your progress with intuitive graphs and charts.</div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-4">
                <div className="flex-1 justify-start text-white text-base font-normal font-['Inter'] leading-normal">Receive tailored diet and exercise plans just for you.</div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center">
                <div className="size-4 relative" />
                <div className="flex-1 justify-start text-white text-base font-normal font-['Inter'] leading-normal">Stay motivated with reminders for workouts and meals.</div>
              </div>
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
                  <path d="M9.70697 17.4492L15.414 11.7422L9.70697 6.03516L8.29297 7.44916L12.586 11.7422L8.29297 16.0352L9.70697 17.4492Z" fill="#AFFA01"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <img className="w-[616px] h-[640px] rounded-2xl" src="/images/home/home-image-2.jpg" />
      </div>
    </div>
  )
}
export default Layout2

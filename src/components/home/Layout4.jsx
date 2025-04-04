import React from 'react'

const Layout4 = () => {
  return (
    <div className="self-stretch px-16 py-28 bg-background inline-flex flex-col justify-start items-start gap-20 overflow-hidden">
      <div className="self-stretch inline-flex justify-start items-center gap-20">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-start text-border text-4xl font-normal font-['Nunito'] leading-[48px]">Discover the transformative impact of our health dashboard on user success.</div>
            <div className="self-stretch justify-start text-text text-lg font-normal font-['Inter'] leading-relaxed">Our users have achieved remarkable results through personalized health plans. Join the community and start your journey to better health today!</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch py-2 inline-flex justify-start items-start gap-6">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-text text-5xl font-normal font-['Nunito'] leading-[57.60px]">90%</div>
                <div className="self-stretch justify-start text-text text-base font-normal font-['Inter'] leading-normal">of users report improved fitness levels within weeks.</div>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-text text-5xl font-normal font-['Nunito'] leading-[57.60px]">75%</div>
                <div className="self-stretch justify-start text-text text-base font-normal font-['Inter'] leading-normal">of users achieve their health goals successfully.</div>
              </div>
            </div>
          </div>
        </div>
        <img className="flex-1 h-[640px] rounded-2xl" src="/images/home/home-image-6.jpg" />
      </div>
    </div>
  )
}
export default Layout4

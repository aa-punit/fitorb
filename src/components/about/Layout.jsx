import React from 'react'

const Layout = () => {
  return (
    <div className="self-stretch px-16 py-28 bg-background inline-flex flex-col justify-end items-center gap-20 overflow-hidden">
      <div className="self-stretch inline-flex justify-start items-center gap-20">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
          <div className="self-stretch justify-start text-border text-4xl font-normal font-['Nunito'] leading-[48px]">Empowering Your Health Journey with Innovative Technology and Personalized Support</div>
          <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
        </div>
        <img className="flex-1 h-[640px] rounded-2xl" src="/images/about/about-image-1.jpg" />
      </div>
    </div>
  )
}
export default Layout

import React from 'react'

const Gallery = () => {
  return (
    <div className="w-[1440px] px-16 py-28 bg-foreground inline-flex flex-col justify-start items-center gap-20 overflow-hidden">
      <div className="w-[768px] flex flex-col justify-start items-center gap-6">
        <div className="self-stretch text-center justify-start text-Color-Scheme-1-Text text-5xl font-normal font-['Nunito'] leading-[57.60px]">Health Gallery</div>
        <div className="self-stretch text-center justify-start text-Color-Scheme-1-Text text-lg font-normal font-['Inter'] leading-relaxed">Explore our collection of health and wellness tips.</div>
      </div>
      <div className="self-stretch relative flex flex-col justify-start items-start gap-12">
        <div className="size- inline-flex justify-start items-center gap-8">
          <img className="size-96 rounded-2xl" src="https://placehold.co/416x416" />
          <img className="size-96 rounded-2xl" src="https://placehold.co/416x416" />
          <img className="size-96 rounded-2xl" src="https://placehold.co/416x416" />
          <img className="size-96 rounded-2xl" src="https://placehold.co/416x416" />
          <img className="size-96 rounded-2xl" src="https://placehold.co/416x416" />
          <img className="size-96 rounded-2xl" src="https://placehold.co/416x416" />
        </div>
        <div className="w-px h-96 left-[1311px] top-0 absolute">
          <div data-direction="Right" className="size- p-3 left-[-19px] top-[184px] absolute bg-Color-Scheme-1-Foreground rounded-sm outline outline-1 outline-offset-[-1px] outline-Opacity-Neutral-Darkest-15/20 inline-flex justify-center items-center gap-2">
            <div data-svg-wrapper className="relative">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.293 18.1816L12.707 19.5956L19.414 12.8886L12.707 6.18164L11.293 7.59564L15.586 11.8886H6V13.8886H15.586L11.293 18.1816Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-px h-96 left-0 top-0 absolute">
          <div data-direction="Left" className="size- p-3 left-[-28px] top-[184px] absolute bg-Color-Scheme-1-Foreground rounded-sm outline outline-1 outline-offset-[-1px] outline-Opacity-Neutral-Darkest-15/20 inline-flex justify-center items-center gap-2">
            <div data-svg-wrapper className="relative">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7069 18.1816L8.41394 13.8886H17.9999V11.8886H8.41394L12.7069 7.59564L11.2929 6.18164L4.58594 12.8886L11.2929 19.5956L12.7069 18.1816Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="self-stretch p-2.5 inline-flex justify-center items-start gap-2">
          <div className="size-2 bg-Color-Scheme-1-Text rounded-full" />
          <div className="size-2 opacity-20 bg-Color-Scheme-1-Text rounded-full" />
          <div className="size-2 opacity-20 bg-Color-Scheme-1-Text rounded-full" />
          <div className="size-2 opacity-20 bg-Color-Scheme-1-Text rounded-full" />
          <div className="size-2 opacity-20 bg-Color-Scheme-1-Text rounded-full" />
          <div className="size-2 opacity-20 bg-Color-Scheme-1-Text rounded-full" />
        </div>
      </div>
    </div>
  )
}
export default Gallery

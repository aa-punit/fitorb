const Header = () => {
  return (
    <div className="pm__header-home w-full self-stretch h-[900px] px-16 bg-black/50 inline-flex justify-start items-center overflow-hidden">
      <div className="w-[560px] inline-flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch justify-start text-white text-6xl font-normal font-['Nunito'] leading-[67.20px]">Transform Your Health Journey with Us</div>
          <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Our platform empowers you to take control of your health with personalized plans tailored to your unique needs. Join us to track your progress and achieve your fitness goals effortlessly.</div>
        </div>
        <div className="size- inline-flex justify-start items-start gap-4">
          <div data-alternate="False" data-icon-position="No icon" data-small="False" data-style="Primary" className="size- px-6 py-2.5 bg-border rounded-md outline-1 outline-border flex justify-center items-center gap-2">
            <div className="justify-start text-black text-base font-medium font-['Inter'] leading-normal">Get Started</div>
          </div>
          <div data-alternate="True" data-icon-position="No icon" data-small="False" data-style="Secondary" className="size- px-6 py-2.5 rounded-md outline-1 outline-border flex justify-center items-center gap-2">
            <div className="justify-start text-white text-base font-medium font-['Inter'] leading-normal">Learn More</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
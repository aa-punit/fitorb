const Layout1 = () => {
  return (
    <div className="self-stretch px-16 py-28 bg-background inline-flex flex-col justify-start items-start gap-20 overflow-hidden">
      <div className="self-stretch inline-flex justify-start items-start gap-20">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="size- inline-flex justify-start items-center">
            <div className="justify-start text-text text-base font-semibold font-['Inter'] leading-normal">Empower</div>
          </div>
          <div className="self-stretch justify-start text-border text-5xl font-normal font-['Nunito'] leading-[57.60px]">Transform Your Health with Personalized Plans</div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
          <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Our health dashboard offers tailored exercise and diet plans that adapt to your unique needs. Whether you're looking to lose weight, gain muscle, or maintain your fitness, our platform provides the guidance you need. Track your progress and stay motivated with insightful analytics and reminders.</div>
          <div className="size- inline-flex justify-start items-center gap-6">
            <div data-alternate="False" data-icon-position="No icon" data-small="False" data-style="Secondary" className="size- px-6 py-2.5 rounded-md outline outline-1 outline-border flex justify-center items-center gap-2 overflow-hidden">
              <div className="justify-start text-border text-base font-medium font-['Inter'] leading-normal">Learn More</div>
            </div>
            <div data-alternate="False" data-icon-position="Trailing" data-small="False" data-style="Link" className="size- rounded-md flex justify-center items-center gap-2 overflow-hidden">
              <div className="justify-start text-border text-base font-medium font-['Inter'] leading-normal">Sign Up</div>
              <div data-svg-wrapper className="relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.70697 16.9492L15.414 11.2422L9.70697 5.53516L8.29297 6.94916L12.586 11.2422L8.29297 15.5352L9.70697 16.9492Z" fill="#AFFA01"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="self-stretch h-[738px] rounded-2xl" src="/images/home/Home-image-1.jpg" />
    </div>
  )
}
export default Layout1

const Navbar = () => {
  return (
    <div className="self-stretch bg-background inline-flex flex-col justify-start items-center w-full">
      <div className="self-stretch h-16 px-16 inline-flex justify-between items-center">
        <a href={'/'}>
          <img className="w-20 h-9" src="/fitorb-logo.svg" alt="Logo"/>
        </a>
        <div className="flex justify-center items-center gap-4">
          <div className="flex justify-start items-center gap-8">
            <a href={'/about-us'}
               className="justify-start text-text text-base font-normal font-['Inter'] leading-normal">About us</a>
            <a href={'/contact-us'}
               className="justify-start text-text text-base font-normal font-['Inter'] leading-normal">Contact us</a>
            <a href={'/plans'}
               className="justify-start text-text text-base font-normal font-['Inter'] leading-normal">Plans</a>
            <a href={'/health-tips'}
               className="justify-start text-text text-base font-normal font-['Inter'] leading-normal">Health tips</a>
            <div className="inline-flex flex-col justify-start items-start">
              <div className="self-stretch inline-flex justify-center items-center gap-1">
                <div className="justify-start text-text text-base font-normal font-['Inter'] leading-normal">More Info
                </div>
                <div data-svg-wrapper className="relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12.3977 15.6634C12.178 15.8831 11.8219 15.8831 11.6022 15.6634L5.86739 9.92853C5.64772 9.70886 5.64772 9.35276 5.86739 9.13308L6.13256 8.86788C6.35222 8.64821 6.70838 8.64821 6.92805 8.86788L12 13.9398L17.0719 8.86788C17.2916 8.64821 17.6477 8.64821 17.8674 8.86788L18.1326 9.13308C18.3522 9.35276 18.3522 9.70886 18.1326 9.92853L12.3977 15.6634Z"
                          fill="#F3F3F3"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start gap-4">
            <div data-alternate="False" data-icon-position="No icon" data-small="True" data-style="Secondary"
                 className="px-5 py-2 rounded-md outline outline-1 outline-border flex justify-center items-center gap-2">
              <div className="justify-start text-border text-base font-medium font-['Inter'] leading-normal">Join</div>
            </div>
            <div data-alternate="True" data-icon-position="No icon" data-small="True" data-style="Primary"
                 className="px-5 py-2 bg-border rounded-md outline outline-1 outline-border flex justify-center items-center gap-2">
              <div className="justify-start text-background text-base font-medium font-['Inter'] leading-normal">Login
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
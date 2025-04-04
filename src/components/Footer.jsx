const Footer = () => {
  return (
    <div className="w-full self-stretch px-16 py-20 bg-background inline-flex flex-col justify-end items-center gap-20 overflow-hidden">
      <div className="self-stretch inline-flex justify-start items-start gap-16">
        <div className="w-[864px] inline-flex flex-col justify-start items-start gap-8 overflow-hidden">
          <img className="w-32 h-14" src="/fitorb-logo.svg" alt="Logo" />
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch justify-start text-zinc-100 text-sm font-semibold font-['Inter'] leading-tight">Address:</div>
              <div className="self-stretch justify-start text-zinc-100 text-sm font-normal font-['Inter'] leading-tight">Level 1, 12 Sample St, Sydney NSW 2000</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="self-stretch justify-start text-zinc-100 text-sm font-semibold font-['Inter'] leading-tight">Contact:</div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-start text-zinc-100 text-sm font-normal font-['Inter'] underline leading-tight">1800 123 4567</div>
                <div className="self-stretch justify-start text-zinc-100 text-sm font-normal font-['Inter'] underline leading-tight">info@fitorb.io</div>
              </div>
            </div>
          </div>
          <div className="size- inline-flex justify-start items-start gap-3">
            <div data-svg-wrapper className="relative">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 13.192C22 7.63537 17.5229 3.13086 12 3.13086C6.47715 3.13086 2 7.63537 2 13.192C2 18.2137 5.65684 22.3761 10.4375 23.1309V16.1003H7.89844V13.192H10.4375V10.9754C10.4375 8.45382 11.9305 7.06098 14.2146 7.06098C15.3088 7.06098 16.4531 7.25749 16.4531 7.25749V9.73347H15.1922C13.95 9.73347 13.5625 10.5091 13.5625 11.3048V13.192H16.3359L15.8926 16.1003H13.5625V23.1309C18.3432 22.3761 22 18.2139 22 13.192Z" fill="#F1F1F1"/>
              </svg>
            </div>
            <div data-svg-wrapper className="relative">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4.13086H8C5.23858 4.13086 3 6.36944 3 9.13086V17.1309C3 19.8923 5.23858 22.1309 8 22.1309H16C18.7614 22.1309 21 19.8923 21 17.1309V9.13086C21 6.36944 18.7614 4.13086 16 4.13086ZM19.25 17.1309C19.2445 18.9235 17.7926 20.3754 16 20.3809H8C6.20735 20.3754 4.75549 18.9235 4.75 17.1309V9.13086C4.75549 7.33821 6.20735 5.88635 8 5.88086H16C17.7926 5.88635 19.2445 7.33821 19.25 9.13086V17.1309ZM16.75 9.38086C17.3023 9.38086 17.75 8.93314 17.75 8.38086C17.75 7.82858 17.3023 7.38086 16.75 7.38086C16.1977 7.38086 15.75 7.82858 15.75 8.38086C15.75 8.93314 16.1977 9.38086 16.75 9.38086ZM12 8.63086C9.51472 8.63086 7.5 10.6456 7.5 13.1309C7.5 15.6162 9.51472 17.6309 12 17.6309C14.4853 17.6309 16.5 15.6162 16.5 13.1309C16.5027 11.9366 16.0294 10.7904 15.1849 9.94594C14.3404 9.10145 13.1943 8.6282 12 8.63086ZM9.25 13.1309C9.25 14.6497 10.4812 15.8809 12 15.8809C13.5188 15.8809 14.75 14.6497 14.75 13.1309C14.75 11.6121 13.5188 10.3809 12 10.3809C10.4812 10.3809 9.25 11.6121 9.25 13.1309Z" fill="#F1F1F1"/>
              </svg>
            </div>
            <div data-svg-wrapper className="relative">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1761 5.13086H19.9362L13.9061 11.9083L21 21.1309H15.4456L11.0951 15.5375L6.11723 21.1309H3.35544L9.80517 13.8817L3 5.13086H8.69545L12.6279 10.2435L17.1761 5.13086ZM16.2073 19.5063H17.7368L7.86441 6.67014H6.2232L16.2073 19.5063Z" fill="#F1F1F1"/>
              </svg>
            </div>
            <div data-svg-wrapper className="relative">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 4.13086C3.67157 4.13086 3 4.80243 3 5.63086V20.6309C3 21.4593 3.67157 22.1309 4.5 22.1309H19.5C20.3284 22.1309 21 21.4593 21 20.6309V5.63086C21 4.80243 20.3284 4.13086 19.5 4.13086H4.5ZM8.52076 8.13358C8.52639 9.08983 7.81061 9.67905 6.96123 9.67483C6.16107 9.67061 5.46357 9.03358 5.46779 8.13499C5.47201 7.28983 6.13998 6.61061 7.00764 6.6303C7.88795 6.64999 8.52639 7.29546 8.52076 8.13358ZM12.2797 10.8926H9.75971H9.7583V19.4525H12.4217V19.2528C12.4217 18.8729 12.4214 18.4929 12.4211 18.1128C12.4203 17.099 12.4194 16.0841 12.4246 15.0706C12.426 14.8245 12.4372 14.5686 12.5005 14.3337C12.7381 13.4562 13.5271 12.8895 14.4074 13.0288C14.9727 13.1173 15.3467 13.445 15.5042 13.978C15.6013 14.3112 15.6449 14.6698 15.6491 15.0172C15.6605 16.0648 15.6589 17.1124 15.6573 18.1601C15.6567 18.5299 15.6561 18.8999 15.6561 19.2697V19.4511H18.328V19.2458C18.328 18.7938 18.3278 18.3419 18.3275 17.89C18.327 16.7605 18.3264 15.631 18.3294 14.5011C18.3308 13.9906 18.276 13.4872 18.1508 12.9936C17.9638 12.2595 17.5771 11.652 16.9485 11.2133C16.5027 10.901 16.0133 10.7 15.4663 10.6775C15.404 10.6749 15.3412 10.6715 15.2781 10.6681C14.9984 10.6529 14.7141 10.6376 14.4467 10.6915C13.6817 10.8448 13.0096 11.195 12.5019 11.8123C12.4429 11.8831 12.3852 11.955 12.2991 12.0623L12.2797 12.0866V10.8926ZM5.68164 19.4553H8.33242V10.8982H5.68164V19.4553Z" fill="#F1F1F1"/>
              </svg>
            </div>
            <div data-svg-wrapper className="relative">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5931 8.09168C21.4792 7.66908 21.2566 7.28368 20.9475 6.97385C20.6383 6.66401 20.2534 6.44054 19.8311 6.32568C18.2651 5.89568 12.0001 5.88868 12.0001 5.88868C12.0001 5.88868 5.73609 5.88168 4.16909 6.29268C3.74701 6.41283 3.36291 6.63946 3.05365 6.95081C2.7444 7.26217 2.52037 7.6478 2.40309 8.07068C1.99009 9.63668 1.98609 12.8847 1.98609 12.8847C1.98609 12.8847 1.98209 16.1487 2.39209 17.6987C2.62209 18.5557 3.29709 19.2327 4.15509 19.4637C5.73709 19.8937 11.9851 19.9007 11.9851 19.9007C11.9851 19.9007 18.2501 19.9077 19.8161 19.4977C20.2386 19.383 20.6238 19.1601 20.9337 18.8509C21.2436 18.5417 21.4675 18.1569 21.5831 17.7347C21.9971 16.1697 22.0001 12.9227 22.0001 12.9227C22.0001 12.9227 22.0201 9.65768 21.5931 8.09168ZM9.99609 15.8937L10.0011 9.89368L15.2081 12.8987L9.99609 15.8937Z" fill="#F1F1F1"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-start items-start gap-6 overflow-hidden">
          <div className="flex-1 inline-flex flex-col justify-start items-start">
            <div className="self-stretch py-2 inline-flex justify-start items-start">
              <div className="flex-1 justify-start text-zinc-100 text-sm font-semibold font-['Inter'] leading-tight">Health Tips</div>
            </div>
            <div className="self-stretch py-2 inline-flex justify-start items-start">
              <div className="flex-1 justify-start text-zinc-100 text-sm font-semibold font-['Inter'] leading-tight">Workout Plans</div>
            </div>
            <div className="self-stretch py-2 inline-flex justify-start items-start">
              <div className="flex-1 justify-start text-zinc-100 text-sm font-semibold font-['Inter'] leading-tight">Nutrition Guides</div>
            </div>
            <div className="self-stretch py-2 inline-flex justify-start items-start">
              <div className="flex-1 justify-start text-zinc-100 text-sm font-semibold font-['Inter'] leading-tight">Success Stories</div>
            </div>
            <div className="self-stretch py-2 inline-flex justify-start items-start">
              <div className="flex-1 justify-start text-zinc-100 text-sm font-semibold font-['Inter'] leading-tight">Contact Us</div>
            </div>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start">
            <div className="self-stretch py-2 inline-flex justify-start items-start">
              <div className="flex-1 justify-start text-zinc-100 text-sm font-semibold font-['Inter'] leading-tight">Blog Posts</div>
            </div>
            <div className="self-stretch py-2 inline-flex justify-start items-start">
              <div className="flex-1 justify-start text-zinc-100 text-sm font-semibold font-['Inter'] leading-tight">FAQs</div>
            </div>
            <div className="self-stretch py-2 inline-flex justify-start items-start">
              <div className="flex-1 justify-start text-zinc-100 text-sm font-semibold font-['Inter'] leading-tight">User Guides</div>
            </div>
            <div className="self-stretch py-2 inline-flex justify-start items-start">
              <div className="flex-1 justify-start text-zinc-100 text-sm font-semibold font-['Inter'] leading-tight">Community Forum</div>
            </div>
            <div className="self-stretch py-2 inline-flex justify-start items-start">
              <div className="flex-1 justify-start text-zinc-100 text-sm font-semibold font-['Inter'] leading-tight">Feedback</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-8">
        <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-white/20"></div>
        <div className="self-stretch inline-flex justify-between items-start">
          <div className="justify-start text-zinc-100 text-sm font-normal font-['Inter'] leading-tight">© 2025 Health Hub. All rights reserved.</div>
          <div className="size- flex justify-start items-start gap-6">
            <div className="justify-start text-zinc-100 text-sm font-normal font-['Inter'] underline leading-tight">Privacy Policy</div>
            <div className="justify-start text-zinc-100 text-sm font-normal font-['Inter'] underline leading-tight">Terms of Service</div>
            <div className="justify-start text-zinc-100 text-sm font-normal font-['Inter'] underline leading-tight">Cookie Settings</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
import React from 'react'

const Team = () => {
  return (
    <div className="self-stretch px-16 py-28 bg-background inline-flex flex-col justify-start items-start gap-20 overflow-hidden">
      <div className="w-[768px] flex flex-col justify-start items-start gap-4">
        <div className="inline-flex justify-start items-center">
          <div className="justify-start text-white text-base font-semibold font-['Inter'] leading-normal">Meet</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-center gap-6">
          <div className="self-stretch justify-start text-border text-5xl font-normal font-['Nunito'] leading-[57.60px]">Our Team</div>
          <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Dedicated professionals committed to your health journey.</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-12">
        <div className="self-stretch inline-flex justify-start items-start gap-12">
          <div className="w-96 inline-flex flex-col justify-start items-start gap-6">
            <img className="self-stretch h-96 rounded-2xl" src="/images/about/Avatar-1.jpg" />
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
              <div className="self-stretch flex flex-col justify-start items-center">
                <div className="self-stretch justify-start text-white text-xl font-semibold font-['Inter'] leading-loose">John Doe</div>
                <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Health Coach</div>
              </div>
              <div className="self-stretch justify-start text-white text-base font-normal font-['Inter'] leading-normal">Passionate about helping others achieve their fitness goals through personalized coaching and support.</div>
            </div>
            <div className="inline-flex justify-start items-start gap-3.5">
              <div data-svg-wrapper className="relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3.24219C3.67157 3.24219 3 3.91376 3 4.74219V19.7422C3 20.5706 3.67157 21.2422 4.5 21.2422H19.5C20.3284 21.2422 21 20.5706 21 19.7422V4.74219C21 3.91376 20.3284 3.24219 19.5 3.24219H4.5ZM8.52076 7.24491C8.52639 8.20116 7.81061 8.79038 6.96123 8.78616C6.16107 8.78194 5.46357 8.14491 5.46779 7.24632C5.47201 6.40116 6.13998 5.72194 7.00764 5.74163C7.88795 5.76132 8.52639 6.40679 8.52076 7.24491ZM12.2797 10.0039H9.75971H9.7583V18.5638H12.4217V18.3641C12.4217 17.9842 12.4214 17.6042 12.4211 17.2241C12.4203 16.2103 12.4194 15.1954 12.4246 14.1819C12.426 13.9358 12.4372 13.6799 12.5005 13.445C12.7381 12.5675 13.5271 12.0008 14.4074 12.1401C14.9727 12.2286 15.3467 12.5563 15.5042 13.0893C15.6013 13.4225 15.6449 13.7811 15.6491 14.1285C15.6605 15.1761 15.6589 16.2237 15.6573 17.2714C15.6567 17.6412 15.6561 18.0112 15.6561 18.381V18.5624H18.328V18.3571C18.328 17.9051 18.3278 17.4532 18.3275 17.0013C18.327 15.8718 18.3264 14.7423 18.3294 13.6124C18.3308 13.1019 18.276 12.5985 18.1508 12.1049C17.9638 11.3708 17.5771 10.7633 16.9485 10.3246C16.5027 10.0124 16.0133 9.81129 15.4663 9.78879C15.404 9.7862 15.3412 9.78281 15.2781 9.7794C14.9984 9.76428 14.7141 9.74892 14.4467 9.80285C13.6817 9.95613 13.0096 10.3063 12.5019 10.9236C12.4429 10.9944 12.3852 11.0663 12.2991 11.1736L12.2797 11.1979V10.0039ZM5.68164 18.5666H8.33242V10.0095H5.68164V18.5666Z" fill="white"/>
                </svg>
              </div>
              <div data-svg-wrapper className="relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.1761 4.24219H19.9362L13.9061 11.0196L21 20.2422H15.4456L11.0951 14.6488L6.11723 20.2422H3.35544L9.80517 12.993L3 4.24219H8.69545L12.6279 9.35481L17.1761 4.24219ZM16.2073 18.6176H17.7368L7.86441 5.78147H6.2232L16.2073 18.6176Z" fill="white"/>
                </svg>
              </div>
              <div data-svg-wrapper className="relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.03145 3 3 7.03145 3 12C3 16.9686 7.03145 21 12 21C16.9588 21 21 16.9686 21 12C21 7.03145 16.9588 3 12 3ZM17.9447 7.14859C19.0184 8.45662 19.6627 10.1258 19.6822 11.9317C19.4284 11.8829 16.8904 11.3655 14.333 11.6876C14.2744 11.5607 14.2256 11.4241 14.167 11.2874C14.0108 10.9165 13.8352 10.5358 13.6594 10.1746C16.4902 9.0228 17.7787 7.36334 17.9447 7.14859ZM12 4.32755C13.9523 4.32755 15.7386 5.05966 17.0955 6.26031C16.9588 6.45553 15.7972 8.00759 13.064 9.03253C11.8048 6.71909 10.4089 4.82538 10.1942 4.53254C10.77 4.39588 11.3753 4.32755 12 4.32755ZM8.72996 5.04989C8.93494 5.32321 10.3015 7.22668 11.5803 9.49131C7.98807 10.448 4.81562 10.4284 4.47397 10.4284C4.9718 8.04664 6.58243 6.06507 8.72996 5.04989ZM4.30803 12.0098C4.30803 11.9317 4.30803 11.8536 4.30803 11.7755C4.63991 11.7852 8.36876 11.8341 12.205 10.6822C12.4295 11.1117 12.6345 11.551 12.8297 11.9902C12.7321 12.0195 12.6247 12.0488 12.5271 12.0781C8.56399 13.3568 6.45553 16.8514 6.27983 17.1442C5.05965 15.7874 4.30803 13.9816 4.30803 12.0098ZM12 19.692C10.2234 19.692 8.58352 19.0868 7.28525 18.0716C7.42191 17.7885 8.98371 14.782 13.3178 13.269C13.3373 13.2592 13.3471 13.2592 13.3666 13.2495C14.4501 16.051 14.8894 18.4034 15.0065 19.077C14.0792 19.4772 13.064 19.692 12 19.692ZM16.2852 18.3742C16.2072 17.9056 15.7972 15.6605 14.7917 12.898C17.2028 12.5173 19.3113 13.1421 19.5749 13.23C19.243 15.3677 18.013 17.2126 16.2852 18.3742Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-96 inline-flex flex-col justify-start items-start gap-6">
            <img className="self-stretch h-96 rounded-2xl" src="/images/about/Avatar-2.jpg" />
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
              <div className="self-stretch flex flex-col justify-start items-center">
                <div className="self-stretch justify-start text-white text-xl font-semibold font-['Inter'] leading-loose">Jane Smith</div>
                <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Nutrition Expert</div>
              </div>
              <div className="self-stretch justify-start text-white text-base font-normal font-['Inter'] leading-normal">Specializing in creating tailored meal plans for optimal health and wellness.</div>
            </div>
            <div className="inline-flex justify-start items-start gap-3.5">
              <div data-svg-wrapper className="relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3.24219C3.67157 3.24219 3 3.91376 3 4.74219V19.7422C3 20.5706 3.67157 21.2422 4.5 21.2422H19.5C20.3284 21.2422 21 20.5706 21 19.7422V4.74219C21 3.91376 20.3284 3.24219 19.5 3.24219H4.5ZM8.52076 7.24491C8.52639 8.20116 7.81061 8.79038 6.96123 8.78616C6.16107 8.78194 5.46357 8.14491 5.46779 7.24632C5.47201 6.40116 6.13998 5.72194 7.00764 5.74163C7.88795 5.76132 8.52639 6.40679 8.52076 7.24491ZM12.2797 10.0039H9.75971H9.7583V18.5638H12.4217V18.3641C12.4217 17.9842 12.4214 17.6042 12.4211 17.2241C12.4203 16.2103 12.4194 15.1954 12.4246 14.1819C12.426 13.9358 12.4372 13.6799 12.5005 13.445C12.7381 12.5675 13.5271 12.0008 14.4074 12.1401C14.9727 12.2286 15.3467 12.5563 15.5042 13.0893C15.6013 13.4225 15.6449 13.7811 15.6491 14.1285C15.6605 15.1761 15.6589 16.2237 15.6573 17.2714C15.6567 17.6412 15.6561 18.0112 15.6561 18.381V18.5624H18.328V18.3571C18.328 17.9051 18.3278 17.4532 18.3275 17.0013C18.327 15.8718 18.3264 14.7423 18.3294 13.6124C18.3308 13.1019 18.276 12.5985 18.1508 12.1049C17.9638 11.3708 17.5771 10.7633 16.9485 10.3246C16.5027 10.0124 16.0133 9.81129 15.4663 9.78879C15.404 9.7862 15.3412 9.78281 15.2781 9.7794C14.9984 9.76428 14.7141 9.74892 14.4467 9.80285C13.6817 9.95613 13.0096 10.3063 12.5019 10.9236C12.4429 10.9944 12.3852 11.0663 12.2991 11.1736L12.2797 11.1979V10.0039ZM5.68164 18.5666H8.33242V10.0095H5.68164V18.5666Z" fill="white"/>
                </svg>
              </div>
              <div data-svg-wrapper className="relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.1761 4.24219H19.9362L13.9061 11.0196L21 20.2422H15.4456L11.0951 14.6488L6.11723 20.2422H3.35544L9.80517 12.993L3 4.24219H8.69545L12.6279 9.35481L17.1761 4.24219ZM16.2073 18.6176H17.7368L7.86441 5.78147H6.2232L16.2073 18.6176Z" fill="white"/>
                </svg>
              </div>
              <div data-svg-wrapper className="relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.03145 3 3 7.03145 3 12C3 16.9686 7.03145 21 12 21C16.9588 21 21 16.9686 21 12C21 7.03145 16.9588 3 12 3ZM17.9447 7.14859C19.0184 8.45662 19.6627 10.1258 19.6822 11.9317C19.4284 11.8829 16.8904 11.3655 14.333 11.6876C14.2744 11.5607 14.2256 11.4241 14.167 11.2874C14.0108 10.9165 13.8352 10.5358 13.6594 10.1746C16.4902 9.0228 17.7787 7.36334 17.9447 7.14859ZM12 4.32755C13.9523 4.32755 15.7386 5.05966 17.0955 6.26031C16.9588 6.45553 15.7972 8.00759 13.064 9.03253C11.8048 6.71909 10.4089 4.82538 10.1942 4.53254C10.77 4.39588 11.3753 4.32755 12 4.32755ZM8.72996 5.04989C8.93494 5.32321 10.3015 7.22668 11.5803 9.49131C7.98807 10.448 4.81562 10.4284 4.47397 10.4284C4.9718 8.04664 6.58243 6.06507 8.72996 5.04989ZM4.30803 12.0098C4.30803 11.9317 4.30803 11.8536 4.30803 11.7755C4.63991 11.7852 8.36876 11.8341 12.205 10.6822C12.4295 11.1117 12.6345 11.551 12.8297 11.9902C12.7321 12.0195 12.6247 12.0488 12.5271 12.0781C8.56399 13.3568 6.45553 16.8514 6.27983 17.1442C5.05965 15.7874 4.30803 13.9816 4.30803 12.0098ZM12 19.692C10.2234 19.692 8.58352 19.0868 7.28525 18.0716C7.42191 17.7885 8.98371 14.782 13.3178 13.269C13.3373 13.2592 13.3471 13.2592 13.3666 13.2495C14.4501 16.051 14.8894 18.4034 15.0065 19.077C14.0792 19.4772 13.064 19.692 12 19.692ZM16.2852 18.3742C16.2072 17.9056 15.7972 15.6605 14.7917 12.898C17.2028 12.5173 19.3113 13.1421 19.5749 13.23C19.243 15.3677 18.013 17.2126 16.2852 18.3742Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-96 inline-flex flex-col justify-start items-start gap-6">
            <img className="self-stretch h-96 rounded-2xl" src="/images/about/Avatar-3.jpg" />
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
              <div className="self-stretch flex flex-col justify-start items-center">
                <div className="self-stretch justify-start text-white text-xl font-semibold font-['Inter'] leading-loose">Mike Johnson</div>
                <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Fitness Trainer</div>
              </div>
              <div className="self-stretch justify-start text-white text-base font-normal font-['Inter'] leading-normal">Dedicated to inspiring clients through innovative workout routines and motivational support.</div>
            </div>
            <div className="inline-flex justify-start items-start gap-3.5">
              <div data-svg-wrapper className="relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3.24219C3.67157 3.24219 3 3.91376 3 4.74219V19.7422C3 20.5706 3.67157 21.2422 4.5 21.2422H19.5C20.3284 21.2422 21 20.5706 21 19.7422V4.74219C21 3.91376 20.3284 3.24219 19.5 3.24219H4.5ZM8.52076 7.24491C8.52639 8.20116 7.81061 8.79038 6.96123 8.78616C6.16107 8.78194 5.46357 8.14491 5.46779 7.24632C5.47201 6.40116 6.13998 5.72194 7.00764 5.74163C7.88795 5.76132 8.52639 6.40679 8.52076 7.24491ZM12.2797 10.0039H9.75971H9.7583V18.5638H12.4217V18.3641C12.4217 17.9842 12.4214 17.6042 12.4211 17.2241C12.4203 16.2103 12.4194 15.1954 12.4246 14.1819C12.426 13.9358 12.4372 13.6799 12.5005 13.445C12.7381 12.5675 13.5271 12.0008 14.4074 12.1401C14.9727 12.2286 15.3467 12.5563 15.5042 13.0893C15.6013 13.4225 15.6449 13.7811 15.6491 14.1285C15.6605 15.1761 15.6589 16.2237 15.6573 17.2714C15.6567 17.6412 15.6561 18.0112 15.6561 18.381V18.5624H18.328V18.3571C18.328 17.9051 18.3278 17.4532 18.3275 17.0013C18.327 15.8718 18.3264 14.7423 18.3294 13.6124C18.3308 13.1019 18.276 12.5985 18.1508 12.1049C17.9638 11.3708 17.5771 10.7633 16.9485 10.3246C16.5027 10.0124 16.0133 9.81129 15.4663 9.78879C15.404 9.7862 15.3412 9.78281 15.2781 9.7794C14.9984 9.76428 14.7141 9.74892 14.4467 9.80285C13.6817 9.95613 13.0096 10.3063 12.5019 10.9236C12.4429 10.9944 12.3852 11.0663 12.2991 11.1736L12.2797 11.1979V10.0039ZM5.68164 18.5666H8.33242V10.0095H5.68164V18.5666Z" fill="white"/>
                </svg>
              </div>
              <div data-svg-wrapper className="relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.1761 4.24219H19.9362L13.9061 11.0196L21 20.2422H15.4456L11.0951 14.6488L6.11723 20.2422H3.35544L9.80517 12.993L3 4.24219H8.69545L12.6279 9.35481L17.1761 4.24219ZM16.2073 18.6176H17.7368L7.86441 5.78147H6.2232L16.2073 18.6176Z" fill="white"/>
                </svg>
              </div>
              <div data-svg-wrapper className="relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.03145 3 3 7.03145 3 12C3 16.9686 7.03145 21 12 21C16.9588 21 21 16.9686 21 12C21 7.03145 16.9588 3 12 3ZM17.9447 7.14859C19.0184 8.45662 19.6627 10.1258 19.6822 11.9317C19.4284 11.8829 16.8904 11.3655 14.333 11.6876C14.2744 11.5607 14.2256 11.4241 14.167 11.2874C14.0108 10.9165 13.8352 10.5358 13.6594 10.1746C16.4902 9.0228 17.7787 7.36334 17.9447 7.14859ZM12 4.32755C13.9523 4.32755 15.7386 5.05966 17.0955 6.26031C16.9588 6.45553 15.7972 8.00759 13.064 9.03253C11.8048 6.71909 10.4089 4.82538 10.1942 4.53254C10.77 4.39588 11.3753 4.32755 12 4.32755ZM8.72996 5.04989C8.93494 5.32321 10.3015 7.22668 11.5803 9.49131C7.98807 10.448 4.81562 10.4284 4.47397 10.4284C4.9718 8.04664 6.58243 6.06507 8.72996 5.04989ZM4.30803 12.0098C4.30803 11.9317 4.30803 11.8536 4.30803 11.7755C4.63991 11.7852 8.36876 11.8341 12.205 10.6822C12.4295 11.1117 12.6345 11.551 12.8297 11.9902C12.7321 12.0195 12.6247 12.0488 12.5271 12.0781C8.56399 13.3568 6.45553 16.8514 6.27983 17.1442C5.05965 15.7874 4.30803 13.9816 4.30803 12.0098ZM12 19.692C10.2234 19.692 8.58352 19.0868 7.28525 18.0716C7.42191 17.7885 8.98371 14.782 13.3178 13.269C13.3373 13.2592 13.3471 13.2592 13.3666 13.2495C14.4501 16.051 14.8894 18.4034 15.0065 19.077C14.0792 19.4772 13.064 19.692 12 19.692ZM16.2852 18.3742C16.2072 17.9056 15.7972 15.6605 14.7917 12.898C17.2028 12.5173 19.3113 13.1421 19.5749 13.23C19.243 15.3677 18.013 17.2126 16.2852 18.3742Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-96 inline-flex flex-col justify-start items-start gap-6">
            <img className="self-stretch h-96 rounded-2xl" src="/images/about/Avatar-2.jpg" />
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
              <div className="self-stretch flex flex-col justify-start items-center">
                <div className="self-stretch justify-start text-white text-xl font-semibold font-['Inter'] leading-loose">Sarah Lee</div>
                <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Wellness Advocate</div>
              </div>
              <div className="self-stretch justify-start text-white text-base font-normal font-['Inter'] leading-normal">Focused on holistic health approaches that empower individuals to thrive in their wellness journey.</div>
            </div>
            <div className="inline-flex justify-start items-start gap-3.5">
              <div data-svg-wrapper className="relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3.24219C3.67157 3.24219 3 3.91376 3 4.74219V19.7422C3 20.5706 3.67157 21.2422 4.5 21.2422H19.5C20.3284 21.2422 21 20.5706 21 19.7422V4.74219C21 3.91376 20.3284 3.24219 19.5 3.24219H4.5ZM8.52076 7.24491C8.52639 8.20116 7.81061 8.79038 6.96123 8.78616C6.16107 8.78194 5.46357 8.14491 5.46779 7.24632C5.47201 6.40116 6.13998 5.72194 7.00764 5.74163C7.88795 5.76132 8.52639 6.40679 8.52076 7.24491ZM12.2797 10.0039H9.75971H9.7583V18.5638H12.4217V18.3641C12.4217 17.9842 12.4214 17.6042 12.4211 17.2241C12.4203 16.2103 12.4194 15.1954 12.4246 14.1819C12.426 13.9358 12.4372 13.6799 12.5005 13.445C12.7381 12.5675 13.5271 12.0008 14.4074 12.1401C14.9727 12.2286 15.3467 12.5563 15.5042 13.0893C15.6013 13.4225 15.6449 13.7811 15.6491 14.1285C15.6605 15.1761 15.6589 16.2237 15.6573 17.2714C15.6567 17.6412 15.6561 18.0112 15.6561 18.381V18.5624H18.328V18.3571C18.328 17.9051 18.3278 17.4532 18.3275 17.0013C18.327 15.8718 18.3264 14.7423 18.3294 13.6124C18.3308 13.1019 18.276 12.5985 18.1508 12.1049C17.9638 11.3708 17.5771 10.7633 16.9485 10.3246C16.5027 10.0124 16.0133 9.81129 15.4663 9.78879C15.404 9.7862 15.3412 9.78281 15.2781 9.7794C14.9984 9.76428 14.7141 9.74892 14.4467 9.80285C13.6817 9.95613 13.0096 10.3063 12.5019 10.9236C12.4429 10.9944 12.3852 11.0663 12.2991 11.1736L12.2797 11.1979V10.0039ZM5.68164 18.5666H8.33242V10.0095H5.68164V18.5666Z" fill="white"/>
                </svg>
              </div>
              <div className="size-6 relative overflow-hidden">
                <div className="size-4 left-[3px] top-[4.24px] absolute bg-white" />
              </div>
              <div className="size-6 relative overflow-hidden">
                <div className="size-4 left-[3px] top-[3px] absolute bg-white" />
              </div>
            </div>
          </div>
          <div className="w-96 inline-flex flex-col justify-start items-start gap-6">
            <img className="self-stretch h-96 rounded-2xl" src="/images/about/Avatar-2.jpg" />
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
              <div className="self-stretch flex flex-col justify-start items-center">
                <div className="self-stretch justify-start text-white text-xl font-semibold font-['Inter'] leading-loose">Emily Davis</div>
                <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Mental Coach</div>
              </div>
              <div className="self-stretch justify-start text-white text-base font-normal font-['Inter'] leading-normal">Guiding clients to build resilience and a positive mindset for lasting health improvements.</div>
            </div>
            <div className="inline-flex justify-start items-start gap-3.5">
              <div className="size-6 relative overflow-hidden">
                <div className="size-4 left-[3px] top-[3.24px] absolute bg-white" />
              </div>
              <div className="size-6 relative overflow-hidden">
                <div className="size-4 left-[3px] top-[4.24px] absolute bg-white" />
              </div>
              <div className="size-6 relative overflow-hidden">
                <div className="size-4 left-[3px] top-[3px] absolute bg-white" />
              </div>
            </div>
          </div>
          <div className="w-96 inline-flex flex-col justify-start items-start gap-6">
            <img className="self-stretch h-96 rounded-2xl" src="/images/about/Avatar-1.jpg" />
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
              <div className="self-stretch flex flex-col justify-start items-center">
                <div className="self-stretch justify-start text-white text-xl font-semibold font-['Inter'] leading-loose">Tom Brown</div>
                <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Exercise Specialist</div>
              </div>
              <div className="self-stretch justify-start text-white text-base font-normal font-['Inter'] leading-normal">Expert in designing effective exercise programs tailored to individual needs and fitness levels.</div>
            </div>
            <div className="inline-flex justify-start items-start gap-3.5">
              <div className="size-6 relative overflow-hidden">
                <div className="size-4 left-[3px] top-[3.24px] absolute bg-white" />
              </div>
              <div className="size-6 relative overflow-hidden">
                <div className="size-4 left-[3px] top-[4.24px] absolute bg-white" />
              </div>
              <div className="size-6 relative overflow-hidden">
                <div className="size-4 left-[3px] top-[3px] absolute bg-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="flex justify-start items-start gap-2">
            <div className="size-2 bg-white rounded-full" />
            <div className="size-2 opacity-20 bg-white rounded-full" />
            <div className="size-2 opacity-20 bg-white rounded-full" />
            <div className="size-2 opacity-20 bg-white rounded-full" />
            <div className="size-2 opacity-20 bg-white rounded-full" />
            <div className="size-2 opacity-20 bg-white rounded-full" />
          </div>
          <div className="flex justify-start items-start gap-4">
            <div data-direction="Left" className="p-3 bg-foreground rounded-sm outline-1 outline-offset-[-1px] outline-black/20 flex justify-center items-center gap-2">
              <div data-svg-wrapper className="relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.707 17.293L8.414 13H18V11H8.414L12.707 6.70697L11.293 5.29297L4.586 12L11.293 18.707L12.707 17.293Z" fill="#0F0F0F"/>
                </svg>
              </div>
            </div>
            <div data-direction="Right" className="p-3 bg-foreground rounded-sm outline-1 outline-offset-[-1px] outline-black/20 flex justify-center items-center gap-2">
              <div data-svg-wrapper className="relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.293 17.293L12.707 18.707L19.414 12L12.707 5.29297L11.293 6.70697L15.586 11H6V13H15.586L11.293 17.293Z" fill="#0F0F0F"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-6">
        <div className="w-[768px] flex flex-col justify-start items-center gap-4">
          <div className="self-stretch justify-start text-border text-3xl font-normal font-['Nunito'] leading-10">We're hiring!</div>
          <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Looking for talented individuals to join our mission.</div>
        </div>
        <div className="w-40 flex flex-col justify-start items-start gap-4">
          <div data-alternate="True" data-icon-position="No icon" data-small="False" data-style="Secondary" className="px-6 py-2.5 rounded-md outline-1 outline-border inline-flex justify-center items-center gap-2">
            <div className="justify-start text-border text-base font-medium font-['Inter'] leading-normal">Open positions</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Team

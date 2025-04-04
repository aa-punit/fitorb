import React from 'react'

const Pricing = () => {
  return (
    <div className="w-[1440px] px-16 py-28 bg-background inline-flex flex-col justify-start items-center gap-20 overflow-hidden">
      <div className="w-[768px] flex flex-col justify-start items-center gap-4">
        <div className="size- inline-flex justify-start items-center">
          <div className="text-center justify-start text-white text-base font-semibold font-['Inter'] leading-normal">Affordable</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-center gap-6">
          <div className="self-stretch text-center justify-start text-border text-5xl font-normal font-['Nunito'] leading-[57.60px]">Pricing Plans</div>
          <div className="self-stretch text-center justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">Choose the plan that fits your health journey.</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-center gap-12">
        <div className="size- p-1 bg-foreground rounded-md outline outline-1 outline-offset-[-1px] outline-Opacity-Neutral-Darkest-15/20 inline-flex justify-start items-start">
          <div className="size- px-6 py-2.5 bg-background rounded-sm outline outline-1 outline-offset-[-1px] outline-Opacity-Neutral-Darkest-15/20 flex justify-center items-center gap-2">
            <div className="justify-start text-white text-base font-medium font-['Inter'] leading-normal">Monthly</div>
          </div>
          <div className="size- px-6 py-2.5 bg-Opacity-Transparent/0 rounded-sm outline outline-1 outline-offset-[-1px] outline-Opacity-Transparent/0 flex justify-center items-center gap-2">
            <div className="justify-start text-white text-base font-normal font-['Inter'] leading-normal">Yearly</div>
          </div>
        </div>
        <div className="self-stretch h-[583px] inline-flex justify-start items-start gap-8">
          <div className="flex-1 self-stretch p-8 bg-foreground rounded-2xl outline outline-1 outline-offset-[-1px] outline-Color-Scheme-1-Border/20 inline-flex flex-col justify-between items-end">
            <div className="self-stretch flex flex-col justify-start items-end gap-8">
              <div className="size- flex flex-col justify-start items-end gap-4">
                <div className="w-80 flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-white text-xl font-normal font-['Nunito'] leading-7">Basic Plan</div>
                  <div className="self-stretch justify-start text-white text-6xl font-normal font-['Nunito'] leading-[67.20px]">Free</div>
                </div>
              </div>
              <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Color-Scheme-1-Border/20"></div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch justify-start text-white text-base font-normal font-['Inter'] leading-normal">Includes:</div>
                <div className="self-stretch py-2 flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch inline-flex justify-start items-start gap-4">
                    <div data-svg-wrapper className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="justify-start text-black text-base font-normal font-['Inter'] leading-normal">Basic workout plans</div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-4">
                    <div data-svg-wrapper className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="justify-start text-black text-base font-normal font-['Inter'] leading-normal">BMI Tracking</div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-4">
                    <div data-svg-wrapper className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="justify-start text-black text-base font-normal font-['Inter'] leading-normal">Exercise Library</div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-4">
                    <div data-svg-wrapper className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="justify-start text-black text-base font-normal font-['Inter'] leading-normal">Community access </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div data-alternate="True" data-icon-position="No icon" data-small="False" data-style="Primary" className="self-stretch px-6 py-2.5 bg-Color-Neutral-Darkest rounded-md outline outline-1 outline-Color-Neutral-Darkest inline-flex justify-center items-center gap-2">
                <div className="justify-start text-Color-White text-base font-medium font-['Inter'] leading-normal">Get started</div>
              </div>
            </div>
          </div>
          <div className="flex-1 self-stretch p-8 bg-foreground rounded-2xl outline outline-1 outline-offset-[-1px] outline-Color-Scheme-1-Border/20 inline-flex flex-col justify-between items-end">
            <div className="self-stretch flex flex-col justify-start items-end gap-8">
              <div className="size- flex flex-col justify-start items-end gap-4">
                <div className="w-80 flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-white text-xl font-normal font-['Nunito'] leading-7">Premium Plan</div>
                  <div className="self-stretch justify-start text-white text-6xl font-normal font-['Nunito'] leading-[67.20px]">$10 /mo</div>
                </div>
              </div>
              <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Color-Scheme-1-Border/20"></div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch justify-start text-white text-base font-normal font-['Inter'] leading-normal">Includes:</div>
                <div className="self-stretch py-2 flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch inline-flex justify-start items-start gap-4">
                    <div data-svg-wrapper className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="justify-start text-black text-base font-normal font-['Inter'] leading-normal">All basic features</div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-4">
                    <div data-svg-wrapper className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="justify-start text-black text-base font-normal font-['Inter'] leading-normal">Personalized workout plans</div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-4">
                    <div data-svg-wrapper className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="justify-start text-black text-base font-normal font-['Inter'] leading-normal">Nutrition Guidance</div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-4">
                    <div data-svg-wrapper className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="justify-start text-black text-base font-normal font-['Inter'] leading-normal">Progress Tracking</div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-4">
                    <div data-svg-wrapper className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="justify-start text-black text-base font-normal font-['Inter'] leading-normal">Expert Video Tutorials</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div data-alternate="True" data-icon-position="No icon" data-small="False" data-style="Primary" className="self-stretch px-6 py-2.5 bg-Color-Neutral-Darkest rounded-md outline outline-1 outline-Color-Neutral-Darkest inline-flex justify-center items-center gap-2">
                <div className="justify-start text-Color-White text-base font-medium font-['Inter'] leading-normal">Get started</div>
              </div>
            </div>
          </div>
          <div className="flex-1 self-stretch p-8 bg-foreground rounded-2xl outline outline-1 outline-offset-[-1px] outline-Color-Scheme-1-Border/20 inline-flex flex-col justify-between items-end">
            <div className="self-stretch flex flex-col justify-start items-end gap-8">
              <div className="size- flex flex-col justify-start items-end gap-4">
                <div className="w-80 flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-white text-xl font-normal font-['Nunito'] leading-7">Pro Plan</div>
                  <div className="self-stretch justify-start text-white text-6xl font-normal font-['Nunito'] leading-[67.20px]">$20/mo</div>
                </div>
              </div>
              <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Color-Scheme-1-Border/20"></div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch justify-start text-white text-base font-normal font-['Inter'] leading-normal">Includes:</div>
                <div className="self-stretch py-2 flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch inline-flex justify-start items-start gap-4">
                    <div data-svg-wrapper className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="justify-start text-black text-base font-normal font-['Inter'] leading-normal">All Premuim Features  </div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-4">
                    <div data-svg-wrapper className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="justify-start text-black text-base font-normal font-['Inter'] leading-normal">1-on-1 Coaching</div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-4">
                    <div data-svg-wrapper className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="justify-start text-black text-base font-normal font-['Inter'] leading-normal">Custom Meal Plans</div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-4">
                    <div data-svg-wrapper className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="justify-start text-black text-base font-normal font-['Inter'] leading-normal">Advanced Analytics</div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-4">
                    <div data-svg-wrapper className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="justify-start text-black text-base font-normal font-['Inter'] leading-normal">Priority Support</div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-4">
                    <div data-svg-wrapper className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="justify-start text-black text-base font-normal font-['Inter'] leading-normal">Exclusive Content</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div data-alternate="True" data-icon-position="No icon" data-small="False" data-style="Primary" className="self-stretch px-6 py-2.5 bg-Color-Neutral-Darkest rounded-md outline outline-1 outline-Color-Neutral-Darkest inline-flex justify-center items-center gap-2">
                <div className="justify-start text-Color-White text-base font-medium font-['Inter'] leading-normal">Get started</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Pricing

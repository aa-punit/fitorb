import React from 'react'

const Contact2 = () => {
  return (
    <section className="self-stretch px-16 py-28 bg-foreground flex flex-col gap-20 overflow-hidden">
      <div className="self-stretch flex justify-start items-start gap-20">
        <article className="flex-1 flex flex-col gap-8">
          <header className="self-stretch flex flex-col gap-4">
            <h2 className="text-black text-base font-semibold font-['Inter']">Connect</h2>
            <div className="self-stretch flex flex-col gap-6">
              <h1 className="text-black text-5xl font-normal font-['Nunito'] leading-[57.60px]">Get in Touch</h1>
              <p className="text-black text-lg font-normal font-['Inter'] leading-relaxed">We'd love to hear from you!</p>
            </div>
          </header>
          <address className="py-2 flex flex-col gap-4 not-italic">
            <div className="flex items-center gap-4">
              <span data-svg-wrapper>
                {/* Email Icon */}
              </span>
              <a href="mailto:hello@fitorb.io" className="text-black text-base font-normal font-['Inter']">hello@fitorb.io</a>
            </div>
            <div className="flex items-center gap-4">
              <span data-svg-wrapper>
                {/* Phone Icon */}
              </span>
              <a href="tel:+15550000000" className="text-black text-base font-normal font-['Inter']">+1 (555) 000-0000</a>
            </div>
            <div className="flex items-center gap-4">
              <span data-svg-wrapper>
                {/* Location Icon */}
              </span>
              <p className="text-black text-base font-normal font-['Inter']">123 Sample St, Sydney NSW 2000 AU</p>
            </div>
          </address>
        </article>
        <form className="flex-1 flex flex-col gap-6">
          <label className="flex flex-col gap-2">
            <span className="text-black text-base font-normal font-['Inter']">Name</span>
            <input type="text" className="px-3 py-2 bg-black/5 rounded-md outline-1 outline-black/20" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-black text-base font-normal font-['Inter']">Email</span>
            <input type="email" className="px-3 py-2 bg-black/5 rounded-md outline-1 outline-black/20" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-black text-base font-normal font-['Inter']">Message</span>
            <textarea className="h-44 p-3 bg-black/5 rounded-md outline-1 outline-black/20" placeholder="Write your message..."></textarea>
          </label>
          <button type="submit" className="px-6 py-2.5 bg-Color-Neutral-Darkest rounded-md outline outline-1 outline-black inline-flex justify-center items-center gap-2 ">
            <span data-svg-wrapper>
              {/* Send Icon */}
            </span>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
export default Contact2

/* eslint-disable @next/next/no-img-element */
// Section 06 — UI SCREENS. Ported from Figma node 3:1768 (PinReal. v2).
import { ui } from "./assets";

export function UiScreens() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
        <div className="[word-break:break-word] content-stretch flex items-baseline justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap">
          <div className="content-stretch flex gap-[22px] items-baseline overflow-clip relative shrink-0">
            <p className="pr-newsreader font-normal relative shrink-0 text-[#e60023] text-[46px]">
              06
            </p>
            <p className="pr-roboto font-medium relative shrink-0 text-[#26262a] text-[15px] tracking-[2.4px]">
              UI SCREENS
            </p>
          </div>
          <p className="pr-roboto font-medium relative shrink-0 text-[#7a7a75] text-[11px] tracking-[1.4px]">
            06 / 06
          </p>
        </div>
        <div className="bg-[rgba(38,38,42,0.16)] h-[2px] relative shrink-0 w-full" />
      </div>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
        <div className="border-[rgba(38,38,42,0.12)] border-b border-solid content-stretch flex flex-col md:flex-row gap-[28px] md:gap-[48px] items-start overflow-clip pb-[44px] relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full md:w-[300px]">
            <p className="pr-roboto font-medium leading-[normal] relative shrink-0 text-[#e60023] text-[10px] tracking-[1.6px] whitespace-nowrap">
              FLOW 01 / 08
            </p>
            <p className="pr-newsreader font-normal leading-[1.22] min-w-full relative shrink-0 text-[#26262a] text-[30px] w-[min-content]">
              Splash Screen
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] items-start min-w-px overflow-clip relative">
            <div className="h-[400px] relative shrink-0 w-[197.962px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate} />
              </div>
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
            </div>
          </div>
        </div>
        <div className="border-[rgba(38,38,42,0.12)] border-b border-solid content-stretch flex flex-col md:flex-row gap-[28px] md:gap-[48px] items-start overflow-clip py-[44px] relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full md:w-[300px]">
            <p className="pr-roboto font-medium leading-[normal] relative shrink-0 text-[#e60023] text-[10px] tracking-[1.6px] whitespace-nowrap">
              FLOW 02 / 08
            </p>
            <p className="pr-newsreader font-normal leading-[1.22] min-w-full relative shrink-0 text-[#26262a] text-[30px] w-[min-content]">
              Posting a PinReal.
            </p>
            <p className="pr-roboto font-normal leading-[1.74] min-w-full relative shrink-0 text-[#7a7a75] text-[15px] w-[min-content]">
              Users can choose to post a PinReal to unlock their friend’s PinReals. or scroll through their feed.
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start min-w-px max-w-full overflow-x-auto relative">
            <div className="h-[400px] relative shrink-0 w-[197.962px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate1} />
              </div>
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
            </div>
            <div className="h-[400px] relative shrink-0 w-[410.36px]">
              <div className="absolute h-[400px] left-0 top-0 w-[197.962px]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                  <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate2} />
                </div>
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
              </div>
              <div className="absolute h-[400px] left-[205.18px] top-0 w-[197.962px]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                  <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate3} />
                </div>
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
              </div>
            </div>
          </div>
        </div>
        <div className="border-[rgba(38,38,42,0.12)] border-b border-solid content-stretch flex flex-col md:flex-row gap-[28px] md:gap-[48px] items-start overflow-clip py-[44px] relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full md:w-[300px]">
            <p className="pr-roboto font-medium leading-[normal] relative shrink-0 text-[#e60023] text-[10px] tracking-[1.6px] whitespace-nowrap">
              FLOW 03 / 08
            </p>
            <p className="pr-newsreader font-normal leading-[1.22] min-w-full relative shrink-0 text-[#26262a] text-[30px] w-[min-content]">
              Retaking a PinReal.
            </p>
            <p className="pr-roboto font-normal leading-[1.74] min-w-full relative shrink-0 text-[#7a7a75] text-[15px] w-[min-content]">
              Users have up to 2 retakes for posting the PinReal and 10 minutes in total to post “on time.” After the first attempt, the remaining time and retakes are displayed.
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] items-start min-w-px overflow-clip relative">
            <div className="h-[400px] relative shrink-0 w-[410.36px]">
              <div className="absolute h-[400px] left-0 top-0 w-[197.962px]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                  <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate4} />
                </div>
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
              </div>
              <div className="absolute h-[400px] left-[205.18px] top-0 w-[197.962px]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                  <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate5} />
                </div>
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
              </div>
            </div>
          </div>
        </div>
        <div className="border-[rgba(38,38,42,0.12)] border-b border-solid content-stretch flex flex-col gap-[28px] items-start overflow-clip py-[44px] relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full md:w-[560px]">
            <p className="pr-roboto font-medium leading-[normal] relative shrink-0 text-[#e60023] text-[10px] tracking-[1.6px] whitespace-nowrap">
              FLOW 04 / 08
            </p>
            <p className="pr-newsreader font-normal leading-[1.22] min-w-full relative shrink-0 text-[#26262a] text-[30px] w-[min-content]">
              Editing a PinReal.
            </p>
            <p className="pr-roboto font-normal leading-[1.74] min-w-full relative shrink-0 text-[#7a7a75] text-[15px] w-[min-content]">
              Users can resize, write a caption, and select theme tags relevant to their PinReal.
            </p>
          </div>
          <div className="content-stretch flex gap-[20px] items-start min-w-px max-w-full overflow-x-auto relative shrink-0 w-full">
            <div className="h-[400px] relative shrink-0 w-[197.962px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate6} />
              </div>
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
            </div>
            <div className="h-[400px] relative shrink-0 w-[197.962px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate7} />
              </div>
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
            </div>
            <div className="h-[400px] relative shrink-0 w-[197.962px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate8} />
              </div>
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
            </div>
            <div className="h-[400px] relative shrink-0 w-[197.962px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate9} />
              </div>
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
            </div>
          </div>
        </div>
        <div className="border-[rgba(38,38,42,0.12)] border-b border-solid content-stretch flex flex-col md:flex-row gap-[28px] md:gap-[48px] items-start overflow-clip py-[44px] relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full md:w-[300px]">
            <p className="pr-roboto font-medium leading-[normal] relative shrink-0 text-[#e60023] text-[10px] tracking-[1.6px] whitespace-nowrap">
              FLOW 05 / 08
            </p>
            <p className="pr-newsreader font-normal leading-[1.22] min-w-full relative shrink-0 text-[#26262a] text-[30px] w-[min-content]">
              Posting the PinReal.
            </p>
            <p className="pr-roboto font-normal leading-[1.74] min-w-full relative shrink-0 text-[#7a7a75] text-[15px] w-[min-content]">
              Users will see the display of their final PinReal. and can successfully post it.
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start min-w-px max-w-full overflow-x-auto relative">
            <div className="h-[400px] relative shrink-0 w-[197.962px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate10} />
              </div>
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
            </div>
            <div className="h-[400px] relative shrink-0 w-[197.962px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate11} />
              </div>
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
            </div>
          </div>
        </div>
        <div className="border-[rgba(38,38,42,0.12)] border-b border-solid content-stretch flex flex-col gap-[28px] items-start overflow-clip py-[44px] relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full md:w-[560px]">
            <p className="pr-roboto font-medium leading-[normal] relative shrink-0 text-[#e60023] text-[10px] tracking-[1.6px] whitespace-nowrap">
              FLOW 06 / 08
            </p>
            <p className="pr-newsreader font-normal leading-[1.22] min-w-full relative shrink-0 text-[#26262a] text-[30px] w-[min-content]">
              Pinning a PinReal.
            </p>
            <p className="pr-roboto font-normal leading-[1.74] min-w-full relative shrink-0 text-[#7a7a75] text-[15px] w-[min-content]">
              Users can pin a post to an existing board or create a new one to organize their “pinned” into different categories.
            </p>
          </div>
          <div className="content-stretch flex gap-[20px] items-start min-w-px max-w-full overflow-x-auto relative shrink-0 w-full">
            <div className="h-[400px] relative shrink-0 w-[197.962px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate12} />
              </div>
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
            </div>
            <div className="h-[400px] relative shrink-0 w-[197.962px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate13} />
              </div>
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
            </div>
            <div className="h-[400px] relative shrink-0 w-[197.962px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate14} />
              </div>
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
            </div>
            <div className="h-[400px] relative shrink-0 w-[197.962px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate15} />
              </div>
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
            </div>
            <div className="h-[400px] relative shrink-0 w-[197.962px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate16} />
              </div>
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
            </div>
          </div>
        </div>
        <div className="border-[rgba(38,38,42,0.12)] border-b border-solid content-stretch flex flex-col md:flex-row gap-[28px] md:gap-[48px] items-start overflow-clip py-[44px] relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full md:w-[300px]">
            <p className="pr-roboto font-medium leading-[normal] relative shrink-0 text-[#e60023] text-[10px] tracking-[1.6px] whitespace-nowrap">
              FLOW 07 / 08
            </p>
            <p className="pr-newsreader font-normal leading-[1.22] min-w-full relative shrink-0 text-[#26262a] text-[30px] w-[min-content]">
              Filter Pinreals.
            </p>
            <p className="pr-roboto font-normal leading-[1.74] min-w-full relative shrink-0 text-[#7a7a75] text-[15px] w-[min-content]">
              Theme tags on each post let users filter PinReals. by interest.
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-start min-w-px max-w-full overflow-x-auto relative">
            <div className="h-[400px] relative shrink-0 w-[197.962px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate17} />
              </div>
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
            </div>
            <div className="h-[400px] relative shrink-0 w-[197.962px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.571px] left-[calc(50%-0.05px)] overflow-clip rounded-[13.142px] top-[calc(50%-0.21px)] w-[177.142px]">
                <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[13.142px] size-full" src={ui.ScreenToUpdate18} />
              </div>
              <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col md:flex-row gap-[28px] md:gap-[48px] items-start overflow-clip py-[44px] relative shrink-0 w-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full md:w-[300px]">
            <p className="pr-roboto font-medium leading-[normal] relative shrink-0 text-[#e60023] text-[10px] tracking-[1.6px] whitespace-nowrap">
              FLOW 08 / 08
            </p>
            <p className="pr-newsreader font-normal leading-[1.22] min-w-full relative shrink-0 text-[#26262a] text-[30px] w-[min-content]">
              Final Feeds
            </p>
            <p className="pr-roboto font-normal leading-[1.74] min-w-full relative shrink-0 text-[#7a7a75] text-[15px] w-[min-content]">{`Homepage and unlocked friends & following PinReal. feeds`}</p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[28px] items-start min-w-px max-w-full overflow-x-auto relative">
            <div className="h-[725px] relative shrink-0 w-[198px]">
              <div className="absolute contents left-0 top-0">
                <div className="absolute bg-white h-[380.259px] left-[11.09px] top-[9.86px] w-[175.757px]">
                  <div className="absolute contents left-0 top-[355.21px]">
                    <div className="absolute bg-[#d9d9d9] h-[25.049px] left-0 rounded-tl-[10.266px] rounded-tr-[10.266px] top-[355.21px] w-[175.757px]" />
                    <div className="absolute left-[114.98px] size-[12.723px] top-[361.78px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.PinRealIcon} />
                    </div>
                    <div className="absolute left-[48.46px] size-[12.724px] top-[361.78px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.ExploreIcon} />
                    </div>
                    <div className="absolute inset-[95.14%_46.27%_1.51%_46.5%]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.CreateIcon} />
                    </div>
                    <div className="absolute inset-[95.14%_8.65%_1.51%_84.11%] overflow-clip">
                      <div className="absolute inset-[12.5%]">
                        <div className="absolute inset-[-4.3%]">
                          <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={ui.Vector} />
                        </div>
                      </div>
                      <div className="absolute flex inset-[12.91%_12.85%_12.85%_12.91%] items-center justify-center" style={{ containerType: "size" }}>
                        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                          <div className="relative size-full">
                            <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" height="9.446" src={ui.ProfilePicture} width="9.446" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-[95.14%_84.35%_1.51%_8.41%]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.HomeIcon} />
                    </div>
                  </div>
                  <div className="absolute contents left-0 top-0">
                    <div className="absolute bg-[var(--backgrounds\/primary,white)] content-stretch flex flex-col h-[20.534px] items-start left-0 pt-[8.624px] top-0 w-[175.77px]">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px pl-[6.571px] pr-[2.464px] relative">
                          <p className="[word-break:break-word] pr-roboto font-semibold font-semibold leading-[3.71px] not-italic relative shrink-0 text-[2.87px] text-[color:var(--labels\/primary,black)] text-center whitespace-nowrap">
                            9:41
                          </p>
                        </div>
                        <div className="h-[4.107px] relative shrink-0 w-[50.924px]" />
                        <div className="content-stretch flex flex-[1_0_0] gap-[2.875px] items-center justify-center min-w-px pl-[2.464px] pr-[6.571px] relative">
                          <div className="h-[5.021px] relative shrink-0 w-[7.885px]">
                            <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.CellularConnection} />
                          </div>
                          <div className="h-[5.063px] relative shrink-0 w-[7.04px]">
                            <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.Wifi} />
                          </div>
                          <div className="h-[5.339px] relative shrink-0 w-[11.223px]">
                            <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.Battery} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute h-0 left-0 top-[48.46px] w-[175.757px]">
                      <div className="absolute inset-[-0.41px_-0.93%_-3.29px_-0.93%]">
                        <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={ui.UpperDivider} />
                      </div>
                    </div>
                    <div className="absolute left-[153.17px] size-[16.016px] top-[26.69px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.CommunicationPaperPlane} />
                    </div>
                    <div className="absolute inset-[7.34%_15.51%_89.32%_78.04%]">
                      <div className="absolute inset-[-5.26%_-5.88%]">
                        <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={ui.Vector1} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[14.783px] left-[8.21px] overflow-x-auto overflow-y-clip top-[50.92px] w-[167.544px]">
                    <div className="absolute contents left-0 top-0">
                      <p className="[word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[normal] left-0 not-italic text-[8.213px] text-black top-0 whitespace-nowrap">
                        All
                      </p>
                      <p className="[word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[normal] left-[16.43px] not-italic text-[#858585] text-[8.213px] top-0 whitespace-nowrap">
                        Interior Design
                      </p>
                      <p className="[word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[normal] left-[80.08px] not-italic text-[#858585] text-[8.213px] top-0 whitespace-nowrap">
                        Fashion
                      </p>
                      <p className="[word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[normal] left-[115.8px] not-italic text-[#858585] text-[8.213px] top-0 whitespace-nowrap">
                        Makeup Trends
                      </p>
                      <p className="[word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[normal] left-[179.45px] not-italic text-[#858585] text-[8.213px] top-0 whitespace-nowrap">
                        Vacation Spots
                      </p>
                      <p className="[word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[normal] left-[243.1px] not-italic text-[#858585] text-[8.213px] top-0 whitespace-nowrap">
                        Recipes
                      </p>
                      <p className="[word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[normal] left-[278.83px] not-italic text-[#858585] text-[8.213px] top-0 whitespace-nowrap">
                        Jewelry
                      </p>
                      <div className="absolute h-0 left-0 top-[13.14px] w-[10.677px]">
                        <div className="absolute inset-[-0.62px_-5.77%]">
                          <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={ui.Line2} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[26.504px] left-[9.86px] top-[19.9px] w-[48.867px]">
                    <p className="[word-break:break-word] absolute pr-pacifico leading-[normal] left-0 not-italic text-[14.731px] text-black top-0 whitespace-nowrap">
                      Pin
                    </p>
                    <div className="absolute flex items-center justify-center left-[8.28px] size-[14.595px] top-[-0.17px]">
                      <div className="flex-none rotate-[-17.33deg]">
                        <button className="content-stretch cursor-pointer flex items-center p-[2.631px] relative">
                          <div className="relative shrink-0 size-[6.391px]">
                            <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.PinIcon} />
                          </div>
                        </button>
                      </div>
                    </div>
                    <p className="[word-break:break-word] absolute pr-palanquin leading-[0] left-[20.71px] not-italic text-[14.731px] text-[rgba(230,0,35,0.41)] top-0 tracking-[-0.7365px] whitespace-nowrap">
                      <span className="leading-[normal]">R</span>
                      <span className="leading-[normal] tracking-[-0.48px]">e</span>
                      <span className="leading-[normal]">al.</span>
                    </p>
                  </div>
                </div>
                <div className="absolute drop-shadow-[61.602px_20.534px_51.335px_rgba(9,20,50,0.15)] h-[400px] left-0 top-0 w-[197.961px]">
                  <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
                </div>
                <div className="absolute h-[306.342px] left-[17.25px] top-[83.77px] w-[163.027px]">
                  <div className="absolute contents left-[84.59px] top-[144.14px]">
                    <div className="absolute bg-[#d9d9d9] h-[135.513px] left-[84.59px] rounded-[8.213px] top-[144.14px] w-[78.434px]" />
                    <div className="absolute h-[122.783px] left-[84.59px] rounded-tl-[8.213px] rounded-tr-[8.213px] top-[144.14px] w-[78.434px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8.213px] rounded-tr-[8.213px] size-full" src={ui.MariaOrlovaB37MDyPzdJmUnsplash1} />
                    </div>
                    <div className="absolute left-[151.12px] size-[6.982px] top-[270.21px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.MenuMoreHorizontal} />
                    </div>
                    <p className="[word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[7.539px] left-[98.97px] not-italic text-[4.106px] text-black top-[269.8px] whitespace-nowrap">
                      hotel.milton
                    </p>
                    <div className="absolute left-[89.52px] size-[6.982px] top-[270.21px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.UserUserCircle} />
                    </div>
                  </div>
                  <div className="absolute contents left-[1.64px] top-[197.11px]">
                    <div className="absolute bg-[#d9d9d9] h-[135.513px] left-[1.64px] rounded-[8.213px] top-[197.11px] w-[78.434px]" />
                    <div className="absolute h-[122.783px] left-[1.64px] rounded-tl-[8.213px] rounded-tr-[8.213px] top-[197.11px] w-[78.434px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8.213px] rounded-tr-[8.213px] size-full" src={ui.MariaOrlovaB37MDyPzdJmUnsplash2} />
                    </div>
                    <div className="absolute left-[68.17px] size-[6.982px] top-[323.18px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.MenuMoreHorizontal} />
                    </div>
                    <p className="[word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[7.539px] left-[16.02px] not-italic text-[4.106px] text-black top-[322.77px] whitespace-nowrap">
                      skyviews
                    </p>
                    <div className="absolute left-[6.57px] size-[6.982px] top-[323.18px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.UserUserCircle} />
                    </div>
                  </div>
                  <div className="absolute contents left-[2.05px] top-0">
                    <div className="absolute bg-[#d9d9d9] h-[86.236px] left-[2.05px] rounded-[8.213px] shadow-[0px_1.643px_1.643px_0px_rgba(0,0,0,0.25)] top-0 w-[78.434px]" />
                    <div className="absolute left-[68.17px] size-[6.982px] top-[75.97px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.MenuMoreHorizontal} />
                    </div>
                    <div className="absolute h-[73.916px] left-[2.05px] rounded-tl-[8.213px] rounded-tr-[8.213px] top-0 w-[78.434px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8.213px] rounded-tr-[8.213px] size-full" src={ui.AlejandraRiosLh56T1ASz8Unsplash1} />
                    </div>
                    <p className="-translate-x-1/2 [word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[7.539px] left-[27.28px] not-italic text-[4.106px] text-black text-center top-[75.56px] whitespace-nowrap">
                      katie_bowen
                    </p>
                    <div className="absolute left-[6.57px] size-[6.982px] top-[75.97px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.UserUserCircle} />
                    </div>
                  </div>
                  <div className="absolute contents left-[84.59px] top-[535.48px]">
                    <div className="absolute bg-[#d9d9d9] h-[86.236px] left-[84.59px] rounded-[8.213px] shadow-[0px_1.643px_1.643px_0px_rgba(0,0,0,0.25)] top-[535.48px] w-[78.434px]" />
                    <div className="absolute left-[150.71px] size-[6.982px] top-[611.45px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.MenuMoreHorizontal} />
                    </div>
                    <div className="absolute h-[73.916px] left-[84.59px] rounded-tl-[8.213px] rounded-tr-[8.213px] top-[535.48px] w-[78.434px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8.213px] rounded-tr-[8.213px] size-full" src={ui.AlejandraRiosLh56T1ASz8Unsplash2} />
                    </div>
                    <p className="[word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[7.539px] left-[97.32px] not-italic text-[4.106px] text-black top-[611.04px] whitespace-nowrap">
                      autosport.bmw
                    </p>
                    <div className="absolute left-[89.11px] size-[6.982px] top-[611.45px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.UserUserCircle} />
                    </div>
                  </div>
                  <div className="absolute contents left-[2.05px] top-[554.38px]">
                    <div className="absolute bg-[#d9d9d9] h-[86.236px] left-[2.05px] rounded-[8.213px] shadow-[0px_1.643px_1.643px_0px_rgba(0,0,0,0.25)] top-[554.38px] w-[78.434px]" />
                    <div className="absolute left-[68.17px] size-[6.982px] top-[630.35px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.MenuMoreHorizontal} />
                    </div>
                    <div className="absolute h-[73.916px] left-[2.05px] rounded-tl-[8.213px] rounded-tr-[8.213px] top-[554.38px] w-[78.434px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8.213px] rounded-tr-[8.213px] size-full" src={ui.AlejandraRiosLh56T1ASz8Unsplash3} />
                    </div>
                    <p className="[word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[7.539px] left-[14.78px] not-italic text-[4.106px] text-black top-[629.93px] whitespace-nowrap">
                      ketowheato
                    </p>
                    <div className="absolute left-[6.57px] size-[6.982px] top-[630.35px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.UserUserCircle} />
                    </div>
                  </div>
                  <div className="absolute contents left-[2.05px] top-[340.84px]">
                    <div className="absolute bg-[#d9d9d9] h-[102.662px] left-[2.05px] rounded-[8.213px] shadow-[0px_1.643px_1.643px_0px_rgba(0,0,0,0.25)] top-[340.84px] w-[78.434px]" />
                    <div className="absolute h-[8.214px] left-[67.76px] top-[431.59px] w-[6.982px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.MenuMoreHorizontal1} />
                    </div>
                    <div className="absolute h-[87.878px] left-[2.05px] rounded-tl-[8.213px] rounded-tr-[8.213px] top-[340.84px] w-[78.434px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8.213px] rounded-tr-[8.213px] size-full" src={ui.AlejandraRiosLh56T1ASz8Unsplash4} />
                    </div>
                    <p className="[word-break:break-word] absolute pr-palanquin-dark font-semibold h-[9.445px] leading-[7.539px] left-[14.78px] not-italic text-[4.106px] text-black top-[431.18px] w-[28.335px]">
                      homey.spaces
                    </p>
                    <div className="absolute left-[6.16px] size-[6.982px] top-[431.59px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.UserUserCircle} />
                    </div>
                  </div>
                  <div className="absolute contents left-[2.05px] top-[94.45px]">
                    <div className="absolute bg-[#d9d9d9] h-[94.449px] left-[2.05px] rounded-[8.213px] shadow-[0px_1.643px_1.643px_0px_rgba(0,0,0,0.25)] top-[94.45px] w-[78.434px]" />
                    <div className="absolute bg-white border-[#d9d9d9] border-[0.411px] border-solid h-[82.129px] left-[2.05px] rounded-tl-[8.213px] rounded-tr-[8.213px] top-[94.45px] w-[78.434px]" />
                    <div className="absolute h-[82.129px] left-[2.05px] rounded-tl-[8.213px] rounded-tr-[8.213px] top-[94.45px] w-[78.434px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8.213px] rounded-tr-[8.213px] size-full" src={ui.KatieSmithUQs1802D0CqUnsplash1} />
                    </div>
                    <div className="absolute left-[68.17px] size-[6.982px] top-[178.22px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.MenuMoreHorizontal} />
                    </div>
                    <p className="-translate-x-1/2 [word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[7.539px] left-[25.78px] not-italic text-[4.106px] text-black text-center top-[177.81px] whitespace-nowrap">
                      jacobcooks
                    </p>
                    <div className="absolute left-[6.57px] size-[6.982px] top-[178.22px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.UserUserCircle} />
                    </div>
                  </div>
                  <div className="absolute contents left-[84.59px] top-[288.27px]">
                    <div className="absolute bg-[#d9d9d9] h-[94.449px] left-[84.59px] rounded-[8.213px] shadow-[0px_1.643px_1.643px_0px_rgba(0,0,0,0.25)] top-[288.27px] w-[78.434px]" />
                    <div className="absolute bg-white border-[#d9d9d9] border-[0.411px] border-solid h-[82.129px] left-[84.59px] rounded-tl-[8.213px] rounded-tr-[8.213px] top-[288.27px] w-[78.434px]" />
                    <div className="absolute h-[82.129px] left-[84.59px] rounded-tl-[8.213px] rounded-tr-[8.213px] top-[288.27px] w-[78.434px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8.213px] rounded-tr-[8.213px] size-full" src={ui.KatieSmithUQs1802D0CqUnsplash2} />
                    </div>
                    <div className="absolute left-[150.71px] size-[6.982px] top-[372.05px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.MenuMoreHorizontal} />
                    </div>
                    <p className="[word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[7.539px] left-[97.73px] not-italic text-[4.106px] text-black top-[371.64px] whitespace-nowrap">
                      mealprep.cooking
                    </p>
                    <div className="absolute left-[89.11px] size-[6.982px] top-[372.05px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.UserUserCircle} />
                    </div>
                  </div>
                  <div className="absolute contents left-0 top-[451.71px]">
                    <div className="absolute bg-[#d9d9d9] h-[94.449px] left-0 rounded-[8.213px] shadow-[0px_1.643px_1.643px_0px_rgba(0,0,0,0.25)] top-[451.71px] w-[78.434px]" />
                    <div className="absolute bg-white border-[#d9d9d9] border-[0.411px] border-solid h-[82.129px] left-0 rounded-tl-[8.213px] rounded-tr-[8.213px] top-[451.71px] w-[78.434px]" />
                    <div className="absolute h-[82.129px] left-0 rounded-tl-[8.213px] rounded-tr-[8.213px] top-[451.71px] w-[78.434px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8.213px] rounded-tr-[8.213px] size-full" src={ui.KatieSmithUQs1802D0CqUnsplash3} />
                    </div>
                    <div className="absolute left-[66.11px] size-[6.982px] top-[535.48px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.MenuMoreHorizontal} />
                    </div>
                    <p className="[word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[7.539px] left-[12.73px] not-italic text-[4.106px] text-black top-[535.07px] whitespace-nowrap">
                      howtostyle
                    </p>
                    <div className="absolute left-[4.52px] size-[6.982px] top-[535.48px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.UserUserCircle} />
                    </div>
                  </div>
                  <div className="absolute contents left-[84.59px] top-0">
                    <div className="absolute bg-[#d9d9d9] h-[135.513px] left-[84.59px] rounded-[8.213px] shadow-[0px_1.643px_1.643px_0px_rgba(0,0,0,0.25)] top-0 w-[78.434px]" />
                    <div className="absolute bg-white border-[#d9d9d9] border-[0.411px] border-solid h-[123.194px] left-[84.59px] rounded-tl-[8.213px] rounded-tr-[8.213px] top-0 w-[78.434px]" />
                    <div className="absolute h-[123.194px] left-[84.59px] rounded-tl-[8.213px] rounded-tr-[8.213px] top-0 w-[78.434px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8.213px] rounded-tr-[8.213px] size-full" src={ui.JunkoNakaseQ72Wa97DgUnsplash1} />
                    </div>
                    <div className="absolute left-[151.12px] size-[6.982px] top-[126.07px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.MenuMoreHorizontal} />
                    </div>
                    <p className="-translate-x-1/2 [word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[7.539px] left-[107.64px] not-italic text-[4.106px] text-black text-center top-[125.66px] whitespace-nowrap">
                      its.audrey
                    </p>
                    <div className="absolute left-[89.52px] size-[6.982px] top-[126.07px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.UserUserCircle} />
                    </div>
                  </div>
                  <div className="absolute contents left-[84.59px] top-[391.35px]">
                    <div className="absolute bg-[#d9d9d9] h-[135.513px] left-[84.59px] rounded-[8.213px] shadow-[0px_1.643px_1.643px_0px_rgba(0,0,0,0.25)] top-[391.35px] w-[78.434px]" />
                    <div className="absolute bg-white border-[#d9d9d9] border-[0.411px] border-solid h-[123.194px] left-[84.59px] rounded-tl-[8.213px] rounded-tr-[8.213px] top-[391.35px] w-[78.434px]" />
                    <div className="absolute h-[123.194px] left-[84.59px] rounded-tl-[8.213px] rounded-tr-[8.213px] top-[391.35px] w-[78.434px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8.213px] rounded-tr-[8.213px] size-full" src={ui.JunkoNakaseQ72Wa97DgUnsplash2} />
                    </div>
                    <div className="absolute left-[151.12px] size-[6.982px] top-[517.42px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.MenuMoreHorizontal} />
                    </div>
                    <p className="[word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[7.539px] left-[98.14px] not-italic text-[4.106px] text-black top-[517px] whitespace-nowrap">
                      tree_lover
                    </p>
                    <div className="absolute left-[89.52px] size-[6.982px] top-[517.42px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.UserUserCircle} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[845px] relative shrink-0 w-[198px]">
              <div className="absolute contents left-0 top-0">
                <div className="absolute bg-white h-[380.287px] left-[11.09px] top-[9.03px] w-[175.77px]">
                  <div className="absolute contents left-[-1.64px] top-[50.92px]">
                    <div className="absolute contents left-[46.41px] top-[68.99px]">
                      <p className="-translate-x-1/2 [word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[normal] left-[65.41px] not-italic text-[7.569px] text-black text-center top-[68.99px] whitespace-nowrap">
                        My Friends
                      </p>
                      <p className="-translate-x-1/2 [word-break:break-word] absolute pr-palanquin-dark font-semibold leading-[normal] left-[106.42px] not-italic text-[#858585] text-[7.569px] text-center top-[68.99px] whitespace-nowrap">
                        Following
                      </p>
                      <div className="absolute h-0 left-[46.41px] top-[81.86px] w-[37.847px]">
                        <div className="absolute inset-[-0.57px_-1.5%]">
                          <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={ui.Line3} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute contents left-[-1.64px] top-[50.92px]">
                      <div className="absolute bg-[rgba(230,0,35,0.41)] border-[#e60023] border-[0.411px] border-solid h-[14.374px] left-[-1.64px] shadow-[0px_1.643px_1.643px_0px_rgba(0,0,0,0.25)] top-[51.33px] w-[178.645px]" />
                      <p className="[word-break:break-word] absolute pr-palanquin-dark leading-[0] left-[20.12px] not-italic text-[0px] text-black top-[50.92px] whitespace-nowrap">
                        <span className="pr-pacifico leading-[normal] text-[8.214px] text-white">{`Prompt: `}</span>
                        <span className="leading-[normal] text-[8.214px] text-white tracking-[-0.2464px]">Show something fall themed!</span>
                      </p>
                    </div>
                    <div className="absolute contents left-[149.9px] top-[73.51px]">
                      <div className="absolute bg-[#ebedf0] h-[7.392px] left-[149.9px] rounded-[4.107px] top-[73.51px] w-[19.302px]" />
                      <p className="[word-break:break-word] absolute pr-palanquin-dark leading-[normal] left-[159.34px] not-italic text-[#858585] text-[3.285px] top-[74.33px] tracking-[-0.0986px] whitespace-nowrap">
                        Filter
                      </p>
                      <div className="absolute inset-[19.76%_10.75%_79.22%_86.92%]">
                        <div className="absolute inset-[-5.88%_-5.56%]">
                          <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={ui.Vector2} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute contents left-0 top-0">
                    <div className="absolute bg-[var(--backgrounds\/primary,white)] content-stretch flex flex-col h-[20.534px] items-start left-0 pt-[8.624px] top-0 w-[175.77px]">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px pl-[6.571px] pr-[2.464px] relative">
                          <p className="[word-break:break-word] pr-roboto font-semibold font-semibold leading-[3.71px] not-italic relative shrink-0 text-[2.87px] text-[color:var(--labels\/primary,black)] text-center whitespace-nowrap">
                            9:41
                          </p>
                        </div>
                        <div className="h-[4.107px] relative shrink-0 w-[50.924px]" />
                        <div className="content-stretch flex flex-[1_0_0] gap-[2.875px] items-center justify-center min-w-px pl-[2.464px] pr-[6.571px] relative">
                          <div className="h-[5.021px] relative shrink-0 w-[7.885px]">
                            <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.CellularConnection1} />
                          </div>
                          <div className="h-[5.063px] relative shrink-0 w-[7.04px]">
                            <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.Wifi1} />
                          </div>
                          <div className="h-[5.339px] relative shrink-0 w-[11.223px]">
                            <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.Battery1} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute h-0 left-0 top-[48.46px] w-[175.77px]">
                      <div className="absolute inset-[-0.41px_-0.93%_-3.29px_-0.93%]">
                        <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={ui.UpperDivider1} />
                      </div>
                    </div>
                    <div className="absolute left-[134.29px] size-[16.016px] top-[26.69px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.NotificationBellWithNotifc} />
                    </div>
                    <div className="absolute left-[153.18px] size-[16.016px] top-[26.69px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.CommunicationPaperPlane1} />
                    </div>
                  </div>
                  <div className="absolute contents left-0 top-[355.24px]">
                    <div className="absolute bg-[#d9d9d9] h-[25.051px] left-0 rounded-tl-[10.267px] rounded-tr-[10.267px] top-[355.24px] w-[175.77px]" />
                    <div className="absolute left-[114.99px] size-[12.723px] top-[361.81px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.PinRealIcon1} />
                    </div>
                    <div className="absolute left-[48.46px] size-[12.724px] top-[361.81px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.ExploreIcon1} />
                    </div>
                    <div className="absolute left-[14.78px] size-[12.724px] top-[361.81px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.HomeIcon1} />
                    </div>
                    <div className="absolute inset-[95.14%_46.27%_1.51%_46.5%]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.CreateIcon1} />
                    </div>
                    <div className="absolute inset-[95.14%_8.65%_1.51%_84.11%] overflow-clip">
                      <div className="absolute inset-[12.5%]">
                        <div className="absolute inset-[-4.3%]">
                          <img loading="lazy" decoding="async" alt="" className="block max-w-none size-full" src={ui.Vector3} />
                        </div>
                      </div>
                      <div className="absolute flex inset-[12.91%_12.85%_12.85%_12.91%] items-center justify-center" style={{ containerType: "size" }}>
                        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                          <div className="relative size-full">
                            <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" height="9.446" src={ui.ProfilePicture1} width="9.446" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[26.506px] left-[9.86px] top-[19.9px] w-[48.871px]">
                    <p className="[word-break:break-word] absolute pr-pacifico leading-[normal] left-0 not-italic text-[14.732px] text-black top-0 whitespace-nowrap">
                      Pin
                    </p>
                    <div className="absolute flex items-center justify-center left-[8.28px] size-[14.587px] top-[-0.17px]">
                      <div className="flex-none rotate-[-17.33deg]">
                        <button className="content-stretch cursor-pointer flex items-center p-[2.63px] relative">
                          <div className="relative shrink-0 size-[6.387px]">
                            <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.PinIcon1} />
                          </div>
                        </button>
                      </div>
                    </div>
                    <p className="[word-break:break-word] absolute pr-palanquin leading-[0] left-[20.71px] not-italic text-[14.732px] text-[rgba(230,0,35,0.41)] top-0 tracking-[-0.7366px] whitespace-nowrap">
                      <span className="leading-[normal]">R</span>
                      <span className="leading-[normal] tracking-[-0.48px]">e</span>
                      <span className="leading-[normal]">al.</span>
                    </p>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute drop-shadow-[61.602px_20.534px_51.335px_rgba(9,20,50,0.15)] h-[400px] left-[calc(50%-0.02px)] top-[calc(50%-222.5px)] w-[197.961px]">
                  <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={ui.SplashScreen} />
                </div>
                <div className="absolute content-stretch drop-shadow-[0px_2.623px_1.311px_rgba(0,0,0,0.25)] flex flex-col gap-[2.875px] h-[265.708px] items-start left-[19.71px] top-[98.56px] w-[158.111px]">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                      <div className="bg-white border-[0.203px] border-solid border-white col-1 h-[228.337px] ml-0 mt-0 relative rounded-[8.106px] row-1 w-[158.111px]" />
                      <div className="col-1 h-[228.337px] ml-0 mt-0 relative rounded-[8.106px] row-1 w-[158.111px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8.106px] size-full" src={ui.Image3} />
                      </div>
                      <div className="col-1 ml-[140.86px] mt-[171.66px] relative row-1 size-[11.088px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.MessageIcon} />
                      </div>
                      <div className="col-1 flex h-[78.43px] items-center justify-center ml-[4.59px] mt-[21.02px] relative row-1 w-[48.393px]">
                        <div className="-scale-y-100 flex-none">
                          <div className="blur-[2.053px] border-[0.417px] border-black border-solid h-[78.43px] relative rounded-[2.491px] w-[48.393px]">
                            <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2.491px] size-full" src={ui.SelfieImage3} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[2.47px] place-items-start relative row-1">
                        <p className="[word-break:break-word] col-1 pr-palanquin-dark leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[5.006px] text-black whitespace-nowrap">
                          autumn in cham-bana
                        </p>
                      </div>
                      <div className="col-1 ml-0 mt-[11.5px] relative row-1 size-[5.006px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.CommentIcon2} />
                      </div>
                      <p className="[word-break:break-word] col-1 pr-palanquin-dark leading-[normal] ml-[6.57px] mt-[10.68px] not-italic relative row-1 text-[#858585] text-[3.337px] whitespace-nowrap">
                        Add a comment...
                      </p>
                      <button className="col-1 content-stretch cursor-pointer flex items-center ml-[137.58px] mt-0 p-[4.107px] relative row-1">
                        <div className="relative shrink-0 size-[9.975px]">
                          <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.PinIcon2} />
                        </div>
                      </button>
                    </div>
                    <div className="absolute left-[140.86px] size-[11.088px] top-[188.09px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.CommentIcon1} />
                    </div>
                    <div className="absolute left-[140.86px] size-[11.088px] top-[206.16px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.ReactIcon} />
                    </div>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[15.195px] left-0 top-0 w-[158.111px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.Rectangle5} />
                      </div>
                      <div className="absolute contents left-[128.95px] top-[3.7px]">
                        <div className="absolute bg-[rgba(230,0,35,0.41)] border-[#e60023] border-[0.231px] border-solid h-[6.936px] left-0 rounded-[4.624px] top-[0.87px] w-[16.427px]" />
                        <p className="[word-break:break-word] absolute pr-palanquin-dark h-[7.451px] leading-[normal] left-[1.64px] not-italic text-[4.624px] text-white top-0 w-[13.35px]">
                          OOTD
                        </p>
                      </div>
                      <div className="absolute contents left-[108.83px] top-[3.7px]">
                        <div className="absolute bg-[rgba(230,0,35,0.41)] border-[#e60023] border-[0.219px] border-solid h-[7.228px] left-0 rounded-[4.381px] top-[0.46px] w-[19.302px]" />
                        <p className="-translate-x-1/2 [word-break:break-word] absolute pr-palanquin-dark h-[7.447px] leading-[normal] left-[9.81px] not-italic text-[4.381px] text-center text-white top-0 w-[17.157px]">
                          Nature
                        </p>
                      </div>
                      <div className="absolute flex inset-[1.31%_89.38%_95.04%_4.94%] items-center justify-center" style={{ containerType: "size" }}>
                        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                          <div className="relative size-full">
                            <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" height="8.984" src={ui.ProfilePicture2} width="8.984" />
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] absolute pr-palanquin-dark leading-[normal] left-[20.38px] not-italic text-[5.031px] text-black top-[2.88px] whitespace-nowrap">
                        layla.poe
                      </p>
                      <div className="absolute left-[145.38px] size-[8.214px] top-[3.7px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.VerticalMoreIcon} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                      <div className="bg-white border-[0.203px] border-solid border-white col-1 h-[228.337px] ml-0 mt-0 relative rounded-[8.106px] row-1 w-[158.111px]" />
                      <div className="col-1 h-[228.337px] ml-0 mt-0 relative rounded-[8.107px] row-1 w-[158.111px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8.107px] size-full" src={ui.Image4} />
                      </div>
                      <div className="col-1 ml-[140.86px] mt-[171.66px] relative row-1 size-[11.088px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.MessageIcon} />
                      </div>
                      <div className="col-1 flex h-[78.439px] items-center justify-center ml-[4.52px] mt-[20.94px] relative row-1 w-[48.46px]">
                        <div className="-scale-y-100 flex-none">
                          <div className="blur-[3.08px] border-[0.411px] border-black border-solid h-[78.439px] relative rounded-[2.489px] w-[48.46px]">
                            <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2.489px] size-full" src={ui.SelfieImage4} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[2.46px] place-items-start relative row-1">
                        <p className="[word-break:break-word] col-1 pr-palanquin-dark leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[5.006px] text-black whitespace-nowrap">
                          it’s finally s’mores season
                        </p>
                      </div>
                      <div className="col-1 ml-0 mt-[11.5px] relative row-1 size-[5.006px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.CommentIcon2} />
                      </div>
                      <p className="[word-break:break-word] col-1 pr-palanquin-dark leading-[normal] ml-[6.57px] mt-[10.68px] not-italic relative row-1 text-[#858585] text-[3.337px] whitespace-nowrap">
                        Add a comment...
                      </p>
                      <button className="col-1 content-stretch cursor-pointer flex items-center ml-[137.58px] mt-0 p-[4.107px] relative row-1">
                        <div className="relative shrink-0 size-[9.975px]">
                          <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.PinIcon2} />
                        </div>
                      </button>
                    </div>
                    <div className="absolute left-[140.86px] size-[11.088px] top-[188.09px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.CommentIcon1} />
                    </div>
                    <div className="absolute left-[140.86px] size-[11.088px] top-[206.16px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.ReactIcon} />
                    </div>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[15.195px] left-0 top-0 w-[158.111px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.Rectangle5} />
                      </div>
                      <div className="absolute contents left-[128.95px] top-[3.7px]">
                        <div className="absolute bg-[rgba(230,0,35,0.41)] border-[#e60023] border-[0.231px] border-solid h-[6.936px] left-0 rounded-[4.624px] top-[0.87px] w-[16.427px]" />
                        <p className="-translate-x-1/2 [word-break:break-word] absolute pr-palanquin-dark h-[7.451px] leading-[normal] left-[8.32px] not-italic text-[4.624px] text-center text-white top-0 w-[13.35px]">
                          Vibes
                        </p>
                      </div>
                      <div className="absolute contents left-[113.76px] top-[3.7px]">
                        <div className="absolute bg-[rgba(230,0,35,0.41)] border-[#e60023] border-[0.219px] border-solid h-[7.228px] left-0 rounded-[4.381px] top-[0.46px] w-[14.374px]" />
                        <p className="-translate-x-1/2 [word-break:break-word] absolute pr-palanquin-dark h-[7.447px] leading-[normal] left-[7.31px] not-italic text-[4.381px] text-center text-white top-0 w-[12.777px]">
                          Food
                        </p>
                      </div>
                      <div className="absolute inset-[1.31%_89.38%_95.04%_4.93%]">
                        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" height="8.984" src={ui.ProfilePicture3} width="8.984" />
                      </div>
                      <p className="[word-break:break-word] absolute pr-palanquin-dark leading-[normal] left-[20.38px] not-italic text-[5.031px] text-black top-[2.88px] whitespace-nowrap">
                        its_mavis
                      </p>
                      <div className="absolute left-[145.38px] size-[8.214px] top-[3.7px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.VerticalMoreIcon} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="absolute left-[140.86px] size-[11.088px] top-[188.09px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.CommentIcon1} />
                    </div>
                    <div className="absolute left-[140.86px] size-[11.088px] top-[206.16px]">
                      <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.ReactIcon} />
                    </div>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                      <div className="bg-white border-[0.203px] border-solid border-white col-1 h-[228.337px] ml-[0.07px] mt-[0.12px] relative rounded-[8.106px] row-1 w-[158.111px]" />
                      <div className="col-1 h-[228.337px] ml-0 mt-0 relative rounded-[8.107px] row-1 w-[158.111px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8.107px] size-full" src={ui.Image5} />
                      </div>
                      <div className="blur-[2.053px] border-[0.231px] border-black border-solid col-1 h-[78.439px] ml-[4.52px] mt-[21.24px] relative rounded-[2.797px] row-1 w-[48.46px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2.797px] size-full" src={ui.SelfieImage5} />
                      </div>
                      <div className="col-1 ml-[140.93px] mt-[171.78px] relative row-1 size-[11.088px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.MessageIcon} />
                      </div>
                    </div>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[2.46px] place-items-start relative row-1">
                        <p className="[word-break:break-word] col-1 pr-palanquin-dark leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[5.006px] text-black whitespace-nowrap">
                          Curtis Orchards ;)
                        </p>
                      </div>
                      <div className="col-1 ml-0 mt-[11.5px] relative row-1 size-[5.006px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.CommentIcon2} />
                      </div>
                      <p className="[word-break:break-word] col-1 pr-palanquin-dark leading-[normal] ml-[6.57px] mt-[10.68px] not-italic relative row-1 text-[#858585] text-[3.337px] whitespace-nowrap">
                        Add a comment...
                      </p>
                      <button className="col-1 content-stretch cursor-pointer flex items-center ml-[137.58px] mt-0 p-[4.107px] relative row-1">
                        <div className="relative shrink-0 size-[9.975px]">
                          <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.PinIcon2} />
                        </div>
                      </button>
                    </div>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[15.195px] left-0 top-0 w-[158.111px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.Rectangle5} />
                      </div>
                      <div className="absolute contents left-[128.95px] top-[3.7px]">
                        <div className="absolute bg-[rgba(230,0,35,0.41)] border-[#e60023] border-[0.231px] border-solid h-[6.936px] left-0 rounded-[4.624px] top-[0.87px] w-[16.427px]" />
                        <p className="-translate-x-1/2 [word-break:break-word] absolute pr-palanquin-dark h-[7.451px] leading-[normal] left-[8.32px] not-italic text-[4.624px] text-center text-white top-0 w-[13.35px]">
                          Vibes
                        </p>
                      </div>
                      <div className="absolute inset-[1.31%_89.38%_95.05%_4.93%]">
                        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" height="8.984" src={ui.ProfilePicture4} width="8.984" />
                      </div>
                      <p className="[word-break:break-word] absolute pr-palanquin-dark leading-[normal] left-[20.38px] not-italic text-[5.031px] text-black top-[2.88px] whitespace-nowrap">
                        cooperrr.v
                      </p>
                      <div className="absolute left-[145.38px] size-[8.214px] top-[3.7px]">
                        <img loading="lazy" decoding="async" alt="" className="absolute block inset-0 max-w-none size-full" src={ui.VerticalMoreIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

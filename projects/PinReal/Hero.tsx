/* eslint-disable @next/next/no-img-element */
// Hero — ported from Figma node 3:1028 (PinReal. v2). The red gradient runs
// edge to edge; the 1440 × 680 composition on top scales down with the viewport.
import Link from "next/link";
import { ScaledCanvas } from "./shared";
import { hero } from "./assets";

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        // backgroundColor is what the site nav samples to pick light/dark text; the gradient is the design.
        backgroundColor: "rgb(230, 0, 35)",
        backgroundImage: "linear-gradient(135.99346945959797deg, rgb(230, 0, 35) 0%, rgb(246, 149, 164) 74.627%)",
      }}
    >
      <ScaledCanvas w={1440} h={680} clip={false} className="mx-auto">
        <div className="relative size-full">
          <div className="absolute left-[820px] size-[860px] top-[-300px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={hero.Ellipse} />
          </div>
          <div className="absolute left-[-200px] size-[700px] top-[320px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={hero.Ellipse1} />
          </div>
          <p className="[word-break:break-word] absolute pr-lineca leading-[0.92] left-[-8px] not-italic text-[200px] text-[rgba(255,255,255,0.16)] top-[510px] tracking-[-5px] whitespace-nowrap">
            APP MASHUP
          </p>

          <Link
            href="/#work"
            className="[word-break:break-word] absolute bg-[rgba(255,255,255,0.14)] border border-[rgba(255,255,255,0.3)] border-solid content-stretch flex pr-roboto font-medium gap-[9px] items-center leading-[normal] left-[136px] overflow-clip pl-[15px] pr-[18px] py-[9px] rounded-[999px] top-[84px] transition-colors duration-200 hover:bg-[rgba(255,255,255,0.24)]"
          >
            <span className="relative shrink-0 text-[11px] text-white">←</span>
            <span className="relative shrink-0 text-[10px] text-[rgba(255,255,255,0.92)] tracking-[1.6px] whitespace-nowrap">ALL WORK</span>
          </Link>

          <div className="[word-break:break-word] absolute bg-[rgba(0,0,0,0.28)] border border-[rgba(255,255,255,0.22)] border-solid content-stretch flex flex-col gap-[8px] items-start left-[136px] overflow-clip px-[26px] py-[22px] rounded-[14px] top-[300px] w-[268px]">
            <p className="pr-roboto font-medium leading-[normal] relative shrink-0 text-[#f1cdd2] text-[9.5px] tracking-[1.5px] w-full">UP TO 2 RETAKES</p>
            <p className="pr-newsreader font-normal leading-[1.1] relative shrink-0 text-[40px] text-white w-full">10 minutes</p>
            <p className="pr-roboto font-normal leading-[1.68] relative shrink-0 text-[12px] text-white w-full">in total to post “on time.”</p>
          </div>

          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[499.842px] left-[calc(50%+43.69px)] top-[calc(50%+59.92px)] w-[247.374px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[479.312px] left-[calc(50%-0.06px)] overflow-clip rounded-[16.422px] top-[calc(50%-0.26px)] w-[221.357px]">
              <img alt="PinReal. homepage with a locked friends feed" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.422px] size-full" src={hero.ScreenToUpdate} />
            </div>
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={hero.HomepageLockedPinReal} />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[499.842px] left-[calc(50%+315.69px)] top-[calc(50%+5.92px)] w-[247.374px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[479.312px] left-[calc(50%-0.06px)] overflow-clip rounded-[16.422px] top-[calc(50%-0.26px)] w-[221.357px]">
              <img alt="PinReal. unlocked friends feed with a daily prompt" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.422px] size-full" src={hero.ScreenToUpdate1} />
            </div>
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={hero.HomepageLockedPinReal} />
          </div>

          <div className="absolute drop-shadow-[0px_14px_17px_rgba(89,0,13,0.22)] h-[40px] left-[136px] top-[482px] w-[422.609px]">
            <div className="absolute bg-[#8eff88] inset-0 rounded-[13.043px] shadow-[0px_6.957px_6.957px_0px_rgba(0,0,0,0.25)]" />
            <div className="absolute inset-[8.7%_86.83%_8.7%_5.35%]">
              <div className="absolute inset-[0_-6.71%_-16.9%_-8.55%]">
                <img alt="" className="block max-w-none size-full" src={hero.CheckIcon} />
              </div>
            </div>
            <p className="[word-break:break-word] absolute pr-palanquin-dark inset-[0_29.08%_6.67%_17.28%] leading-[normal] not-italic text-[20.87px] text-black whitespace-nowrap">
              PinReal Post Successful!
            </p>
            <div className="absolute contents inset-[17.39%_2.56%_13.04%_80.25%]">
              <div className="absolute bg-[#ebedf0] inset-[17.39%_2.56%_13.04%_80.25%] rounded-[13.04px]" />
              <p className="[word-break:break-word] absolute pr-palanquin-dark inset-[20%_7.4%_17.5%_85.5%] leading-[normal] not-italic text-[13.91px] text-black tracking-[-0.4173px] whitespace-nowrap">
                View
              </p>
            </div>
          </div>

          <div className="absolute drop-shadow-[0px_18px_21px_rgba(89,0,13,0.22)] h-[79.589px] left-[1160px] top-[400px] w-[212.237px]">
            <div className="absolute bg-[rgba(230,0,35,0.41)] inset-0 rounded-[23.408px]" />
            <p className="[word-break:break-word] absolute pr-pacifico inset-[3.04%_17.46%_2.72%_11.95%] leading-[normal] not-italic text-[42.71px] text-white tracking-[-1.5606px]">
              POST
            </p>
            <div className="absolute flex inset-[23.53%_2.98%_9.92%_72.06%] items-center justify-center" style={{ containerType: "size" }}>
              <div className="flex-none h-[hypot(-50cqw,50cqh)] rotate-45 w-[hypot(50cqw,50cqh)]">
                <div className="relative size-full">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={hero.Send} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScaledCanvas>
    </section>
  );
}

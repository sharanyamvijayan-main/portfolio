/* eslint-disable @next/next/no-img-element */
// Section 02 — USER FLOW DIAGRAM. Ported from Figma node 3:1167 (PinReal. v2).
import { ScaledCanvas, Section, StageHeader, CardHeader } from "./shared";
import { flow } from "./assets";

export function UserFlow() {
  return (
    <Section>
      <StageHeader num="02" title="USER FLOW DIAGRAM" />
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <CardHeader>USER FLOW DIAGRAM</CardHeader>
        <div className="w-full">
          <ScaledCanvas w={1168} h={1247.348}>
            <div className="absolute h-[1329.042px] left-[-35.39px] top-[-70.79px] w-[1238.788px]">
              <div className="absolute h-[1323.733px] left-0 top-0 w-[1238.345px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt="PinReal. user flow diagram: from opening the app to posting, retaking, exploring and engaging with friends' PinReals."
                    className="absolute h-[102.67%] left-0 max-w-none top-0 w-full"
                    src={flow.UserFlowDiagramWithoutCaptions}
                  />
                </div>
              </div>
            </div>
          </ScaledCanvas>
        </div>
      </div>
    </Section>
  );
}

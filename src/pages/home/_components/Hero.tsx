import FlexInfo from "./FlexInfo";
import Sectiongrid from "./SectionGrid";

export default function Hero() {
  return (
    <div>
      <Sectiongrid className="mt-24">
        <FlexInfo className="leading-loose text-center md:text-left">
          <h1 className="md:text-4xl   text-3xl  font-black">
            Your Smooth Journey to Property Ownership.
          </h1>
          <p>
            Own your dream home transparently, affordably from anywhere.
             Co-develop verified projects or own fractional property shares and
            track progress from your dashboard.
          </p>
          <div className="space-x-2 mt-6 ">
            <button className="btn btn-accent">
              <img src="apple_white.svg" alt="" /> Get on Iphone
            </button>
            <button className="btn btn-accent">
              {" "}
              <img src="google_icon.svg" alt="" />
              Get on Android
            </button>
          </div>
        </FlexInfo>
        <FlexInfo className="md:justify-end justify-center flex-row items-center">
          <img
            src="home_video.png"
            className="size-8/10 object-contain"
            alt=""
          />
        </FlexInfo>
      </Sectiongrid>
    </div>
  );
}

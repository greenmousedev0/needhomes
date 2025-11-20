import { useState } from "react";
import Header from "./_components/Header";
import { PlayIcon } from "lucide-react";
import Sectiongrid from "./_components/SectionGrid";
import FlexInfo from "./_components/FlexInfo";
import Statistics from "./_components/Statistics";
import CoDev from "./_components/CoDev";
import Owners from "./_components/Owners";
import CoTypes from "./_components/CoTypes";
import BankIntegrations from "./_components/BankIntegrations";
import Footer from "./_components/Footer";
import FAQ from "./_components/FAQ";
import GetOnDevices from "./_components/OnDevices";
export default function index() {
  const [showVideo, setVideo] = useState<boolean>(false);
  return (
    <div className="*:text-center md:*:text-left ">
      <Header />
      <section className="bg-base-200">
        <div className="container mx-auto bg-base-200 px-4 md:px-0">
          <div className="py-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 flex flex-col justify-center leading-loose space-y-4 text-center md:text-left">
              <h2 className="text-5xl font-bold ">
                Your Smooth Journey
                <br /> to Property Ownership.
              </h2>
              <p>
                Own your dream home transparently, affordably from anywhere.
                Co-develop verified projects or own fractional property shares
                and track progress from your dashboard.
              </p>
              <div className="space-x-2 ">
                <button className="btn btn-accent">
                  <img src="apple_white.svg" alt="" /> Get on Iphone
                </button>
                <button className="btn btn-accent">
                  {" "}
                  <img src="google_icon.svg" alt="" />
                  Get on Android
                </button>
              </div>
            </div>
            <div className="flex-1 w-full grid place-items-center isolate">
              <div className="rounded-md relative w-full px-4 md:px-0">
                {showVideo ? (
                  <video
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                ) : (
                  <>
                    <div className="flex flex-col items-center justify-center h-full w-full">
                      <img
                        src="home_video.png"
                        alt=""
                        className="w-full object-cover"
                      />
                      {/*<button
                        className="btn btn-circle btn-xl"
                        onClick={() => setVideo(true)}
                      >
                        <PlayIcon />
                      </button>*/}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="space-y-12 px-4 md:px-0">
        <section>
          <Sectiongrid>
            <FlexInfo className="">
              <div className="size-3/4 mr-auto ">
                <img
                  src="workings.png "
                  className="size-full object-contain"
                  alt=""
                />
              </div>
            </FlexInfo>

            <FlexInfo>
              <p>
                At Needhomes, we redefine property ownership, using our PropTech
                platform to make owning real estate easier, more transparent,
                and accessible to everyone. From co-developing verified projects
                to fractional ownership or full home purchase, NeedHomes
                provides secure and flexible pathways to property
                investment.With NeedHomes, you don't just invest in real estate
                — you invest in your future.
              </p>
              <div>
                <button className="btn btn-neutral btn-outline">
                  Explore How It Works
                </button>
              </div>
            </FlexInfo>
          </Sectiongrid>
        </section>
        <div className="">
          <section className="bg-base-200">
            <Statistics />
          </section>
          <section className="-mx-4 md:mx-0">
            <CoDev />
          </section>
          <section className="bg-base-200">
            <Owners />
          </section>
          <section>
            <CoTypes />
          </section>
          <section className="py-22 bg-base-200">
            <div className="h-[420px] flex">
              <img
                src="how-it-works.png"
                className="w-full flex-1 mx-auto object-contain"
                alt=""
              />
            </div>
          </section>
          <section>
            <BankIntegrations />
          </section>
          <section className=" bg-base-200">
            <FAQ />
          </section>
          <section className="-mx-4 md:mx-0">
            <GetOnDevices />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

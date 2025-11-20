export default function CoDev() {
  const dev_steps = [
    {
      title: "Funding",
      description:
        "IBF License Nr. 27-55/2023/3 provides assurance to investors that the platform is operating legally and in compliance with EU regulations.",
      icon: "funding-icon.svg",
    },
    {
      title: "Construction",
      description:
        "The project is managed and monitored by Needhomes until completion.",
      icon: "construction-icon.svg",
    },
    {
      title: "Ownership & Returns",
      description:
        "When completed, investors receive profit or rental income based on their ownership share.",
      icon: "ownership-icon.svg",
    },
  ] as const;
  return (
    <div className="relative isolate flex flex-col min-h-[520px]  px-4 md:px-0 pb-12 md:pb-0 ">
      <img
        src="co_dev.png"
        alt=""
        className="absolute -z-10 h-full w-full inset-0"
      />
      <div className="space-y-12 py-12 text-white  flex flex-col w-full">
        <div className="mx-auto max-w-3xl text-center space-y-2">
          <h2 className="text-3xl font-semibold">What is Co- Development?</h2>
          <p>
            Co-development means partnering to bring a real estate project to
            life.Instead of one company doing everything, Needhomes connects
            investors to jointly fund and build a property — and then share in
            the ownership and profit.
          </p>
        </div>
      </div>
      <div className="text-white w-full contain mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(345px,1fr))] place-items-center gap-2">
          {dev_steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 p-4 max-w-md"
            >
              <div className=" flex bg-base-100 rounded-full p-4">
                <img
                  src={step.icon}
                  alt=""
                  className="flex-1 object-contain size-10"
                />
              </div>
              <h3 className="  text-2xl font-bold">{step.title}</h3>
              <p className="text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

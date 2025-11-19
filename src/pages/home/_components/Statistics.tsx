export default function Statistics() {
  const stats = [
    {
      amount: 1000,
      title: "Houses for Investment",
    },
    {
      amount: 1000,
      title: "Houses for Investment",
    },
    {
      amount: 1000,
      title: "Houses for Investment",
    },
    {
      amount: 1000,
      title: "Agent",
    },
  ] as const;
  return (
    <div className="container mx-auto space-y-8 py-4">
      <h2 className="text-4xl  ">Our Statistics</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] justify-between place-items-center">
        {stats.map((item, index) => {
          return (
            <div
              key={item.title + index}
              className=" size-52 p-4 grid place-items-center gap-3 text-center "
            >
              <img src={`stats/stats_${index + 1}.svg`} alt="" />
              {/*<div></div>
                <div className="space-y-2">
                  <div className="text-3xl font-black">{item.amount}</div>
                  <h2 className="font-bold">{item.title}</h2>
                </div>*/}
            </div>
          );
        })}
      </div>
    </div>
  );
}

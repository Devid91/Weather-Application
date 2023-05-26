import { ReactSVG } from "react-svg";

function ShowAdditionalDatas({ datas, svgMap }) {
  const getWeekDay = (datetime) => {
    const date = new Date(datetime);
    const options = { weekday: "long" };
    const weekday = date.toLocaleDateString("en-US", options);
    return weekday;
  };

  const SmallIcon1 = svgMap[datas.days[1].icon];
  const SmallIcon2 = svgMap[datas.days[2].icon];
  const SmallIcon3 = svgMap[datas.days[3].icon];
  const SmallIcon4 = svgMap[datas.days[4].icon];

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap flex-row m-[80px]">
        <div className="flex flex-wrap  flex-col xl:m-[80px] lg:m-[50px] md:m-[20px]  sm:m-[10px] mr-10 mb-8">
          <div>
            <h4 className="font-extrabold pb-10 text-white">
              {getWeekDay(datas.days[1].datetime)}
            </h4>
          </div>
          <div className="pb-5 ">
            <ReactSVG src={SmallIcon1} className="svg-icon-50-50 " />
          </div>
          <div>
            <h4 className="font-semibold text-white">
              {datas.days[1].temp + " C°"}
            </h4>
          </div>
        </div>
        <div className="flex flex-wrap  flex-col xl:m-[80px] lg:m-[50px] md:m-[20px] sm:m-[10px]  mr-10 mb-8">
          <div>
            <h4 className="font-extrabold pb-10 text-white">
              {getWeekDay(datas.days[2].datetime)}
            </h4>
          </div>
          <div className="pb-5">
            <ReactSVG src={SmallIcon2} className="svg-icon-50-50 " />
          </div>
          <div>
            <h4 className="text-white">{datas.days[2].temp + " C°"}</h4>
          </div>
        </div>
        <div className="flex flex-wrap  flex-col xl:m-[80px] lg:m-[50px] md:m-[20px] sm:m-[10px]  mr-10 mb-8">
          <div>
            <h4 className="font-extrabold pb-10 text-white">
              {getWeekDay(datas.days[3].datetime)}
            </h4>
          </div>
          <div className="pb-5">
            <ReactSVG src={SmallIcon3} className="svg-icon-50-50" />
          </div>
          <div>
            <h4 className="font-semibold text-white">
              {datas.days[3].temp + " C°"}
            </h4>
          </div>
        </div>
        <div className="flex flex-wrap  flex-col xl:m-[80px] lg:m-[50px] md:m-[20px] sm:m-[10px] mr-20 ">
          <div>
            <h4 className="font-extrabold pb-10 text-white">
              {getWeekDay(datas.days[4].datetime)}
            </h4>
          </div>
          <div className="pb-5">
            <ReactSVG src={SmallIcon4} className="svg-icon-50-50" />
          </div>
          <div>
            <h4 className="text-white">{datas.days[4].temp + " C°"}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowAdditionalDatas;

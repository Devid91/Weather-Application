import { ReactSVG } from "react-svg";

function ShowMainDatas({ datas, svgMap }) {
  const BigIcon = svgMap[datas.days[0].icon];
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col items-center py-6 sm:flex-row sm:items-center">
        <div className="pr-4 sm:pr-0 sm:relative sm:top-0 sm:left-0 sm:pb-0 sm:w-auto sm:text-center sm:mr-20">
          <ReactSVG src={BigIcon} className="svg-icon-70-70" />
        </div>
        <div className="pl-0 sm:pl-4 sm:ml-20">
          <div>
            <h3 className="pb-5 text-white">today</h3>
          </div>
          <div>
            <h1 className="text-3xl font-semibold pb-5 text-white">
              {datas.address}
            </h1>
          </div>
          <div>
            <h4 className="pb-5 text-white">
              Temperature: {datas.days[0].temp + " C°"}
            </h4>
          </div>
          <div>
            <h4 className="text-sm text-white">{datas.days[0].description}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowMainDatas;

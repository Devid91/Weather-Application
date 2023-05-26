import ShowAdditionalDatas from "./ShowAdditionalDatas";
import ShowMainDatas from "./ShowMainDatas";

function DataList({ datas, svgMap }) {
  return (
    <div>
      <ShowMainDatas datas={datas} svgMap={svgMap} />
      <ShowAdditionalDatas datas={datas} svgMap={svgMap} />
    </div>
  );
}

export default DataList;

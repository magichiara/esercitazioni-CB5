import "./trend-item.scss";
import { AiFillHeart } from "react-icons/ai";

export const TrendItem = ({ data }) => {
  return (
    <div className="TrendItem">
      <h4>{data.title}</h4>
      <p>{`#${data.tags[0]} #${data.tags[1]}`}</p>
      <div>
        <AiFillHeart />
        <h5>{data.reactions}</h5>
      </div>
    </div>
  );
};

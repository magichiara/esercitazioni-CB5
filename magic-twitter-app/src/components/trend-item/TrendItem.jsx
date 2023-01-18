import "./trend-item.scss";
import { AiFillHeart } from "react-icons/ai";

export const TrendItem = ({ data }) => {
  return (
    <div className="TrendItem">
      <h4>{data.title}</h4>
      <div>
        {data.tags.map((tag, index) => (
          <p key={index}>#{tag}</p>
        ))}
      </div>

      <div>
        <AiFillHeart />
        <h5>{data.reactions}</h5>
      </div>
    </div>
  );
};

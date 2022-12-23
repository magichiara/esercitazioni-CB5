import "./listitem.scss";
import { useState } from "react";

export const ListItem = (props) => {
  const data = props.data;
  const [status, setStatus] = useState(data.status);

  const switchStatus = () => setStatus((currentStatus) => !currentStatus);

  return (
    <div className="items-container">
      <li>
        <h3 className="item-name">{data.name}</h3>
        <h4 onClick={switchStatus} className="item-status">
          {status ? " 🟢" : "🔴"}
        </h4>
      </li>
    </div>
  );
};

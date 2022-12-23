import { Fragment } from "react";
import { ListItem } from "../listitem/ListItem";
import "./list.scss";

const listData = [
  { id: 0, name: "onion", status: false },
  { id: 1, name: "cucumbers", status: false },
  { id: 2, name: "tomatoes", status: false },
  { id: 3, name: "potatoes", status: false },
  { id: 4, name: "bread", status: false },
  { id: 5, name: "rice", status: false },
];

export const TodoList = (props) => {
  return (
    <Fragment>
      <div className="list-text">
        <h2 className="list-title">MAGIC SHOPPING LIST</h2>
        <h4 className="list-subtitle">Recent</h4>
      </div>

      <ul role="list">
        {listData.map((item) => {
          return <ListItem key={item.id} data={item} />;
        })}
      </ul>
    </Fragment>
  );
};

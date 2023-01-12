import "./selector.scss";

export const Selector = (props) => {
  const { changeHandler } = props;
  return (
    <div className="container">
      <form>
        <select onChange={changeHandler}>
          <option value="default">SELECT A COMPONENT</option>
          <option value="addresses">Address</option>
          <option value="banks">Banks</option>
          <option value="bloodTypes">Blood Types</option>
          <option value="creditCards">Credit Cards</option>
          <option value="counter">Counter</option>
        </select>
      </form>
    </div>
  );
};

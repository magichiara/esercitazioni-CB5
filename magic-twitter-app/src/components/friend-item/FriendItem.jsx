import "./friend-item.scss";

export const FriendItem = ({ data }) => {
  // Destructuring assignment
  const { image, firstName, lastName, address } = data;

  return (
    <div className="FriendItem">
      <img src={image} alt="user-img" />
      <div>
        <h4>{`${firstName} ${lastName}`}</h4>
        <h5>{address.city}</h5>
      </div>
    </div>
  );
};

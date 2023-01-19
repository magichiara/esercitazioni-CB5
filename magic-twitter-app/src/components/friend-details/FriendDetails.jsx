import "./friend-details.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/endpoint";

export const FriendDetails = ({ id }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    GET(`users/${id}`).then((data) => setDetails(data));
  }, []);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="FriendDetails">
      <img src={details?.image} alt="user-image" />
      <div className="text-details">
        <h5 className="username">@ {details?.username}</h5>
        <h4>Name: {details?.firstName}</h4>
        <h4>Surname: {details?.lastName}</h4>
        <h5 className="email">{details?.email}</h5>
      </div>
    </div>
  );
};

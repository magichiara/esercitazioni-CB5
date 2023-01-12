import { useFetch } from "../../hooks/use_fetch";
import { ENDPOINTS } from "../../constants/endpoints";
import "./addresses.scss";

export const Addresses = () => {
  const { data, loading, error, refetch } = useFetch(ENDPOINTS.ADDRESSES);

  if (loading) return <div className="wrapper loading">Loading...</div>;
  if (error) return "Error connecting to server, try reloading the page";

  return (
    <div className="wrapper first">
      <div className="info-addr">
        <div className="stamp">
          <img
            src="https://static.thenounproject.com/png/509060-200.png"
            alt="stamp-img"
          />
        </div>
        <span>{data?.street_address}</span>
        <span>{data?.city}</span>
        <span>{data?.country}</span>
        <span>{data?.zip_code}</span>
      </div>

      <button onClick={refetch}>GET</button>
    </div>
  );
};

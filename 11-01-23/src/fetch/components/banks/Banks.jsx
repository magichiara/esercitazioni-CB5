import { useFetch } from "../../hooks/use_fetch";
import { ENDPOINTS } from "../../constants/endpoints";
import "./banks.scss";

export const Banks = () => {
  const { data, loading, error, refetch } = useFetch(ENDPOINTS.BANKS);

  if (loading) return <div className="wrapper loading">Loading...</div>;
  if (error) return "Error connecting to server, try reloading the page";

  return (
    <div className="wrapper second">
      <div className="info-bank">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/66/66455.png"
            alt="bank-img"
          />
        </div>
        <span>{data?.bank_name}</span>
        <span>{data?.iban}</span>
        <span>{data?.routing_number}</span>
      </div>
      <button onClick={refetch}>GET</button>
    </div>
  );
};

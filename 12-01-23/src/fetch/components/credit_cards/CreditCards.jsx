import { useFetch } from "../../hooks/use_fetch";
import { ENDPOINTS } from "../../constants/endpoints";
import "./credit_cards.scss";

export const CreditCards = () => {
  const { data, loading, error, refetch } = useFetch(ENDPOINTS.CREDIT_CARDS);

  if (loading) return <div className="wrapper loading">Loading...</div>;
  if (error) return "Error connecting to server, try reloading the page";

  return (
    <div className="wrapper fourth">
      <div className="info-card">
        <span className="bank-name">
          {data?.credit_card_type.toUpperCase()}
        </span>
        <img
          src="https://cdn-icons-png.flaticon.com/128/6404/6404100.png"
          alt="chip-img"
        />
        <span>{data?.credit_card_number}</span>
        <span>{data?.credit_card_expiry_date}</span>
        <span>NOME COGNOME</span>
      </div>
      <button onClick={refetch}>GET</button>
    </div>
  );
};

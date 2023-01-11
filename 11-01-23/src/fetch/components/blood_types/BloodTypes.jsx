import { useFetch } from "../../hooks/use_fetch";
import { ENDPOINTS } from "../../constants/endpoints";
import "./blood_types.scss";

export const BloodTypes = () => {
  const { data, loading, error, refetch } = useFetch(ENDPOINTS.BLOOD_TYPES);

  if (loading) return <div className="wrapper loading">Loading...</div>;
  if (error) return "Error connecting to server, try reloading the page";

  return (
    <div className="wrapper third">
      <div className="info-blood">
        <div className="img">
          <img
            src="data:image/png;base64,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"
            alt="blood-img"
          />
        </div>
        <div className="type">
          <span>{data?.type}</span>
          <span>{data?.rh_factor}</span>
          <span>{data?.group}</span>
        </div>
      </div>
      <button onClick={refetch}>GET</button>
    </div>
  );
};

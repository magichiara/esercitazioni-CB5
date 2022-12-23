import "./button.css";

export const Button = (props) => {
  console.log("props di Button:", props);

  const {
    children = "click me",
    className = "",
    variant = "none",
    ...otherAttributes
  } = props;

  return (
    <button
      className={`btn btn--variant-${variant} ${className}`}
      {...otherAttributes}
    >
      {children}
    </button>
  );
};

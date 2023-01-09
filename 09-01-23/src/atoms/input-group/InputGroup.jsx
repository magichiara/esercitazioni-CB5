import "./input-group.scss";

export const InputGroup = (props) => {
  const { label = "", type = "text", ...attrs } = props;

  return (
    <label>
      <span>{label}</span>
      {type === "textarea" ? (
        <textarea {...attrs}></textarea>
      ) : (
        <input type={type} {...attrs} />
      )}
    </label>
  );
};

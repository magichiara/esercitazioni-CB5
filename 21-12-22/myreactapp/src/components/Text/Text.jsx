import "./Text.css";

const variantObj = {
  body: "text-md",
  title: "text-lg mb-sm",
};

export const Text = (props) => {
  const {
    as = "div",
    content = "title",
    variant = "body",
    ...attributes
  } = props;

  const Element = as;
  return (
    <Element className={`txt ${variantObj[variant] ?? ""}`} {...attributes}>
      {content}
    </Element>
  );
};

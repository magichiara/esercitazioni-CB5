import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";

export const Container = (props) => {
  const { children, showHeader = true, showFooter = true } = props;

  return (
    <>
      {showHeader ? <Header /> : null}
      <main className="main">
        <div className="wrapper">
          <Text
            as="h2"
            content="CHOOSE YOUR FAVOURITE ANIMAL"
            variant="title"
          ></Text>
          <div className="btns-container">
            <Button
              variant="primary"
              children="🐱"
              onClick={() => console.log("meow")}
            />
            <Button
              variant="primary"
              children="🐶"
              onClick={() => console.log("wooof")}
            />
            <Button
              variant="primary"
              children="🐷"
              onClick={() => console.log("oink")}
            />
          </div>
        </div>
      </main>
      {showFooter ? <Footer /> : null}
    </>
  );
};

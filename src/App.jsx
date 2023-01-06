import { Aside } from "./components/Aside";
import { Content } from "./components/Content";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <Content>
        <Aside />
        <Main />
      </Content>
    </>
  );
};

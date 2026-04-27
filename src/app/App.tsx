import { ConfigProvider } from "antd";
import ruRU from "antd/locale/ru_RU";
import { antdTheme } from "./providers/antdTheme";
import "./styles/index.css";

const App: React.FC = () => {
  return (
    <>
      <ConfigProvider locale={ruRU} theme={antdTheme}>
        <div className="bg-success text-primary">APP</div>
      </ConfigProvider>
    </>
  );
};

export { App };

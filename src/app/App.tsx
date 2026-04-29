import { ConfigProvider } from "antd";
import ruRU from "antd/locale/ru_RU";

import { antdTheme } from "./providers/antdTheme";
import "./styles/index.css";
import { Router } from "~pages/Router";
import { withProviders } from "./providers";
import { ThemeProvider } from "./providers/ThemeProvider";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <ConfigProvider locale={ruRU} theme={antdTheme}>
          <Router />
        </ConfigProvider>
      </ThemeProvider>
    </>
  );
};

const ProvidedApp: React.FC = withProviders(App);

export { ProvidedApp as App };

import { Button } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useTheme } from "~shared/lib/theme";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
      shape="circle"
      type="text"
      onClick={toggleTheme}
    />
  );
};

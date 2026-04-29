import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useTheme } from "~shared/lib/theme";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      checked={theme === "dark"}
      onChange={toggleTheme}
      checkedChildren={<MoonOutlined />}
      unCheckedChildren={<SunOutlined />}
    />
  );
};

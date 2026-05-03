import { Button } from "antd";
import { SunOutlined } from "@ant-design/icons";
import { MoonStars } from "@solar-icons/react-perf/Outline";
import { useTheme } from "~shared/lib/theme";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      icon={theme === "dark" ? <SunOutlined /> : <MoonStars />}
      shape="circle"
      type="text"
      onClick={toggleTheme}
    />
  );
};

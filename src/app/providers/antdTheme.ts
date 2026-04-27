import type { ThemeConfig } from "antd";
import { COLORS } from "../styles/colors";

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: COLORS.primary,
    colorInfo: COLORS.primary,
    colorSuccess: COLORS.success,
  },
};

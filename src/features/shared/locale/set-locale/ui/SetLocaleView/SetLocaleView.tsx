import { Button, Space } from "antd";
import { Global } from "@solar-icons/react-perf/Outline";

import { useTranslation } from "~shared/lib/i18n";
import { dayjs } from "~shared/lib/time";
import { Dropdown } from "antd";

import { LocaleCodes } from "../../model";

export const SetLocaleView: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLocaleChange = (payload: string | number) => {
    i18n.changeLanguage(payload as string);
    dayjs.locale(payload as string);
  };

  const items: { key: string; label: string }[] = [
    {
      key: LocaleCodes.RUSSIAN,
      label: t("cm:buttons.ru"),
    },
    {
      key: LocaleCodes.KYRGYZ,
      label: t("cm:buttons.ky"),
    },
  ];

  return (
    <div className="text-sm transition-all text-slate-600 dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
      <Dropdown
        menu={{ items, onClick: ({ key }) => handleLocaleChange(key) }}
        trigger={["click"]}
      >
        <a href="/" onClick={(e) => e.preventDefault()}>
          <Space>
            <Button icon={<Global />} shape="circle" type="text" />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

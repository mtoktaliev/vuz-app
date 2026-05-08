import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { RoutesUrls } from "~shared/lib/router/types";

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-6 mt-6">
      <div className="flex justify-center items-center p-6 bg-white dark:bg-slate-950 rounded-2xl">
        <Result
          status="404"
          title="404"
          subTitle={t("notify.notFound")}
          extra={
            <Link to={RoutesUrls.home}>
              <Button type="primary">{t("routes.home")}</Button>
            </Link>
          }
        />
      </div>
    </div>
  );
};

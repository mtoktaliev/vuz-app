import { Outlet } from "react-router-dom";

// import { SiteFooter } from "~widgets/shared/site-footer";
import { LandingHeader } from "~widgets/landing/landing-header";

// export interface SiteLayoutProps extends Partial<ComponentWithChildren> {}

export const LandingLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 dark:bg-slate-900">
      <div className="sticky top-6 z-50">
        <LandingHeader />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
      {/* <SiteFooter /> */}
    </div>
  );
};

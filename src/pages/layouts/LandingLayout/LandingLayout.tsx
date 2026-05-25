import { Outlet } from "react-router-dom";
import { LandingFooter } from "~widgets/landing/landing-footer";

import { LandingHeader } from "~widgets/landing/landing-header";

// export interface SiteLayoutProps extends Partial<ComponentWithChildren> {}

export const LandingLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 dark:bg-slate-900 transition-colors">
      <div className="sticky top-6 z-50 px-6 container mx-auto">
        <LandingHeader />
      </div>
      <div className="flex-1 mt-6">
        <Outlet />
      </div>
      <LandingFooter />
    </div>
  );
};

import { Outlet } from "react-router-dom";

// import { SiteFooter } from "~widgets/shared/site-footer";
// import { SiteHeader } from "~widgets/shared/site-header";

// export interface SiteLayoutProps extends Partial<ComponentWithChildren> {}

export const LandingLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <SiteHeader /> */}
      <div className="flex-1">
        <Outlet />
      </div>
      {/* <SiteFooter /> */}
    </div>
  );
};

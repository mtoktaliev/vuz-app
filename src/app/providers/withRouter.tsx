import { BrowserRouter } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter
    basename={
      import.meta.env.DEV || !import.meta.env.VITE_BASE
        ? undefined
        : `/${import.meta.env.VITE_BASE}`
    }
  >
    {component()}
  </BrowserRouter>
);

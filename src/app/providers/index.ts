import compose from "compose-function";

import { withRouter } from "./withRouter";
import { withLocalization } from "./withLocalization";
export { antdTheme } from "./antdTheme";

export const withProviders = compose<any>(withRouter, withLocalization);

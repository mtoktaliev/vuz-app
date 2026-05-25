// import { IntlProvider, useLocaleProvider } from '~shared/lib/l10n';
// import '~shared/lib/i18n';
import { i18nInit } from "~shared/lib/i18n/i18n";

interface AppProps {}

i18nInit(["cm", "landing"], "ru", "cm");

export const withLocalization = (component: React.FunctionComponent) => (props: AppProps) => {
  // const intlProviderProps = useLocaleProvider();

  return component(props);
  // return <IntlProvider {...intlProviderProps}>{component(props)}</IntlProvider>;
};

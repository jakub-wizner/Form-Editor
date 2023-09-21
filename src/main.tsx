import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App';
import { translations } from './config/translations';

const locale = 'en';

// Mount the app using createRoot()
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <ConfigProvider locale={translations[locale] as Locale}>
    <App />
  </ConfigProvider>
);

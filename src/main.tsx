import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App';
import { translations } from './config/translations';

const locale = 'en';

const HTMLElement = document.getElementById('root');
const root = createRoot(HTMLElement);
root.render(
  <ConfigProvider locale={translations[locale] as Locale}>
    <App />
  </ConfigProvider>
);

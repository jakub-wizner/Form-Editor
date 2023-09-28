import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App';
import { translations } from './config/translations';
import { LanguageProvider } from './components/LanguageContext';

const locale = 'en';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <ConfigProvider locale={translations[locale]}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ConfigProvider>
);

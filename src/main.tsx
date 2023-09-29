import { createRoot } from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './components/LanguageContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
);

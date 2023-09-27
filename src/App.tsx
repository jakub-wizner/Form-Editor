import React from 'react';
import { Layout, Menu } from 'antd';
import { translations } from './config/translations';
import { configElements } from './config/configElements';
import { FieldConfig } from './config/fieldConfig';
import ElementForm from './components/ElementForm';

const { Content, Sider } = Layout;

const App: React.FC = () => {
  const [currentElement, setCurrentElement] = React.useState<string | null>(null);

  const handleMenuClick = (element: string) => {
    setCurrentElement(element);
  };

  const handleMenuClickWrapper = React.useCallback((event: { key: string }) => {
    handleMenuClick(event.key);
  }, []);

  const handleFormSubmit = (data: Record<string, any>) => {
    console.log('Form data:', data);
  };

  const renderForm = () => {
    if (currentElement) {
      const config: FieldConfig[] = configElements[currentElement];
      return <ElementForm config={config} onSubmit={handleFormSubmit} />;
    }
    return null;
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="light">
        <Menu mode="inline" theme="light" onClick={handleMenuClickWrapper}>
          {Object.keys(configElements).map((element) => (
            <Menu.Item key={element}>{element}</Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: '24px' }}>
          {currentElement && (
            <div>
              <h1>{translations.en[currentElement]}</h1>
              {renderForm()}
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

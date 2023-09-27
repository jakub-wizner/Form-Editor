import React from 'react';
import { Layout, Menu } from 'antd';
import { translations } from './config/translations';
import { configElements } from './config/configElements';
import { FieldConfig } from './config/fieldConfig';
import ElementForm from './components/ElementForm';

const { Content, Sider } = Layout;

const App: React.FC = () => {
  const [currentElement, setCurrentElement] = React.useState<string | null>(null);

  const menuItems = Object.keys(configElements).map(element => ({
    label: element,
    key: element,
  }));


  const handleMenuClick = (element: string) => {
    setCurrentElement(element);
  };

  const handleMenuClickWrapper = React.useCallback((event: { key: string }) => {
    handleMenuClick(event.key);
  }, []);

  const handleFormSubmit = (data: Record<string, unknown>) => {
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
        <Menu mode="inline" theme="light" onClick={handleMenuClickWrapper} items={menuItems}/>
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

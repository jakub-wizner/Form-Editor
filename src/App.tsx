import React from 'react';
import { Layout, Menu, Select } from 'antd';
import { configElements } from './config/configElements';
import { FieldConfig } from './config/fieldConfig';
import ElementForm from './components/ElementForm';

const { Content, Sider, Header } = Layout;
const { Option } = Select;

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

  const handleLanguageChange = (value: string) => {
    console.log('Selected language:', value);
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
        <Header style={{ display: 'inline-block', justifyItems: 'center', margin: 0, backgroundColor: 'white', paddingLeft: 0 }}>
          <Select defaultValue="en" style={{ width: 120 }} onChange={handleLanguageChange}>
            <Option value="en">English</Option>
            <Option value="es">Español</Option>
          </Select>
        </Header>
        <Menu mode="inline" theme="light" onClick={handleMenuClickWrapper} items={menuItems} />
      </Sider>
      <Layout>
        <Content style={{ padding: '24px' }}>
          {currentElement && (
            <div>
              {renderForm()}
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

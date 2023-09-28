import React, { useState, useContext } from 'react';
import { Layout, Menu, Select } from 'antd';
import { configElements } from './config/configElements';
import { FieldConfig } from './config/fieldConfig';
import ElementForm from './components/ElementForm';
import { LanguageContext, useLanguage } from './components/LanguageContext';
import { translations } from './config/translations';

const { Content, Sider, Header } = Layout;
const { Option } = Select;

const App: React.FC = () => {
  const [currentElement, setCurrentElement] = useState<string | null>(null);
  const { currentLanguage, changeLanguage } = useLanguage();

  const menuItems = Object.keys(configElements).map(element => ({
    label: translations[currentLanguage][element],
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
    changeLanguage(value);
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
          <Select value={currentLanguage} style={{ width: 120 }} onChange={handleLanguageChange}>
            <Option value="en">English</Option>
            <Option value="es">Español</Option>
          </Select>
        </Header>
        <Menu mode="inline" theme="light" onClick={handleMenuClickWrapper} items={menuItems}/>
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
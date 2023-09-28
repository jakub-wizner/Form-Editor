import React, { useState, useContext } from 'react';
import { Form, Input, Select, Checkbox, Button } from 'antd';
import { FieldConfig } from '../config/fieldConfig';
import { LanguageContext } from './LanguageContext';
import { translations } from '../config/translations';
import './ElementForm.css';

const { Option } = Select;

interface ElementFormProps {
  config: FieldConfig[];
  onSubmit: (data: Record<string, unknown>) => void;
}

const ElementForm: React.FC<ElementFormProps> = ({ config, onSubmit }) => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const { currentLanguage } = useContext(LanguageContext);

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      const values = await form.validateFields();
  
      if (values.category) {
        delete values['product.available'];
      } else if (values['product.available']) {
        values['product.available'] = values['product.available'] === 'on';
      }
      
      onSubmit(values);
      form.resetFields();
    } catch (error) {
      console.error('Form validation error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form form={form} layout="vertical">
      {config.map((field) => (
        <Form.Item key={field.translationKey} label={translations[currentLanguage][field.translationKey]} name={field.label}>
          {field.type === 'string' && <Input />}
          {field.type === 'number' && <Input type="number" />}
          {field.type === 'choice' && (
            <Select>
              {field.choices?.map((choice) => (
                <Option key={choice.value} value={choice.value}>
                  {translations[currentLanguage][choice.translationKey]}
                </Option>
              ))}
            </Select>
          )}
          {field.type === 'bool' && (
            <Form.Item name={field.translationKey} valuePropName='checked' initialValue={false}>
              <Checkbox />
            </Form.Item>
          )}
        </Form.Item>
      ))}
      <Form.Item>
        <Button type="primary" onClick={handleSubmit} loading={submitting}>
          {translations[currentLanguage]['button.save']}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ElementForm;

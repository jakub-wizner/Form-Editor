import React, { useState } from 'react';
import { Form, Input, Select, Checkbox, Button } from 'antd';
import { FieldConfig } from '../config/fieldConfig';
import './ElementForm.css';

const { Option } = Select;

interface ElementFormProps {
  config: FieldConfig[];
  onSubmit: (data: Record<string, any>) => void;
}

const ElementForm: React.FC<ElementFormProps> = ({ config, onSubmit }) => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const [available, setAvailable] = useState(false);

  const handleCheckboxChange = (e) => {
    setAvailable(e.target.checked);
  }

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      const values = await form.validateFields();
      onSubmit({ ...values, 'product.available': available });
      form.resetFields();
      setAvailable(false);
    } catch (error) {
      console.error('Form validation error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form form={form} layout="vertical">
      {config.map((field) => (
        <Form.Item key={field.translationKey} label={field.label} name={field.translationKey}>
          {field.type === 'string' && <Input />}
          {field.type === 'number' && <Input type="number" />}
          {field.type === 'choice' && (
            <Select>
              {field.choices?.map((choice) => (
                <Option key={choice} value={choice}>
                  {choice}
                </Option>
              ))}
            </Select>
          )}
          {field.type === 'boolean' && <Checkbox name="product.available" checked={available} onChange={handleCheckboxChange} />}
        </Form.Item>
      ))}
      <Form.Item>
        <Button type="primary" onClick={handleSubmit} loading={submitting}>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ElementForm;


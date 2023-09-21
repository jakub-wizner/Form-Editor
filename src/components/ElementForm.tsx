import React, { useState } from 'react';
import { Form, Input, Select, Checkbox, Button } from 'antd';
import { FieldConfig } from '../config/fieldConfig';

const { Option } = Select;

interface ElementFormProps {
  config: FieldConfig[];
  onSubmit: (data: Record<string, any>) => void;
}




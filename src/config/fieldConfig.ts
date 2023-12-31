export interface FieldConfig {
    type: 'string' | 'number' | 'choice' | 'bool';
    label: string;
    translationKey: string;
    choices?: { translationKey: string, value: string }[];
  }
  
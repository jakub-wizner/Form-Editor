export interface FieldConfig {
    type: 'string' | 'number' | 'choice' | 'boolean';
    label: string;
    translationKey: string;
    choices?: string[];
}
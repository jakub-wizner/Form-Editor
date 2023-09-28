import { FieldConfig } from "./fieldConfig";

export const configElements: Record<string, FieldConfig[]> = {
  Product: [
    { type: 'string', label: 'Name', translationKey: 'product.name' },
    {
      type: 'choice',
      label: 'Size',
      translationKey: 'product.size',
      choices: [
        { translationKey: 'product.size.small', value: 'small' },
        { translationKey: 'product.size.middle', value: 'middle' },
        { translationKey: 'product.size.large', value: 'large' }
      ]
    },
    { type: 'number', label: 'Price', translationKey: 'product.price' },
    { type: 'bool', label: 'Available', translationKey: 'product.available'},
  ],
  Category: [
    { type: 'string', label: 'Name', translationKey: 'category.name' },
    { type: 'number', label: 'Order', translationKey: 'category.order' },
  ],
};

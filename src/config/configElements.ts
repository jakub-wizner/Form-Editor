import { FieldConfig } from "./fieldConfig";

export const configElements: Record<string, FieldConfig[]> = {
  Product: [
    { type: 'string', label: 'productName', translationKey: 'product.name' },
    {
      type: 'choice',
      label: 'productSize',
      translationKey: 'product.size',
      choices: [
        { translationKey: 'product.size.small', value: 'small' },
        { translationKey: 'product.size.middle', value: 'middle' },
        { translationKey: 'product.size.large', value: 'large' }
      ]
    },
    { type: 'number', label: 'productPrice', translationKey: 'product.price' },
    { type: 'bool', label: 'productAvailable', translationKey: 'product.available'},
  ],
  Category: [
    { type: 'string', label: 'categoryName', translationKey: 'category.name' },
    { type: 'number', label: 'categoryOrder', translationKey: 'category.order' },
  ],
};

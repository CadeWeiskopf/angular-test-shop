export const testConstructor = () => {
  console.log('constructor called');
};

enum ProductCategory {
  TShirt = 'T-Shirt',
  Pants = 'Pants',
}
interface IProduct {
  id: string;
  name: string;
  category: ProductCategory;
}
export const products: IProduct[] = [
  { id: '1', name: 'Tie Dye T-Shirt', category: ProductCategory.TShirt },
];

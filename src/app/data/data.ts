export const testConstructor = () => {
  console.log('constructor called');
};

enum ProductCategory {
  TShirt = 'T-Shirt',
  Pants = 'Pants',
}
export interface IProduct {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
}
export const products: IProduct[] = [
  {
    id: '1',
    slug: 'tiedyetshirt',
    name: 'Tie Dye T-Shirt',
    category: ProductCategory.TShirt,
    price: 20,
  },
];

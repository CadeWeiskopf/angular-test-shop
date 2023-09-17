import { environment } from 'src/environments/environment';

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
// export let products: IProduct[] = [
//   {
//     id: '1',
//     slug: 'tiedyetshirt',
//     name: 'Tie Dye T-Shirt',
//     category: ProductCategory.TShirt,
//     price: 20,
//   },
//   {
//     id: '2',
//     slug: 'khakis',
//     name: 'Khaki Pants',
//     category: ProductCategory.Pants,
//     price: 75.77,
//   },
// ];

export const getProducts: () => Promise<IProduct[]> = async () => {
  const response = await fetch(`${environment.apiUrl}/products`);
  if (!response.ok || response.status !== 200) {
    throw Error('Bad response');
  }
  const data = await response.json();
  if (!Array.isArray(data)) {
    throw Error('No data');
  }
  return data as IProduct[];
};

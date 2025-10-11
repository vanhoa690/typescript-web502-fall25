interface IProduct {
  id: string;
  title: string;
  price: number;
  stock: number;
  thumbnail: string;
  description: string;
  category: string;
}

export default IProduct;
export type ProductInput = Omit<IProduct, "id" | "stock">;

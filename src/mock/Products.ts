import api from "axios";

const ListAllProducts = async () => {
  const products = await api.get(
    "https://600e2b9f3bb1d100179de755.mockapi.io/api/Products"
  );

  return products;
};

const StoreProduct = async (data: any) => {
  const newProduct = await api.post(
    "https://600e2b9f3bb1d100179de755.mockapi.io/api/Products",
    data
  );

  return newProduct;
};

const RemoveProduct = async (id: string) => {
  await api.delete(
    `https://600e2b9f3bb1d100179de755.mockapi.io/api/Products/${id}`
  );
};

export { ListAllProducts, StoreProduct, RemoveProduct };

import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";

import { Button } from "antd";
import Link from "next/link";
import { StoreProduct } from "../mock/Products";

const NewProduct: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    quantity: 0,
    unity: 0,
  });

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNewProduct = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    await StoreProduct(formData);

    setLoading(false);

    router.back();
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <header className="w-1/2 h-16 flex justify-center items-center">
        <h2 className="font-bold text-lg">Adicionar novo produto no estoque</h2>
      </header>
      <section className="bg-gray-200 h-1/2 w-1/2 flex flex-col justify-center items-center">
        <form
          className="h-full w-1/2  flex flex-col justify-center items-center"
          onSubmit={handleNewProduct}
        >
          <input
            name="name"
            className="p-2 w-full mb-4 border-blue-600 border-2 rounded-md border-solid"
            type="text"
            placeholder="Nome do produto"
            onChange={handleChangeInput}
          />
          <input
            name="quantity"
            className="p-2 w-full mb-4 border-blue-600 border-2 rounded-md border-solid"
            type="text"
            placeholder="Insira a quantidade"
            onChange={handleChangeInput}
          />
          <input
            name="unity"
            className="p-2 w-full mb-4 border-blue-600 border-2 rounded-md border-solid"
            type="text"
            placeholder="Valor unitário"
            onChange={handleChangeInput}
          />

          <div className="w-full flex flex-row justify-between items-center">
            <Link href="/">
              <button
                className="  border-none 
          w-1/2
          h-10
          font-bold 
          text-blue-700 
          text-lg
          self-end
          rounded-md"
                type="button"
              >
                Voltar
              </button>
            </Link>

            <button
              type="submit"
              className=" 
          border-none 
          w-1/2
          h-10
          font-bold 
          text-blue-700 
          text-lg
          self-end
          rounded-md
          "
            >
              Adicionar produto
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default NewProduct;

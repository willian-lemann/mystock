import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./index.module.scss";

import { Button, Table } from "antd";

import { ListAllProducts, RemoveProduct } from "../../mock/Products";

const Main: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const handleRemoveProduct = async (id: string) => {
    await RemoveProduct(id);
    loadProducts();
  };

  const loadProducts = async () => {
    setLoading(true);
    const response = await ListAllProducts();

    setProducts(response.data);
    setLoading(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Quantidade",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Valor unidade",
      dataIndex: "unity",
      key: "unity",
    },
    {
      title: "Ações",
      key: "actions",
      render: (text, record) => {
        return (
          <Button
            key={record.key}
            onClick={() => handleRemoveProduct(record.key)}
            danger
          >
            Deletar
          </Button>
        );
      },
    },
  ];

  const data = products?.map((product) => {
    return {
      key: product.id,
      name: product.name,
      quantity: product.quantity,
      unity: product.unity,
    };
  });

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="shadow-lg m-2 flex flex-col">
      <Table
        loading={loading}
        tableLayout="auto"
        className={`${styles.table}`}
        columns={columns}
        dataSource={data}
      />
      <Link href="/new-product">
        <button className="border-none h-12 w-1/4 m-3 text-lg bg-blue-500 text-white rounded-sm  self-end">
          Cadastrar novo produto
        </button>
      </Link>
    </div>
  );
};

export default Main;

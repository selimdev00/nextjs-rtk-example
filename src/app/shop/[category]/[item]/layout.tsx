import React from "react";

export default function ShopLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    category: string;
    item: string;
  };
}) {
  return (
    <section className={"flex flex-col gap-4"}>
      <div>
        <h2>These are from layout</h2>

        <p>Category: {params.category}</p>

        <p>Item: {params.item}</p>
      </div>

      <div>
        <h2>And these from page.tsx</h2>

        <main>{children}</main>
      </div>
    </section>
  );
}

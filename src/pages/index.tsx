import * as React from "react";
import { Layout } from "../components/layout";
import { Stack } from "office-ui-fabric-react/lib/components/Stack";
import { GetInTouchCard } from "../components/get_in_touch";
import { products } from "../data/products";
import { Product } from "../components/product";

const Index: React.FunctionComponent = () => {
  return (
    <Layout selectedKey="portifolio">
      <Stack tokens={{ childrenGap: "m" }}>
        {products.map((p) => {
          return (
            <Product
              key={p.to}
              item={p}
              variant="collapsed"
            />
          );
        })}
        <GetInTouchCard />
      </Stack>
    </Layout>
  );
};

export default Index;

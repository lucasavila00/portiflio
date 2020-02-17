import * as React from "react";
import { Layout } from "../components/layout";
import { Product } from "../components/product";
import { prod_festaestranha } from "../data/products";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { Text } from "office-ui-fabric-react/lib/Text";
import { PinkSeparator } from "../components/util";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";

const Fege = () => {
  return (
    <Layout selectedKey={null}>
      <Product item={prod_festaestranha} variant="details">
        <Stack tokens={{ padding: "m", childrenGap: "m" }}>
          <Text>
            Um mini site destinado para a bio do Instagram.
          </Text>
          <Text>
            Os links importantes para o evento ficam
            disponibilizados de maneira simples e
            organizada.
          </Text>
          <PinkSeparator />
          <Text variant="large">
            Desenvolvimento realizado <i>in house:</i>
          </Text>
          <Text>
            🖥️ Análise de tráfego (entrada e saída) em tempo
            real pelo Google Analytics
          </Text>
          <Text>📱 Interface otimizada para celulares</Text>
          <Text>⚡ Hospedado em CDN global</Text>
        </Stack>
        <Stack>
          <Stack
            tokens={{ padding: "s1" }}
            horizontalAlign="end"
          >
            <PrimaryButton href="https://festaestranha.com/">
              Abrir Festa Estranha
            </PrimaryButton>
          </Stack>
        </Stack>
      </Product>
    </Layout>
  );
};

export default Fege;

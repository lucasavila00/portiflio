import * as React from "react";
import { Layout } from "../components/layout";
import { Product } from "../components/product";
import { prod_cobranca } from "../data/products";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { Text } from "office-ui-fabric-react/lib/Text";
import { PinkSeparator } from "../components/util";

const Cobranca = () => {
  return (
    <Layout selectedKey={null}>
      <Product item={prod_cobranca} variant="details">
        <Stack tokens={{ padding: "m", childrenGap: "m" }}>
          <Text>
            Uma plataforma para cobrança de boletos
            destinado a formaturas.
          </Text>
          <Text>
            Geração de boletos com um clique. Informações em
            tempo real aos pagadores e recebedores sobre
            pagamentos, vencimentos e novos boletos gerados.
          </Text>
          <PinkSeparator />
          <Text variant="large">
            Desenvolvimento realizado <i>in house:</i>
          </Text>
          <Text>
            🖥️ Website completo com atualização em tempo
            real
          </Text>
          <Text>
            📱 Interface responsiva para celulares
          </Text>
          <Text>👩‍💻 Integração à API do Boleto Simples</Text>
          <Text variant="small">
            Atualmente fora do ar.
          </Text>
        </Stack>
      </Product>
    </Layout>
  );
};

export default Cobranca;

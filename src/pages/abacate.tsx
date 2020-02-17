import * as React from "react";
import { Layout } from "../components/layout";
import { prod_abacate } from "../data/products";
import { Product } from "../components/product";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { PinkSeparator } from "../components/util";

const Abacate = () => {
  return (
    <Layout selectedKey={null}>
      <Product item={prod_abacate} variant="details">
        <Stack tokens={{ padding: "m", childrenGap: "m" }}>
          <Text>
            Uma rede social para compartilhar promoções com
            enfoque geográfico.
          </Text>
          <Text>
            Descubra o que há melhor perto de você e também
            publique as promoções para que todos fiquem
            ligados.
          </Text>
          <PinkSeparator />
          <Text variant="large">
            Desenvolvimento <i>full stack</i> realizado{" "}
            <i>in house:</i>
          </Text>
          <Text>
            🍏 Aplicativo para iOS desenvolvido em Flutter
          </Text>
          <Text>
            📱 Aplicativo para Android desenvolvido em
            Flutter
          </Text>
          <Text>
            ⚡ Site simples AMP para navegadores móveis
          </Text>
          <Text>
            ⚛️ Site completo em React e renderizado no
            servidor em tempo real pelo Next.JS
          </Text>
          <Text>
            🔔 Notificações em tempo real para Web, iOS e
            Android
          </Text>
          <Text>
            🛠️ Servidor em GraphQL e banco de dados Postgres
          </Text>
          <Text variant="small">Atualmente fora do ar</Text>
        </Stack>
      </Product>
    </Layout>
  );
};

export default Abacate;

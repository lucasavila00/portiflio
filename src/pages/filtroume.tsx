import * as React from "react";
import { Layout } from "../components/layout";
import { Product } from "../components/product";
import { prod_filtroume } from "../data/products";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { Text } from "office-ui-fabric-react/lib/Text";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { PinkSeparator } from "../components/util";

const Filtroume = () => {
  return (
    <Layout selectedKey={null}>
      <Product item={prod_filtroume} variant="details">
        <Stack tokens={{ padding: "m", childrenGap: "m" }}>
          <Text>
            Uma plataforma de criação de experiências em
            realidade aumentada.
          </Text>
          <Text>
            Crie um filtro com a sua mensagem e compartilhe
            para que todos possam tirar fotos incríveis!
          </Text>
          <PinkSeparator />
          <Text variant="large">
            Desenvolvimento realizado <i>in house:</i>
          </Text>
          <Text>
            🧠 Inteligência artifical para relocalização 3D
          </Text>
          <Text>
            🎨 Correção de cores com base em{" "}
            <i>lookup tables</i> do Adobe Photoshop
            executando em shaders <i>WebGl</i>
          </Text>
          <Text>🖥️ Integração ao ambiente 3D do rosto</Text>
          <Text variant="small">
            Disponível apenas em inglês.
          </Text>
        </Stack>
        <Stack>
          <Stack
            tokens={{ padding: "s1" }}
            horizontalAlign="end"
          >
            <PrimaryButton href="https://filtrou.me/">
              Abrir Filtrou.me
            </PrimaryButton>
          </Stack>
        </Stack>
      </Product>
    </Layout>
  );
};

export default Filtroume;

import * as React from "react";
import { CardWrapper } from "../components/util";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { Text } from "office-ui-fabric-react/lib/Text";
import { getTheme } from "office-ui-fabric-react/lib/Styling";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";

export const GetInTouchCard = () => {
  return (
    <CardWrapper onClick={undefined}>
      <Stack
        tokens={{ padding: "m", childrenGap: "m" }}
        style={{ paddingBottom: 8 }}
      >
        <Text
          variant="large"
          style={{
            color: getTheme().palette.themePrimary,
          }}
        >
          Entre em contato agora
        </Text>
        <Text>
          Com certeza podemos fazer algo incrível juntos.
        </Text>
      </Stack>
      <Stack tokens={{ padding: "s1" }}>
        <PrimaryButton href="https://api.whatsapp.com/send?phone=+5531986753847">
          Conversar pelo WhatsApp
        </PrimaryButton>
      </Stack>
    </CardWrapper>
  );
};

import * as React from "react";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import "./normalize.css";
import "./layout.css";
import {
  createTheme,
  loadTheme,
  getTheme,
} from "office-ui-fabric-react/lib/Styling";
import { Helmet } from "react-helmet";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Link, navigate } from "gatsby";
import {
  Pivot,
  PivotItem,
  PivotLinkSize,
} from "office-ui-fabric-react/lib/Pivot";

const globalTheme = createTheme({
  palette: {
    themePrimary: "#cc21b4",
    themeLighterAlt: "#080107",
    themeLighter: "#21051d",
    themeLight: "#3d0a36",
    themeTertiary: "#7a146d",
    themeSecondary: "#b41d9f",
    themeDarkAlt: "#d133bc",
    themeDark: "#d84ec6",
    themeDarker: "#e278d4",
    neutralLighterAlt: "#ffffff",
    neutralLighter: "#ffffff",
    neutralLight: "#ffffff",
    neutralQuaternaryAlt: "#ffffff",
    neutralQuaternary: "#ffffff",
    neutralTertiaryAlt: "#ffffff",
    neutralTertiary: "#cfa4aa",
    neutralSecondary: "#9f5d67",
    neutralPrimaryAlt: "#722d37",
    neutralPrimary: "#5e1d27",
    neutralDark: "#48161e",
    black: "#351016",
    white: "#ffffff",
  },
});

const pivotTheme = createTheme({
  palette: {
    themePrimary: "#ffffff",
    themeLighterAlt: "#767676",
    themeLighter: "#a6a6a6",
    themeLight: "#c8c8c8",
    themeTertiary: "#d0d0d0",
    themeSecondary: "#dadada",
    themeDarkAlt: "#eaeaea",
    themeDark: "#f4f4f4",
    themeDarker: "#f8f8f8",
    neutralLighterAlt: "#c620b0",
    neutralLighter: "#c31fad",
    neutralLight: "#bb1ea6",
    neutralQuaternaryAlt: "#ae1c9b",
    neutralQuaternary: "#a61b94",
    neutralTertiaryAlt: "#a01a8e",
    neutralTertiary: "#c8c8c8",
    neutralSecondary: "#d0d0d0",
    neutralPrimaryAlt: "#dadada",
    neutralPrimary: "#ffffff",
    neutralDark: "#f4f4f4",
    black: "#f8f8f8",
    white: "#cc21b4",
  },
});

loadTheme(globalTheme);

export const Layout: React.FunctionComponent<{
  selectedKey: "portifolio" | "contato" | null;
}> = ({ children, selectedKey }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <title>Lucas A.</title>
      </Helmet>

      <Stack
        horizontalAlign="center"
        style={{
          width: "100%",
        }}
        tokens={{ padding: "m" }}
      >
        <Stack
          style={{
            maxWidth: 768,
            width: "100%",
          }}
          verticalAlign="center"
          horizontal={true}
          tokens={{ childrenGap: "m" }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            <Text
              variant="large"
              style={{
                color: getTheme().palette.white,
                fontWeight: "bold",
              }}
            >
              Lucas A.
            </Text>
          </Link>
          <div>
            <div
              style={{
                height: 24,
                width: 2,
                backgroundColor: getTheme().palette.white,
              }}
            />
          </div>

          <Pivot
            aria-label="Basic Pivot Example"
            selectedKey={selectedKey}
            theme={pivotTheme}
            linkSize={PivotLinkSize.normal}
            onLinkClick={(item) => {
              switch (item?.props.itemKey) {
                case "portifolio": {
                  navigate("/");
                  return;
                }
                case "contato": {
                  navigate("/contato");
                  return;
                }
              }
            }}
          >
            <PivotItem
              headerText="Portifólio"
              itemKey="portifolio"
            ></PivotItem>
            <PivotItem
              headerText="Contato"
              itemKey="contato"
            ></PivotItem>
          </Pivot>
        </Stack>
      </Stack>
      <Stack horizontalAlign="center">
        <Stack
          tokens={{ padding: "s1" }}
          style={{
            width: "100%",
            maxWidth: 512,
          }}
        >
          {children}
        </Stack>
      </Stack>
    </>
  );
};

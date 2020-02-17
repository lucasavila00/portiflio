import * as React from "react";
import { Stack } from "office-ui-fabric-react/lib/components/Stack";
import { Separator } from "office-ui-fabric-react/lib/Separator";
import { getTheme } from "office-ui-fabric-react/lib/Styling";

export const CardWrapper: React.FunctionComponent<{
  onClick: (() => void) | undefined;
}> = ({ children, onClick }) => {
  return (
    <Stack
      style={{
        backgroundColor: getTheme().palette.white,
        borderRadius: 2,
        boxShadow: "2px 2px 4px 0px rgba(0,0,0,0.2)",
        cursor: onClick != null ? "pointer" : undefined,
      }}
      onClick={onClick}
    >
      {children}
    </Stack>
  );
};

export const PinkSeparator = () => {
  return (
    <Separator
      styles={{
        root: {
          selectors: {
            "::before": {
              backgroundColor: getTheme().palette
                .themeDarker,
            },
          },
        },
      }}
    ></Separator>
  );
};

import * as React from "react";
import { Stack } from "office-ui-fabric-react/lib/components/Stack";
import { Text } from "office-ui-fabric-react/lib/components/Text";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { getTheme } from "office-ui-fabric-react/lib/Styling";
import { Link, navigate } from "gatsby";
import { IProduct } from "../data/products";
import { CardWrapper } from "./util";
import { GetInTouchCard } from "./get_in_touch";

export const Product: React.FunctionComponent<{
  item: IProduct;
  variant: "collapsed" | "details";
}> = ({
  item: { title, hashtags, to, imgCover },
  variant,
  children,
}) => {
  return (
    <>
      <CardWrapper
        onClick={
          variant == "collapsed"
            ? () => navigate(to)
            : undefined
        }
      >
        <Stack tokens={{ padding: "m" }}>
          <Text
            variant="large"
            style={{
              color: getTheme().palette.themePrimary,
            }}
          >
            {title}
          </Text>
          <Text variant="small">{hashtags.join(" ")}</Text>
        </Stack>
        <Stack
          style={{
            // backgroundColor: "green",
            height: 256,
            backgroundImage: `url(${imgCover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Stack>
        {variant == "collapsed" && (
          <Stack
            tokens={{ padding: "s1" }}
            horizontalAlign="end"
          >
            <Link to={to}>
              <PrimaryButton>Mais detalhes</PrimaryButton>
            </Link>
          </Stack>
        )}
        {variant == "details" && children}
      </CardWrapper>
      {variant == "details" && (
        <Stack
          tokens={{ padding: "m" }}
          style={{
            paddingRight: 0,
            paddingLeft: 0,
            paddingBottom: 0,
          }}
        >
          <GetInTouchCard />
        </Stack>
      )}
    </>
  );
};

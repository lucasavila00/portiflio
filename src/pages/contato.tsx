import * as React from "react";
import { Layout } from "../components/layout";
import { GetInTouchCard } from "../components/get_in_touch";

const Contato = () => {
  return (
    <Layout selectedKey="contato">
      <GetInTouchCard />
    </Layout>
  );
};

export default Contato;

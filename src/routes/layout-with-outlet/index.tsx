import { Outlet } from "react-router-dom";
import Layout from "src/layout";

const LayoutWithOutlet = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default LayoutWithOutlet;

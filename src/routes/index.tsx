import { RouteObject } from "react-router-dom";
import UserInfos from "src/pages/userInfos";
import LayoutWithOutlet from "./layout-with-outlet";

const RoutesList: RouteObject[] = [
  {
    path: "*",
    element: <LayoutWithOutlet />,
    children: [
      {
        index: true,
        element: <UserInfos />,
      },
    ],
  },
];

export default RoutesList;

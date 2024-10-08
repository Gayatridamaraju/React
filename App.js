import React from "react";
import {createRoot} from "react-dom/client";
import Header from "./header";
import About from "./About";
import Contact from "./Contact";
import Body from "./body";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const rootReact=createRoot(document.getElementById("root"))
const Applayout=()=>(
    <div className="app-layout">
        <Header />
        <Body />

    </div>

    );
    rootReact.render(<Applayout/>)
    const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <Applayout />,
          children: [
            {
              path:"/home",
              element:<Body/>,
            },
            {
              path:"/about",
            element:<About/>,
            },
            {
              path:"/Contact",
              element:<Contact/>,
            },
          ],
         
        },
      ]);
      
      // rootReact.render(<AppRoot />);
      rootReact.render(<RouterProvider router={appRouter} />);
import React from "react";
import { NavigationBar } from "./../components/Navbar";

export const Page404 = () => {
  return (
    <>
      <NavigationBar>
        <main style={{ padding: "1rem" }}>
          <p>No page exist for this url</p>
        </main>
      </NavigationBar>
    </>
  );
};

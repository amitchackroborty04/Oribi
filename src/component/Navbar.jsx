import React from "react";
import Images from "./Images";
import Containar from "./Containar";
import List from "./List";
import Listitem from "./Listitem";
import Flex from "./Flex";

const Navbar = () => {
  return (
    <div>
      <Containar>
        <Flex>
          <Images src="images/logo.png" alt="logo" />
          <List>
            <Listitem>Home</Listitem>
            <Listitem>Home</Listitem>
            <Listitem>Home</Listitem>
            <Listitem>Home</Listitem>
          </List>
        </Flex>
      </Containar>
    </div>
  );
};

export default Navbar;

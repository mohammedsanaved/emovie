import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className="text-xl flex justify-between text-red-500 p-4 font-bold border-b-2 border-gray-300">
      <span>
        e<span className="text-blue-400 ">movie</span>
      </span>
      <h1 className="text-lg text-white flex cursor-pointer item-center">
        <Button variant="outlined">
          <AddIcon className="mr-1" />
          <span className="text-white">add new</span>
        </Button>
      </h1>
    </div>
  );
};

export default Header;

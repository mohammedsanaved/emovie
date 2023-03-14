import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 header text-xl flex justify-between text-red-500 p-4 font-bold border-b-2 border-gray-300">
      <Link to={"/"}>
        <span>
          e<span className="text-blue-400 ">movie</span>
        </span>
      </Link>
      <Link to={"/addmovie"}>
        <h1 className="text-lg text-white flex cursor-pointer item-center">
          <Button variant="outlined">
            <AddIcon className="mr-1" />
            <span className="text-white">add new</span>
          </Button>
        </h1>
      </Link>
    </div>
  );
};

export default Header;

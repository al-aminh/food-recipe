import React, { useContext } from "react";
import { UserContext } from "../Store/Context";
import Items from "./Items";
const Favouties = () => {
  const { favouriteLists } = useContext(UserContext);

  console.log("favouriteList", favouriteLists);
  return (
    <div className="flex flex-wrap gap-10 py-10 px-4 mx-auto  w-screen">
      {favouriteLists && favouriteLists.length > 0 ? (
        favouriteLists.map((item) => <Items item={item} />)
      ) : (
        <div className="flex items-center justify-center text-2xl font-bold">
          No favourite items
        </div>
      )}
    </div>
  );
};

export default Favouties;

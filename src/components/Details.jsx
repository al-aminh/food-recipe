import React, { useContext, useEffect } from "react";
import { UserContext } from "../Store/Context";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  const { detailsData, setDetailsData, favouriteLists, addFavourite } =
    useContext(UserContext);

  useEffect(() => {
    const getDetails = async () => {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();
      if (data?.data) {
        setDetailsData(data?.data);
      }
    };
    getDetails();
  }, []);
  console.log(detailsData);
  return (
    <>
      <div className="flex gap-2 pl-4 ">
        <div className=" rounded-md overflow-hidden h-60 w-60 ">
          <img
            className="h-full w-full object-cover"
            src={detailsData?.recipe?.image_url}
            alt=""
          />
        </div>
        <div className="font-bold gap-2">
          <span className="">{detailsData?.recipe?.publisher}</span>
          <h2 className="">{detailsData?.recipe?.title}</h2>
          <button
            className="p-2 bg-black rounded-lg text-white"
            onClick={() => {addFavourite(detailsData?.recipe)}}
          >
            {favouriteLists &&
            favouriteLists.length > 0 &&
            favouriteLists.findIndex(
              (item) => item.id === detailsData?.recipe?.id
            ) !== -1
              ? "Remove from favourite"
              : "Add to favourite"}
          </button>
          <h2>Ingredients:</h2>
          <ul>
            {detailsData?.recipe?.ingredients &&
            detailsData?.recipe?.ingredients.length > 0
              ? detailsData?.recipe?.ingredients.map((ing) => (
                  <li>
                    {ing.quantity} {ing.unit} {ing.description}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Details;

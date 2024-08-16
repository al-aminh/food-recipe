import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserContexProvider = ({ children }) => {
  const [search, setSearch] = useState();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errormsg, setErrormsg] = useState(null);
  const [detailsData, setDetailsData] = useState(null);
  const [favouriteLists, setFavouriteLists] = useState([]);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipes(data?.data?.recipes);
        setLoading(false);
        setSearch("");
        navigate("/")
      }
    } catch (e) {
      setErrormsg(e.meassage);
      setLoading(false);
      setSearch("");
    }
  };
  const addFavourite = (getCurrentItem) => {
    
    let cpyList = [...favouriteLists];
    const index = cpyList.findIndex(item=> item.id === getCurrentItem.id)
    console.log("index",index);
    if(index === -1 ){
      cpyList.push(getCurrentItem);
    }else {
      cpyList.splice(index);
    }
    setFavouriteLists(cpyList);
    console.log("cpy", cpyList);
    console.log("fav",favouriteLists);
  }
  console.log("Fav out", favouriteLists)
  return (
    <UserContext.Provider
      value={{
        search,
        setSearch,
        handleSubmit,
        recipes,
        loading,
        errormsg,
        favouriteLists,
        setFavouriteLists,
        detailsData,
        setDetailsData,
        addFavourite,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContexProvider;

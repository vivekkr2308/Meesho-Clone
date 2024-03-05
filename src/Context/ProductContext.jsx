import { createContext,useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/ProductReducer";

const AppContext = createContext();
const API = "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products";
// Initial state
const initialState={ 
    isLoading: false,
    isError:false,
    products:[],
//For Single Product
    isSingleLoading: false,
    singleProduct: {},
//for searchProduct
    searchQuery:'' ,
    filteredProducts: [],
//for the user Login
    isUserLogin: false,
    user: null,
     

}


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type : "SET_LOADING"});

    try{
    const res = await axios.get(url);
    const products = await res.data; 
    // console.log(products);
    //getting all the products here
    dispatch ({ type : "SET_API_DATA", payload: products});
    
  } catch(error){
     dispatch ({type : "API_ERROR"});
  }
  };

  
 //my single api for one product
  const getSingleProduct = async (url)=> {
    dispatch({ type : "SET_SINGLE_LOADING"});
      try {
        const res = await axios.get(url);
        const singleProduct =  res.data;
        // console.log(singleProduct);
        dispatch ({ type : "SET_SINGLE_PRODUCT", payload: singleProduct});
        // console.log("singleProduct data are from singleProduct:" , singleProduct);
      } catch (error) {
        dispatch ({type : "SET_SINGLE_ERROR"});
      }
  }

 //Calling the function for all products
  useEffect(() => {
    getProducts(API);
    
  }, []);

  function OnSearch(query){
    dispatch({type : "searchItem",
    payload: query})
  }

  function GetFilteredProducts (query='', filterField='title'){
    // console.log(query,filterField);
         dispatch({type : "filtered",
        payload: query, filterField }
         )
         
  }


//for the user Login

// useEffect(() => {
//   // Check local storage for user data
//   const storedUser = localStorage.getItem('user');
//   if (storedUser) {
//     dispatch({ type: 'LOGIN', payload: { user: JSON.parse(storedUser) } });
//   }
// }, []);



const login = (user) => {
  // Save user data to local storage
  localStorage.setItem('user', JSON.stringify(user));
  

  dispatch({ type: 'LOGIN', payload: { user } });
  console.log(state.user);
};



const logout = () => {
  // Remove user data from local storage
  localStorage.removeItem('user');
  dispatch({ type: 'LOGOUT' });
};


  return <AppContext.Provider value={{...state,getSingleProduct,dispatch ,OnSearch,GetFilteredProducts, login,logout}}>
    {children}</AppContext.Provider>;
};

const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext,useProductContext };

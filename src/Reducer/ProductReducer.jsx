// Reducer function for managing state changes

const ProductReducer = (state, action) => {
    // console.log(action,"action");
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      }

    case "SET_API_DATA":
       return{
        ...state,
        isLoading:false,
        products: action.payload,
        filteredProducts:action.payload,
        
      }


      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        }; 

      //for single product
      case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

      case "SET_SINGLE_PRODUCT":
        
        return {
          ...state,
          isSingleLoading: false,
          singleProduct : action.payload,
        }


        case "SET_SINGLE_ERROR":
        return {
          ...state,
          isSingleLoading: false,
          isError: true,
        }; 
        
        case "LOGIN":
          return {
            ...state,
            isUserLogin: true,
            user: action.payload.user,
          }

        case "LOGOUT":
          return{
            ...state,
            isUserLogin: false,
            user: null,

          }
        
        //for the input
        // case "searchItem":
        //   return {
        //     ...state,
        //     searchQuery : action.payload,
        //   }

          case "filtered" :
            return {
              ...state,
              filteredProducts : state.products.filter((product)=>(
                 action.filterField==='title'? product.title.toLowerCase().includes(action.payload.toLowerCase()):
                 action.payload==="all-product" ? true : product.category === action.payload
              )
              )

          

            }



  
    default:
      return state;


  }
   
 
};

export default ProductReducer;
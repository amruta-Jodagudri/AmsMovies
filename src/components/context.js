import React,{useContext, useEffect,useState} from 'react';

const AppContext = React.createContext();
const API_URl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({children}) => {
    const [IsLoading, setIsLoading] = useState(true);
    const [movie, setmovie] = useState([]);
    const [IsError, setIsError] = useState({show:'false',msg:""});
    const [query , setquery] = useState("Titanic");

    const getMovies=async (url)=>{
        try{
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data);
            if(data.Response === "True"){
                setIsLoading(false);
                setmovie(data.Search);
            }
            else{
                setIsError({
                    show:true,
                    msg:data.error
                })
            }
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        getMovies(`${API_URl}&s=${query}`);
    }, [query]);

    return <AppContext.Provider value={{IsLoading,movie,IsError,query,setquery}}>{children}</AppContext.Provider>;
};

const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext , AppProvider,useGlobalContext};
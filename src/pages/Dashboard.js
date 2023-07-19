import React from "react";
import Header from "../components/Common/Header";
import TabsComponents from "../components/Dashboard/Tabs";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Search from "../components/Dashboard/Search";
import Pagination from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";

function DashboardPage(){

    const[coins,setCoins]=useState([]);
    const[paginatedCoins,setPaginatedCoins]=useState([]);
    const [page, setPage] = useState (1);
    const[search,setSearch]= useState("");
    const[isLoading,setIsLoading]=useState(true);
    const handlePageChange = (event, value) => {
      setPage(value);
      var previousIndex =(value-1)*10;
      setPaginatedCoins(coins.slice(previousIndex,previousIndex+10))
    };
    
    const onSearchChange=(e)=>{
      // console.log(e.target.value);
      setSearch(e.target.value);
    }

    var filterCoins=coins.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase() )||
    item.symbol.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(()=>{
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      ).then((response)=>{
        console.log("Response>>>>",response);
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0,10));
        setIsLoading(false);
      })
      .catch((error)=>{
        console.log("Error>>>>",error);
        setIsLoading(false);
      })
    },[])

    return (
      <> 
      <Header/>
      <BackToTop />
      {isLoading ? (
         <Loader/>
      ):(
        <div>
          
           
           <Search search={search} onSearchChange={onSearchChange}/>
           <TabsComponents coins={search ? filterCoins: paginatedCoins}/>
            {!search && (
              <Pagination page={page} handlePageChange={handlePageChange}/>
            )}
        </div>
        )}
        </>
    )
}

export default DashboardPage;
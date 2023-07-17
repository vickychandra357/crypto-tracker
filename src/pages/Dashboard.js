import React from "react";
import Header from "../components/Common/Header";
import TabsComponents from "../components/Dashboard/Tabs";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function DashboardPage(){

    const[coins,setCoins]=useState([]);

    useEffect(()=>{
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      ).then((response)=>{
        console.log("Response>>>>",response);
        setCoins(response.data);
      })
      .catch((error)=>{
        console.log("Error>>>>",error);
      })
    },[])

    return (
        <div>
            <Header/>
            <TabsComponents coins={coins}/>
        </div>
    )
}

export default DashboardPage;
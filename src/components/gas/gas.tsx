import "./gas.css";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import loading from "../assets/loading.gif"
const axios = require('axios');


const Gas = (props: any) => {

    const getData = () => {
        const fetchData = async () => {
          const response = await axios(
            'https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=059c6191089132834d3ccd4e49426a033322a076bfa435db5100137dc634',
          );
         console.log(response)
          setInfo([response.data.fastest,response.data.average,response.data.safeLow])
        };
    
        fetchData();
      };
      
      useEffect(() => {
        getData();
      }, []); 
    
   

 const [info, setInfo] = useState<any>(props.info);
  const [active, setActive] = useState(props.active);
  return(
    <div className="application">
      {active && 
        <Draggable handle=".banner">
        <div className="Gas">
        <button className="CloseButton" onClick={() => setActive(false)}>
                            <b>X</b>
                        </button>
                        <div className="banner">
                            <div><p className="title">Gas.exe</p></div>
                        </div>
                        {info ? <div className="info">

<p className="top">ETH GAS FEES</p>
<hr/>
<div className="infoText">
<p>Fast:                         {info[0]/10} GWEI
</p>                   <br/>
<p>Average: {info[1]/10} GWEI</p> <br/>
<p>Slow: {info[2]/10} GWEI</p>   <br/> </div>  </div> : 

                        <div className="loadingGif">
                            <img alt="loading_image" src={loading}></img>
                        </div> }
        </div>
        </Draggable>

    }
    </div>
  );
}

export default Gas;
import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Data from "./data";
import Table from "./table";

function Index() {
  const [data, Setdata] = useState();

  

  const getDataFromChild = (childdata) => {
    Setdata(childdata.rates);
  };

//   const filter = () => {
   
//     Setdata(coinsData);
//     // keys = Object.keys(data[0])
//     console.log(keys)
//   };


  return (
    <div>
      <button >Click</button>
      <Data getdata={getDataFromChild} />
      <Table data={data} />
    </div>
  );
}

ReactDOM.render(<Index />, document.querySelector("#root"));

export default Index;

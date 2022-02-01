import React, { useState } from "react";
import "./style.css";

function Table(props) {
  let district = [];
  let fdis = [];

  props.filteredbydate&& props.filteredbydate.map((e)=>{
    district.push(e)
  })


  console.log(district);
  console.log(fdis);

  return <div>ji</div>;
}

export default Table;

{
  /* {JSON.stringify(props.filteredbydate)} */
}
{
  /* <table>
        <tr>
          <th>Name</th>
          <th>Total</th>
          <th>Active</th>
          <th>Discharged</th>
          <th>Death</th>
        </tr>
        {/* <tr>
          <td>{obj.loc}</td>
          <td>{obj.totalConfirmed}</td>
          <td>{obj.confirmedCasesIndian}</td>
          <td>{obj.discharged}</td>
          <td>{obj.deaths}</td>
    </tr> */
}

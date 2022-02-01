import React, { useState } from "react";
import "./style.css";

function Table(props) {
  let district = [];
  let fdis = [];

  //   props.filteredbydate &&
  //     props.filteredbydate.forEach((data) => {
  //       data.regional.forEach((regionalData) => {
  //         if (obj[regionalData.loc]) {
  //           obj[regionalData.loc].confirmedCasesForeign +=
  //             regionalData.confirmedCasesForeign;
  //           obj[regionalData.loc].confirmedCasesIndian +=
  //             regionalData.confirmedCasesIndian;
  //           obj[regionalData.loc].deaths += regionalData.deaths;
  //           obj[regionalData.loc].discharged += regionalData.discharged;
  //           obj[regionalData.loc].totalConfirmed += regionalData.totalConfirmed;
  //         } else {
  //           obj[regionalData.loc] = {
  //             ...regionalData,
  //           };
  //         }
  //       });
  //     });
  //   console.log(obj);
  props.filteredbydate &&
    props.filteredbydate.map((e) => {
      return e.regional.map((x) => {
        if (!district.includes(x.loc)) {
          district.push(x.loc);
        }
      });
    });

  
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

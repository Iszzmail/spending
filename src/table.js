import React from "react";
import "./style.css";

function Table({ data }) {
  let d = data && Object.keys(data);
  console.log(d && data[d[0]]);

 
  return (
    <div>
      <table>
        <thead>
        <tr>
          {Object.keys(data[d[0]]).map((e,i) => 
          <>
          <th>{e}</th>
          </>
          )}
          <th>Code</th>
          </tr>
        </thead>

        {data &&
          Object.keys(data).map((e, i) => {
            return (
              <tbody>
                <tr>
                  
                  <td>{data[e].name}</td>
                  <td>{data[e].unit}</td>
                  <td>{data[e].value}</td>
                  <td>{data[e].type}</td>
                  <td>{e}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
}

export default Table;

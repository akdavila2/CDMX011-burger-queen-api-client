
import React from "react";
import CrudTableRow from "./CrudTableRow.jsx";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      
      <table>
        <thead>
         
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                // setDataToEdit={setDataToEdit}
                // deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
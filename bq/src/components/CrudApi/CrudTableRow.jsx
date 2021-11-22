import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, price, id } = el;
  // const loadImage = imageName => (require(`../../assets/${imageName}`).default);
  return (
    <tr>
      <td> {name}</td>
      <td>$ {price}</td>
      {/* <td><img src={loadImage("agua.png")} alt="imagen de food" /> </td> */}
      <td>
        {/* <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button> */}
      </td>
    </tr>
  );
};

export default CrudTableRow;
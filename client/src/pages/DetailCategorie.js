import React from "react";
import { useParams } from "react-router-dom";

const Detail = ({ categorias }) => {
  const { id } = useParams();
  const categoria = categorias[id];

  if (!categoria) {
    return <div>Categoría no encontrada</div>;
  }

  return (
    <div className="top-12 bg-fondo">
      <h2 className="text-2xl font-bold">{categoria.categoria}</h2>
      <ul className="mt-4">
        {categoria.citas.map((cita, index) => (
          <li key={index}>{cita}</li>
        ))}
      </ul>
    </div>
  );
};

export default Detail;

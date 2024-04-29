import React from "react";
import AnimatedCard from "./AnimatedCardViolet/AnimatedCard";

const Categories = ()=>{

    let categorias = [
        {
            categoria: "Aire libre",
            citas: [
              "Picnic en el parque",
              "Paseo en bicicleta",
              "Senderismo",
              "Visita a un jardín botánico",
              "Camping",
            ],
          },
          {
            categoria: "Romántica",
            citas: [
              "Cena a la luz de las velas",
              "Paseo en barco al atardecer",
              "Noche de películas en casa",
              "Escapada de fin de semana a un hotel boutique",
              "Cena en un restaurante con vista panorámica",
            ],
          },
          {
            categoria: "Cultural",
            citas: [
              "Visita a un museo",
              "Asistir a una obra de teatro",
              "Recorrido por una galería de arte",
              "Visita a un sitio histórico",
              "Asistir a un concierto",
            ],
          },
          {
            categoria: "Aventura",
            citas: [
              "Paracaidismo",
              "Buceo",
              "Paseo en globo aerostático",
              "Escalada en roca",
              "Rapel",
            ],
          },
          {
            categoria: "Gastronómica",
            citas: [
              "Clase de cocina juntos",
              "Tour de degustación de vinos",
              "Visita a un mercado de agricultores",
              "Cata de quesos",
              "Tour gastronómico por la ciudad",
            ],
          },
          {
            categoria: "Relajante",
            citas: [
              "Día de spa",
              "Masajes en pareja",
              "Sesión de yoga al aire libre",
              "Tarde de lectura en la playa",
              "Hidroterapia",
            ],
          },
    ]

    return(
        <div className="fixed text-primari font-bold top-12 left-0 h-full w-full bg-fondo screen-full">
            {
                categorias.map((categorias, index) => (
                    <AnimatedCard key={index}>{categorias.categoria}</AnimatedCard>
                ))
            }
        </div>
    )
}

export default Categories;
import React, {useState} from "react";
import { Link } from "react-router-dom";
import AnimatedCard from "../components/AnimatedCardViolet/AnimatedCard";


const Categories = ()=>{
  const [selectedCategory, setSelectedCategory] = useState(null);

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

    const handleCategoryClick = (categoria) => {
      setSelectedCategory(categoria);
    };

    return(
      <div className="fixed top-4 left-0 w-full h-full bg-fondo">
      <div className="container mx-auto px-8 py-8 md:py-12">
        <div className="grid text-primari grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((categoria, index) => (
            <Link key={index} to={`/categories/${index}`}>
              <AnimatedCard onClick={() => handleCategoryClick(categoria)}>
                {categoria.categoria}
              </AnimatedCard>
            </Link>
          ))}
        </div>
        {selectedCategory && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold">{selectedCategory.categoria}</h2>
            <ul className="mt-2">
              {selectedCategory.citas.map((cita, index) => (
                <li key={index}>{cita}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
    )
}

export default Categories;
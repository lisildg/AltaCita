import React from "react";
import Heart from "../components/Heart";
import CustomButton from "../components/Button";

const Landing = () => {
    return(
        <div>
            <Heart />
            <div className=" p-16 ">
                <h1 className="text-white font-semibold p-4 felx items-center">Alta Cita</h1>
                <span className="text-white ">
                   Nuestra nueva web app ofrece una amplia gama de ideas para citas, diseñadas para sacarte de la rutina y agregar un toque de emoción a tus salidas. Además, contamos con una función de citas personalizadas que utiliza inteligencia artificial para ofrecerte sugerencias adaptadas a tus gustos y preferencias. ¡Descubre nuevas experiencias y disfruta de momentos especiales con nuestra ayuda!
                </span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center md:pt-20 m-8">
                <div className="mb-14 md:mb-0">
                    <CustomButton defaultColor="#9B59B6" text="Explorar categorias" route="/categories" />
                </div>
                <div> 
                <CustomButton defaultColor="#9B59B6" text="Cita personalizada" route="/cita-personalizada" />
                </div>
                
            </div>
        </div>
    )
}

export default Landing;
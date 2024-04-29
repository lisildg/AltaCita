import React from "react";
import Heart from "../components/Heart";
import CustomButton from "../components/Button";

const Landing = () => {
    return(
        <div>
            <Heart />
            <div className="flex flex-col md:flex-row justify-between items-center md:pt-20 m-8">
                <div className="mb-14 md:mb-0">
                    <CustomButton defaultColor="#9B59B6" text="Explorar categorias" route="/categories" />
                </div>
                <div> 
                <CustomButton defaultColor="#9B59B6" text="Cita personalizada" route="#" />
                </div>
            </div>
        </div>
    )
}

export default Landing;
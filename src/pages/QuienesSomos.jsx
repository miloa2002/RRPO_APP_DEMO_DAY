import ReactPlayer from "react-player"


const QuienesSomos = () => {
    return (
        <div className="container flex flex-col mx-auto items-center justify-center">
            <div>
                <ReactPlayer
                    url="https://res.cloudinary.com/dwvchf8al/video/upload/v1677640667/Demo_day_RROP/pexels-pressmaster-9034146_1_xn1iwc.mp4"
                    controls
                    loop
                    width="100%"
                    height="100%"
                />
            </div>

            <div className="mt-24 md:w-1/2 font-light">
                <p className="mb-16"><span className="text-green-600 font-bold">Super Eco</span> es una organizacion sin animo de lucro que se encarga de promover y de gestionar un mejor manejo de los residuos reciclables atravez de la educacion,
                    la cultura y el arte , para ello trabajamos con los ciudadanos, administracion publicas y empresas sobre la importancia del reciclaje en nuestra sociedad
                    para tener un <strong>mejor planeta</strong>.
                </p>
                <p className="mb-4 text-left text-4xl"><strong>Misión</strong></p>
                <p>Nuestra vision es promover actividaes que minimicen la cantidad de residuos plasticos destinados a disposicion final y que afecten el medio ambiente,
                    nuestra intencion es aportar nuestro grano de arena para el salvar al planeta del cambio climatico producto de los efectos del calentamiento global,
                    contribuyendo con la cadena de actores vinculados al retiro, traslado, recuperacion y reciclaje de desechos

                    nosotros creemos que es posible construir un mundo mejor y , a traves del reciclaje, poder llevar a cabo nuestra intencion de generar un <strong>cambio social y cultural.</strong></p>
            </div>
        </div>
    )
}

export default QuienesSomos

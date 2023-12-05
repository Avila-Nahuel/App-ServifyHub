import { Button } from "@/components/ui/button"
import Cabecera from "@/components/Cabecera/Cabecera"
import ContainersCard from "@/components/ContainersCard/ContainersCard"
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel"
import EmprendimientoCard from "@/components/EmprendimientoCard/EmprendimientoCard"
import AtajosCard from "@/components/AtajosCard/AtajosCard"


const Home = () => {
    return(
        <>
            <Cabecera></Cabecera>
             <AtajosCard></AtajosCard>
             <ImageCarousel></ImageCarousel>
            <ContainersCard></ContainersCard>
          </>
    )
}

export default Home
import "../../index.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function Error404 (){
    return(
        <div>
            <Header />
            <Navbar />
            <p>Esta página no se encuentra</p>
            <Footer />
        </div>
    );
}
export default Error404
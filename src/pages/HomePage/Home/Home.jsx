import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import EventPhoto from "../PhotoGallery/EventPhoto";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <EventPhoto></EventPhoto>
            <Footer></Footer>
        </div>
    );
};

export default Home;
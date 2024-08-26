import FirstSection from "./FirstSection";
import AboutSecoundSection from "./AboutSecoundSection"
import ThiredSection from "./ThiredSection";

function AboutMainSection(){
    return(
        <>
        <div className="container ml-3 mt-3 justify-content-center">
            <div className="row">
            <FirstSection />
            <AboutSecoundSection />
            <ThiredSection />
            </div>
        </div>
        </>
    );
}

export default AboutMainSection;
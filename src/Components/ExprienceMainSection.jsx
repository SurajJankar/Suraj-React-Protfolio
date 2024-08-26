import FirstSection from "./FirstSection";
import SecoundSection from "./SecoundSection";
import ThiredSection from "./ThiredSection";

function ExprienceMainSection(){
    return(
        <>
        <div className="container ml-3 mt-3 justify-content-center">
            <div className="row">
                <ThiredSection></ThiredSection>
                <SecoundSection></SecoundSection>
            </div>
        </div>
        </>
    );
}

export default ExprienceMainSection;
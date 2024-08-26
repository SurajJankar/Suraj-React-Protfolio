import FirstSection from "./FirstSection";
import SecoundSection from "./SecoundSection";
import ThiredSection from "./ThiredSection";

const HomeMainSection = () => {
    return (
        <>
            <div className="container ml-3 mt-3 justify-content-center">
                <div className="row">
                    <FirstSection></FirstSection>
                    <SecoundSection></SecoundSection>
                    <ThiredSection></ThiredSection>
                </div>
            </div>
        </>
    );
}

export default HomeMainSection;
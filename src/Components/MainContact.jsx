import Contact from "./Contact";
import FirstSection from "./FirstSection";

function MainContact() {
  return (
    <>
      <div className="container ml-3 mt-3 justify-content-center">
        <div className="row">
          <FirstSection />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default MainContact;

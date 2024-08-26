import MyImage from './assets/img/MyImage.jpeg'
import style from './FirstSection.module.css'
import kit from './assets/img/kit.png'
import dkasc from './assets/img/dkasc.png'
import Heading from './Heading'

const FirstSection = () => {

    return (
        <>
            <div className="col-md-3">
                <aside className={`text-center p-3 ${style.WidthOfFirst}`}>
                    <img className={style.MyImage} src={MyImage} alt="MyImage" />
                    <p><strong>Suraj Jankar</strong></p>
                    <p className={style.subdetials}>Full-stack Developer | Web Development, Computer Programming</p>
                    <hr />

                    <Heading title="Education" />
                    <h6>Post-Graduation</h6>
                    <div className={style.educationDetails}>
                        <img className={style.CollegeLogo} src={kit} alt="KIT college logo" />
                        <p>Master of Computer Application(2022 - 2024)</p>
                        <p>KIT's IMER College Kolhapur</p>
                    </div>
                    <h6>Graduation</h6>
                    <div className={style.educationDetails}>
                        <img className={style.CollegeLogo} src={dkasc} alt="DKASC college logo" />
                        <p>Bachelor of Science(2019 - 2022)</p>
                        <p>DKASC College Ichalkaranji</p>
                    </div>
                </aside>
            </div>
        </>
    );
}

export default FirstSection;
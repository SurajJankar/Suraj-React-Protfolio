import style from './ThiredSection.module.css'
import Heading from './Heading'

const ThiredSection = () => {
    
    return (
        <>
            <div className="col-md-3">
                <aside className={style.WidthOfFirst}>
                    <Heading title="Email ID" />
                    <a className={style.navlink} href="mailto:surajjankar211@gmail.com"><i className="fa-solid fa-envelope"></i> surajjankar211@gmail.com</a>
                    <hr />

                    <Heading title="Phone Number" />
                    <a className={style.navlink} href="tel:9860524412"><i className="fa-solid fa-phone-volume"></i> +91 9860524412</a><br />
                    <hr />

                    <Heading title="Public profile & URL" />
                    <a className={style.navlink} target='_blank' href="https://www.linkedin.com/in/suraj-jankar-52131b255/">www.linkedin.com/in/suraj-jankar-52131b255</a>

                </aside>
                <aside className={style.WidthOfFirst}>
                    <Heading title="Exprience" />
                    <a className={style.navlink} target='_blank' href="https://hundiainfotech.com/"> Hundia Infotech · Full-time</a>
                    <p className={style.subtitlep}>Jun 2024 - Present · 3 mos </p>
                    <p className={style.subtitlep}>Ichalkaranji, Maharashtra, India · On-site</p>

                    <hr />
                    <Heading title="Internship" />
                    <a className={style.navlink} target='_blank' href="https://wolfox.in/">Wolfox Services Private Limited</a>
                    <p className={style.subtitlep}>Aug 2023 - Oct 2023 · 3 mos</p>
                    <p className={style.subtitlep}>Kolhapur, Maharashtra, India · On-site</p>
                </aside>
            </div>
        </>
    );
}

export default ThiredSection;
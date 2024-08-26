import React from 'react';
import style from './AboutSecoundSection.module.css';

function SecoundSection() {
    return (
        <div className={`col-md-6 ${style.secoundsection}`}>
            <section className={style.secosectionstart}>
                <h5 className='title'>About Me</h5>
                <h6>Suraj Jankar</h6>
                <p>Hello! I’m Suraj Jankar, a dedicated Full-stack Developer with a passion for Web Development and Computer Programming. My journey in technology began with a strong academic background, leading to diverse practical experiences and exciting projects.</p>

                <hr />
                <h5 className='title'>Skills</h5>
                <h6><strong>Frontend Developer</strong></h6>
                <div className={style.subtitile}>
                    <p>HTML, CSS, JavaScript</p>
                </div>
                <h6><strong>Framework Developer</strong></h6>
                <div className={style.subtitile}>
                    <p>React, Bootstrap, Tailwind css</p>
                </div>
                <h6><strong>BackEnd</strong></h6>
                <div className={style.subtitile}>
                    <p>PHP</p>
                </div>

                <h6><strong>Database</strong></h6>
                <div className={style.subtitile}>
                    <p>MySQL, SQL</p>
                </div>

                <hr />
                <h5 className='title'>Education</h5>
                <h6><strong>Post-Graduation</strong></h6>
                <div className={style.subtitile}>
                    <p>- Master of Computer Application (2022 - 2024)</p>
                    <p>- KIT's IMER College Kolhapur</p>
                </div>

                <h6><strong>Graduation</strong></h6>
                <div className={style.subtitile}>
                    <p>- Bachelor of Science (2019 - 2022)</p>
                    <p>- DKASC College Ichalkaranji</p>
                </div>
                <hr />

                <h5 className='title'>Professional Experience</h5>
                <h6><strong>Full-time Developer</strong></h6>
                <div className={style.subtitile}>
                    <p>- Bachelor of Science (2019 - 2022)</p>
                    <p>- DKASC College Ichalkaranji</p>
                </div>
                <hr />

                <h5 className='title'>Internship</h5>
                <h6><strong>Wolfox Services Private Limited</strong></h6>
                <div className={style.subtitile}>
                    <p>- Aug 2023 - Oct 2023 (3 months)</p>
                    <p>- Kolhapur, Maharashtra, India</p>
                </div>
                <hr />
            </section>
        </div>
    );
}

export default SecoundSection;

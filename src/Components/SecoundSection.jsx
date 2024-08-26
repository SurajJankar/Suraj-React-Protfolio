import React from 'react';
import style from './SecoundSection.module.css';
import projectImage from './assets/img/project-image.jpeg';
import secproject from './assets/img/project2.jpeg'
import Heading from './Heading';

function SecoundSection() {
    const projectdetails = [
        { id: 3, ProjectName: 'Secound Website', ImgURL: secproject, par:' We will just launched our latest project - the Barbecue Bullet website! 🔥 This immersive website was crafted with HTML, CSS, JavaScript, PHP, and MySQL'  },
        { id: 2, ProjectName: 'Secound Website', ImgURL: secproject, par:' We will just launched our latest project - the Barbecue Bullet website! 🔥 This immersive website was crafted with HTML, CSS, JavaScript, PHP, and MySQL'  },
        { id: 1, ProjectName: 'My Portfolio Website', ImgURL: projectImage, par:'A portfolio website showcasing my passion, skills, and projects is now live! 🚀 Check out my journey and the projects.' },
    ];

    return (
        <div className={`col-md-6 ${style.secoundsection}`}>
            <section className={style.secosectionstart}>
                <Heading titile="Project Overview" />
                    {projectdetails.map(prodet => (
                        <div className={style.PostSection} key={prodet.id}>
                        <div className={style.projectItem}>
                            <p>{prodet.ProjectName}</p>
                            <p>{prodet.par}</p>
                            <img className={style.ProjectImage} src={prodet.ImgURL} alt="Project Image" />
                        </div>
                    </div>
                    ))}
            </section>
        </div>
    );
}

export default SecoundSection;

import css from './Contact.module.css';

function Contact(){
    return(
        <>
        <section className={`col-md-9 p-3 border-dark ${css.bgcolor}`}>
            <div className="container">
                <form>
                    <h2 className="title">Contact Me</h2>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="" className="form-label">Your Name :-</label>
                            <input type="text" className="form-control border-dark" />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="" className="form-label">Company Name :-</label>
                            <input type="text" className="form-control border-dark" />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="" className="form-label">Phone No :-</label>
                            <input type="tel" className="form-control border-dark" />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="" className="form-label">Email Id :-</label>
                            <input type="email" className="form-control border-dark" />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="" className="form-label">City :-</label>
                            <input type="text" className="form-control border-dark" />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="" className="form-label">Subject :-</label>
                            <input type="text" className="form-control border-dark" />
                        </div>

                        <div className="col-md-12 mb-3">
                            <label htmlFor="" className="form-label">Message :-</label>
                            <textarea type="text" rows={6} className="form-control border-dark" ></textarea>
                        </div>                        
                    </div>

                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
        </>
    );
}

export default Contact;
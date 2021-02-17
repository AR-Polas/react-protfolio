const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <div className="my-5" id="contact">
            <div className="container pt-3">
                <h1 className="text-center fon-weight-bold">Hire Me.</h1>
                <p className="text-center">01714473628 or Email: anisur.rpolas@gmail.com</p>

                <div className="row d-flex align-items-center my-5">
                    <div className="col-md-6  contact-style">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="type" className="form-control" name="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" placeholder="Write Your Subject" />
                            </div>
                            <div className="form-group">
                                <textarea class="form-control" name="message" placeholder="Your Message" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary contact-btn">Submit</button>
                        </form>
                    </div>
                    <div className=" contact-img col-md-6">
                        <div className="contact__img">
                            <img src="https://i.ibb.co/cDjWmCX/Frame-Art-202121311398373.jpg" alt="not found" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
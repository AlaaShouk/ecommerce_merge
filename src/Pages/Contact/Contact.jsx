import { useState } from "react";
import Navbar from "../../Layout/NavBar";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log(form);

    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      

      <div className="contact-page">
        <div className="container">

          <p className="breadcrumb-text">
            Home / <span>Cantact</span>
          </p>

          <div className="row contact-row">

            <div className="col-lg-4">
              <div className="contact-info-box">

                <div className="info-item">
                  <div className="info-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <h5>Call To Us</h5>
                  <p>We are available 24/7, 7 days a week.</p>
                  <p>Phone: +8801611112222</p>
                </div>

                <hr />

                <div className="info-item">
                  <div className="info-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <h5>Write To US</h5>
                  <p>Fill out our form and we will contact you within 24 hours.</p>
                  <p>Emails: customer@exclusive.com</p>
                  <p>Emails: support@exclusive.com</p>
                </div>

              </div>
            </div>

            <div className="col-lg-8">
              <div className="contact-form-box">
                <form onSubmit={handleSubmit}>

                  <div className="row">

                    <div className="col-md-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        className="form-control"
                        value={form.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <small className="text-danger">{errors.name}</small>
                      )}
                    </div>

                    <div className="col-md-4">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        className="form-control"
                        value={form.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                      )}
                    </div>

                    <div className="col-md-4">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Your Phone *"
                        className="form-control"
                        value={form.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <small className="text-danger">{errors.phone}</small>
                      )}
                    </div>

                  </div>

                  <textarea
                    name="message"
                    placeholder="Your Massage"
                    className="form-control message-box mt-3"
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>

                  <div className="text-end mt-3">
                    <button type="submit" className="btn send-btn">
                      Send Massage
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;
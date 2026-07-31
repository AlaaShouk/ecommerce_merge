import { useState } from "react";
import "./Account.css";

function Account() {
  const [form, setForm] = useState({
    firstName: "Maya",
    lastName: "Essa",
    email: "mayaessa@gmail.com",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="account-page">
      <div className="container">

        <div className="account-top">
          <p className="breadcrumb-text">
            Home / <span>My Account</span>
          </p>
          <p className="welcome-text">
            Welcome! <span>Md Rimel</span>
          </p>
        </div>

        <div className="row account-row">

          <div className="col-lg-3">
            <div className="account-sidebar">

              <h6>Manage My Account</h6>
              <ul>
                <li className="active">My Profile</li>
                <li>Address Book</li>
                <li>My Payment Options</li>
              </ul>

              <h6>My Orders</h6>
              <ul>
                <li>My Returns</li>
                <li>My Cancellations</li>
              </ul>

              <h6>My WishList</h6>

            </div>
          </div>

          <div className="col-lg-9">
            <div className="account-form-box">
              <h5 className="form-title">Edit Your Profile</h5>

              <form onSubmit={handleSubmit}>

                <div className="row">
                  <div className="col-md-6">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      value={form.firstName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      value={form.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <p className="password-title">Password Changes</p>

                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Current Password"
                  className="form-control mb-3"
                  value={form.currentPassword}
                  onChange={handleChange}
                />

                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Passowrd"
                  className="form-control mb-3"
                  value={form.newPassword}
                  onChange={handleChange}
                />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  className="form-control mb-3"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />

                <div className="form-actions">
                  <button type="button" className="btn cancel-btn">
                    Cancel
                  </button>
                  <button type="submit" className="btn save-btn">
                    Save Changes
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Account;
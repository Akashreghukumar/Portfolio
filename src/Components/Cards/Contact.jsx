import React from "react";

const Contact = () => {
  return (
    <div className="contact-card right-card box-shadow">
      <h1>Let's 👋 Work Together</h1>
      <h2>
        I'm here to help if you're searching for a software developer to bring
        your idea to life or a design partner to help take your business to the
        next level.
      </h2>

      <div className="contact-form">
        <div className="form-area">
          <h3>Name</h3>
          <input type="text" placeholder="Name" className="form" />
        </div>
        <div className="form-area">
          <h3>Email</h3>
          <input type="text" placeholder="Email" className="form" />
        </div>
        <div className="form-area">
          <h3>Comment</h3>
          <textarea className="textarea" />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="contact-button">Send</button>
      </div>
    </div>
  );
};

export default Contact;

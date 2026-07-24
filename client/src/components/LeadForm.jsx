import { useState } from "react";
import "../styles/LeadForm.css";

function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://leaddesk-mini-8d0s.onrender.com/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    alert(data.message);

    setFormData({
      name: "",
      email: "",
      budget: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  }
};

  return (
    <section className="lead-section" id="demo">

      <div className="lead-card">

        <h2>Request a Demo</h2>

        <form onSubmit={handleSubmit}>

          <input type="text"  name="name"
  placeholder="Full Name"
  value={formData.name}
  onChange={handleChange}/>

          <input type="email"  name="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={handleChange}/>

          <select
  name="budget"
  value={formData.budget}
  onChange={handleChange}
>
  <option value="">Select Budget</option>
  <option value="Below ₹25,000">Below ₹25,000</option>
  <option value="₹25k - ₹50k">₹25k - ₹50k</option>
  <option value="₹50k - ₹1L">₹50k - ₹1L</option>
  <option value="Above ₹1L">Above ₹1L</option>
</select>
          <textarea
            rows="5"
            name="message"
            placeholder="Tell us about your project"
             value={formData.message}
  onChange={handleChange}
          ></textarea>

          <button type="submit" >
            Submit Request
          </button>

        </form>

      </div>

    </section>
  );
}

export default LeadForm;
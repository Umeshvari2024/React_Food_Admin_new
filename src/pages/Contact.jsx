import { useState, useEffect } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // GET API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // POST API
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    const data = await response.json();

    console.log("POST:", data);

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  // PUT API
  const handlePut = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        name: "Updated User",
        email: "updated@gmail.com",
        message: "Updated Message",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("PUT:", data);
        alert("PUT Success");
      });
  };

  // PATCH API
  const handlePatch = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Patched User",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("PATCH:", data);
        alert("PATCH Success");
      });
  };

  // DELETE API
  const handleDelete = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    }).then(() => {
      alert("DELETE Success");
    });
  };

  return (
    <div className="container mt-5">

      <div className="contact-card">

        <h1>📞 Contact Us</h1>
        <p>We will get back to you soon</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            POST API (Send Message)
          </button>

        </form>

        {submitted && (
          <p className="success-msg">
            ✅ Message Sent Successfully!
          </p>
        )}

        <hr />

        <div className="d-grid gap-2">

          <button
            className="btn btn-primary"
            onClick={handlePut}
          >
            PUT API
          </button>

          <button
            className="btn btn-warning"
            onClick={handlePatch}
          >
            PATCH API
          </button>

          <button
            className="btn btn-danger"
            onClick={handleDelete}
          >
            DELETE API
          </button>

        </div>

      </div>

      {/* GET API DATA */}

      <div className="mt-5">

        <h2>🌐 GET API Users</h2>

        {users.map((user) => (
          <div
            key={user.id}
            className="card p-3 mb-3"
          >
            <h5>{user.name}</h5>
            <p>{user.email}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Contact;
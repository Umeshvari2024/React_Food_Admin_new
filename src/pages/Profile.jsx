function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Guest User",
    email: "Not Available"
  };

  return (
    <div className="container mt-5">

      <div className="profile-card">

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
        />

        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <div className="profile-box">
          <p>🍽 FoodPro User</p>
          <p>⭐ Premium Member</p>
          <p>📦 Active Orders Available</p>
        </div>

      </div>

    </div>
  );
}

export default Profile;
import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurentSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_password] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    let response = await fetch("http://localhost:3000/api/restaurent", {
      method: "POST",
      body: JSON.stringify({ email, password, city, name, address, contact }),
    });
    response = await response.json();
    console.log();
    if (response.success) {
      const { result } = response;
      delete result.password;
      localStorage.setItem("restuarentUser", JSON.stringify(result));
      router.push("/restaurant/dashboard");
      alert("restaurent registered success");
    }
  };

  return (
    <>
      <h3> Signup</h3>
      <div>
        <div className="input-wrapper">
          <input
            className="input-field"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="text"
            placeholder="Enter email"
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Enter password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="confirm password"
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="test"
            placeholder="Enter restaurent name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="test"
            placeholder="Enter city"
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="test"
            placeholder="Enter full address"
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="test"
            placeholder="Enter contact number"
            onChange={(event) => setContact(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <button className="button" onClick={handleSignup}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default RestaurentSignUp;

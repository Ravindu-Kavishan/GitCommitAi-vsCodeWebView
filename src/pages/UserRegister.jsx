import { useEffect, useState } from "react";
import { getUsers, addUser } from "../services/UserServices";
import { FaEnvelope, FaUser, FaLock, FaPhoneAlt } from "react-icons/fa";
import robotImage from "../images/register.svg";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Added confirmPassword state
  const [errors, setErrors] = useState({}); // Error state to store error messages
  const navigate = useNavigate();

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const validateEmail = (email) => {
    // Regex for validating email format
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const validateContact = (contact) => {
    // Regex for validating contact number (example: 10 digits)
    const re = /^[0-9]{10}$/;
    return re.test(contact);
  };

  // const validatePassword = (password) => {
  //   // Example: Password should be at least 6 characters long
  //   return password.length >= 6;
  // };

  const handleAddUser = async () => {
    let newErrors = {};

    // Validate email
    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email.";
    }

    // Validate contact number
    if (!validateContact(contact)) {
      newErrors.contact = "Please enter a valid contact number (10 digits).";
    }

    // Validate password
    // if (!validatePassword(password)) {
    //   newErrors.password = "Use a password with uppercase, lowercase letters, a number, and a special character..";
    // }

    // Validate password match
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // If there are any errors, set them and stop the registration process
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await addUser({
        username: username,
        contact: contact,
        email: email,
        password: password,
      });

      // Update the users list after adding a new user
      const updatedUsers = await getUsers();
      setUsers(updatedUsers);

      navigate(`/userLogin`);
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to register user. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#7315E7] to-[#69A2AD]">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Register
        </h2>
        <div className="flex justify-center mb-4">
          <img src={robotImage} alt="Robot" className="w-40" />
        </div>
        <div className="space-y-4">
          {/* Input Fields */}
          {[
            {
              type: "email",
              value: email,
              setValue: setEmail,
              placeholder: "E-mail",
              icon: <FaEnvelope className="text-[#7315E7] w-4 h-4" />,
              error: errors.email,
            },
            {
              type: "text",
              value: username,
              setValue: setUsername,
              placeholder: "Username",
              icon: <FaUser className="text-[#7315E7] w-4 h-4" />,
              error: errors.username,
            },
            {
              type: "text",
              value: contact,
              setValue: setContact,
              placeholder: "Contact",
              icon: <FaPhoneAlt className="text-[#7315E7] w-4 h-4" />,
              error: errors.contact,
            },
            {
              type: "password",
              value: password,
              setValue: setPassword,
              placeholder: "Password",
              icon: <FaLock className="text-[#7315E7] w-4 h-4" />,
              error: errors.password,
            },
            {
              type: "password",
              value: confirmPassword,
              setValue: setConfirmPassword,
              placeholder: "Confirm Password",
              icon: <FaLock className="text-[#7315E7] w-4 h-4" />,
              error: errors.confirmPassword,
            },
          ].map(
            ({ type, value, setValue, placeholder, icon, error }, index) => (
              <div className="flex flex-col items-center w-full" key={index}>
                <div className="rounded-4xl bg-[#D4B7FA] w-11/12 flex items-center px-3 mb-1 py-1 border-2 border-transparent hover:border-black transition duration-300">
                  {icon && (
                    <span className="mr-2 self-center text-[#7315E7] text-sm">
                      {icon}
                    </span>
                  )}
                  <input
                    type={type}
                    value={value}
                    onChange={
                      setValue ? (e) => setValue(e.target.value) : undefined
                    }
                    placeholder={placeholder}
                    className="bg-transparent outline-none placeholder-[#7315E7] text-[#7315E7] w-full text-sm"
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-xs mt-1 w-11/12 text-left">
                    {error}
                  </p>
                )}
              </div>
            )
          )}

          {/* Register Button */}
          <button
            onClick={handleAddUser}
            className="w-full bg-purple-600 text-white py-2 rounded-full font-semibold hover:bg-purple-700 transition shadow-md"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;

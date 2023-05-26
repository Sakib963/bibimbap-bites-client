import Navbar from "../shared/Navbar/Navbar";
import { AiFillEyeInvisible, AiFillEye, AiFillWarning } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

import tabletDesign from '../../assets/images/tablet_design.png'
import loginBack from '../../assets/images/login_back.png'

const Register = () => {
  const { createUser, updateInfo } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [fieldError, setFieldError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [open, setOpen] = useState(0);
  const [inputType, setInputType] = useState("password");

  // Handling See Password
  const handleToggle = () => {
    if (open == 0) {
      setOpen(1);
    } else {
      setOpen(0);
    }
    if (!open) {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  // Creating New Account
  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    setFieldError(false);
    setEmailError(false)
    
    if (email && password) {
      if (password.length > 5) {
        form.reset();
        setError(false);
        createUser(email, password)
          .then((res) => {
            const createdUser = res.user;
            {
              /* After Creating an User, Updating Profile with display name and photo */
            }
            if(name && photo){
              updateInfo(name, photo)
                .then(() => {
                  console.log("Profile Updated");
                })
                .catch((error) => {
                  console.log(error);
                });
            }
            console.log(createdUser);
            toast(`Account Created, Please Login`);
            // navigate("/login")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error:", errorCode, "Error Message:", errorMessage);
            if (errorCode === "auth/email-already-in-use") {
              setEmailError(true);
            }
          });
      } else {
        setError(true);
        console.log("short");
      }
    } else {
      setFieldError(true);
    }
  };
  return (
    <div className="header">
      <Toaster
        toastOptions={{
          style: {
            padding: "16px",
            backgroundColor: "#FF4A22",
            color: "#FFFFFF",
            boxShadow: "10px #000000",
          },
        }}
      />
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-2 mt-10 pb-20 gap-4">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl lg:text-5xl font-bold text-center">
            Please Register
          </h3>
          <div className="flex justify-center items-center lg:w-2/4 mt-10 mx-auto">
            <form onSubmit={handleSignIn} className="w-full space-y-3">
              <div>
                <p>Full Name</p>
                <div className="input input-md outline-none input-bordered">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className=" h-full border-none w-11/12 outline-none"
                  />
                </div>
              </div>
              <div>
                {/* If Email already in use, showing this message */}
                {emailError && (
                  <p className="flex items-center text-base">
                    <AiFillWarning className="text-[#FF4A22] mr-2" />
                    This Email Already in Use. Use Another Email.
                  </p>
                )}
                <p>Email Address</p>
                <div className="input input-md outline-none input-bordered">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className=" h-full border-none w-11/12 outline-none"
                  />
                </div>
              </div>
              <div>
                <p>Photo URL</p>
                <div className="input input-md outline-none input-bordered">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className=" h-full border-none w-11/12 outline-none"
                  />
                </div>
              </div>
              <div>
                <p>Password</p>
                {/* If password is less than 6 characters, displaying this message */}
                {error && (
                  <p className="flex items-center text-base">
                    <AiFillWarning className="text-[#FF4A22] mr-2" />
                    Password Must Have To More Than 6 Characters.
                  </p>
                )}
                <div className="flex justify-between items-center input input-md outline-none input-bordered">
                  <input
                    type={inputType}
                    name="password"
                    placeholder="Password (Must have to more than 6 characters)"
                    id="password"
                    className=" h-full border-none w-11/12 outline-none"
                  />
                  <div className="text-lg">
                    <AiFillEye
                      onClick={handleToggle}
                      className={!open ? "" : "hidden"}
                    />
                    <AiFillEyeInvisible
                      onClick={handleToggle}
                      className={!open ? "hidden" : ""}
                    />
                  </div>
                </div>
              </div>
              {/* If any field is empty displaying this message */}
              {fieldError && (
                <p className="flex items-center text-base">
                  <AiFillWarning className="text-[#FF4A22] mr-2" />
                  You Must Provide Email and Password.
                </p>
              )}
              <button
                type="submit"
                className="bg-[#FF4A22] py-3 px-6 rounded-lg text-white hover:scale-105 hover:ease-in hover:duration-200 hover:transition w-full"
              >
                Submit
              </button>
              <p>
                Already Have An Account?
                <Link to="/login" className="underline text-[#FF4A22] ms-1">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="relative lg:mx-auto mx-6">
          <img src={tabletDesign} alt="Tablet Design" />
          <div className="absolute bottom-20 left-0">
            <img src={loginBack} alt="Chef" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;

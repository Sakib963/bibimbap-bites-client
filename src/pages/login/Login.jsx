import { useContext, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { AiFillEyeInvisible, AiFillEye, AiFillWarning } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import tabletDesign from "../../assets/images/tablet_design.png"
import loginBack from '../../assets/images/login_back.png'

const Login = () => {
  const [open, setOpen] = useState(0);
  const [inputType, setInputType] = useState("password");
  const [fieldError, setFieldError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [matchError, setMatchError] = useState(false);
  const [notFoundError, setNotFoundError] = useState(false);
  const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  /* Handling See Password */
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

  /* Email Password Sign In */
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    setMatchError(false);
    setNotFoundError(false);

    const email = form.email.value;
    const password = form.password.value;

    if (email && password) {
      setFieldError(false);
      if (password.length > 5) {
        setPassError(false);
        form.reset();
        /* If all fields are okay, then sign in */
        signIn(email, password)
          .then((result) => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            toast(`Logged In Successfully.`);
            navigate(from, { replace: true });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error:", errorCode, "Error Message:", errorMessage);
            if (errorCode === "auth/wrong-password") {
              setMatchError(true);
            }
            if (errorCode === "auth/user-not-found") {
              setNotFoundError(true);
            }
          });
      } else {
        setPassError(true);
      }
    } else {
      setFieldError(true);
    }
  };

  /* Google Sign In */
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast(`Logged In Successfully.`);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  /* GitHub Sign In */
  const handleGitHubLogin = () => {
    gitHubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast(`Logged In Successfully.`);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="header">
      {/* Toast Message */}
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
        {/* Login Side */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl lg:text-5xl font-bold text-center">
            Please Login
          </h3>
          <div className="flex justify-center items-center lg:w-2/4 mt-10 mx-auto">
            <div className="w-full space-y-3">
              <form onSubmit={handleSignIn} className="w-full space-y-3">
                <div>
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
                  {passError && (
                    <p className="flex items-center text-base">
                      <AiFillWarning className="text-[#FF4A22] mr-2" />
                      Password Must Have To More Than 6 Characters.
                    </p>
                  )}
                  <p>Password</p>
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
                {fieldError && (
                  <p className="flex items-center text-base">
                    <AiFillWarning className="text-[#FF4A22] mr-2" />
                    Fill Up All The Fields.
                  </p>
                )}
                {matchError && (
                  <p className="flex items-center text-base">
                    <AiFillWarning className="text-[#FF4A22] mr-2" />
                    Email Password Doesn&apos;t match. Please Provide Valid
                    Information.
                  </p>
                )}
                {notFoundError && (
                  <p className="flex items-center text-base">
                    <AiFillWarning className="text-[#FF4A22] mr-2" />
                    User Not Found. Try Creating Account First.
                  </p>
                )}
                <button
                  type="submit"
                  className="bg-[#FF4A22] py-3 px-6 rounded-lg text-white hover:scale-105 hover:ease-in hover:duration-200 hover:transition w-full"
                >
                  Submit
                </button>
                <p>
                  Dont&apos;t have an account?{" "}
                  <Link to="/register" className="underline text-[#FF4A22]">
                    Register
                  </Link>
                </p>
              </form>
              <button
                className="border border-[#FF4A22] py-3 px-6 rounded-lg hover:scale-105 hover:ease-in hover:duration-200 hover:transition w-full items-center flex justify-center hover:bg-[#FF4A22] hover:text-white"
                onClick={handleGoogleSignIn}
              >
                <BsGoogle className="mr-2 font-bold" /> Google Sign In
              </button>
              <button
                className="border border-[#FF4A22] py-3 px-6 rounded-lg hover:scale-105 hover:ease-in hover:duration-200 hover:transition w-full items-center flex justify-center hover:bg-[#FF4A22] hover:text-white"
                onClick={handleGitHubLogin}
              >
                <BsGithub className="mr-2 font-bold" /> GitHub Sign In
              </button>
            </div>
          </div>
        </div>
        {/* Banner Side */}
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

export default Login;

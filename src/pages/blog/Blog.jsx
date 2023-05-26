import React from "react";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import ReactToPdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <div className="header">
      <Navbar></Navbar>
      {/* Generating PDF */}
      <ReactToPdf
        targetRef={ref}
        filename="blog-abdullah-nazmus-sakib.pdf"
        x={0.5}
        y={0.5}
        scale={0.4}
      >
        {({ toPdf }) => (
          <div className="w-full text-end lg:w-3/4 mx-auto px-4 lg:px-0 mt-20">
            <button onClick={toPdf} className="border-[#FF4A22] border py-3 px-6 ms-4 rounded-lg text-black hover:bg-[#FF4A22] hover:text-white hover:ease-in hover:duration-200 hover:transition">
              Generate pdf
            </button>
          </div>
        )}
      </ReactToPdf>
      {/* Target PDF div */}
      <div className="pb-20" ref={ref}>
        <h2 className="text-2xl lg:text-5xl font-bold text-center">
          Q&A
        </h2>
        <div className="grid lg:grid-cols-2 lg:w-3/4 mx-auto mt-10 gap-4 px-4 lg:px-0">
          <div className="card bg-base-100 shadow-xl border border-[#FF4A22]">
            <div className="card-body">
              <h2 className="card-title">
                Tell us the differences between uncontrolled and controlled
                components.
              </h2>
              <p>
                In React, controlled components refer to components that have
                their state and behavior controlled by the parent component.
                Uncontrolled components refer to components that manage their
                own state internally.
              </p>
              <p>
                Controlled components have the advantage of being more
                predictable and easier to debug because the state is controlled
                by the parent component.
                <br />
                On the other hand, uncontrolled components are simpler to
                implement, but they can be more difficult to track and manage in
                larger projects. They are also harder to test as the internal
                state is not exposed.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl border border-[#FF4A22]">
            <div className="card-body">
              <h2 className="card-title">
                How to validate React props using PropTypes?
              </h2>
              <p>
                PropTypes is a library in React that allows you to validate the
                type of data being passed through props to a component. To
                validate props using PropTypes, at first we have to define
                PropTypes in our component, then Define the types and validation
                rules for each prop by adding a key-value pair to the propTypes
                object. For example, PropTypes.string.isRequired specifies that
                the prop is a required string.
              </p>
              <p>
                Use the defined propTypes in component to validate the props
                being passed to it. It is important to validate props to ensure
                the correct data type are being passed to our components.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl border border-[#FF4A22]">
            <div className="card-body">
              <h2 className="card-title">
                Tell us the difference between nodejs and express js.
              </h2>
              <p>
                Node.js is a JavaScript runtime environment that allows
                developers to run JavaScript code outside of a web browser. It
                provides features such as file I/O, networking, and the ability
                to execute server-side scripts.
              </p>
              <p>
                Express.js, on the other hand, is a web application framework
                built on top of Node.js. It provides a layer of abstractions for
                handling HTTP requests and responses, as well as features such
                as routing, middleware, and templating.
              </p>
              <p>
                While Node.js provides the foundational capabilities for
                building server-side applications in JavaScript, Express.js
                simplifies and streamlines the development process by providing
                a higher-level abstraction for common web development tasks.
                Essentially, Express.js is a framework that utilizes Node.js to
                build web applications.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl border border-[#FF4A22]">
            <div className="card-body">
              <h2 className="card-title">
                What is a custom hook, and why will you create a custom hook?
              </h2>
              <p>A Custom hook has the following features: </p>
              <p>
                As a function, it takes input and returns output. <br />
                It&apos;s name starts with &quot;use&quot; like useQuery,
                useMedia etc. <br />
                Unlike functional components, Custom hook returns non-jsx data.{" "}
                <br />
                Unlike normal functions, custom hook can use other hooks such as
                useState, useRef and any other custom hooks.
              </p>
              <p>
                We can use custom hook when the logic is completely separate
                from UI. It is reusable is many different components with the
                same processing logic. Therefore, The logic only needs to be
                fixed in one place if it changes. When the logic is too long and
                complicated, we can write it in another file, so that the
                component is shorter and easier to read.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;

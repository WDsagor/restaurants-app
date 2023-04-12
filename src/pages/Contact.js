import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};
  return (
    <div className=" max-w-screen-2xl mx-auto">
      <h1 className=" font-semibold text-5xl text-center">Contact</h1>
      <div className=" shadow-lg shadow-white rounded-lg mt-14 p-5 mb-5">
        <h2 className=" text-2xl uppercase text-center text-primary">Provide your Information</h2>
        <p className=" uppercase text-sm pb-10 text-center">We are contact as soon posiable </p>
        {/*  */}
        <form onSubmit={handleSubmit(onSubmit)} className=" ">
          <div className=" lg:grid lg:grid-flow-col lg:gap-3 ">
            <div className="form-control">
              <label className="label ">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-error">Fast name</span>
              </label>
              <input
                {...register("fname", {
                  required: true,
                })}
                type="text"
                placeholder="Enter your fast name"
                className="input input-bordered bg-transparent mb-3"
              />
              {errors.fname?.type === "required" && (
                <small className=" text-error mt-1 self-end label-text-alt ">Frist name is required</small>
              )}
            </div>
            <div className="form-control">
              <label className="label ">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-error">Last name</span>
              </label>
              <input
                {...register("lname", {
                  required: true,
                })}
                type="text"
                placeholder="Enter your last name"
                className="input input-bordered bg-transparent mb-3"
              />
              {errors.lname?.type === "required" && (
                <small className=" text-error mt-1 self-end label-text-alt ">Last name is required</small>
              )}
            </div>
          </div>
          <div className="form-control">
            <label className="label ">
              <span className="label-text">Company name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Company name"
              className="input input-bordered bg-transparent mb-3"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text  after:content-['*'] after:ml-0.5 after:text-error">Email</span>
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              })}
              type="email"
              placeholder="Your email"
              className="input input-bordered bg-transparent mb-3"
              autoComplete="off"
            />
            {errors.email?.type === "required" && (
              <small className=" text-error mt-1 self-end label-text-alt">Email is required</small>
            )}
            {errors.email?.type === "pattern" && (
              <small className=" text-error mt-1 self-end label-text-alt">Your email is invalid</small>
            )}
          </div>
          <div className="form-control">
            <label className="label ">
              <span className="label-text after:content-['*'] after:ml-0.5 after:text-error">Phone number</span>
            </label>
            <input
              {...register("phone", {
                required: true,
              })}
              type="number"
              placeholder="+880 1700 000000"
              className="input input-bordered bg-transparent mb-3"
            />
            {errors.phone?.type === "required" && (
              <small className=" text-error mt-1 self-end label-text-alt ">Please enter your phone number</small>
            )}
          </div>
          <div className="form-control">
            <label className="label ">
              <span className="label-text after:content-['*'] after:ml-0.5 after:text-error">Massages</span>
            </label>
            <textarea
              {...register("massages", {
                required: true,
              })}
              type="textarea"
              placeholder="Type here your massages"
              className="input h-36 input-bordered bg-transparent mb-3"
            />
            {errors.massages?.type === "required" && (
              <small className=" text-error mt-1 self-end label-text-alt ">Write your massages</small>
            )}
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

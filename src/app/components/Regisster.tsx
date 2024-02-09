"use client"

import { useForm } from "react-hook-form";

export const Register = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = handleSubmit(data => {
        console.log(data);
    })

    console.log(errors);
    

    return (
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="username">
            Create Username:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Create Username"
            className="w-full bg-gray-200 p-4 rounded-md"
            {...register("username", { required: {
                value: true,
                message: "Username is required"
            }})}
          />
        </div>
        {
          errors.username && (
            <p className="text-red-500 text-xs">{errors.username.message}</p>
          )
        }

        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="email">
            Edit Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Create Email"
            className="w-full bg-gray-200 p-4 rounded-md"
            {...register("email", { required: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="password1">
            Create Password:
          </label>
          <input
            type="password"
            id="password1"
            placeholder="Create Password"
            className="w-full bg-gray-200 p-4 rounded-md"
            {...register("password1", { required: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="password2">
            Confirm Password:
          </label>
          <input
            type="password"
            id="password2"
            placeholder="Confirm Password"
            className="w-full bg-gray-200 p-4 rounded-md"
            {...register("password2", { required: true })}
          />
        </div>

        <button
          className="bg-blue-600 text-white rounded-md p-4"
        >
          Register
        </button>
      </form>
    );
}
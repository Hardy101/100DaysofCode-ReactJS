import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

const FormWithValidation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: { name?: string; email?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required!";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid Email format";
    }

    setErrors(newErrors);
    return Object.entries(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully");
      setFormData({ name: "", email: "" });
    }
  };

  return (
    <main className="flex justify-center p-16">
      <form
        onSubmit={handleSubmit}
        className="bs-1 rounded-3xl flex flex-col gap-4 md:w-1/3 p-4"
      >
        <h1 className=" text-[#727D73] font-bold text-center">
          Enter your details
        </h1>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name..."
          className="bg-transparent outline-none px-3 py-1 text-xs border rounded-3xl"
        />
        {errors.name && (
          <span className="text-red-500 px-3 text-xs font-bold">
            {errors.name}
          </span>
        )}
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email..."
          className="bg-transparent outline-none px-3 py-1 text-xs border rounded-3xl"
        />
        {errors.email && (
          <span className="text-red-500 px-3 text-xs font-bold">
            {errors.email}
          </span>
        )}
        <button
          type="submit"
          className="bg-[#000957] py-2 rounded-3xl text-white text-xs"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default FormWithValidation;
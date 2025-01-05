import React, { useState, useEffect } from "react";

// Day One
/* 
// Properties (props)
interface GreetingProps {
  name: String;
  age: number;
}

const HelloWorld: React.FC<GreetingProps> = ({ name, age }) => {
  const [count, setCount] = useState(age);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <main className="p-16">
        <h1 className="font-bold text-3xl">
          Hello, {name}!, you have been alive for {age} years!
        </h1>
        <p className="mt-4 text-2xl">
          This number increases{" "}
          <span className="font-bold px-2 py-1 bg-[#f5f5f5]">{count}</span>
        </p>
        <button
          onClick={increment}
          className="text-sm px-3 py-2 bg-[#f5f5f5] mx-2 font-bold mt-5"
        >
          Increase
        </button>
        <button
          onClick={decrement}
          className="text-sm px-3 py-2 bg-[#f5f5f5] mx-2 font-bold"
        >
          Decrease
        </button>
      </main>
    </>
  );
};
export default HelloWorld;


// Day 3 - Conditional Rendering, Lists and keys
const ConditionalRendering = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const toggleLoggedIn = () => {
    setisLoggedIn(!isLoggedIn);
  };

  const navLinks = [
    { id: 0, title: "Home" },
    { id: 1, title: "About" },
    { id: 2, title: "Services" },
    { id: 3, title: "Contact" },
  ];

  return (
    <main className="p-4">
      <h1 className="font-bold text-3xl">Day #3 conditional rendering</h1>
      <p className="mt-4">
        <button
          onClick={toggleLoggedIn}
          className="text-xs bg-[#f5f5f5] px-4 py-2 font-bold"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </p>
      <p className="mt-4">
        {isLoggedIn && (
          <ul className="flex gap-4 text-xs font-bold">
            {navLinks.map((link) => (
              <li key={link.id}> {link.title} </li>
            ))}
          </ul>
        )}
      </p>
    </main>
  );
};

export default ConditionalRendering;


// Day four - five
interface FormData {
  name: string;
  email: string;
  select: string;
}

const BasicForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    select: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(
      `Submitted name: '${formData.name}'\n Email: '${formData.email}'\n Option: '${formData.select}'`
    );
  };

  return (
    <>
      <main className="p-8">
        <form
          onSubmit={handleSubmit}
          className="bs-1 rounded-3xl flex flex-col gap-4 w-1/3 p-4"
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
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email..."
            className="bg-transparent outline-none px-3 py-1 text-xs border rounded-3xl"
          />

          <select
            name="select"
            value={formData.select}
            onChange={handleChange}
            className="bg-transparent outline-none px-3 py-1 text-xs border rounded-3xl"
          >
            <option value="">--select--</option>
            <option value="startup">Startup</option>
            <option value="Sidehustle">Side Hustle</option>
          </select>
          <button
            type="submit"
            className="bg-[#000957] py-2 rounded-3xl text-white text-xs"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default BasicForm;

*/

// Day Five

const TimerComponent: React.FC = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Component mounted");

    // Start a timer
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup on unmount
    return () => {
      console.log("Component unmounted");
      clearInterval(timer); // Clears the timer when the component is unmounted
    };
  }, []); // Empty dependency array means this runs only on mount and unmount

  useEffect(() => {
    console.log(`Seconds updated to: ${seconds}`);
  }, [seconds]); // This runs whenever `seconds` is updated

  return (
    <div>
      <h1>Timer</h1>
      <p>Seconds: {seconds}</p>
    </div>
  );
};

export default TimerComponent;

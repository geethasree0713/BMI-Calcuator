import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const reload = () => {
    window.location.reload();
  };

  const calc = (e) => {
    e.preventDefault();

    if (!weight || !height) {
      toast.error("Please enter weight and height");
      return;
    }

    if (weight <= 0 || height <= 0) {
      toast.warning("Enter valid positive values");
      return;
    }

    let bmiValue = (weight / (height * height)) * 703;
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setMessage("You are underweight");
      toast.info("Underweight range");
    } 
    else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("You are healthy");
      toast.success("Healthy BMI 👍");
    } 
    else {
      setMessage("You are overweight");
      toast.warning("Overweight range");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      
      <ToastContainer />

      <div className="bg-white shadow-lg rounded-xl p-10 w-96">
        <h1 className="text-2xl font-bold text-center mb-6">
          BMI Calculator
        </h1>

        <form onSubmit={calc}>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Weight (lbs)
            </label>
            <input
              type="number"
              placeholder="Enter weight"
              value={weight}
              onChange={(e)=>setWeight(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Height (inches)
            </label>
            <input
              type="number"
              placeholder="Enter height"
              value={height}
              onChange={(e)=>setHeight(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            Calculate
          </button>

          <button
            type="button"
            onClick={reload}
            className="w-full mt-3 border border-blue-500 text-blue-500 p-3 rounded-lg"
          >
            Reload
          </button>

          <div className="text-center mt-6">
            <h3 className="text-lg font-semibold">
              Your BMI: {bmi}
            </h3>
            <p>{message}</p>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
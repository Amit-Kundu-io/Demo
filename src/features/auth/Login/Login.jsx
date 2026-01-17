import { useEffect, useState } from "react";

function Login() {
  const slides = ["/img1.png", "/img2.jpg", "/img3.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">

      {/* MAIN CARD */}
      <div className="w-full max-w-4xl min-h-[540px] bg-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT – SLIDER (FULL HEIGHT) */}
        <div className="relative h-full">
          {slides.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="slide"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-6 left-6 text-white max-w-xs">
            <h2 className="text-2xl font-bold mb-1">
              Welcome to Tendtrix
            </h2>
            <p className="text-xs opacity-90">
              Manage your projects, teams and growth in one powerful platform.
            </p>
          </div>

          {/* Dots */}
          <div className="absolute bottom-3 w-full flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 ${
                  index === i
                    ? "w-6 h-2 bg-white rounded-full"
                    : "w-2 h-2 bg-white/60 rounded-full"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT – FORM (FULL HEIGHT) */}
        <div className="p-6 md:p-8 flex flex-col justify-center h-full bg-white">
          <h1 className="text-3xl font-bold text-center mb-1 font-serif">
            Tendtrix
          </h1>
          <p className="text-center text-gray-500 mb-6 text-sm">
            Create your account
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input label="First name*" placeholder="John" />
              <Input label="Last name*" placeholder="Doe" />
            </div>

            <Input label="Work email*" type="email" placeholder="abc@xyz.com" />
            <Input label="Mobile number*" placeholder="+91 98765 43210" />
            <Input label="Company name*" placeholder="Your Company" />
            <Input label="Address*" placeholder="Street Address" />

            <div className="flex items-center gap-2 text-xs">
              <input type="checkbox" className="accent-teal-600" />
              <span>
                I agree to the{" "}
                <span className="text-teal-600 cursor-pointer">
                  Terms & Privacy Policy
                </span>
              </span>
            </div>

            <button className="w-full bg-teal-600 hover:bg-teal-700 transition text-white py-2.5 rounded-lg font-semibold shadow-md">
              Next
            </button>
          </form>

          <p className="mt-4 text-center text-xs">
            Already have an account?{" "}
            <span className="text-teal-600 cursor-pointer font-medium">
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* INPUT */
function Input({ label, type = "text", placeholder }) {
  return (
    <div>
      <label className="block text-xs font-medium mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
    </div>
  );
}

export default Login;

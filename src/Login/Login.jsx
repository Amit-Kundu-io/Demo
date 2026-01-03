import { useEffect, useState } from "react";

function Login() {
  const slides = [
    "img1.png",
    "img2.jpg",
    "img3.jpg",
  ];

  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Slider Section */}
        <div className="relative h-96 md:h-162.5 overflow-hidden">
          <img
            src={slides[index]}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover transition-all duration-700"
          />

          {/* Bottom gradient overlay to blend slides into the form area  */}
          <div
            className="absolute bottom-0 left-0 w-full h-36 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0))' }}
          />

          {/* Pagination dots (centered) */}
          <div className="absolute bottom-4 left-0 w-full z-20 flex justify-center items-center">
            <div className="flex items-center gap-3">
              {slides.map((_, i) => {
                const isActive = i === index;
                return (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-pressed={isActive}
                    className={`transition-all duration-200 focus:outline-none flex items-center justify-center ${
                      isActive
                        ? 'w-8 h-2 bg-white rounded-full shadow-lg'
                        : 'w-2 h-2 bg-white/60 rounded-full'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="p-10 flex flex-col justify-center bg-blue-300">
          <h1 className="text-4xl font-bold mb-2 text-center font-serif">Tendtrix</h1>
          <h1 className="text-3xl font-semibold mb-6">Create account</h1>

          <form className="space-y-5">


            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First name*</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring"
                  placeholder="Joxx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last name*</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring"
                  placeholder="Doxx"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email*</label>
              <input
                type="email"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring"
                placeholder="abc@xyz.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mobile number*</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring"
                placeholder="+91 9876 XXX XXX"
              />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-sm">I agree to Terms & Privacy Policy</p>
            </div>

            <button className="w-full bg-teal-600 text-white py-2 rounded-lg text-lg hover:bg-teal-700" >Next</button>
          </form>

          <p className="mt-4 text-sm">Already have an account? <span className="text-teal-600 cursor-pointer">Sign in</span></p>
        </div>
      </div>
    </div>
  );
}

export default Login;

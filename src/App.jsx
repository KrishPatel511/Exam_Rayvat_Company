import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-amber-200 flex items-center justify-center px-10">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-6xl h-[80vh] p-8 flex">
        {/* LEFT SIDE – FORM */}
        <div className="w-1/2 pr-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Register Form
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="admin_managetec@managetec.com"
                className="w-full px-4 py-2 border rounded-lg bg-blue-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg bg-blue-50"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 rounded-lg transition"
            >
              Register
            </button>
          </form>
        </div>

        {/* CENTER LINE */}
        <div className="w-px bg-gray-300"></div>

        {/* RIGHT SIDE – SCROLLABLE CARDS */}
        <div className="w-1/2 pl-8 overflow-y-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Registered Users
          </h2>

          <div className="space-y-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 bg-amber-50 shadow-sm"
              >
                <p className="font-semibold text-gray-800">Amit Verma</p>
                <p className="text-sm text-gray-600">amit.verma@outlook.com</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

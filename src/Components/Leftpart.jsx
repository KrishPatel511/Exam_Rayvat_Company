const Leftpart = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  fullObjectArray,
  setFullObjectArray,
}) => {
  const onSubmitHandle = (e) => {
    e.preventDefault();
    const newValues = [...fullObjectArray, { name, email, password }];

    setFullObjectArray(newValues);
    console.log(newValues);
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="w-1/2 pr-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Register Form
      </h2>

      <form className="space-y-4" onSubmit={(e) => onSubmitHandle(e)}>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Name..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Email..."
            className="w-full px-4 py-2 border rounded-lg bg-blue-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
  );
};

export default Leftpart;

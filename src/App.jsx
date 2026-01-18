import React, { useState } from "react";
import Rightpart from "./Components/Rightpart";
import Leftpart from "./Components/Leftpart";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullObjectArray, setFullObjectArray] = useState([]);

  return (
    <div className="min-h-screen bg-amber-200 flex items-center justify-center px-10">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-6xl h-[80vh] p-8 flex">
        {/* LEFT SIDE – FORM */}
        <Leftpart
          name={name}
          email={email}
          password={password}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          fullObjectArray={fullObjectArray}
          setFullObjectArray={setFullObjectArray}
        />

        {/* CENTER LINE */}
        <div className="w-px bg-gray-300"></div>

        {/* RIGHT SIDE – SCROLLABLE CARDS */}
        <Rightpart
          fullObjectArray={fullObjectArray}
          setFullObjectArray={setFullObjectArray}
        />
      </div>
    </div>
  );
};

export default App;

const Rightpart = ({ fullObjectArray, setFullObjectArray }) => {
  console.log("Full Object Is....", fullObjectArray);

  const handleDelete = (index) => {
    const deleteItem = [...fullObjectArray];
    deleteItem.splice(index, 1);
    setFullObjectArray(deleteItem);
  };

  return (
    <div className="w-1/2 pl-8 overflow-y-auto">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Registered Users
      </h2>

      <div className="space-y-4">
        {fullObjectArray.map(function (data) {
          return (
            <div className="border rounded-xl p-4 bg-amber-700 shadow-sm">
              <p className="font-semibold text-white text-2xl">{data.name}</p>
              <p className=" text-white ">{data.email}</p>
              <button
                className="w-full bg-red-950 mt-5 rounded-full text-white font-bold cursor-pointer"
                onClick={(index) => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rightpart;

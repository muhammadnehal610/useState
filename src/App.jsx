import { useState } from "react";
import "./App.css";

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [father, setFather] = useState("");
  const [rol, setRole] = useState("");

  function addUserInfo(event) {
    event.preventDefault();
    let newObj = {
      name: name,
      father: father,
      rol: rol,
    };
    setUserInfo((u) => [...u, newObj]);
    // Clear input fields after adding user info
    setName("");
    setFather("");
    setRole("");
  }

  function addName(event) {
    setName(event.target.value);
  }

  function addFather(event) {
    setFather(event.target.value);
  }

  function addRole(event) {
    setRole(event.target.value);
  }

  return (
    <div>
      <form
        action=""
        className="flex flex-wrap justify-center gap-3"
        onSubmit={addUserInfo}
      >
        <input
          className="form mt-4 py-3 text-2xl"
          required
          type="text"
          placeholder="Name"
          minLength={5}
          onChange={addName}
          value={name}
        />
        <input
          className="form mt-4 py-3 text-2xl"
          required
          type="text"
          placeholder="Father name"
          minLength={5}
          onChange={addFather}
          value={father}
        />
        <input
          className="form mt-4 py-3 text-2xl"
          required
          type="text"
          placeholder="Roll number"
          minLength={6}
          onChange={addRole}
          value={rol}
        />
        <div className="flex flex-wrap border-2 border-black mt-4 px-3 button-box hover:bg-blue-500">
          <button className=" " type="submit">
            Add List
          </button>
        </div>
      </form>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-serif font-bold mt-3 px-3 py-2 ">
          SMIT Student List
        </h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-blue-400 dark:text-blue-100">
            <thead className="text-xs text-blue uppercase border-b border-blue-400 dark:text-blue">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Serial No
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Father Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Role No
                </th>
              </tr>
            </thead>
            <tbody>
              {userInfo.map((data, ind) => {
                return (
                  <tr
                    key={ind}
                    className="border-b border-blue-400 hover:bg-blue-500 hover:text-white transition-colors table-row"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-blue-150 whitespace-nowrap dark:text-blue-100"
                    >
                      {ind + 1}
                    </th>
                    <td className="px-6 py-4 font-medium text-blue-150 whitespace-nowrap dark:text-blue-100">
                      {data.name}
                    </td>
                    <td className="px-6 py-4 font-medium text-blue-150 whitespace-nowrap dark:text-blue-100">
                      {data.father}
                    </td>
                    <td className="px-6 py-4 font-medium text-blue-150 whitespace-nowrap dark:text-blue-100">
                      {data.rol}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

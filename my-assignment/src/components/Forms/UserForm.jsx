import { useState } from "react";
import { isValidEmail } from "../../utils/helper";

export default function UserForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    id: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(null);

  const validate = () => {
    const err = {};
    if (!data.name) err.name = "Name is required";
    if (!isValidEmail(data.email)) err.email = "Invalid email";
    if (!data.id) err.id = "ID is required";
    if (!data.password) err.password = "Password is required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(data);
    setData({ name: "", email: "", id: "", password: "" });
    setErrors({});
  };

  return (
    <form onSubmit={submit} className="p-4 border rounded">
      {["name", "email", "id"].map((field) => (
        <div key={field}>
          <input
            placeholder={field}
            value={data[field]}
            onChange={(e) => setData({ ...data, [field]: e.target.value })}
            className="border p-2 w-full mb-1"
          />
          {errors[field] && (
            <p className="text-red-500 text-sm">{errors[field]}</p>
          )}
        </div>
      ))}

      <div className="flex gap-2 mt-2">
        <input
          type={show ? "text" : "password"}
          placeholder="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="border p-2 flex-1"
        />
        <button type="button" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>
      </div>

      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password}</p>
      )}

      <button className="bg-green-500 text-white px-3 mt-2">Submit</button>

      {submitted && <pre>{JSON.stringify(submitted, null, 2)}</pre>}
    </form>
  );
}

import { useState } from "react";
import FormChild22 from "./FormChild";

const FormPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [gender, setGender] = useState("");
  const [lang, setLang] = useState([]);
  const [user, setSubmit] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit({ name, email, occupation, gender, lang });

    // console.log(lang);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Form Page</h1>
        <lagel>username:</lagel>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <lagel>Email:</lagel>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Occupation</label>
        <select
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        >
          <option value="Student">Student</option>
          <option value="Employee">Employee</option>
          <option value="Agriculture">Agriculture</option>
        </select>
        <br />
        <label>Gender:</label>
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male">male</label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female">female</label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="other">Other</label>
        </div>

        <label>languages</label>
        <br />
        <input
          type="checkbox"
          name="languages"
          value="English"
          onChange={(e) => {
            if (e.target.checked) {
              setLang((prevLang) => [...prevLang, e.target.value]);
            }
          }}
        />
        <label htmlFor="English">English</label>
        <input
          type="checkbox"
          name="languages"
          value="Telugu"
          onChange={(e) => {
            if (e.target.checked) {
              setLang((prevLang) => [...prevLang, e.target.value]);
            }
          }}
        />
        <label htmlFor="Telugu">Telugu</label>
        <input
          type="checkbox"
          name="languages"
          value="Kannada"
          onChange={(e) => {
            if (e.target.checked) {
              setLang((prevLang) => [...prevLang, e.target.value]);
            }
          }}
        />
        <label htmlFor="Kannada">Kannada</label>
        <button type="submit">Submit</button>
      </form>
      {user && <FormChild22 Submit={user} />}
    </>
  );
};

export default FormPage;

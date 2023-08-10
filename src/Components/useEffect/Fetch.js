import React, { useState, useEffect } from "react";
import EditItem from "./EditItem";

const DataComponent = () => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState("");
  // console.log(item);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const deleteitem = (id) => {
    let newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const updatedData = (item) => {
    const newData = data.map((user) => {
      if (user.id === item.id) {
        user.title = item.update;
      }
      return user;
    });
    setData(newData);
  };

  return (
    <div>
      <div>
        {data ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                {item.id}
                {item.title}
                <button onClick={() => deleteitem(item.id)}>Delete</button>
                <button onClick={() => setItem(item)}>Edit</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      <EditItem item={item} updatedData={updatedData} />
    </div>
  );
};
export default DataComponent;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function DataComponent() {
//   const [post, setPost] = useState([]);
//   // const [id, setId]=useState(null)

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         console.log(res);
//         setPost(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       <h1>Eshwar</h1>
//       {/* <input type='text' value={id} onChange={ e=>setId(e.target.value)} />
//              <h1>{post.title}</h1> */}
//       {
//         <ol>
//           {post.map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ol>
//       }
//     </div>
//   );
// }

// export default DataComponent;

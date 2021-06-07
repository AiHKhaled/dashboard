import { Option } from "antd/lib/mentions";
import React from "react";

const Fetching = () => {
  const [Goals, setGoals] = React.useState([]);

  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/api/Goals/")
      .then((res) => {
        if (!res.ok) {
          throw Error("couldnt fetch data");
        }
        return res.json();
      })
      .then((Goals) => {
        setGoals(Goals);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      {Goals.map((element) => (
        <Option value={element.id}>{element.name} </Option>
      ))}
    </div>
  );
};

export default Fetching;

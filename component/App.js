import { addMeeting } from "@/features/meetingSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {};

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input className="name-input" type="text" />
        <br />
        <label>Time:</label>
        <input className="time-input" type="text" />
        <br />
        <label>Description:</label>
        <input className="description-input" type="text" />
        <br />
        <button type="submit">Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>meeting name</td>
            <td>meeting time</td>
            <td>meeting description</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;

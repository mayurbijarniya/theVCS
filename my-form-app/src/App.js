import React, { useState } from "react";

const FitnessClubRegistration = () => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [members, setMembers] = useState([]);

  const [showMembers, setShowMembers] = useState(false);

  const handleChange = (event) => {
    setMember({
      ...member,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMembers([...members, member]);
    setMember({
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
  };

  const toggleShowMembers = () => {
    setShowMembers(!showMembers);
  };

  return (
    <div>
      <h1>Fitness Club Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={member.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <br />
        <input
          type="email"
          name="email"
          value={member.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <br />
        <input
          type="text"
          name="phoneNumber"
          value={member.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <br />
        <input
          type="text"
          name="address"
          value={member.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <br />
        <button type="submit">Add member</button>
      </form>
      <br />
      <button onClick={toggleShowMembers}>View Member List</button>
      {showMembers && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phoneNumber}</td>
                <td>{member.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FitnessClubRegistration;

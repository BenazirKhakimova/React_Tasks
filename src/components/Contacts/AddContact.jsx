import React, { useState } from "react";

const AddContact = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function AddContact() {}
  return (
    <div>
      <h1>Contacts</h1>
      <input name="img" type="text" placeholder="img" />
      <input name="name" type="text" placeholder="name" />
      <input name="phone" type="text" placeholder="phone" />
      <input name="email" type="text" placeholder="email" />
    </div>
  );
};

export default AddContact;

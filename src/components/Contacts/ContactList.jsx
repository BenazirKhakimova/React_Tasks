import React, { useEffect, useState } from "react";

const ContactList = () => {
  const [contact, setContact] = useState("");
  useEffect(() => {
    setContact();
  }, []);
  return <div></div>;
};

export default ContactList;

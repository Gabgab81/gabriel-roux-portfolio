import { createContext, useContext, useState } from "react";

const ContactFormContext = createContext({});

export const ContactFormProvider = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  return (
  <ContactFormContext.Provider value={{
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
  }} >
    {props.children}
  </ContactFormContext.Provider>
  );
};

export const useContactFrom = () => {
  return useContext(ContactFormContext)
}
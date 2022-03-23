import "./App.css";
import AddContact from "./components/Contacts/AddContact";
import Contacts from "./components/Contacts/ContactList";
import Counter from "./components/Counter/Counter";
import Receipts from "./components/Receipts/Receipts";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Counter />
      <Receipts />
      <SignUp />
      <Contacts />
      <AddContact />
    </div>
  );
}

export default App;

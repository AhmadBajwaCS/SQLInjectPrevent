import logo from "./logo.svg";
import "./App.css";
import HomePageButtons from "./components/HomePageButtons";
import AddNewCustomer from "./components/AddNewCustomer";
import LogPrescription from "./components/LogPrescription";
import Table from "./components/Table";
import { Route } from "react-router-dom";
import Quit from "./components/Quit";
import PickTable from "./components/PickTable";

function App() {
  return (
    <body>
      <div>
        <Route path="/" exact component={HomePageButtons} />
        <Route path="/new" exact component={AddNewCustomer} />
        <Route path="/log" exact component={LogPrescription} />
        <Route path="/quit" exact component={Quit} />

        {/* Tables */}
        {/* <Route path="/search" exact component={PickTable} /> */}
        <Route path="/search" exact render={() => <Table table="person" />} />
      </div>
    </body>
  );
}

export default App;

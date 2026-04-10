import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ComplaintForm from "./components/ComplaintForm";
import StatusTable from "./components/StatusTable";
import Team from "./components/Team";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <ComplaintForm />
      <StatusTable />
      <Team />
    </>
  );
}
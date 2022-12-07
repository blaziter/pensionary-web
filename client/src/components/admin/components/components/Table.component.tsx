import { useParams } from "react-router-dom";
import AdminTable from "./AdminTable.component";
import EventTable from "./EventTable.component";
import EmployeeTable from "./EmployeeTable.component";

const Table = () => {
    const { role } = useParams();

    if (role == 'admin') return <AdminTable />
    if (role == 'announcements') return <EventTable />
    if (role == 'doctor' || role == 'nurse') return <EmployeeTable />

    return <></>
}

export default Table;
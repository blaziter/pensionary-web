import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminTable from "./AdminTable.component";
import EventTable from "./EventTable.component";
import EmployeeTable from "./EmployeeTable.component";
import AdministrationTable from "./AdministrationTable.component";
import InfoTable from "./InfoTable.component";

const Table = () => {
    const { role, page } = useParams()

    if (role == 'info') return <InfoTable role={role} page={page} />
    if (role == 'admin') return <AdminTable role={role} page={page} />
    if (role == 'announcements') return <EventTable role={role} page={page} />
    if (role == 'administration') return <AdministrationTable role={role} page={page} />
    if (role == 'doctor' || role == 'nurse') return <EmployeeTable role={role} page={page} />

    return <></>
}

export default Table;
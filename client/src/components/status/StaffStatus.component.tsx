import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
const API_URL = process.env.REACT_APP_API_URL;

interface Employee {
    firstName: string;
    lastName: string;
    role: string;
    availability: boolean;
}

const StaffStatus = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/employees`)
            .then(async (res) => {
                const data = await res.data;
                await setStaff(data);
                console.log(staff);
            });
    }, [staff]);

    return (
        <>
            <Container className='info-container has-text-centered font' fluid>
                <p>Informace</p>
                <Row>
                    <Col>
                        <p>Náš tým na který se můžete obrátit</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            staff.length > 0 && staff.map((person: Employee) => {
                                return (
                                    <>
                                        <Row>
                                            <Col>{person.role}:</Col>
                                            <Col>{person.firstName} {person.lastName}</Col>
                                        </Row>
                                    </>
                                );
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default StaffStatus;
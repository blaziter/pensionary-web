import React from "react";
import { Layout } from '../../pages/Pages';
import { Card, Container } from 'react-bootstrap';

const Home = () => {

    return(
        <Layout>
            <Card className='home-wrapper font'>
                <Card.Body className='has-text-centered'>
                    <Card.Title className="font">Domovská stránka</Card.Title>
                    <Card.Text>
                        Vítejte na domovské stránce aplikace Pensionary. Tato aplikace slouží k evidenci zaměstnanců a jejich stávajících a budoucích stavech.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Layout>
    );
}

export default Home;
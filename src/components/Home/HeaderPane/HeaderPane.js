import React, {Component} from 'react';
import styles from './HeaderPane.module.css';
import {Row, Image, Container, Col} from 'react-bootstrap';
import lifesavers from './Lifesavers.png';



class HeaderPane extends Component{

    render(){
        return(

            // <Container fluid>
                <Row className={styles.HeaderPane}>
                <Col className={styles.leftColumn}>
                    <Row><h1 className={styles.headText}>A <text style={{color: '#FFB739', display: 'inline'}}>new and improved</text> way to manage your personal health</h1></Row>
                    {/* <h3 className={styles.headText2}>always close.</h3> */}
                    </Col>
                <Col><Image className={styles.HeaderPaneImg} src={lifesavers} width='auto' height='310px'/></Col>
                </Row>




        );
    }
}


export default HeaderPane;

            
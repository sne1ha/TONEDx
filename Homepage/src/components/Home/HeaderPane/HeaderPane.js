import React, {Component} from 'react';
import styles from './HeaderPane.module.css';
import {Row, Image, Container, Col} from 'react-bootstrap';




class HeaderPane extends Component{

    render(){
        return(

            // <Container fluid>
                <Row className={styles.HeaderPane}>
                <Col className={styles.leftColumn}>
                    <h1 className={styles.headText}><Row>Your Lorem ipsum dolor</Row></h1>
                    <h2 className={styles.headText2}>always close.</h2>
                    </Col>
                <Col><Image className={styles.HeaderPaneImg} src='' width='310px' height='310px'/></Col>
                </Row>




        );
    }
}


export default HeaderPane;

            
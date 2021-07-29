import React, {Component} from 'react';
import styles from './HeaderPane.module.css';
import {Row, Image, Container, Col} from 'react-bootstrap';




class HeaderPane extends Component{

    render(){
        return(

            // <Container fluid>
                <Row className={styles.HeaderPane}>
                <Col className={styles.leftColumn}>
                    <h3 className={styles.headText}><Row>Your Lorem ipsum dolor</Row></h3>
                    <h3 className={styles.headText2}>always close.</h3>
                    </Col>
                <Col><Image className={styles.HeaderPaneImg} src='' width='300px' height='200px'/></Col>
                </Row>




        );
    }
}


export default HeaderPane;

            
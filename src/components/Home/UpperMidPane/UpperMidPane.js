import React, { Component } from "react";
import styles from './UpperMidPane.module.css';
import {Row, Image, Container, Col} from 'react-bootstrap';





class UpperMidPane extends Component{
    render(){
        return(

            <Row className={styles.upperMidPane}>
                <Col className={styles.leftCol}><div className={styles.leftBlock}></div></Col>
                <Col className={styles.midCol}><div className={styles.midBlock}></div><div className={styles.midBlock}></div></Col>
                <Col className={styles.rightCol}><div className={styles.rightBlock}></div><div className={styles.rightBlock}></div></Col>




            </Row>

        );
    }

}



export default UpperMidPane;
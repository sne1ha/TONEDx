import React, { Component } from "react";
import styles from './UpperMidPane.module.css';
import {Row, Image, Container, Col} from 'react-bootstrap';





class UpperMidPane extends Component{
    render(){
        return(

            <Row className={styles.upperMidPane}>
                <Col className={styles.leftCol}><div className={styles.leftBlock}>A detailed itinerary for appointments, tests and procedures.</div></Col>
                <Col className={styles.midCol}><div className={styles.midBlock}>A guide to navigating health insurance and hospital costs</div><div className={styles.midBlock}>Find out the best products and brands for your skin type</div></Col>
                <Col className={styles.rightCol}><div className={styles.rightBlock}>Advanced diagnostic tests and treatments. </div><div className={styles.rightBlock}>Latest information specific to Mayo Clinic </div></Col>




            </Row>

        );
    }

}



export default UpperMidPane;
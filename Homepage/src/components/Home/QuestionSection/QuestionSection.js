import React, { Component } from "react";
import styles from './QuestionSection.module.css';
import {Row, Image, Container, Col} from 'react-bootstrap';




class QuestionSection extends Component{
    render(){
        return(
            <Row className={styles.QuestionSection}>

                <h1 className={styles.headingText}>Any questions? Just Ask</h1>
                <text className={styles.regularText}>Lorem ipsum</text>
                <Row>
                    <Col><div></div></Col>
                    <Col><div></div></Col>
                </Row>

            </Row>
            
        );
    }
}



export default QuestionSection;
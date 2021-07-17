import React, { Component } from "react";
import styles from './LowerMidPane.module.css';
import {Row, Image, Container, Col, Button} from 'react-bootstrap';
import ContentCard from '../ContentCard/ContentCard'




class LowerMidPane extends Component{
    
    render() {
        return (

            <Row className={styles.lowerMidPane}>
                <h3>Explore the items you'll love</h3>
                <Row className={styles.titleRow}><Col xs='auto'>Explore</Col><Col xs='auto'>Favorites</Col><Col xs='auto'>Popular</Col></Row>
                <div style={{overflow:'scroll'}}><Row className={styles.cardRow, "row flex-nowrap"}><Col><ContentCard /></Col><Col><ContentCard /></Col><Col><ContentCard /></Col>
                <Col><ContentCard /></Col><Col><ContentCard /></Col><Col><ContentCard /></Col>
                </Row></div>
                <Row>
                    <Col><Button onClick={()=>{console.log('move content');}} className={styles.navButton}>Previous</Button></Col>
                    <Col><Button onClick={()=>{console.log('move content');}} className={styles.navButton2}>Next</Button></Col></Row>
                </Row>
        );
    }
}









export default LowerMidPane;
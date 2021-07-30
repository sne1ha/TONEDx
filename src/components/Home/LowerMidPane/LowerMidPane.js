import React, { Component } from "react";
import styles from './LowerMidPane.module.css';
import {Row, Image, Container, Col, Button} from 'react-bootstrap';
import ContentCard from '../ContentCard/ContentCard';
import heart from './heart.png';
import neurons from './neurons.png';
import cells from './cells.png';
import ocells from './ocells.png';




class LowerMidPane extends Component{
    
    render() {
        return (

            <Row className={styles.lowerMidPane}>
                <h3>Explore the items you'll love</h3>
                <Row className={styles.titleRow}><Col xs='auto'>Explore</Col><Col xs='auto'>Favorites</Col><Col xs='auto'>Popular</Col></Row>
                <div style={{overflow:'scroll'}}><Row className={styles.cardRow, "row flex-nowrap"}><Col><ContentCard img={heart} title='Heart arrhythmia care at Mayo Clinic'/></Col><Col><ContentCard img={neurons} title='Delegate access to a family member or caregiver' /></Col><Col><ContentCard img={cells} title='Racial indifferences at the hospital'/></Col>
                <Col><ContentCard img={ocells} title='Prompt treatment for minor ailments.' /></Col><Col><ContentCard /></Col><Col><ContentCard /></Col>
                </Row></div>
                <Row>
                    <Col><Button onClick={()=>{console.log('move content');}} className={styles.navButton}>Previous</Button></Col>
                    <Col><Button onClick={()=>{console.log('move content');}} className={styles.navButton2}>Next</Button></Col></Row>
                </Row>
        );
    }
}









export default LowerMidPane;
import React, { Component } from "react";
import styles from './LowerMidPane.module.css';
import {Row, Image, Container, Col, Button} from 'react-bootstrap';
import ContentCard from '../ContentCard/ContentCard'
import scientist from './scientist.png';
import virus from './virus.png'; 
import living from './living.png'
import hand from './hand.png'
import comp from './comp.png'
import skin from './skin.png'
import side from './side.png'; 

class LowerMidPane extends Component{
    
    render() {
        return (

            <Row className={styles.lowerMidPane}>
                <Row className={styles.titleRow}><Col xs='auto'>Explore</Col><Col xs='auto'>Favorites</Col><Col xs='auto'>Popular</Col></Row>
                <div style={{overflow:'scroll'}}><Row className={styles.cardRow, "row flex-nowrap"}><Col><ContentCard img={scientist} title='Noteworthy emerging medical research' /></Col><Col><ContentCard img= {virus} title = 'Know the signs of early onset illnesses '/></Col><Col><ContentCard img = {living} title = 'Here are the tips to keep living healthy' /></Col>
                </Row></div>
                <div style={{overflow:'scroll'}}><Row className={styles.cardRow, "row flex-nowrap"}><Col><ContentCard img = {hand} title = 'click to view the dermatology hub here'/></Col><Col><ContentCard img = {comp} title = 'Managing stress and its physical effects'/></Col><Col><ContentCard img = {skin}title = 'Here are some skincare for diverse skin tones'/></Col>
            </Row></div>
              <Row className = {styles.imgRow}><Col img = {side}></Col> </Row>
                </Row>
        );
    }
}









export default LowerMidPane;
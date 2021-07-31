import React, { Component } from "react";
import styles from './ContentCard.module.css';
import {Row, Image, Container, Col, Button} from 'react-bootstrap';
import AddIcon from '@material-ui/icons/AddCircle';




class ContentCard extends Component {
    render(){
        return (

            <div className={styles.contentCard}> 
            {/* <h1>skjdcdmkls</h1> */}
                <div className={styles.Image}><Image style={{margin: '0px'}} src={this.props.img} width='246px' height='173px'/></div>
                <div className={styles.textBox}><text className={styles.contentText}>{this.props.title}</text></div>
                <div className={styles.addButtonBox}><AddIcon onClick={()=>{console.log('add sth!');}} className={styles.addButton}/></div>
                
            </div>
        );
    }
    

}










export default ContentCard;
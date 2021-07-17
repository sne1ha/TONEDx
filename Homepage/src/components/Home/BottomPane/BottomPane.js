import React, { Component } from "react";
import styles from './BottomPane.module.css';
import {Row, Image, Container, Col} from 'react-bootstrap';
import withStyles from '@material-ui/core/styles/withStyles';
import {TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';






class BottomPane extends Component{

    
    render(){
        return (
            
            <Row className={styles.BottomPane}>
                <Row className={styles.Content}>
                <Col className={styles.leftCol}>
                    <Row><h3 className={styles.subText}>Subscribe</h3></Row>
                    <Row><text>Don't miss out on Dutchie news!</text></Row>
                    <Row><TextField className='textfield'  multilineColor='yellow' variant='filled' label='Enter your e-mail address' className={styles.searchBar} InputProps={{
         startAdornment: (
            <InputAdornment position="start">
              <SearchIcon onClick={()=>{console.log('heyyy');}} />   {/* onKeyDown={()=>console.log('key')}*/}
            </InputAdornment>
          )}} /></Row></Col>
                <Col className={styles.rightCol}>
                    <Row><h3 className={styles.subText}>Follow Lorem</h3></Row>
                    <Row><text>Eget at ac dapibus felis dolor amet.</text></Row>    
                </Col>
                </Row>
                </Row>
                

        );
    }
}




export default BottomPane;
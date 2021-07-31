import React, {Component} from 'react';
import {TextField} from '@material-ui/core';
import search from '../Assets/search.png';
import SearchIcon from '@material-ui/icons/Search';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import InputAdornment from '@material-ui/core/InputAdornment';

import styles from './HeaderBar.module.css';







class HeaderBar extends Component {
    render(){
        return (
            <Row className={styles.bar}>
                <Col xs={'auto'}></Col>
                <Col xs={'auto'}><TextField label='Search' className={styles.searchBar} InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon onClick={()=>{console.log('heyyy');}} />   {/* onKeyDown={()=>console.log('key')}*/}
            </InputAdornment>
          )
        }}/></Col>
            </Row>
            // </Container>
        );
    }
    
}


export default HeaderBar;
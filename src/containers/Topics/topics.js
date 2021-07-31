import { CardContent } from '@material-ui/core';
import React, {Component} from 'react';
import {Row, Image} from 'react-bootstrap';
import HeaderBar from '../Topics/HeaderBar/HeaderBar'; 
import HeaderPane from '../Topics/HeaderPane/HeaderPane'; 
import LowerMidPane from '../Topics/LowerMidPane/LowerMidPane';
import BottomPane from '../Topics/BottomPane/BottomPane'; 

class Topics extends Component{

    render() {
        return(
            <React.Fragment>
            <HeaderBar />
            <HeaderPane />
            <LowerMidPane />
            <BottomPane />
            </React.Fragment>
        );
    }

}







export default Topics;
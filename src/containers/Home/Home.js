import { CardContent } from '@material-ui/core';
import React, {Component} from 'react';
// import styles from './Home.module.css';
import {Row, Image} from 'react-bootstrap';
import ContentCard from '../../components/Home/ContentCard/ContentCard';
import HeaderBar from '../../components/Home/HeaderBar/HeaderBar';
import HeaderPane from '../../components/Home/HeaderPane/HeaderPane';
import LowerMidPane from '../../components/Home/LowerMidPane/LowerMidPane';
import QuestionSection from '../../components/Home/QuestionSection/QuestionSection';
import UpperMidPane from '../../components/Home/UpperMidPane/UpperMidPane';
import BottomPane from '../../components/Home/BottomPane/BottomPane';
import heart from './heart.png';





class Home extends Component{

    render(){
        return(
            <React.Fragment>
            <HeaderBar />
            <HeaderPane />
            <UpperMidPane />
            <LowerMidPane />
            {/* <ContentCard img={heart}/> */}
            <QuestionSection />
            <BottomPane />
            </React.Fragment>
        );
    }

}







export default Home;
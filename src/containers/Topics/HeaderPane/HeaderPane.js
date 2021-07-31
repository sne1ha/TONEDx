import React, {Component} from 'react';
import styles from './HeaderPane.module.css';
import {Row, Image, Container, Col} from 'react-bootstrap';

import headerimg from './headerimg.png'; 




class HeaderPane extends Component{

    render(){
        return(

                <Row className={styles.HeaderPane}>
                <Col className={styles.leftColumn}>
                    <h3 className={styles.headText}><Row>The access to health care that </Row></h3>
                    <h3 className={styles.headText2}>you deserve</h3>
                    </Col>
                <Col><Image className={styles.HeaderPaneImg} src={headerimg} width='auto' height='300px'/></Col>
                </Row>




        );
    }
}


export default HeaderPane;

            
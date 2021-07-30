import React, { Component } from "react";
import styles from './SignUp.module.css';
import {Row, Image, Container, Col} from 'react-bootstrap';
import withStyles from '@material-ui/core/styles/withStyles';
import {TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
// import TabSwitcher from './TabSwitcher';
// import firebaseLogin from './firebaseapp';



class SignUp extends Component{
    render(){
        return (
            <body>
                <div className={styles.form}>
            <div className={styles.tabHeader}>
              <div className={styles.active}>Sign Up</div>
              <div>Sign In</div>
            </div>
            <div className={styles.tabContent}>
              <div className={styles.tabBody +''+ styles.active}>
                
                <div className={styles.row}>
                  <div className={styles.colsm4}>
                    <div className={styles.UserInputWrp2}>
                      <br/>
                      <input type="text" className={styles.inputText} required/>
                      <span className={styles.FloatingLabel}>First Name</span>
                    </div>
                  </div>
                  <div className={styles.colsm4}>
                    <div className={styles.UserInputWrp2}>
                      <br/>
                      <input type="text" className={styles.inputText} required/>
                      <span className={styles.FloatingLabel}>Last Name</span>
                    </div>
                  </div>
                </div>
                <br/>
                <hr />
                <div className={styles.UserInputWrp}>
                  <br/>
                  <input type="email" id="txtEmail" className={styles.inputText} required/>
                  <span className={styles.FloatingLabel}>Email Address</span>
                </div>
                <div className={styles.UserInputWrp}>
                  <br/>
                  <input type="text" className={styles.inputText} required/>
                  <span className={styles.FloatingLabel}>Username</span>
                </div>
                <div className={styles.UserInputWrp}>
                  <br/>
                  <input type="password" id="txtPassword" className={styles.inputText} required/> 
                  <span className={styles.FloatingLabel}>Password</span>
                </div>
                <div className={styles.FormElement} id="btnSignUp">
                  <button>Submit →</button>
                </div>
              </div>
              
              <div className={styles.tabBody}>
                <div className={styles.UserInputWrp}>
                  <br/>
                  <input type="text" className={styles.inputText} required/>
                  <span className={styles.FloatingLabel}> Email / Username</span>
                </div>
                <div className={styles.UserInputWrp}>
                  <br/>
                  <input type="password" className={styles.inputText} required/> 
                  <span className={styles.FloatingLabel}>Password</span>
                </div>
                <div className={styles.FormElement}>
                  <input type="checkbox" id="remember_me" />
                  <label for="remember_me">Remember me for next session</label>
                </div>
                <div className={styles.FormElement2}>
                  <button>Submit →</button>
                </div>
              </div>
            </div>
          </div>
        
        
          {/* {firebaseLogin} */}
          {/* {TabSwitcher} */}
            </ body>
        );
    }
}


export default SignUp;

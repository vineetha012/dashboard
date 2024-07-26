import React from 'react'
import styles from "./welcomescreen.module.css";
import LoginBG from "../../assets/Vector 1.png";
import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';
function Index() {
  const navigate = useNavigate()



  return (
    <>
      <div className={styles.WelcomescreenWrapper}>

        <div className={styles.bgImage}>
          <img alt='LoginBg' className={styles.footImg} loading='lazy' src={LoginBG} />
        </div>
        <div className={styles.loginTitle}>
          <h1>Welcome to Dashboard<br></br> Management Effortlessly</h1>
          <p>Streamline Your Business Growth with Our Lead Management Solution</p>
          <Button className={styles.customButton}
            onClick={() => navigate('/dashboard')}>Dashboard</Button>
        </div>
      </div>
    </>
  )
}
// const Index=()=>{
//   return (<>welcome</>)
// }
export default Index;

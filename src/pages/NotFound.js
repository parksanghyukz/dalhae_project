import React from 'react'
import styles from '../components/css/notfound.module.css'
import { Link } from 'react-router-dom'


export default function NotFound() {
  return (


    <div>
      <div id={styles.notFound_wrap}>
        <p id={styles.notFound_logo}>
          <img src='../images/dalhaelogo.jpg'/>
        </p>
        <h1 id={styles.notFound_title}>
          Not found (404)
        </h1>
        <p id={styles.notFound_text}>
          Sorry, the page you are looking for does not exist.
        </p>
        <p id={styles.notFound_backLink}>
          <Link to='/'>Take me home</Link> 
        </p>

      </div>


    </div>
    

  )
}

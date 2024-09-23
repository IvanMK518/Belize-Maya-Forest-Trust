import React from 'react'
import { useHistory } from 'react-router-dom';
import styles from "../styles/foot.module.css"

const Logout = () => {

    const nav = useHistory();

    const handleLogout = () =>{
        
        localStorage.removeItem('token');
        nav.push('/');
        window.location.reload();
    }

    return(
        <button onClick={handleLogout}  className = {styles.btnLogOut}>Logout</button>
    )
}

export default Logout
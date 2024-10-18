import React from 'react';
import styles from '../styles/foot.module.css';
import FinalBMFT from '../assets/FinalBMFT.jpg';
import Logout from '../API/Logout';

function Footer() {
  const token = localStorage.getItem('token');

  return (
    <div className={styles.footercontainer}>
      <section className={styles.footersubscription}>
        <p className={styles.footersubscriptiontext}>
          {/* Optional: Add text for subscription section */}
        </p>
      </section>
      <div className={styles.footerlinks}>
        <div className={styles.footerlinkwrapper}>
          <img className={styles.FinalBMFT} src={FinalBMFT} alt="Belize Maya Forest Trust Logo" />
          
          <div className={styles.footerlinkitems}>
            <h2>About Us</h2>
            <a href='/whoweare'>Our Story</a>
            <a href='/protbio'>Protecting Biodiversity</a>
            <a href='/communitystewards'>Community Stewardship</a>
          </div>
          
          <div className={styles.footerlinkitems}>
            <h2>Learn More</h2>
            <a href='/whatwedo'>What We Do</a>
            <a href='/news'>News</a>
            <a href='/ourpeople'>Our People</a>
          </div>
          
          <div className={styles.footerlinkitems}>
            <h2>Social Media</h2>
            <a href='mailto:info@bmft.org.bz'>Email Us</a>
            <a href='https://www.facebook.com/BelizeMayaForestTrust'>Facebook</a>
            <a href='https://www.youtube.com/channel/UCWKdyK1WxDc7nKskT_vsEeQ'>YouTube</a>
          </div>
          
          <div className={styles.inputareas}>
            <p className={styles.footersubscriptionheading}>
              Subscribe to Our Newsletter
            </p>
            <form>
              <input
                className={styles.footerinput}
                name='email'
                type='email'
                placeholder='Email'
                aria-label='Email subscription input'
              />
              <button type="submit" className={styles.subbutton}>
                Subscribe
              </button>
            </form>
            <div>
              {token ? (
                <Logout />
              ) : (
                <button className={styles.btnLogin}>
                  <a href="/login" aria-label="Admin Access">Admin Access</a>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <section className={styles.socialmedia}>
        <div className={styles.socialmediawrap}>
          <div className='footerlogo'>
            <a href='/' className={styles.sociallogo} aria-label="Home">
              <i className='fab fa-typo3' />
            </a>
          </div>
          <small className={styles.websiterights}> © Belize Maya Forest Trust 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'; 
import styles from '../styles/Newsfeed.module.css'; 
import Ntop from '../assets/Ntop.jpg';

function Newsfeed() {
  const [newsData, setNewsData] = useState([]);
  const [annualReportData, setAnnualReportData] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [activeTab, setActiveTab] = useState('news');
  const nav = useHistory();


  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(`/api/news?tag=news`);
        console.log('Fetched news data:', response.data);  
        setNewsData(response.data); 
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    const fetchAnnualReportData = async () => {
      try {
        const response = await axios.get(`/api/news?tag=annual report`);
        console.log('Fetched annual report data:', response.data);
        setAnnualReportData(response.data); 
      } catch (error) {
        console.error('Error fetching annual report data:', error);
      }
    };

    // Fetch both tabs' content
    fetchNewsData();
    fetchAnnualReportData();
  }, []);

  const history = (title) => {
    nav.push(`/article/${title}`);
    window.location.reload(); // Force a full page reload after navigating
  };


  const handleOpenPopup = (news) => {
    setSelectedNews(news); // Show selected news in popup
  };

  const handleClosePopup = () => {
    setSelectedNews(null); // Close popup
  };

  return (
    <div className={styles.newsFeedPage}>
      <h1 className={styles.titleoverlay}>News</h1>
      <header className={styles.header}>
        <img src={Ntop} alt="Header" />
      </header>
      <main className={styles.newsFeed}>

        {/* Tab buttons */}
        <div className={styles.tab}>
          <button
            className={`${styles.tablinks} ${activeTab === 'news' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('news')}
          >
            Latest News
          </button>
          <button
            className={`${styles.tablinks} ${activeTab === 'annual report' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('annual report')}
          >
            Annual Report
          </button>
        </div>

        {/* Pre-render both feeds but toggle their visibility */}
        <div className={styles.feedContainer}>
          <div
            className={styles.tabcontent}
            style={{ visibility: activeTab === 'news' ? 'visible' : 'hidden', position: activeTab === 'news' ? 'relative' : 'absolute' }}
          >
            {newsData.length > 0 ? (
              newsData.map((news) => (
                <div key={news._id} className={styles.newsItem}>
                  <img
                    src={`data:${news.type};base64,${btoa(
                      new Uint8Array(news.content.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ''
                      )
                    )}`}
                    alt={news.title}
                    className={styles.newsImage}
                  />
                  <a
                    href="#"
                    className={styles.newsTitle}
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenPopup(news);
                    }}
                  >
                    {news.title}
                  </a>
                  <p className={styles.newsDate}>
                    {new Date(news.uploadDate).toLocaleDateString()}
                  </p>
                  <p className={styles.newsDescription}>{news.description}</p>
                  <button className={styles.readMore} onClick={() => history(news.title)}>
                      Read More
                  </button>
                </div>
              ))
            ) : (
              <p>No news available.</p>
            )}
          </div>

          <div
            className={styles.tabcontent}
            style={{ visibility: activeTab === 'annual report' ? 'visible' : 'hidden', position: activeTab === 'annual report' ? 'relative' : 'absolute' }}
          >
            {annualReportData.length > 0 ? (
              annualReportData.map((report) => (
                <div key={report._id} className={styles.newsItem}>
                  <img
                    src={`data:${report.type};base64,${btoa(
                      new Uint8Array(report.content.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ''
                      )
                    )}`}
                    alt={report.title}
                    className={styles.newsImage}
                  />
                  <a
                    href="#"
                    className={styles.newsTitle}
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenPopup(report);
                    }}
                  >
                    {report.title}
                  </a>
                  <p className={styles.newsDate}>
                    {new Date(report.uploadDate).toLocaleDateString()}
                  </p>
                  <p className={styles.newsDescription}>{report.description}</p>
                  
                  <button className={styles.readMore} onClick={() => history(report.title)}>
                      Read More
                  </button>
                  
                </div>
              ))
            ) : (
              <p>No annual reports available.</p>
            )}
          </div>
        </div>

        {/* Popup modal for detailed news */}
        <div className={`${styles.popupOverlay} ${selectedNews ? styles.show : ''}`} onClick={handleClosePopup}>
          {selectedNews && (
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
              <h2>{selectedNews.title}</h2>
              <p>{selectedNews.description}</p>
              <button className={styles.closeButton} onClick={handleClosePopup}>
                Close
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default  Newsfeed;
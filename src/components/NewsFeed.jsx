import './styles/NewsFeed.css';
import { newsData } from "../assets/news-feed-data";
import image1 from '../images/hero-images/football-squad.jpg'

export function NewsFeed() {
    return (
        <div className='news-feed-container'>
            <h1 className='oswald-regular news-feed-header'>RECENT NEWS</h1>
            <div className="news-grid oswald-regular">
                {newsData.map(newsObject => (
                    <div key={newsObject.id} className="news-card">
                        <img src={image1} alt={newsObject.title} />
                        <div className="news-card-content">
                            <h4>{newsObject.date}</h4>
                            <h2>{newsObject.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewsFeed;

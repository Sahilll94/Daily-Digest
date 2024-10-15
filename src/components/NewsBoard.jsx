import React, { useState, useEffect } from 'react'; 
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null); // State to hold any errors

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Check if the articles array exists and is an array
                if (Array.isArray(data.articles)) {
                    setArticles(data.articles);
                } else {
                    console.error('No articles found:', data);
                    setArticles([]); // Reset to empty if not an array
                }
            })
            .catch(err => {
                console.error('Fetch error:', err);
                setError(err.message); // Set the error message
            });

    }, [category]);

    return (
        <div>   
            <h2 className="text-center"><span className="badge bg-danger fs-16">Top-Headlines</span></h2>
            {error && <p className="text-danger">{error}</p>} {/* Display error message if any */}
            <div className='d-flex flex-wrap justify-content-center'>
                {Array.isArray(articles) && articles.length > 0 ? (
                    articles.map((news, index) => (
                        <NewsItem 
                            key={index} 
                            title={news.title} 
                            description={news.description} 
                            src={news.urlToImage} 
                            url={news.url} 
                        />
                    ))
                ) : (
                    <p>No articles available.</p> // Message when there are no articles
                )}
            </div>
        </div>
    );
}

export default NewsBoard;

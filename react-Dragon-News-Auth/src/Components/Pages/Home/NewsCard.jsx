import { Link } from "react-router-dom"; 

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, details , _id } = news;

  return (
    <div className="card bg-base-100 shadow-xl mb-16">
      <figure>
        <img src={thumbnail_url} alt="News Thumbnail" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <Link  to={`/news/${_id}`} className="text-blue-500 underline">
                Read More Bro...
              </Link>
            </>
          ) : (
            details
          )}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;

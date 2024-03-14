import React from 'react';

export default function NewsItem(props) {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="w-full lg:flex justify-center items-center">
        <div className="card glass card-compact w-96 bg-base-100 shadow-xl m-1">
          <div className="flex justify-end">
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <figure>
            <img
              src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl}
              alt="..."
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p>
              <small className="text-muted">
                By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <div className="card-actions justify-end">
              <a
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}

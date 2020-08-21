import React from "react";

export default function GridDisplay({ products }) {
  return (
    <div className="grid">
      {products[0] ? (
        <div className="grid-item">
          <div className="card">
            <img alt="" src={products[0].src} />
            <div className="info">
              <h2>{products[0].title}</h2>
              <p>{products[0].content}</p>
            </div>
          </div>
        </div>
      ) : null}
      {products[1] ? (
        <div className="grid-item grid-item-two">
          <div className="card">
            <img alt="" src={products[1].src} />
            <div className="info">
              <h2>{products[1].title}</h2>
              <p>{products[1].content}</p>
            </div>
          </div>
        </div>
      ) : null}
      {products[2] ? (
        <div className="grid-item">
          <div className="card">
            <img alt="" src={products[2].src} />
            <div className="info">
              <h2>{products[2].title}</h2>
              <p>{products[2].content}</p>
            </div>
          </div>
        </div>
      ) : null}
      {products[3] ? (
        <div className="grid-item grid-item-four">
          <div className="card">
            <img alt="" src={products[3].src} />
            <div className="info">
              <h2>{products[3].title}</h2>
              <p>{products[3].content}</p>
            </div>
          </div>
        </div>
      ) : null}
      {products[4] ? (
        <div className="grid-item">
          <div className="card">
            <img alt="" src={products[4].src} />
            <div className="info">
              <h2>{products[4].title}</h2>
              <p>{products[4].content}</p>
            </div>
          </div>
        </div>
      ) : null}
      {products[5] ? (
        <div className="grid-item">
          <div className="card">
            <img alt="" src={products[5].src} />
            <div className="info">
              <h2>{products[5].title}</h2>
              <p>{products[5].content}</p>
            </div>
          </div>
        </div>
      ) : null}
      {products[6] ? (
        <div className="grid-item">
          <div className="card">
            <img alt="" src={products[6].src} />
            <div className="info">
              <h2>{products[6].title}</h2>
              <p>{products[6].content}</p>
            </div>
          </div>
        </div>
      ) : null}
      {products[7] ? (
        <div className="grid-item grid-item-eight">
          <div className="card">
            <img alt="" src={products[7].src} />
            <div className="info">
              <h2>{products[7].title}</h2>
              <p>{products[7].content}</p>
            </div>
          </div>
        </div>
      ) : null}
      {products[8] ? (
        <div className="grid-item grid-item-nine">
          <div className="card">
            <img alt="" src={products[8].src} />
            <div className="info">
              <h2>{products[8].title}</h2>
              <p>{products[8].content}</p>
            </div>
          </div>
        </div>
      ) : null}
      {products[9] ? (
        <div className="grid-item">
          <div className="card">
            <img alt="" src={products[9].src} />
            <div className="info">
              <h2>{products[9].title}</h2>
              <p>{products[9].content}</p>
            </div>
          </div>
        </div>
      ) : null}
      {products[10] ? (
        <div className="grid-item">
          <div className="card">
            <img alt="" src={products[10].src} />
            <div className="info">
              <h2>{products[10].title}</h2>
              <p>{products[10].content}</p>
            </div>
          </div>
        </div>
      ) : null}
      {products[11] ? (
        <div className="grid-item">
          <div className="card">
            <img alt="" src={products[11].src} />
            <div className="info">
              <h2>{products[11].title}</h2>
              <p>{products[11].content}</p>
            </div>
          </div>
        </div>
      ) : null}
      {products[12] ? (
        <div className="grid-item">
          <div className="card">
            <img alt="" src={products[12].src} />
            <div className="info">
              <h2>{products[12].title}</h2>
              <p>{products[12].content}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

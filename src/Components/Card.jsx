import React, { useContext } from "react";
import { mycontext } from "../App";

function Card() {
  // Context Api
  const [data, setData] = useContext(mycontext);

  // Find Quantity & Total Price
  const totalPrice = data.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  const totalQuantity = data.reduce((total, item) => total + (item.quantity || 1), 0);

  // Increase Quantity
  const handleInc = (id, quantity) => {
    setData((curr) => {
      return curr.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: (item.quantity || quantity) + 1 };
        } else {
          return item;
        }
      });
    });
  };

  // Decrease Quantity
  const handleDec = (id, quantity) => {
    setData((curr) => {
      return curr.map((item) => {
        if (item.id === id && quantity > 1) {
          return { ...item, quantity: (item.quantity || quantity) - 1 };
        } else {
          return item;
        }
      });
    });
  };

  // Delete Card
  const handleDel = (id) => {
    setData((curr) => curr.filter((item) => item.id !== id));
  };

  return (
    <div className="container my-5">
      <h1>Card Page</h1>
      <h2>Total Quantity: {totalQuantity}</h2>
      {data.map((element, index) => {
        const carouselId = `carouselExampleDark${element.id}`;
        return (
          <div key={index} className="card"
            style={{ marginBottom: index === (data.length - 1) ? 200 : 20 }}>
            <div className="row g-0">
              <div className="col-md-4">
                {/* carousel images */}
                <div id={carouselId} className="carousel carousel-dark slide m-2" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {element.images.map((ele, i) => (
                      <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                        <img src={ele} className="d-block w-100" alt={`Slide ${i + 1}`}
                          style={{ height: "400px", objectFit: "contain" }} />
                      </div>
                    ))}
                  </div>
                  {/* carousel Previous & Next button */}
                  <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              {/* Product Details */}
              <div className="col-md-5">
                <div className="card-body">
                  <h1 className="card-title">{element.title}</h1>
                  <h6 className="card-subtitle mb-2 text-muted fw-bold">Details & Core</h6>
                  <p className="card-text fw-bold" style={{ color: "darkgray" }}>{element.description}</p>
                </div>
              </div>
              {/* Price & Quantity */}
              <div className="col-md-2 d-flex flex-column align-items-center m-4">
                <h4>${element.price * (element.quantity || 1)}</h4>
                <div className="d-flex align-items-center gap-2 m-4">
                  <button className="btn btn-outline-secondary" onClick={() => handleDec(element.id, element.quantity || 1)}>-</button>
                  <p className="mb-0">{element.quantity || 1}</p>
                  <button className="btn btn-outline-secondary" onClick={() => handleInc(element.id, element.quantity || 1)}>+</button>
                </div>
                <button className="btn btn-danger mt-3" onClick={() => handleDel(element.id)}>Remove</button>
              </div>
            </div>
          </div>
        );
      })}
      {/* Fixed Bottom (Total Price) */}
      <div className="card fixed-bottom mx-5">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="fw-bold">SUB TOTAL</p>
            <p className="fw-bold">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="fw-bold">SHIPPING</p>
            <p className="fw-bold">FREE</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="fw-bold">Total:</p>
            <p className="fw-bold">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

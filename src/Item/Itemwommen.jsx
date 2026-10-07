
import React from "react";
import "./Itemwommen.scss";

import dress_2 from "../assets/dress2.jpg";
import dress_3 from "../assets/dress 3.jpg";
import dress_4 from "../assets/dress4.jpg";
import dress_5 from "../assets/dress5.jpg";
import dress_6 from "../assets/dress 6.jpg";

import mk1 from "../assets/mk1.jpg";
import mk2 from "../assets/mk2.webp";
import mk3 from "../assets/mk3.jpg";
import mk5 from "../assets/mk5.jpg";
import mk6 from "../assets/mk6.jpg";

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import bg5 from "../assets/bg5.jpg";
import bg6 from "../assets/bg6.jpg";

import { useNavigate } from "react-router-dom";

const Itemwommen = () => {

  const navigate = useNavigate();

  // Add Product To Cart
  const addToCart = (product) => {

    const oldCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = oldCart.find(
      (item) => item.name === product.name
    );

    let updatedCart;

    if (existingProduct) {

      updatedCart = oldCart.map((item) =>
        item.name === product.name
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

    } else {

      updatedCart = [
        ...oldCart,
        {
          ...product,
          quantity: 1,
        },
      ];

    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    navigate("/cart");
  };


  return (
    <>
      <div className="item">

        <div className="product-items">

          <hr />

          <div className="heading">
            <h1>Women's Collection</h1>
            <p>it's your choice, What u want to buy</p>
          </div>


          {/* ================= DRESSES ================= */}

          <div className="heading1">

            <div className="header">
              <h2>Dresses Section:-</h2>
            </div>

            <div className="dresses-images">


              {/* Dress 1 */}
              <div className="img">

                <img src={dress_2} alt="" />

                <p>Price =$5000</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Women's Dress 1",
                      price: 5000,
                      image: dress_2,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Dress 2 */}
              <div className="img">

                <img src={dress_3} alt=""  />

                <p>Price =$2500</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Women's Dress 2",
                      price: 2500,
                      image: dress_3,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Dress 3 */}
              <div className="img">

                <img src={dress_4} alt=""  />

                <p>Price =$500</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Women's Dress 3",
                      price: 500,
                      image: dress_4,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Dress 4 */}
              <div className="img">

                <img src={dress_5} alt=""  />

                <p>Price =$650</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Women's Dress 4",
                      price: 650,
                      image: dress_5,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Dress 5 */}
              <div className="img">

                <img src={dress_6} alt=""  />

                <p>Price =$599</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Women's Dress 5",
                      price: 599,
                      image: dress_6,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>

            </div>
          </div>


          {/* ================= COSMETICS ================= */}

          <div className="heading2">

            <div className="heading3">
              <h2>Cosmetics Section:-</h2>
            </div>

            <div className="imgs">


              {/* Cosmetic 1 */}
              <div className="img1">

                <img src={mk1} alt=""  />

                <p>Price=$5999</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Cosmetic Product 1",
                      price: 5999,
                      image: mk1,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Cosmetic 2 */}
              <div className="img1">

                <img src={mk2} alt="" />

                <p>Price=$350</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Cosmetic Product 2",
                      price: 350,
                      image: mk2,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Cosmetic 3 */}
              <div className="img1">

                <img src={mk3} alt="" />

                <p>Price=$460</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Cosmetic Product 3",
                      price: 460,
                      image: mk3,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Cosmetic 4 */}
              <div className="img1">

                <img src={mk5} alt="" />

                <p>Price=$750</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Cosmetic Product 4",
                      price: 750,
                      image: mk5,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Cosmetic 5 */}
              <div className="img1">

                <img src={mk6} alt="" />

                <p>Price=$1000</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Cosmetic Product 5",
                      price: 1000,
                      image: mk6,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>

            </div>
          </div>


          {/* ================= BAGS ================= */}

          <div className="heading4">

            <div className="heading5">
              <h2>Bags Collection</h2>
            </div>

            <div className="imgs">

              <div className="image">


                {/* Bag 1 */}
                <div className="img1">

                  <img src={bg1} alt=""  />

                  <p>Price=$5882</p>

                  <button
                    onClick={() =>
                      addToCart({
                        name: "Women's Bag 1",
                        price: 5882,
                        image: bg1,
                      })
                    }
                  >
                    Add to Cart
                  </button>

                </div>


                {/* Bag 2 */}
                <div className="img1">

                  <img src={bg2} alt="" />

                  <p>Price=$570</p>

                  <button
                    onClick={() =>
                      addToCart({
                        name: "Women's Bag 2",
                        price: 570,
                        image: bg2,
                      })
                    }
                  >
                    Add to Cart
                  </button>

                </div>


                {/* Bag 3 */}
                <div className="img1">

                  <img src={bg3} alt="" />

                  <p>Price=$680</p>

                  <button
                    onClick={() =>
                      addToCart({
                        name: "Women's Bag 3",
                        price: 680,
                        image: bg3,
                      })
                    }
                  >
                    Add to Cart
                  </button>

                </div>


                {/* Bag 4 */}
                <div className="img1">

                  <img
                    src={bg4}
                    alt=""
                   
                  />

                  <p>Price=$470</p>

                  <button
                    onClick={() =>
                      addToCart({
                        name: "Women's Bag 4",
                        price: 470,
                        image: bg4,
                      })
                    }
                  >
                    Add to Cart
                  </button>

                </div>


                {/* Bag 5 */}
                <div className="img1">

                  <img src={bg5} alt="" />

                  <p>Price=$550</p>

                  <button
                    onClick={() =>
                      addToCart({
                        name: "Women's Bag 5",
                        price: 550,
                        image: bg5,
                      })
                    }
                  >
                    Add to Cart
                  </button>

                </div>


                {/* Bag 6 */}
                <div className="img1">

                  <img src={bg6} alt="" />

                  <p>Price=$600</p>

                  <button
                    onClick={() =>
                      addToCart({
                        name: "Women's Bag 6",
                        price: 600,
                        image: bg6,
                      })
                    }
                  >
                    Add to Cart
                  </button>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Itemwommen;


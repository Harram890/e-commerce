
import React from "react";
import "./Itemman.scss";

import mnclo1 from "../assets/mnclo1.jpg";
import mnclo2 from "../assets/mnclo2.webp";
import mnclo3 from "../assets/mnclo3.jpg";
import mnclo4 from "../assets/mnclo4.webp";
import mnclo5 from "../assets/mnclo5.jpg";
import mnclo6 from "../assets/mnclo6.webp";

import watch1 from "../assets/watch1.webp";
import watch2 from "../assets/watch2.jpg";
import watch3 from "../assets/watch3.webp";
import watch4 from "../assets/watch4.jpg";
import watch5 from "../assets/watch5.jpg";
import watch6 from "../assets/watch6.jpg";

import shoe1 from "../assets/shoe1.jpg";
import shoe2 from "../assets/shoe2.webp";
import shoe3 from "../assets/shoe3.jpg";
import shoe4 from "../assets/shoe4.jpg";
import shoe5 from "../assets/shoe5.jpg";

import { useNavigate } from "react-router-dom";

const Itemman = () => {

  const navigate = useNavigate();

  // Add product to cart
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

          <b>
            <hr />
          </b>

          <div className="heading">
            <h1>Men's Collection</h1>
            <p>it's your choice, What u want to buy</p>
          </div>


          {/* ================= DRESSES ================= */}

          <div className="heading1">

            <div className="headr">
              <h2>Dresses Section:-</h2>
            </div>

            <div className="dresses-images">

              {/* Dress 1 */}
              <div className="img">

                <img src={mnclo1} alt="" height="300px" />

                <p>Price=$567</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Men's Dress 1",
                      price: 567,
                      image: mnclo1,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Dress 2 */}
              <div className="img">

                <img src={mnclo2} alt="" height="300px" />

                <p>Price=$680</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Men's Dress 2",
                      price: 680,
                      image: mnclo2,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Dress 3 */}
              <div className="img">

                <img src={mnclo3} alt="" height="300px" />

                <p>Price=$4530</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Men's Dress 3",
                      price: 4530,
                      image: mnclo3,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Dress 4 */}
              <div className="img">

                <img src={mnclo4} alt="" height="300px" />

                <p>Price=$560</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Men's Dress 4",
                      price: 560,
                      image: mnclo4,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Dress 5 */}
              <div className="img">

                <img src={mnclo5} alt="" height="300px" />

                <p>Price=$300</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Men's Dress 5",
                      price: 300,
                      image: mnclo5,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Dress 6 */}
              <div className="img">

                <img src={mnclo6} alt="" height="300px" />

                <p>Price=$280</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Men's Dress 6",
                      price: 280,
                      image: mnclo6,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>

            </div>
          </div>


          {/* ================= WATCHES ================= */}

          <div className="heading2">

            <div className="heading3">
              <h2>Watches Collection</h2>
            </div>

            <div className="imgs">

              {/* Watch 1 */}
              <div className="img1">

                <img src={watch1} alt="" height="300px" />

                <p>Price=$3000</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Men's Watch 1",
                      price: 3000,
                      image: watch1,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Watch 2 */}
              <div className="img1">

                <img src={watch2} alt="" height="300px" />

                <p>Price=$2500</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Men's Watch 2",
                      price: 2500,
                      image: watch2,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Watch 3 */}
              <div className="img1">

                <img src={watch3} alt="" height="300px" />

                <p>Price=$500</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Men's Watch 3",
                      price: 500,
                      image: watch3,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Watch 4 */}
              <div className="img1">

                <img src={watch4} alt="" height="300px" />

                <p>Price=$678</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Men's Watch 4",
                      price: 678,
                      image: watch4,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Watch 5 */}
              <div className="img1">

                <img src={watch5} alt="" height="300px" />

                <p>Price=$920</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Men's Watch 5",
                      price: 920,
                      image: watch5,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Watch 6 */}
              <div className="img1">

                <img
                  src={watch6}
                  alt=""
                  height="300px"
                  width="200px"
                />

                <p>Price=$300</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Men's Watch 6",
                      price: 300,
                      image: watch6,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>

            </div>
          </div>


          {/* ================= SHOES ================= */}

          <div className="heading4">

            <div className="heading5">
              <h2>Shoes Collection</h2>
            </div>

            <div className="imgs">

              <div className="image">

                {/* Shoe 1 */}
                <div className="img1">

                  <img src={shoe1} alt="" height="400px" />

                  <p>Price=$2000</p>

                  <button
                    onClick={() =>
                      addToCart({
                        name: "Men's Shoes 1",
                        price: 2000,
                        image: shoe1,
                      })
                    }
                  >
                    Add to Cart
                  </button>

                </div>


                {/* Shoe 2 */}
                <div className="img1">

                  <img src={shoe2} alt="" height="400px" />

                  <p>Price=$1000</p>

                  <button
                    onClick={() =>
                      addToCart({
                        name: "Men's Shoes 2",
                        price: 1000,
                        image: shoe2,
                      })
                    }
                  >
                    Add to Cart
                  </button>

                </div>


                {/* Shoe 3 */}
                <div className="img1">

                  <img src={shoe3} alt="" height="400px" />

                  <p>Price=$2500</p>

                  <button
                    onClick={() =>
                      addToCart({
                        name: "Men's Shoes 3",
                        price: 2500,
                        image: shoe3,
                      })
                    }
                  >
                    Add to Cart
                  </button>

                </div>


                {/* Shoe 4 */}
                <div className="img1">

                  <img src={shoe4} alt="" height="400px" />

                  <p>Price=$6799</p>

                  <button
                    onClick={() =>
                      addToCart({
                        name: "Men's Shoes 4",
                        price: 6799,
                        image: shoe4,
                      })
                    }
                  >
                    Add to Cart
                  </button>

                </div>


                {/* Shoe 5 */}
                <div className="img1">

                  <img src={shoe5} alt="" height="400px" />

                  <p>Price=$500</p>

                  <button
                    onClick={() =>
                      addToCart({
                        name: "Men's Shoes 5",
                        price: 500,
                        image: shoe5,
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

export default Itemman;


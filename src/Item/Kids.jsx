
import React from "react";
import "./kids.scss";

import ktedd1 from "../assets/ktedd1.jpg";
import ktedd2 from "../assets/ktedd2.jpg";
import kcar1 from "../assets/kcar1.jpg";
import kcar2 from "../assets/kcar2.webp";
import kpop1 from "../assets/kpop1.jpg";
import krob1 from "../assets/krob1.jpg";

import ksh1 from "../assets/ksh1.webp";
import ksh2 from "../assets/ksh2.jpg";
import ksh3 from "../assets/ksh3.webp";
import ksh4 from "../assets/ksh4.jpg";
import ksh5 from "../assets/ksh5.jpg";
import ksh6 from "../assets/ksh6.jpg";

import ks1 from "../assets/ks1.avif";
import ks2 from "../assets/ks2.avif";
import ks3 from "../assets/ks3.webp";
import ks4 from "../assets/ks4.jpg";
import ks5 from "../assets/ks5.jpg";

import { useNavigate } from "react-router-dom";

const Kids = () => {

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

          <b>
            <hr />
          </b>

          <div className="heading">
            <h1>Kids's Collection</h1>
            <p>it's your choice, What u want to buy</p>
          </div>


          {/* ================= TOYS ================= */}

          <div className="heading1">

            <div className="headr">
              <h2>Toy's Section:-</h2>
            </div>

            <div className="dresses-images">


              {/* Toy 1 */}
              <div className="img">

                <img src={ktedd1} alt="" height="400px" />

                <p>Price=$567</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Kids Toy 1",
                      price: 567,
                      image: ktedd1,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Toy 2 */}
              <div className="img">

                <img src={ktedd2} alt="" height="400px" />

                <p>Price=$680</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Kids Toy 2",
                      price: 680,
                      image: ktedd2,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Car 1 */}
              <div className="img">

                <img src={kcar1} alt="" height="400px" />

                <p>Price=$4530</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Kids Car 1",
                      price: 4530,
                      image: kcar1,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Car 2 */}
              <div className="img">

                <img src={kcar2} alt="" height="400px" />

                <p>Price=$560</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Kids Car 2",
                      price: 560,
                      image: kcar2,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Robot */}
              <div className="img">

                <img src={krob1} alt="" height="400px" />

                <p>Price=$300</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Kids Robot",
                      price: 300,
                      image: krob1,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Pop Toy */}
              <div className="img">

                <img src={kpop1} alt="" height="400px" />

                <p>Price=$280</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Kids Pop Toy",
                      price: 280,
                      image: kpop1,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>

            </div>
          </div>


          {/* ================= DRESSES ================= */}

          <div className="heading2">

            <div className="heading3">
              <h2>Dress Collection</h2>
            </div>

            <div className="imgs">


              {/* Dress 1 */}
              <div className="img1">

                <img src={ksh1} alt="" height="300px" />

                <p>Price=$3000</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Kids Dress 1",
                      price: 3000,
                      image: ksh1,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Dress 2 */}
              <div className="img1">

                <img src={ksh2} alt="" height="300px" />

                <p>Price=$2500</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Kids Dress 2",
                      price: 2500,
                      image: ksh2,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Dress 3 */}
              <div className="img1">

                <img src={ksh3} alt="" height="300px" />

                <p>Price=$500</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Kids Dress 3",
                      price: 500,
                      image: ksh3,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Dress 4 */}
              <div className="img1">

                <img src={ksh4} alt="" height="300px" />

                <p>Price=$678</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Kids Dress 4",
                      price: 678,
                      image: ksh4,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Dress 5 */}
              <div className="img1">

                <img src={ksh5} alt="" height="300px" />

                <p>Price=$920</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Kids Dress 5",
                      price: 920,
                      image: ksh5,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* Dress 6 */}
              <div className="img1">

                <img src={ksh6} alt="" height="300px" />

                <p>Price=$300</p>

                <button
                  onClick={() =>
                    addToCart({
                      name: "Kids Dress 6",
                      price: 300,
                      image: ksh6,
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


                {/* Shoes 1 */}
                <div className="img1">

                  <img src={ks1} alt="" height="400px" />

                  <p>Price=$2000</p>

                  <button
                    onClick={() =>
                      addToCart({
                        name: "Kids Shoes 1",
                        price: 2000,
                        image: ks1,
                      })
                    }
                  >
                    Add to Cart
                  </button>

                </div>


                {/* Shoes 2 */}
                <div className="img1">

                  <img src={ks2} alt="" height="400px" />

                  <p>Price=$1000</p>

                  <button
                    onClick={() =>
                      addToCart({
                        name: "Kids Shoes 2",
                        price: 1000,
                        image: ks2,
                      })
                    }
                  >
                    Add to Cart
                  </button>

                </div>


                {/* Shoes 3 */}
                <div className="img1">

                  <img src={ks3} alt="" height="400px" />

                  <p>Price=$2500</p>

                  <button
                    onClick={() =>
                      addToCart({
                        name: "Kids Shoes 3",
                        price: 2500,
                        image: ks3,
                      })
                    }
                  >
                    Add to Cart
                  </button>

                </div>


                {/* Shoes 4 */}
                <div className="img1">

                  <img src={ks4} alt="" height="400px" />

                  <p>Price=$6799</p>

                  <button
                    onClick={() =>
                      addToCart({
                        name: "Kids Shoes 4",
                        price: 6799,
                        image: ks4,
                      })
                    }
                  >
                    Add to Cart
                  </button>

                </div>


                {/* Shoes 5 */}
                <div className="img1">

                  <img src={ks5} alt="" height="400px" />

                  <p>Price=$500</p>

                  <button
                    onClick={() =>
                      addToCart({
                        name: "Kids Shoes 5",
                        price: 500,
                        image: ks5,
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

export default Kids;


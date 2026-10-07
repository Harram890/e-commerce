import React, { useEffect, useState } from "react";
import "./Admin.scss";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("dashboard");

  // ================= PRODUCT DATA =================
  // Ye wahi products hain jo aapki Men/Women/Kids files mein hain
  const allProducts = {
    men: [
      { name: "Men's Dress 1", price: 567, category: "Men", type: "Dress" },
      { name: "Men's Dress 2", price: 680, category: "Men", type: "Dress" },
      { name: "Men's Dress 3", price: 4530, category: "Men", type: "Dress" },
      { name: "Men's Dress 4", price: 560, category: "Men", type: "Dress" },
      { name: "Men's Dress 5", price: 300, category: "Men", type: "Dress" },
      { name: "Men's Dress 6", price: 280, category: "Men", type: "Dress" },
      { name: "Men's Watch 1", price: 3000, category: "Men", type: "Watch" },
      { name: "Men's Watch 2", price: 2500, category: "Men", type: "Watch" },
      { name: "Men's Watch 3", price: 500, category: "Men", type: "Watch" },
      { name: "Men's Watch 4", price: 678, category: "Men", type: "Watch" },
      { name: "Men's Watch 5", price: 920, category: "Men", type: "Watch" },
      { name: "Men's Watch 6", price: 300, category: "Men", type: "Watch" },
      { name: "Men's Shoes 1", price: 2000, category: "Men", type: "Shoes" },
      { name: "Men's Shoes 2", price: 1000, category: "Men", type: "Shoes" },
      { name: "Men's Shoes 3", price: 2500, category: "Men", type: "Shoes" },
      { name: "Men's Shoes 4", price: 6799, category: "Men", type: "Shoes" },
      { name: "Men's Shoes 5", price: 500, category: "Men", type: "Shoes" },
    ],
    women: [
      { name: "Women's Dress 1", price: 5000, category: "Women", type: "Dress" },
      { name: "Women's Dress 2", price: 2500, category: "Women", type: "Dress" },
      { name: "Women's Dress 3", price: 500, category: "Women", type: "Dress" },
      { name: "Women's Dress 4", price: 650, category: "Women", type: "Dress" },
      { name: "Women's Dress 5", price: 599, category: "Women", type: "Dress" },
      { name: "Cosmetic Product 1", price: 5999, category: "Women", type: "Cosmetic" },
      { name: "Cosmetic Product 2", price: 350, category: "Women", type: "Cosmetic" },
      { name: "Cosmetic Product 3", price: 460, category: "Women", type: "Cosmetic" },
      { name: "Cosmetic Product 4", price: 750, category: "Women", type: "Cosmetic" },
      { name: "Cosmetic Product 5", price: 1000, category: "Women", type: "Cosmetic" },
      { name: "Women's Bag 1", price: 5882, category: "Women", type: "Bag" },
      { name: "Women's Bag 2", price: 570, category: "Women", type: "Bag" },
      { name: "Women's Bag 3", price: 680, category: "Women", type: "Bag" },
      { name: "Women's Bag 4", price: 470, category: "Women", type: "Bag" },
      { name: "Women's Bag 5", price: 550, category: "Women", type: "Bag" },
      { name: "Women's Bag 6", price: 600, category: "Women", type: "Bag" },
    ],
    kids: [
      { name: "Kids Toy 1", price: 567, category: "Kids", type: "Toy" },
      { name: "Kids Toy 2", price: 680, category: "Kids", type: "Toy" },
      { name: "Kids Car 1", price: 4530, category: "Kids", type: "Toy" },
      { name: "Kids Car 2", price: 560, category: "Kids", type: "Toy" },
      { name: "Kids Robot", price: 300, category: "Kids", type: "Toy" },
      { name: "Kids Pop Toy", price: 280, category: "Kids", type: "Toy" },
      { name: "Kids Dress 1", price: 3000, category: "Kids", type: "Dress" },
      { name: "Kids Dress 2", price: 2500, category: "Kids", type: "Dress" },
      { name: "Kids Dress 3", price: 500, category: "Kids", type: "Dress" },
      { name: "Kids Dress 4", price: 678, category: "Kids", type: "Dress" },
      { name: "Kids Dress 5", price: 920, category: "Kids", type: "Dress" },
      { name: "Kids Dress 6", price: 300, category: "Kids", type: "Dress" },
      { name: "Kids Shoes 1", price: 2000, category: "Kids", type: "Shoes" },
      { name: "Kids Shoes 2", price: 1000, category: "Kids", type: "Shoes" },
      { name: "Kids Shoes 3", price: 2500, category: "Kids", type: "Shoes" },
      { name: "Kids Shoes 4", price: 6799, category: "Kids", type: "Shoes" },
      { name: "Kids Shoes 5", price: 500, category: "Kids", type: "Shoes" },
    ],
  };

  const menProducts = allProducts.men;
  const womenProducts = allProducts.women;
  const kidsProducts = allProducts.kids;
  const totalProducts =
    menProducts.length + womenProducts.length + kidsProducts.length;

  // ================= LOAD CART + ORDERS =================
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    setCartItems(savedCart);
    setOrders(savedOrders);
  }, []);

  // Agar user cart page se "Place Order" kare to order save hoga
  // Filhal cart ko hi pending order maan rahe hain

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const ordersTotal = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  const grandRevenue = cartTotal + ordersTotal;

  // ================= CLEAR CART (Admin action) =================
  const clearCart = () => {
    if (window.confirm("Kya aap waqai cart clear karna chahte hain?")) {
      localStorage.removeItem("cart");
      setCartItems([]);
    }
  };

  const clearOrders = () => {
    if (window.confirm("Kya aap waqai saare orders delete karna chahte hain?")) {
      localStorage.removeItem("orders");
      setOrders([]);
    }
  };

  return (
    <div className="admin-panel">
      {/* ================= SIDEBAR ================= */}
      <aside className="admin-sidebar">
        <h2>🛍️ Admin Panel</h2>

        <nav>
          <button
            className={activeTab === "dashboard" ? "active" : ""}
            onClick={() => setActiveTab("dashboard")}
          >
            📊 Dashboard
          </button>
          <button
            className={activeTab === "products" ? "active" : ""}
            onClick={() => setActiveTab("products")}
          >
            📦 Products
          </button>
          <button
            className={activeTab === "orders" ? "active" : ""}
            onClick={() => setActiveTab("orders")}
          >
            🛒 Orders
          </button>
        </nav>

        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Store
        </button>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="admin-content">
        {/* ---------- DASHBOARD ---------- */}
        {activeTab === "dashboard" && (
          <>
            <h1>Dashboard</h1>

            <div className="stats-grid">
              <div className="stat-card blue">
                <h3>Total Products</h3>
                <p>{totalProducts}</p>
              </div>

              <div className="stat-card green">
                <h3>Total Orders</h3>
                <p>{cartItems.length + orders.length}</p>
              </div>

              <div className="stat-card orange">
                <h3>Pending (Cart)</h3>
                <p>{cartItems.length}</p>
              </div>

              <div className="stat-card purple">
                <h3>Total Revenue</h3>
                <p>Rs. {grandRevenue}</p>
              </div>
            </div>

            {/* Category breakdown */}
            <h2>Category wise Products</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>👔 Men</h3>
                <p>{menProducts.length} products</p>
              </div>
              <div className="stat-card">
                <h3>👗 Women</h3>
                <p>{womenProducts.length} products</p>
              </div>
              <div className="stat-card">
                <h3>🧸 Kids</h3>
                <p>{kidsProducts.length} products</p>
              </div>
            </div>

            {/* Recent Activity */}
            <h2>Recent Cart Activity</h2>
            {cartItems.length === 0 ? (
              <p className="empty-msg">Filhal koi activity nahi hai.</p>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>Rs. {item.price}</td>
                      <td>{item.quantity}</td>
                      <td>Rs. {item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}

        {/* ---------- PRODUCTS ---------- */}
        {activeTab === "products" && (
          <>
            <h1>All Products ({totalProducts})</h1>

            <h2>👔 Men ({menProducts.length})</h2>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {menProducts.map((p, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{p.name}</td>
                    <td>{p.type}</td>
                    <td>Rs. {p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2>👗 Women ({womenProducts.length})</h2>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {womenProducts.map((p, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{p.name}</td>
                    <td>{p.type}</td>
                    <td>Rs. {p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2>🧸 Kids ({kidsProducts.length})</h2>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {kidsProducts.map((p, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{p.name}</td>
                    <td>{p.type}</td>
                    <td>Rs. {p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {/* ---------- ORDERS ---------- */}
        {activeTab === "orders" && (
          <>
            <h1>Orders</h1>

            <h2>🛒 Current Cart (Pending Orders)</h2>
            {cartItems.length === 0 ? (
              <p className="empty-msg">Cart empty hai — koi pending order nahi.</p>
            ) : (
              <>
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{item.name}</td>
                        <td>Rs. {item.price}</td>
                        <td>{item.quantity}</td>
                        <td>Rs. {item.price * item.quantity}</td>
                      </tr>
                    ))}
                    <tr className="total-row">
                      <td colSpan="4"><b>Grand Total</b></td>
                      <td><b>Rs. {cartTotal}</b></td>
                    </tr>
                  </tbody>
                </table>

                <button className="danger-btn" onClick={clearCart}>
                  🗑️ Clear Cart
                </button>
              </>
            )}

            <h2>✅ Completed Orders</h2>
            {orders.length === 0 ? (
              <p className="empty-msg">Filhal koi completed order nahi.</p>
            ) : (
              <>
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Items</th>
                      <th>Total</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, i) => (
                      <tr key={i}>
                        <td>{order.id}</td>
                        <td>{order.items.length} items</td>
                        <td>Rs. {order.total}</td>
                        <td>{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <button className="danger-btn" onClick={clearOrders}>
                  🗑️ Clear Orders
                </button>
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default Admin;
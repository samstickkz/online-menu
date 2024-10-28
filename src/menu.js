import React, { useState } from "react";
import "./menu.css";

const menuItems = {
  food: [
    { id: 1, name: "Grilled Chicken", price: 15 },
    { id: 2, name: "Pasta Alfredo", price: 12 },
    { id: 3, name: "Caesar Salad", price: 8 },
    { id: 7, name: "Edikang Ikong", price: 8000 },
    { id: 8, name: "Ofe Owerri", price: 8000 },
    { id: 9, name: "Oha Soup", price: 7000 },
    { id: 10, name: "Egusi Soup", price: 7000 },
    { id: 11, name: "Afang Soup", price: 8000 },
    { id: 12, name: "Okro Soup", price: 7000 },
    { id: 13, name: "White Soup", price: 8000 },
    { id: 14, name: "Bitterleaf Soup", price: 7000 },
    { id: 15, name: "Ogbono Soup", price: 7000 },
    { id: 16, name: "Atama Soup", price: 8000 },
    { id: 17, name: "Fisherman Soup", price: 15000 },
    { id: 18, name: "Fried Rice with 1 Chicken", price: 6000 },
    { id: 19, name: "Chinese Rice", price: 6000 },
    { id: 20, name: "Special Fried Rice", price: 10000 },
    { id: 21, name: "MTN Rice", price: 5000 },
    { id: 22, name: "White Rice", price: 2000 },
  ],
  protein: [
    { id: 23, name: "Fried Fish", price: 3500 },
    { id: 24, name: "Goat Meat", price: 1000 },
    { id: 25, name: "Chicken", price: 3500 },
    { id: 26, name: "Boiled Egg", price: 1000 },
    { id: 27, name: "Fried Egg (2)", price: 2000 },
    { id: 28, name: "Beef", price: 1000 },
    { id: 29, name: "Barbecue Chicken", price: 20000 },
    { id: 30, name: "Turkey (1)", price: 7000 },
    { id: 31, name: "Kpomo Sauce", price: 4000 },
    { id: 32, name: "Asun", price: 3500 },
    { id: 33, name: "Pepper Gizzard", price: 3500 },
    { id: 34, name: "Chicken Kebab", price: 4000 },
    { id: 35, name: "Beef Kebab", price: 4000 },
    { id: 36, name: "Whole Chicken", price: 35000 },
    { id: 37, name: "Barbecue Fish", price: 15000 },
  ],
  localDish: [
    { id: 38, name: "Abacha", price: 3000 },
    { id: 39, name: "Nkwobi", price: 6000 },
    { id: 40, name: "Isiewu", price: 6000 },
    { id: 41, name: "Yam Porridge", price: 4000 },
    { id: 42, name: "Plantain Porridge", price: 4000 },
    { id: 43, name: "Ekpang-nkukwo", price: 7000 },
    { id: 44, name: "Potato Porridge", price: 4000 },
  ],
  drinks: [
    { id: 4, name: "Coca-Cola", price: 3 },
    { id: 5, name: "Fresh Orange Juice", price: 5 },
    { id: 6, name: "Lemonade", price: 4 },
    { id: 45, name: "Fanta", price: 650 },
    { id: 46, name: "Coke", price: 650 },
    { id: 47, name: "Sprite", price: 650 },
    { id: 48, name: "Malt", price: 1200 },
    { id: 49, name: "Maltina", price: 1000 },
  ],
  juice: [
    { id: 50, name: "Watermelon Juice", price: 2000 },
    { id: 51, name: "Apple Juice", price: 2000 },
    { id: 52, name: "Orange Juice", price: 2000 },
    { id: 53, name: "Pineapple Juice", price: 2000 },
    { id: 54, name: "Carrot Juice", price: 2000 },
    { id: 55, name: "Cucumber Juice", price: 2000 },
    { id: 56, name: "Banana Smoothies", price: 3000 },
  ],
};

const Menu = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const addItem = (item) => {
    const itemIndex = selectedItems.findIndex((i) => i.id === item.id);
    let updatedItems;

    if (itemIndex > -1) {
      updatedItems = [...selectedItems];
      updatedItems[itemIndex].quantity += 1;
    } else {
      updatedItems = [...selectedItems, { ...item, quantity: 1 }];
    }

    setSelectedItems(updatedItems);
    setTotal(total + item.price);
  };

  const removeItem = (item) => {
    const updatedItems = selectedItems
      .map((i) => (i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i))
      .filter((i) => i.quantity > 0);

    setSelectedItems(updatedItems);
    setTotal(total - item.price);
  };

  const handleOrder = () => {
    setShowPaymentModal(true);
  };

  const closeModal = () => {
    setShowPaymentModal(false);
  };

  return (
    <div className="menu-container">
      <h1>NPJ Menu</h1>

      <div className={`menu-section ${showPaymentModal ? "blur" : ""}`}>
        <h2>Food</h2>
        <ul>
          {menuItems.food.map((item) => (
            <li key={item.id} className="menu-item">
              <span>
                {item.name} - ₦{item.price}
              </span>
              <button onClick={() => addItem(item)}>Add</button>
            </li>
          ))}
        </ul>
      </div>

      <div className={`menu-section ${showPaymentModal ? "blur" : ""}`}>
        <h2>Protein</h2>
        <ul>
          {menuItems.protein.map((item) => (
            <li key={item.id} className="menu-item">
              <span>
                {item.name} - ₦{item.price}
              </span>
              <button onClick={() => addItem(item)}>Add</button>
            </li>
          ))}
        </ul>
      </div>

      <div className={`menu-section ${showPaymentModal ? "blur" : ""}`}>
        <h2>Local Dish</h2>
        <ul>
          {menuItems.localDish.map((item) => (
            <li key={item.id} className="menu-item">
              <span>
                {item.name} - ₦{item.price}
              </span>
              <button onClick={() => addItem(item)}>Add</button>
            </li>
          ))}
        </ul>
      </div>

      <div className={`menu-section ${showPaymentModal ? "blur" : ""}`}>
        <h2>Drinks</h2>
        <ul>
          {menuItems.drinks.map((item) => (
            <li key={item.id} className="menu-item">
              <span>
                {item.name} - ₦{item.price}
              </span>
              <button onClick={() => addItem(item)}>Add</button>
            </li>
          ))}
        </ul>
      </div>

      <div className={`menu-section ${showPaymentModal ? "blur" : ""}`}>
        <h2>Juice</h2>
        <ul>
          {menuItems.juice.map((item) => (
            <li key={item.id} className="menu-item">
              <span>
                {item.name} - ₦{item.price}
              </span>
              <button onClick={() => addItem(item)}>Add</button>
            </li>
          ))}
        </ul>
      </div>

      <div className={`order-summary ${showPaymentModal ? "blur" : ""}`}>
        <h2>Your Order</h2>
        <ul>
          {selectedItems.map((item) => (
            <li key={item.id}>
              {item.name} (x{item.quantity}) - ₦{item.price * item.quantity}
              <button onClick={() => removeItem(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <h3>Total: ₦{total}</h3>
        <button onClick={handleOrder}>Proceed to Payment</button>
      </div>

      {showPaymentModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Payment Information</h2>
            <p>
              <strong>Bank:</strong> FCMB
            </p>
            <p>
              <strong>Account Name:</strong> NPJ LUXURY PROPERTIES LTD
            </p>
            <p>
              <strong>Account Number:</strong> 2004749140
            </p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Menu;

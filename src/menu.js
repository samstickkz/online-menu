import React, { useState } from "react";
import "./menu.css";

const menuItems = {
  food: [
    { id: 1, name: "Grilled Chicken", price: 15 },
    { id: 2, name: "Pasta Alfredo", price: 12 },
    { id: 3, name: "Caesar Salad", price: 8 },
  ],
  drinks: [
    { id: 4, name: "Coca-Cola", price: 3 },
    { id: 5, name: "Fresh Orange Juice", price: 5 },
    { id: 6, name: "Lemonade", price: 4 },
  ],
};

const Menu = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (itemId, quantity) => {
    setQuantities({
      ...quantities,
      [itemId]: quantity,
    });
  };

  const addItem = (item) => {
    const quantity = quantities[item.id] ? parseInt(quantities[item.id]) : 1;
    const itemWithQuantity = { ...item, quantity };
    setSelectedItems([...selectedItems, itemWithQuantity]);
    setTotal(total + item.price * itemWithQuantity.quantity);
  };

  const removeItem = (item) => {
    const updatedItems = selectedItems.filter((i) => i.id !== item.id);
    const removedItem = selectedItems.find((i) => i.id === item.id);
    setSelectedItems(updatedItems);
    setTotal(total - removedItem.price * removedItem.quantity);
  };

  const handleOrder = () => {
    setShowPaymentModal(true);
  };

  const closeModal = () => {
    setShowPaymentModal(false);
  };

  return (
    <div className="menu-container">
      <h1>Online Menu</h1>

      <div className={`menu-section ${showPaymentModal ? "blur" : ""}`}>
        <h2>Food</h2>
        <ul>
          {menuItems.food.map((item) => (
            <li key={item.id} className="menu-item">
              <span>
                {item.name} - ₦{item.price}
              </span>
              <div className="quantity-container">
                <input
                  type="number"
                  min="1"
                  value={quantities[item.id] || 1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                  className="quantity-input"
                />
                <button onClick={() => addItem(item)}>Add</button>
              </div>
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
              <div className="quantity-container">
                <input
                  type="number"
                  min="1"
                  value={quantities[item.id] || 1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                  className="quantity-input"
                />
                <button onClick={() => addItem(item)}>Add</button>
              </div>
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
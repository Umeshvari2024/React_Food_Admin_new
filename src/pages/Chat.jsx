import { useState } from "react";

function Chat() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      user: "FoodPro AI",
      text: "👋 Hello! Welcome to FoodPro. How can I help you today?",
    },
  ]);

  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("pizza")) {
      return "🍕 Pizza is available for ₹299.";
    }

    if (text.includes("burger")) {
      return "🍔 Burger is available for ₹199.";
    }

    if (text.includes("biryani")) {
      return "🍛 Biryani is available for ₹349.";
    }

    if (text.includes("momos")) {
      return "🥟 Momos are available for ₹149.";
    }

    if (text.includes("pasta")) {
      return "🍝 Pasta is available for ₹249.";
    }

    if (text.includes("order")) {
      return `📦 Order Process:

1️⃣ Select Food Item
2️⃣ Click Add To Cart
3️⃣ Open Cart
4️⃣ Proceed To Checkout
5️⃣ Enter Delivery Details
6️⃣ Make Payment
7️⃣ Order Confirmed 🎉
8️⃣ Food Delivered 🚚`;
    }

    if (text.includes("payment")) {
      return "💳 We support UPI, Credit Card, Debit Card and Net Banking.";
    }

    if (text.includes("delivery")) {
      return "🚚 Delivery usually takes 30-45 minutes.";
    }

    if (text.includes("track")) {
      return "📍 Your order is being prepared and will be delivered soon.";
    }

    if (text.includes("cancel")) {
      return "❌ Order can be cancelled before restaurant preparation starts.";
    }

    if (text.includes("cart")) {
      return "🛒 You can view all selected items in the Cart section.";
    }

    if (
      text.includes("hello") ||
      text.includes("hi")
    ) {
      return "👋 Hello! Welcome to FoodPro.";
    }

    if (text.includes("thank")) {
      return "😊 You're welcome. Have a great day!";
    }

    return "🤖 Please ask about food, orders, payment or delivery.";
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      user: "You",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    const userText = message;

    setMessage("");

    setTimeout(() => {
      const botMessage = {
        user: "FoodPro AI",
        text: getBotReply(userText),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  return (
    <div className="chat-container">
      <div className="chat-card">

        {/* Header */}
        <div className="chat-header">
          <div className="d-flex align-items-center">
            <div className="bot-icon">
              🤖
            </div>

            <div>
              <h6 className="mb-0">
                FoodPro Assistant
              </h6>

              <small className="text-success">
                ● Online
              </small>
            </div>
          </div>
        </div>

        {/* Quick Buttons */}
        <div className="p-2 border-bottom">
          <button
            className="btn btn-sm btn-outline-primary m-1"
            onClick={() => setMessage("Pizza")}
          >
            🍕 Pizza
          </button>

          <button
            className="btn btn-sm btn-outline-primary m-1"
            onClick={() => setMessage("Order")}
          >
            📦 Order Steps
          </button>

          <button
            className="btn btn-sm btn-outline-primary m-1"
            onClick={() => setMessage("Payment")}
          >
            💳 Payment
          </button>

          <button
            className="btn btn-sm btn-outline-primary m-1"
            onClick={() => setMessage("Delivery")}
          >
            🚚 Delivery
          </button>
        </div>

        {/* Messages */}
        <div className="chat-body">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`d-flex mb-3 ${
                msg.user === "You"
                  ? "justify-content-end"
                  : "justify-content-start"
              }`}
            >
              <div
                className={
                  msg.user === "You"
                    ? "user-msg"
                    : "bot-msg"
                }
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="chat-input-area">
          <input
            type="text"
            className="chat-input"
            placeholder="Type a message..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={(e) =>
              e.key === "Enter" &&
              sendMessage()
            }
          />

          <button
            className="send-btn"
            onClick={sendMessage}
          >
            ➤
          </button>
        </div>

      </div>
    </div>
  );
}

export default Chat;
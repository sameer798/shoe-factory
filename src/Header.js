import React from "react";

function Header(props) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <div>
        <h1 style={{ margin: 0, fontSize: "24px" }}>Shoes Factory</h1>
      </div>

      <button
      onClick={props.showCart}
        style={{
          backgroundColor: "#ff6347",
          color: "white",
          border: "none",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#ff4500")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6347")}
      >
        <span style={{ marginRight: "10px" }}>Your Cart-</span>
        <span style={{ fontWeight: "bold" }}>{3}</span>
      </button>
    </header>
  );
}

export default Header;

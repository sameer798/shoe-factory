import React, { useContext } from 'react';
import Modal from './Modal';
import ShoeContext from './store/shoe-context';

const Cart = (props) => {
    const ctx = useContext(ShoeContext);

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px',
    };

    const headerStyle = {
        backgroundColor: '#f4f4f4',
        fontWeight: 'bold',
        borderBottom: '2px solid #ddd',
        padding: '10px',
    };

    const rowStyle = {
        borderBottom: '1px solid #ddd',
    };

    const cellStyle = {
        padding: '10px',
        textAlign: 'left',
    };

    const button = {
      display : "flex",
      justifyContent : "end",
    }

    const cartItem = (
        <table style={tableStyle}>
            <thead>
                <tr style={headerStyle}>
                    <th style={cellStyle}>Item Name</th>
                    <th style={cellStyle}>Large Size (L)</th>
                    <th style={cellStyle}>Medium Size (M)</th>
                    <th style={cellStyle}>Small Size (S)</th>
                    <th style={cellStyle}>Price</th>
                </tr>
            </thead>
            <tbody>
                {ctx.cartItems.map((item) => (
                    <tr key={item.id} style={rowStyle}>
                        <td style={cellStyle}>{item.name}</td>
                        <td style={cellStyle}>{`L-${item.qL}`}</td>
                        <td style={cellStyle}>{`M-${item.qM}`}</td>
                        <td style={cellStyle}>{`S-${item.qS}`}</td>
                        <td style={cellStyle}>{item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <Modal onClose={props.hideCart}>
            <div>
                {cartItem}
                <h3>Total Amount - {ctx.totalAmount}</h3>
                <div style={button}>
                <button onClick={props.hideCart}>Cancel</button>
                <button>Order</button>
                </div>
            </div>
        </Modal>
    );
};

export default Cart;

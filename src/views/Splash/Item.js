import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="coupon-item border-top" key={item.id}>
      <div>
        <p className="coupon-title ">{item.title}</p>
        <span className="coupon-date">{item.date}</span>
      </div>
      <div className="text-align">
        <p className="coupon-title coupon-details">{item.points}</p>
        <span className="coupon-date">{item.issuance}</span>
      </div>
    </div>
  );
};

export default Item;

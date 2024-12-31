import React from "react";
import { Link } from "react-router-dom";


export const AffiliateLinks = ({ item }) => {
  return (
    item.length > 0 && (
      <div className="top5-prods">
        <div className="top5-prods__items">
          {item.map((link) => (
            <Link
              key={link.id}
              to={link.action_url}
              className="top5-prods__item nilink"
            >
              <div
                className="top5-prods__item__icon-container"
                style={{
                  backgroundImage:
                    'url("https://images.top10.com/f_auto,q_auto/v1/production/products/uploads/photo/bluehost.20181008114355.png")',
                }}
              >
                <div
                  className="top5-prods__item__icon"
                  style={{
                    backgroundImage:
                      'url("https://images.top10.com/f_auto,q_auto/v1/production/products/uploads/photo/bluehost.20181008114355.png")',
                  }}
                />
              </div>
              <div className="top5-prods__item__name">{link.title}</div>
              <span className="top5-prods__item__link">
                <i class="top5-prods__item__link__arrow fa-solid fa-chevron-right"></i>
              </span>
            </Link>
          ))}
        </div>
      </div>
    )
  );
};

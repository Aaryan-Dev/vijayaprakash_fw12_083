import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div id="footer">
      <div id="social_media">
        <div id="apps">
          <p>
            <strong>Follow us</strong>
          </p>
          <img src="https://i.ibb.co/j3185gs/Screenshot-85.png" alt="" />
          <img src="https://i.ibb.co/Z1z6PqX/Screenshot-86.png" alt="" />
          <img src="https://i.ibb.co/VDGXnVq/Screenshot-87.png" alt="" />
          <img src="https://i.ibb.co/197Q6DY/Screenshot-88.png" alt="" />
          <img
            src="https://i.ibb.co/Ct7nzg3/pinterest-social-icons-png-14.png"
            alt=""
          />
        </div>

        <div id="mobile">
          <p>
            <strong>
              <span style={{ color: "red" }}>Shopp.my</span> Mobile
            </strong>
          </p>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM41UDKF9JzhCsASRoE1zyKp1_LwkGEM6RWQ&usqp=CAU"
              alt=""
              id="android"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuEMPq9cJTk5hyH8fSBF8rgt2X7LuWxL8YQ&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
      <div id="info">
        <div id="sub_div">
          <h4>Company Info</h4>
          <p>
            About <span style={{ color: "red" }}>Shopp.my</span>
          </p>
          <p>Site Map</p>
          <p>Legal Window</p>
          <p>Forum</p>
          <p>Blog</p>
        </div>
        <div id="sub_div">
          <h4>Payment & Shipping</h4>
          <p>How to pay</p>
          <p>Shipping FAQ</p>
          <p>Ordering FAQ</p>
        </div>
        <div id="sub_div">
          <h4>Policies & Service</h4>
          <p>Terms & Conditions</p>
          <p>Support FAQ</p>
          <p>Privacy Policy</p>
          <p>Reseller Ratings</p>
          <p>Second-Hand Rules</p>
          <p>Intellectual Property Rights</p>
        </div>
        <div id="sub_div">
          <h4>Partner Program</h4>
          <p>Get it Free</p>
          <p>Affiliate Program</p>
          <p>Wholesale Program</p>
          <p>Dropship Program</p>
          <p>Super User Program</p>
          <p>Students Exclusive</p>
          <p>See All</p>
        </div>
        <div id="subscribe">
          <h4>Subscribe To Our Newsletter</h4>
          <p>
            <input
              type="text"
              placeholder="Enter E-mail to get Rs.150 cash coupon"
              className="coupon"
            />
          </p>
          <br />
          <p id="text">
            You will receive our latest updates, news, and promotions from{" "}
            <span style={{ color: "red", fontWeight: 600 }}>Shopp.my</span>.
          </p>
          <br />
          <p>
            <button className="sub">Subscribe</button> &nbsp;
            <span>
              <a href="#" style={{ textDecoration: "none" }}>
                Privacy Policies
              </a>
            </span>
          </p>
        </div>
      </div>
      <div>
        {/* <img src="https://i.ibb.co/gvvLwx5/Screenshot-90.png" alt=""> */}
      </div>
      <div id="copyright">
        <p>
          Copyright © 2004 - 2022{" "}
          <span style={{ color: "red", fontWeight: 600 }}>Shopp.my</span> All
          Rights Reserved. (Build: 2305)
        </p>
      </div>
    </div>
  );
};

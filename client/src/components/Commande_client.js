import React, { useEffect, useRef, useState } from "react";
import "./Commande_client.css";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useLocation, useNavigationType } from "react-router-dom";
import BlogCard from "../cards/BlogCard";
import BlogNewsCard from "../cards/BlogNewsCard";
import TeamCard from "../cards/TeamCard";

function Commande_client({ setnav, setpp, ping, setPing }) {
  const isAuth = localStorage.getItem("token");
  const user = useSelector((state) => state?.user?.user);
  const userr = useSelector((state) => state?.user?.users);
  var num = 0;
  var totalPrice = 0;
  //   const [activeSlide, setActiveSlide] = useState(0);
  //   const [showprice, setshowprice] = useState(true);
  //   const [showtype, setshowtype] = useState(true);
  const commande_Admin = useSelector(
    (state) => state?.commandeAdmin?.commande_Admin
  );
  console.log("commande_Admin", commande_Admin);
  useEffect(() => {
    setnav("");
    setpp("");
  }, []);
  const location = useLocation();
  const navType = useNavigationType();
  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="commandeClient">
      <div className="soucommandeClient1">
        {/* <img src="cov.jpg" /> */}
        <img src="https://images.unsplash.com/photo-1432249339392-2f754cb22105?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className="trablack">
          <div className="blog-soustiltle">
            <h1>Commande</h1>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg>{" "}
              / Commande client
            </p>
          </div>
        </div>
      </div>
      <button onClick={() => handlePrint()}>Print</button>
      {commande_Admin
        ?.filter((el) => el?.user_id === user?._id)
        .slice(-1) // Get only the last element
        .map((el) => (
          <div className="imprimer-container" id="printableContent">
            <div className="imprHeader">
              <div className="blackcg-imprHeader"></div>
              <div className="imprm-logo">
                <img src="sofa.png"></img>
                <div className="imp-logo-title">
                  <span className="imp-p1">MOBEL</span>
                  <span className="imp2-p2">FURNITURE FACTORY</span>
                </div>
              </div>
            </div>
            {userr
              ?.filter((ob) => ob._id.toLowerCase().includes(el.user_id))
              .map((ob) => (
                <>
                  <div className="impr-info-paiment">
                    <div className="impr-info-div">
                      <h3>INVOICE TO</h3>
                      <h2>
                        {ob.name} {ob.Lastname}
                      </h2>
                      {/* <p>Managing Directer</p> */}
                      <div className="impr-p-details">
                        <p>Phone:+216 {el.phone}</p>
                        <p>Email:{ob.email} </p>
                        <p>Address: {el.address}</p>
                      </div>
                    </div>

                    <div className="impr-info-div">
                      <h3>Paiment Method</h3>
                      {/* <p>Managing Directer</p> */}
                      <div className="impr-p-details">
                        <p>Account no: +123 4568 777</p>
                        <p>Account Name: {ob.name} {ob.Lastname}</p>
                        <p>Branche Name: XYZ</p>
                      </div>
                    </div>
                  </div>
                </>
              ))}

            <div className="impr-table-container">
              <div className="impr-table-details">
                <div className="imp-table-title">
                  <div className="first-title">
                    <h5>NO</h5>
                    <h5 className="imp-item-name">ITEM DESCRIPTION</h5>
                    <h5>PRICE</h5>
                    <h5>QTY</h5>
                    <h5>TOTALE</h5>
                  </div>
                </div>

                {el.products?.map((product) => (
                  <div
                    className={
                      num % 2 == 0
                        ? "imp-table-title-list-white"
                        : "imp-table-title-list-gray"
                    }
                  >
                    <div className="first-title">
                      <h5>{(num += 1)}</h5>
                      <h5 className="imp-item-name">{product.product_name}</h5>
                      <h5>{product.price} Dt</h5>
                      <h5>{product.qt}</h5>
                      <h5>{product.price * product.qt}</h5>
                      <h6 style={{ display: "none" }}>
                        {(totalPrice += product.price * product.qt)}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="impt-terms-condition">
              <div className="impt-terms-condition-content">
                <h3>Terms & Conditions:</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p> Sed rem quas eos qui, blanditiis deserunt praesentium</p>
                <div className="thank-you-imp">
                  <h3>Thank you for ur busniess with us</h3>
                </div>
              </div>
              <div className="imp-totale-btn">
                <span>Totale :</span>
                <span>{totalPrice} dt</span>
              </div>
            </div>
          </div>
        ))}
      {/* <div className="imprimerCommande">
      {commande_Admin
  ?.filter((el) => el?.user_id === user?._id)
  .slice(-1) // Get only the last element
  .map((el) => (
    <div style={{ border: "1px solid black", marginTop: "20px" }}>
      <p>{el.user_id}</p>
      <p>{el.address}</p>
      <p>{el.phone}</p>

      {el.products?.map((ob) => (
        <div style={{ backgroundColor: "red" }} key={ob.product_id}>
          <p>{ob.product_name}</p>
          <p>{ob.product_id}</p>
          <p>{ob.qt}</p>
          <p>{ob.price}</p>
        </div>
      ))}
      <p></p>
    </div>
  ))}

      </div> */}
      <Footer />
    </div>
  );
}

export default Commande_client;

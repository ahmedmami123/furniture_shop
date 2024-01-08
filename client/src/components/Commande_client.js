import React, { useEffect, useState } from "react";
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
      <div className="imprimerCommande">
        {commande_Admin?.filter((el) => el?.user_id === user?._id)
          .map((el) => (
            <div style={{ border: "1px solid black", marginTop: "20px" }}>
              <p>{el.user_id}</p>
              <p>{el.address}</p>
              <p>{el.phone}</p>

              {el.products?.map((ob) => (
                <div style={{ backgroundColor: "red" }}>
                  <p>{ob.product_name}</p>
                  <p>{ob.product_id}</p>
                  <p>{ob.qt}</p>
                  <p>{ob.price}</p>
                </div>
              ))}
              <p></p>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Commande_client;

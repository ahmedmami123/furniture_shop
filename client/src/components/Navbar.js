import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import {
  getusernotification,
  updateusernoti,
} from "../redux/UserNotificationSlice/UserNotificationSlice";
import onClickOutside from "react-onclickoutside";

import { logout } from "../redux/userSlice/userSlice";
import Favcard from "./Favcard";

import "./Navbar.css";
import ShopCard from "./ShopCard";
import { addcommande_Admin } from "../redux/commandadminSlice/CommandeAdminSlice";

function Navbar({ navStyle, pp, navbardash, ping, setPing }) {
  const [show0, setShow0] = useState(false);
  const [show, setShow] = useState(false);
  const [navpos, setNavpos] = useState(false);
  const [showfav, setShowfav] = useState(false);
  const [showshop, setShowshop] = useState(false);
  const user = useSelector((state) => state?.user?.user);
const [prodTab, setProdTab] = useState(
  {
      product_id:"hghhh",
      product_name:"fff",
      qt:"",
      price:""   
  }
)
//admin commande
  const [commandeAdmin, setCommandeAdmin] = useState({
    user_id:user?._id,
    products:[
      prodTab
    ]
  })
console.log(commandeAdmin,"helloooo")

  const notif = useSelector(
    (state) => state?.usernotification?.Usernotifications
  );
  const shop = useSelector((state) => state?.shop?.shopp);

  useEffect(() => {
    dispatch(getusernotification());
  }, [ping]);

  const changePos = () => {
    if (window.scrollY >= 90) {
      setNavpos(true);
    } else {
      setNavpos(false);
    }
  };
  window.addEventListener("scroll", changePos);
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let menuRef = useRef();

  const [showhome, setShowhome] = useState(false);
  const [showabout, setShowabout] = useState(false);
  const [showcontact, setShowcontact] = useState(false);
  const [showidea, setShowidea] = useState(false);

  var b = 0;
  for (let i = 0; i < notif?.length; i++) {
    if (notif[i]?.validat == true) {
      if (notif[i]?.user_id === user?._id) {
        b += 1;
      }
    }
  }
  var s = 0;
  const sum = (TabRes) => {
    for (let i = 0; i < TabRes?.length; i++) {
      var shopcard = TabRes[i].shoping.findIndex((el) => el === user?._id);
      if (shopcard >= 0) {
        s = parseInt(TabRes[i]?.Price) * (TabRes[i]?.shoping).length + s;
      }
      console.log(s);
    }
    return s;
  };

  return (
    <div>
      {showfav || showshop ? (
        <div
          className="black"
          onClick={() => {
            setShowfav(false);
            setShowshop(false);
          }}
        ></div>
      ) : null}

      <div
        className={
          navpos ? `${navbardash} nav-bar1 nav-bar2` : `${navStyle} nav-bar1`
        }
      >
        <div className={showfav ? "fav0" : "fav"}>
          <div className="fav1">
            {shop?.map((el, i) => (
              <Favcard el={el} setPing={setPing} ping={ping} />
            ))}
          </div>
        </div>

        <div className={showshop ? "shopcard0" : "shopcard"}>
          <div className="shopcard1">
            {shop?.map((el, i) => (
              <ShopCard el={el} setPing={setPing} ping={ping} s={s} setCommandeAdmin={setCommandeAdmin} commandeAdmin={commandeAdmin} />
            ))}
          </div>
          <div className="shopcard2">
            <div className="d1">
              <span>Total :</span>
              <span>$ {sum(shop)}</span>
            </div>
            <div className="d2">
              <button onClick={()=>{
                dispatch(
                  addcommande_Admin({
                    commandeAdmin
                  })
                )
              }}>Buy now</button>
            </div>
          </div>
        </div>

        <section>
          <div className="sous-nav">
            {" "}
            <img className="logo" src="sofa.png" width="38px"></img>
            <main>
              <p className="pp1">MOBEL</p>
              <p className="p2">FURNITURE FACTORY</p>
            </main>
          </div>
          <div className="sous-nav2">
            <Link to="/">
              <div
                className={showhome ? "active" : ""}
                onClick={() => {
                  setShowhome(true);
                  setShowabout(false);
                  setShowcontact(false);
                  setShowidea(false);
                }}
              >
                <p className={navpos ? `${pp} p p1` : `${pp} p`}>Home</p>
              </div>
            </Link>
            <Link to="/about">
              <div
                className={showhome ? "active" : ""}
                onClick={() => {
                  setShowhome(true);
                  setShowabout(false);
                  setShowcontact(false);
                  setShowidea(false);
                }}
              >
                <p className={navpos ? `${pp} p p1` : `${pp} p`}>About</p>
              </div>
            </Link>
            <Link to="/blog">
              <div
                className={showabout ? "active" : ""}
                onClick={() => {
                  setShowhome(false);
                  setShowabout(true);
                  setShowcontact(false);
                  setShowidea(false);
                }}
              >
                <p className={navpos ? `${pp} p p1` : `${pp} p`}>Blog</p>
              </div>
            </Link>
            <Link to="/contact">
              {" "}
              <div
                className={showcontact ? "active" : ""}
                onClick={() => {
                  setShowhome(false);
                  setShowabout(false);
                  setShowcontact(true);
                  setShowidea(false);
                }}
              >
                <p className={navpos ? `${pp} p p1` : `${pp} p`}>Contact</p>
              </div>
            </Link>
            <Link to="/shop">
              <div
                className={showidea ? "active" : ""}
                onClick={() => {
                  setShowhome(false);
                  setShowabout(false);
                  setShowcontact(false);
                  setShowidea(true);
                }}
              >
                {" "}
                <p className={navpos ? `${pp} p p1` : `${pp}  p`}>Shop</p>
              </div>
            </Link>
          </div>

          <div className="sous-nav">
            {" "}
            <div className="user-img">
              {isAuth ? (
                <div className="svg">
                  {isAuth ? (
                    <div
                      className="notnotif"
                      onClick={() =>
                        setTimeout(() => {
                          notif
                            .filter((el) => el.user_id === user?._id)
                            .map((el) =>
                              dispatch(updateusernoti({ id: el._id }))
                            );

                          setPing(!ping);
                        }, 10000)
                      }
                    >
                      {b > 0 ? <div className="div"></div> : null}
                      <details class="dropdown1">
                        <summary role="button">
                          <svg
                            className="svgg"
                            style={{ marginRight: "20px" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="#ebaf0c"
                            class="bi bi-bell-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                          </svg>
                        </summary>
                        <ul>
                          {notif
                            ?.filter((el) => el.user_id === user?._id)
                            .map((el) => (
                              <li className={el.validat ? "li li1" : "li"}>
                                {el.name} {el.name_prj}
                                {el.description}
                              </li>
                            ))
                            .reverse()}
                        </ul>
                      </details>
                      {/* 
 <svg style={{marginRight:"20px"}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
          </svg> */}
                    </div>
                  ) : null}
                </div>
              ) : null}

              {!isAuth ? (
                <Link to="/login">
                  <div className="svg">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="#ebaf0c"
                      class="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                  </div>
                </Link>
              ) : null}

              <div className="svg1">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#ebaf0c"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              {isAuth ? (
                <div
                  className="svg2"
                  onClick={() => {
                    setShowfav(!showfav);
                    setShowshop(false);
                  }}
                >
                  {" "}
                  {showfav ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="#ebaf0c"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="#ebaf0c"
                      class="bi bi-suit-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                    </svg>
                  )}
                </div>
              ) : null}
              {isAuth ? (
                <div className="svg3">
                  {" "}
                  {showshop ? (
                    <svg
                      onClick={() => {
                        setShowshop(!showshop);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="#ebaf0c"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => {
                        setShowshop(!showshop);
                        setShowfav(false);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#ebaf0c"
                      class="bi bi-bag-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
                      />
                    </svg>
                  )}
                </div>
              ) : null}
            </div>
            {isAuth ? (
              <p
                onClick={() => setShow(!show)}
                className={navpos ? `${pp} p p1` : `${pp}  p`}
                style={{ fontWeight: "600" }}
              >
                <div class="dropdown" onmouseout="clearCoor()">
                  <input type="checkbox" id="dropdown" />

                  <label class="dropdown__face" for="dropdown">
                    <div class="dropdown__text">
                      {user?.Lastname} {user?.user_name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        class="bi bi-caret-down-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    </div>
                  </label>

                  <div class="dropdown__items">
                    {user?.option == "Admin" ? (
                      <Link to="/profil">
                        <div className="dropdiv">
                          <div className="icon">
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-person-workspace"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                              <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                            </svg>
                          </div>
                          <p>Dashboard</p>{" "}
                        </div>
                      </Link>
                    ) : null}
                    <Link to="/profil">
                      <div onClick={() => setShow(!show)} className="dropdiv">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-person-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path
                            fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                          />
                        </svg>
                        <p
                          onClick={() => {
                            setShowhome(false);
                            setShowabout(false);
                            setShowcontact(false);
                            setShowidea(false);
                          }}
                        >
                          My Profil
                        </p>
                      </div>
                    </Link>
                    <div
                      onClick={() => {
                        dispatch(logout());
                        navigate("/login");
                        setShow(!show);
                        setShowhome(false);
                        setShowabout(false);
                        setShowcontact(false);
                        setShowidea(false);
                      }}
                      className="dropdiv"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-box-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                        />
                      </svg>{" "}
                      <p>Logout</p>
                    </div>
                  </div>
                </div>
              </p>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Navbar;

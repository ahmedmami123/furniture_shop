import React, { useEffect, useState } from "react";
import "./ValiderCommande_client.css";
import ShopCard from "./ShopCard";
import { useDispatch, useSelector } from "react-redux";
import { updatecard } from "../redux/shopSlice/shopSlice";
import { useNavigate } from "react-router-dom";
import { addcommande_Admin } from "../redux/commandadminSlice/CommandeAdminSlice";

const ValiderCommande_client = ({
  setPing,
  ping,
  setshowValiderCom,
  setCommandeAdmin,
  commandeAdmin,
}) => {
  const [ping1, setping1] = useState(false);

  const shop = useSelector((state) => state?.shop?.shopp);
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function remove() {
    for (let i = 0; i < shop.length; i++) {
      const el = shop[i];
      var shopcard2 = el.shoping.filter((el) => el === user?._id).length;

      setTimeout(() => {
        dispatch(
          updatecard({
            id: el._id,
            shops: el.shoping.filter((el) => el != user._id),
          })
        );
      }, 1000);
    }
  }
  //   useEffect(() => {
  //     setCommandeAdmin({ user_id: "", products: [] });
  //   }, [!ping]);
  return (
    <div className="ValiderCommande">
      <div className="modalValid">
        <div className="productsValid">
          {shop?.map((el, i) => (
            <ShopCard el={el} setPing={setPing} ping={ping} />
          ))}
        </div>
        <div className="FormValid">
          <p>Ready to proceed? Confirm your order to complete the purchase!</p>
          <div className="input-label">
            <label>Adress</label>
            <input type="text" placeholder="enter your address" />
          </div>
          <div className="input-label">
            <label>Phone</label>
            <input type="text" placeholder="Enter your phone number" />
          </div>
          <div className="buton_valid ">
            <button
              onClick={() => {
                remove();

                setTimeout(() => {
                  dispatch(addcommande_Admin(commandeAdmin));
                  setPing(!ping);

                  navigate("/commande_client");
                }, 1000);
              }}
            >
              Confirm{" "}
            </button>
            <button
              onClick={() => {
                setshowValiderCom(false);
                setPing(!ping);
              }}
            >
              Cancel{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValiderCommande_client;

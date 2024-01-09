import { body } from "express-validator";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getidea } from "../redux/ideasslice/IdeaSlice";
import { updateuser } from "../redux/userSlice/userSlice";
import Cardproduct from "./Cardproduct";
import { addshop, getshop } from "../redux/shopSlice/shopSlice";

import "./Profile.css";
import UserCard from "./UserCard";

function Profile({ setnav, setpp, ping, setPing }) {
  const user = useSelector((state) => state.user?.user);
  const userr = useSelector((state) => state?.user?.users);

  const shop = useSelector((state) => state?.shop?.shopp);
  useEffect(() => {
    dispatch(getshop());

    setnav("nav-login");
    setpp("pp");
  }, []);
  // const [url1, seturl1] = useState()

  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(true);

  const [Editprofil, setEditprofil] = useState({});

  console.log(user);
  const dispatch = useDispatch();
  const [shopp, setshopp] = useState({
    Product_name: "",
    Product_img: "",
    Category: "",
    Description: "",
    Price: "",
  });
  console.log(shopp.Product_img, 12);
  const [file, setfile] = useState();

  const uploadimg = () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ahmedmami");
    data.append("cloud_name", "dwikjrexb");
    fetch("https://api.cloudinary.com/v1_1/dwikjrexb/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        // seturl1(data.secure_url)
        var url1 = data.secure_url;
        console.log("url", url1);

        setTimeout(() => {
          setshopp({ ...shopp, Product_img: url1 });
          setPing(!ping);
          setshow(!show);
        }, 2000);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const [product, setproduct] = useState(false);
  const [users, setusers] = useState(false);
  const [order, setorder] = useState(true);

  const [search, setsearch] = useState("");
  const [search1, setsearch1] = useState("User");
  const commande_Admin = useSelector(
    (state) => state?.commandeAdmin?.commande_Admin
  );
  return (
    // <div>hello {user? user.name:<h1>loading ...</h1>}</div>
    <div className="profil">
      <div className="sel">
        <div
          onClick={() => {
            setproduct(true);
            setusers(false);
            setorder(false);
          }}
          className={!product ? "div" : "div1"}
        >
          Product List
        </div>
        <div
          onClick={() => {
            setproduct(false);
            setusers(true);
            setorder(false);
          }}
          className={users ? "div1" : "div"}
        >
          Users List
        </div>
        <div
          onClick={() => {
            setproduct(false);
            setusers(false);
            setorder(true);
          }}
          className={order ? "div1" : "div"}
        >
          Order List
        </div>
      </div>
      {product && (
        <div className="product">
          <div className="addp">
            <label>Product_name </label>
            <input
              placeholder="Product name"
              type="text"
              onChange={(e) =>
                setshopp({ ...shopp, Product_name: e.target.value })
              }
            ></input>

            <label>Image </label>
            <input
              multiple
              placeholder="Image"
              type="file"
              onChange={(e) => setfile(e.target.files[0])}
            ></input>
            <label>category </label>
            <select
              name="category"
              id="pet-select"
              onChange={(e) => setshopp({ ...shopp, Category: e.target.value })}
            >
              <option value="">--Please choose an category--</option>
              <option value="SOFA">SOFA</option>
              <option value="AEMCHAIR">AEMCHAIR</option>
              <option value="CHAIRS">CHAIRS</option>
              <option value="DINING TABLE">DINING TABLE</option>
              <option value="TABLES">TABLES</option>
              <option value="BOOKCASE">BOOKCASE</option>
              <option value="BEDROOM">BEDROOM</option>
              <option value="KITCHEN">KITCHEN</option>
              <option value="WARDROBE">WARDROBE</option>
              <option value="CHILDREN ROOM">CHILDREN ROOM</option>
            </select>

            <label>Description</label>
            <input
              placeholder="Description"
              type="text"
              onChange={(e) =>
                setshopp({ ...shopp, Description: e.target.value })
              }
            ></input>
            <label>Price</label>
            <input
              placeholder="Price"
              type="text"
              onChange={(e) => setshopp({ ...shopp, Price: e.target.value })}
            ></input>

            <button
              onClick={() => {
                uploadimg();

                setPing(!ping);
              }}
            >
              Add Products
            </button>
            {show ? (
              <div className="modal">
                <div className="dm">
                  <img
                    onClick={() => {
                      setTimeout(() => {
                        dispatch(addshop(shopp));
                        setPing(!ping);
                        setshow(!show);
                      }, 2000);
                    }}
                    src="check.gif"
                  />
                  <button
                    onClick={() => {
                      setshow(!show);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      fill="white"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : null}
          </div>
          <div className="list">
            {shop?.map((el, i) => (
              <Cardproduct
                name={el.Product_name}
                Descri={el.Description}
                Product_img={el.Product_img}
                price={el.Price}
                setPing={setPing}
                ping={ping}
                el={el}
              />
            ))}
          </div>
        </div>
      )}
      {users && (
        <div className="users">
          <div className="top">
            <select
              name="pets"
              id="pet-select"
              onChange={(e) => setsearch1(e.target.value)}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="bottom">
            {userr
              ?.filter(
                (el) =>
                  el.option == search1 &&
                  (el.name.toLowerCase().includes(search.toLowerCase()) ||
                    el.Lastname.toLowerCase().includes(search.toLowerCase()))
              )
              .map((el) => (
                <UserCard el={el} ping={ping} setPing={setPing} />
              ))}
          </div>
        </div>
      )}
      {order && (
        <div className="order">
          <table>
            <tr className="tr">
              <th>Order_id</th>
              <th>Client name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone number</th>
              <th></th>
            </tr>
            {commande_Admin?.map((el) => (
              <tr>
                <td>{el._id}</td>
                {userr
                  ?.filter((ob) => ob._id.toLowerCase().includes(el.user_id))
                  .map((ob) => (
                    <>
                      <td>
                        {ob.name} {ob.Lastname}
                      </td>
                      <td>{ob.email}</td>
                    </>
                  ))}

                <td>{el.address}</td>
                <td>{el.phone}</td>
                <td>
                  <button>view</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default Profile;

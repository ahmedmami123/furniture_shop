import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatecard } from "../redux/shopSlice/shopSlice";
import "./Fav.css";

function ShopCard({
  el,
  ping,
  setPing,
  tot,
  settot,
  setCommandeAdmin,
  commandeAdmin,
}) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user?.user);
  var shopcard = el.shoping.findIndex((el) => el === user?._id);
  // var shopcard2 = el.shoping.findIndex((el) => el === user?._id).length;
  var shopcard2 = el.shoping.filter((el) => el === user?._id).length;

  var qt = shopcard2;
  var qt1 = qt;

  return shopcard >= 0 ? (
    <div className="card">
      <div className="d0">
        {" "}
        <p>{el.Product_name}</p>{" "}
        <svg
          onClick={() => {
            dispatch(
              updatecard({
                id: el._id,
                shops: el.shoping.filter((el) => el != user._id),
              })
            );
            setTimeout(() => {
              setPing(!ping);
            }, 1000);
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
      <div className="d1">
        {" "}
        <img src={el.Product_img} />
      </div>
      <div className="d2">
        <div className="pr1">
          <span>$ {el.Price}</span>
          <div className="qt">
            <div className="qt1">{qt}</div>
            <div className="qt2">
              <div
                className="div"
                onClick={() => {
                  dispatch(
                    updatecard({ id: el._id, shops: [...el.shoping, user._id] })
                  );

                  setTimeout(() => {
                    setPing(!ping);
                  }, 10);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="black"
                  class="bi bi-chevron-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </svg>
              </div>
              {qt > 1 ? (
                <div
                  className="div"
                  onClick={() => {
                    // dispatch(updatecard({id:el._id,shops:el.shoping.filter(el=>el!=user._id)}))

                    setTimeout(() => {
                      dispatch(
                        updatecard({
                          id: el._id,
                          shops: el.shoping.filter((v, i) => i !== 0),
                        })
                      );
                    }, 1000);

                    setTimeout(() => {
                      setPing(!ping);
                    }, 1000);

                    setTimeout(() => {}, 1000);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="black"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
              ) : (
                <div className="div1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="black"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="pr2">
          <span>Total :</span>
          <span>{qt * el.Price}</span>
        </div>
      </div>
    </div>
  ) : null;
}

export default ShopCard;

import React from "react";
import Downarrow from "../assets/images/png/down_arrow.png";
import Bell from "../assets/images/png/bell.png";
import Profile from "../assets/images/png/nav_profile.png";

const Header = () => {
  // Dropdown
  const drop = () => {
    const get = document.querySelector("#drop_show");

    get.classList.toggle("show");
  };
  const drop2 = () => {
    const get2 = document.querySelector("#drop_show2");

    get2.classList.toggle("show");
  };

  // Counter
  let upto = 900;
  const updated = () => {
    let count = document.getElementById("counter_1");
    count.innerHTML = ++upto;
    if (upto === 1234) {
      clearInterval(total);
    }
  };
  let total = setInterval(updated);

  let upto2 = 0;
  const updated2 = () => {
    let count2 = document.getElementById("counter_2");
    count2.innerHTML = ++upto2;
    if (upto2 === 234) {
      clearInterval(total2);
    }
  };
  let total2 = setInterval(updated2);

  let upto3 = 700;
  const updated3 = () => {
    let count3 = document.getElementById("counter_3");
    count3.innerHTML = ++upto3;
    if (upto3 === 1000) {
      clearInterval(total3);
    }
  };
  let total3 = setInterval(updated3);

  let upto4 = 700;
  const updated4 = () => {
    let count4 = document.getElementById("counter_4");
    count4.innerHTML = ++upto4;
    if (upto4 === 1000) {
      clearInterval(total4);
    }
  };
  let total4 = setInterval(updated4);

  return (
    <>
      <header>
        <nav>
          <div className="container mx-auto px-8 py-6">
            <div className="md:flex md:items-center justify-between">
              <h2 className="font-xl font-semibold text_dark_blue">Welcome</h2>
              <div className="mb-0 flex items-center">
                <div
                  onClick={drop}
                  className="nav_dropdown mw_nav_comp cursor-pointer flex items-center py-1 px-3 relative"
                >
                  <h2 className="font-medium font-sm text_blue">Today</h2>
                  <img
                    className="mb-0 ml-4 lg:ml-5 h-1 lg:h-2"
                    src={Downarrow}
                    alt="nav_down_arrow"
                  />
                  <div
                    id="drop_show"
                    className="box_dropdown w-28 p-3 absolute hidden"
                  >
                    <ul>
                      <li className="font-medium font-md text_blue drop_hover">
                        Today
                      </li>
                      <li className="font-medium font-md mt-3 text_blue drop_hover">
                        Yesterday
                      </li>
                      <li className="font-medium font-md mt-3 text_blue drop_hover">
                        Next week
                      </li>
                      <li className="font-medium font-md mt-3 text_blue drop_hover">
                        Next month
                      </li>
                      <li className="font-medium font-md mt-3 text_blue drop_hover">
                        Custom
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  onClick={drop2}
                  className="nav_dropdown mw_nav_comp cursor-pointer py-1 px-3 ml-3 lg:ml-4 flex items-center relative"
                >
                  <h2 className="font-medium font-sm text_blue w-14 sm:w-36">
                    Quick action
                  </h2>
                  <div
                    id="drop_show2"
                    className="box_dropdown w-36 p-3 absolute hidden"
                  >
                    <ul>
                      <li className="font-medium font-md text_blue drop_hover">
                        Add Inquiry
                      </li>
                      <li className="font-medium font-md mt-3 text_blue drop_hover">
                        Add Demo
                      </li>
                      <li className="font-medium font-md mt-3 text_blue drop_hover">
                        Add Admission
                      </li>
                      <li className="font-medium font-md mt-3 text_blue drop_hover">
                        Generate Invoice
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="nav_bell mw_nav_comp3 cursor-pointer ml-3 lg:ml-4 py-2 px-3 hover:scale-105 transition  ">
                  <img src={Bell} alt="nav_bell" />
                </div>
                <div className="white_box mw_nav_comp2 cursor-pointer  ml-3 lg:ml-4 py-1 px-3 flex items-center">
                  <img
                    className="h-6 lg:h-10"
                    src={Profile}
                    alt="nav_profile"
                  />
                  <div className="mb-0 ml-1 sm:ml-2">
                    <h2 className="font-sm font-normal text_dark_blue">
                      Sonali P.
                    </h2>
                    <p className="mb-0 font-xsm text_grey">Counselor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

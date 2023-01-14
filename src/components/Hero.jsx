import React from "react";
import Inquiries from "../assets/images/png/inquiries.png";
import Demos from "../assets/images/png/demos.png";
import Admission from "../assets/images/png/admission.png";
import Currency from "../assets/images/png/currency.png";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-8 py-6">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            <div className="white_box py-4 px-5 head_box_hover">
              <div className="flex items-center">
                <img src={Inquiries} alt="inquiries" />
                <p className="mb-0 ml-2 font-medium font-sm text_dark_grey">
                  Inquiries
                </p>
              </div>
              <p id="counter_1" className="mb-0 font-semibold font-xxl"></p>
            </div>
            <div className="white_box py-4 px-5 head_box_hover">
              <div className="flex items-center">
                <img src={Demos} alt="demos" />
                <p className="mb-0 ml-2 font-medium font-sm text_dark_grey">
                  Demos
                </p>
              </div>
              <p id="counter_2" className="mb-0 font-semibold font-xxl"></p>
            </div>
            <div className="white_box py-4 px-5 head_box_hover">
              <div className="flex items-center">
                <img src={Admission} alt="admission" />
                <p className="mb-0 ml-2 font-medium font-sm text_dark_grey">
                  Admissions
                </p>
              </div>
              <p id="counter_3" className="mb-0 font-semibold font-xxl"></p>
            </div>
            <div className="white_box py-4 px-5 head_box_hover">
              <div className="flex items-center">
                <img src={Currency} alt="currency" />
                <p className="mb-0 ml-2 font-medium font-sm text_dark_grey">
                  Fee collected
                </p>
              </div>
              <span
                id="counter_4"
                className="mb-0 font-semibold font-xxl counter_3"
              ></span>
              <span className="font-normal font-md text_grey">₹</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

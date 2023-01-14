import React from "react";
import RightArrow from "../assets/images/png/Chevron right.png";
import DownArrow from "../assets/images/png/down_arrow.png";
import InquiryFace from "../assets/images/png/inquiry_face.png";
import InquiryFace2 from "../assets/images/png/inq_face_2.png";
import InquiryFace3 from "../assets/images/png/suresh_profile.png";
import DemoFace from "../assets/images/png/demos_face.png";

const Main = () => {
  return (
    <>
      <main>
        <div className="container mx-auto px-8 py-6">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="white_box">
              <div className="border_bottom">
                <div className="py-4 px-6 flex items-center justify-between">
                  <p className="mb-0 font-medium font-lg text_dark_blue">
                    Inquiries
                  </p>
                  <p className="mb-0 font-normal font-md text_dark_grey hover_view cursor-pointer">
                    View all
                  </p>
                </div>
              </div>
              <div className="border_bottom hover_box">
                <div className="py-4 px-6 lg:flex items-center justify-between">
                  <div className="lg:flex">
                    <img
                      className="h-12 mx-auto"
                      src={InquiryFace}
                      alt="inquiry_face"
                    />
                    <div className="mb-0 lg:ml-4 mt-3 lg:mt-0 text-center lg:text-left">
                      <p className="font-medium font-lg text_dark_blue">
                        Navneet Kumar
                      </p>
                      <p className="font-normal font-md text_dark_grey mt-1 lg:mt-0">
                        Hisar, Haryana
                      </p>
                    </div>
                  </div>
                  <p className="font-md font-normal text_dark_grey mb-0 mt-1 lg:mt-0 text-center lg:text-left">
                    Front End Developer
                  </p>
                  <img
                    className="h-6 mt-2 lg:mt-0 hidden lg:block cursor-pointer"
                    src={RightArrow}
                    alt="right_arrow"
                  />
                  <img
                    className="h-2 mt-2 lg:mt-0 lg:hidden mx-auto cursor-pointer"
                    src={DownArrow}
                    alt="down_arrow"
                  />
                </div>
              </div>
              <div className="border_bottom hover_box">
                <div className="py-4 px-6 lg:flex items-center justify-between">
                  <div className="lg:flex">
                    <img
                      className="h-12 mx-auto"
                      src={InquiryFace2}
                      alt="inquiry_face"
                    />
                    <div className="mb-0 lg:ml-4 mt-3 lg:mt-0 text-center lg:text-left">
                      <p className="font-medium font-lg text_dark_blue">
                        Navneet Kumar
                      </p>
                      <p className="font-normal font-md text_dark_grey mt-1 lg:mt-0">
                        Hisar, Haryana
                      </p>
                    </div>
                  </div>
                  <p className="font-md font-normal text_dark_grey mb-0 mt-1 lg:mt-0 text-center lg:text-left">
                    Front End Developer
                  </p>
                  <img
                    className="h-6 mt-2 lg:mt-0 hidden lg:block cursor-pointer"
                    src={RightArrow}
                    alt="right_arrow"
                  />
                  <img
                    className="h-2 mt-2 lg:mt-0 lg:hidden mx-auto cursor-pointer"
                    src={DownArrow}
                    alt="down_arrow"
                  />
                </div>
              </div>
              <div className="border_bottom hover_box">
                <div className="py-4 px-6 lg:flex items-center justify-between">
                  <div className="lg:flex">
                    <img
                      className="h-12 mx-auto"
                      src={InquiryFace3}
                      alt="inquiry_face"
                    />
                    <div className="mb-0 lg:ml-4 mt-3 lg:mt-0 text-center lg:text-left">
                      <p className="font-medium font-lg text_dark_blue">
                        Navneet Kumar
                      </p>
                      <p className="font-normal font-md text_dark_grey mt-1 lg:mt-0">
                        Hisar, Haryana
                      </p>
                    </div>
                  </div>
                  <p className="font-md font-normal text_dark_grey mb-0 mt-1 lg:mt-0 text-center lg:text-left">
                    Front End Developer
                  </p>
                  <img
                    className="h-6 mt-2 lg:mt-0 hidden lg:block cursor-pointer"
                    src={RightArrow}
                    alt="right_arrow"
                  />
                  <img
                    className="h-2 mt-2 lg:mt-0 lg:hidden mx-auto cursor-pointer"
                    src={DownArrow}
                    alt="down_arrow"
                  />
                </div>
              </div>
            </div>
            <div className="white_box">
              <div className="border_bottom">
                <div className="py-4 px-6 flex items-center justify-between">
                  <p className="mb-0 font-medium font-lg text_dark_blue">
                    Demos
                  </p>
                  <p className="mb-0 font-normal font-md text_dark_grey hover_view cursor-pointer">
                    View all
                  </p>
                </div>
              </div>
              <div className="border_bottom hover_box">
                <div className="py-4 px-6 lg:flex items-center justify-between">
                  <div className="lg:flex">
                    <img
                      className="h-12 mx-auto"
                      src={DemoFace}
                      alt="demos_face"
                    />
                    <div className="mb-0 lg:ml-4 text-center lg:text-left mt-3 lg:mt-0">
                      <p className="font-medium font-lg text_dark_blue">
                        Anita Sharma
                      </p>
                      <p className="font-normal font-md text_dark_grey">
                        Hisar, Haryana
                      </p>
                    </div>
                  </div>
                  <div className="mb-0 text-center lg:text-left mt-2 lg:mt-0">
                    <p className="font-md font-medium text_dark_blue">
                      Back End Developer
                    </p>
                    <p className="font-normal font-md text_dark_grey">
                      Vikas Swami
                    </p>
                  </div>
                  <div className="bg_yellow mb-0 px-3 border_radius_10 text-center mx-auto lg:mx-0 mt-2 lg:mt-0 mw_yellow_box">
                    <p className="text_brown font-sm font-medium">11:00 AM</p>
                  </div>
                  <img
                    className="h-6 mt-3 lg:mt-0 hidden lg:block cursor-pointer"
                    src={RightArrow}
                    alt="right_arrow"
                  />
                  <img
                    className="h-2 mt-2 lg:mt-0 lg:hidden mx-auto cursor-pointer"
                    src={DownArrow}
                    alt="down_arrow"
                  />
                </div>
              </div>
              <div className="border_bottom hover_box">
                <div className="py-4 px-6 lg:flex items-center justify-between">
                  <div className="lg:flex">
                    <img
                      className="h-12 mx-auto"
                      src={DemoFace}
                      alt="demos_face"
                    />
                    <div className="mb-0 lg:ml-4 text-center lg:text-left mt-3 lg:mt-0">
                      <p className="font-medium font-lg text_dark_blue">
                        Anita Sharma
                      </p>
                      <p className="font-normal font-md text_dark_grey">
                        Hisar, Haryana
                      </p>
                    </div>
                  </div>
                  <div className="mb-0 text-center lg:text-left mt-2 lg:mt-0">
                    <p className="font-md font-medium text_dark_blue">
                      Back End Developer
                    </p>
                    <p className="font-normal font-md text_dark_grey">
                      Vikas Swami
                    </p>
                  </div>
                  <div className="bg_yellow mb-0 px-3 border_radius_10 text-center mx-auto lg:mx-0 mt-2 lg:mt-0 mw_yellow_box">
                    <p className="text_brown font-sm font-medium">3:00 PM</p>
                  </div>
                  <img
                    className="h-6 mt-3 lg:mt-0 hidden lg:block cursor-pointer"
                    src={RightArrow}
                    alt="right_arrow"
                  />
                  <img
                    className="h-2 mt-2 lg:mt-0 lg:hidden mx-auto cursor-pointer"
                    src={DownArrow}
                    alt="down_arrow"
                  />
                </div>
              </div>
              <div className="border_bottom hover_box">
                <div className="py-4 px-6 lg:flex items-center justify-between">
                  <div className="lg:flex">
                    <img
                      className="h-12 mx-auto"
                      src={DemoFace}
                      alt="demos_face"
                    />
                    <div className="mb-0 lg:ml-4 text-center lg:text-left mt-3 lg:mt-0">
                      <p className="font-medium font-lg text_dark_blue">
                        Anita Sharma
                      </p>
                      <p className="font-normal font-md text_dark_grey">
                        Hisar, Haryana
                      </p>
                    </div>
                  </div>
                  <div className="mb-0 text-center lg:text-left mt-2 lg:mt-0">
                    <p className="font-md font-medium text_dark_blue">
                      Back End Developer
                    </p>
                    <p className="font-normal font-md text_dark_grey">
                      Vikas Swami
                    </p>
                  </div>
                  <div className="bg_light_green mb-0 px-3 border_radius_10 text-center mx-auto lg:mx-0 mt-2 lg:mt-0 mw_green_box">
                    <p className="text_green font-sm font-medium">Completed</p>
                  </div>
                  <img
                    className="h-6 mt-3 lg:mt-0 hidden lg:block cursor-pointer"
                    src={RightArrow}
                    alt="right_arrow"
                  />
                  <img
                    className="h-2 mt-2 lg:mt-0 lg:hidden mx-auto cursor-pointer"
                    src={DownArrow}
                    alt="down_arrow"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4 mt-4">
            <div className="white_box">
              <div className="border_bottom">
                <div className="py-4 px-6 flex items-center justify-between">
                  <p className="mb-0 font-medium font-lg text_dark_blue">
                    Admissions
                  </p>
                  <p className="mb-0 font-normal font-md text_dark_grey hover_view cursor-pointer">
                    View all
                  </p>
                </div>
              </div>
              <div className="border_bottom hover_box">
                <div className="py-4 px-6 lg:flex items-center justify-between">
                  <div className="lg:flex">
                    <img
                      className="h-12 mx-auto"
                      src={InquiryFace3}
                      alt="admission_face"
                    />
                    <div className="mb-0 ml-4">
                      <p className="font-medium font-lg text_dark_blue mt-3 lg:mt-0 text-center lg:text-left">
                        Suresh Sharma
                      </p>
                      <p className="font-normal font-md text_dark_grey text-center lg:text-left">
                        ID: 12343
                      </p>
                    </div>
                  </div>
                  <div className="mb-0">
                    <p className="font-md font-medium text_dark_blue mt-1 lg:mt-0 text-center lg:text-left">
                      Mobile App Development
                    </p>
                    <p className="font-md font-normal text_dark_grey text-center lg:text-left">
                      Started on: Nov 20, 2022
                    </p>
                  </div>
                  <img
                    className="h-6 mt-3 lg:mt-0 hidden lg:block cursor-pointer"
                    src={RightArrow}
                    alt="right_arrow"
                  />
                  <img
                    className="h-2 mt-2 lg:mt-0 lg:hidden mx-auto cursor-pointer"
                    src={DownArrow}
                    alt="down_arrow"
                  />
                </div>
              </div>
              <div className="border_bottom hover_box">
                <div className="py-4 px-6 lg:flex items-center justify-between">
                  <div className="lg:flex">
                    <img
                      className="h-12 mx-auto"
                      src={InquiryFace3}
                      alt="admission_face"
                    />
                    <div className="mb-0 ml-4">
                      <p className="font-medium font-lg text_dark_blue mt-3 lg:mt-0 text-center lg:text-left">
                        Suresh Sharma
                      </p>
                      <p className="font-normal font-md text_dark_grey text-center lg:text-left">
                        ID: 12343
                      </p>
                    </div>
                  </div>
                  <div className="mb-0">
                    <p className="font-md font-medium text_dark_blue mt-1 lg:mt-0 text-center lg:text-left">
                      Regional Paradigm Technic
                    </p>
                    <p className="font-md font-normal text_dark_grey text-center lg:text-left">
                      Started on: Nov 20, 2022
                    </p>
                  </div>
                  <img
                    className="h-6 mt-3 lg:mt-0 hidden lg:block cursor-pointer"
                    src={RightArrow}
                    alt="right_arrow"
                  />
                  <img
                    className="h-2 mt-2 lg:mt-0 lg:hidden mx-auto cursor-pointer"
                    src={DownArrow}
                    alt="down_arrow"
                  />
                </div>
              </div>
              <div className="border_bottom hover_box">
                <div className="py-4 px-6 lg:flex items-center justify-between">
                  <div className="lg:flex">
                    <img
                      className="h-12 mx-auto"
                      src={InquiryFace3}
                      alt="admission_face"
                    />
                    <div className="mb-0 ml-4">
                      <p className="font-medium font-lg text_dark_blue mt-3 lg:mt-0 text-center lg:text-left">
                        Suresh Sharma
                      </p>
                      <p className="font-normal font-md text_dark_grey text-center lg:text-left">
                        ID: 12343
                      </p>
                    </div>
                  </div>
                  <div className="mb-0">
                    <p className="font-md font-medium text_dark_blue mt-1 lg:mt-0 text-center lg:text-left">
                      Regional Paradigm Technic
                    </p>
                    <p className="font-md font-normal text_dark_grey text-center lg:text-left">
                      Started on: Nov 20, 2022
                    </p>
                  </div>
                  <img
                    className="h-6 mt-3 lg:mt-0 hidden lg:block cursor-pointer"
                    src={RightArrow}
                    alt="right_arrow"
                  />
                  <img
                    className="h-2 mt-2 lg:mt-0 lg:hidden mx-auto cursor-pointer"
                    src={DownArrow}
                    alt="down_arrow"
                  />
                </div>
              </div>
            </div>
            <div className="white_box">
              <div className="border_bottom">
                <div className="py-4 px-6 flex items-center justify-between">
                  <p className="mb-0 font-medium font-lg text_dark_blue">
                    Fee collected
                  </p>
                  <p className="mb-0 font-normal font-md text_dark_grey hover_view cursor-pointer">
                    View all
                  </p>
                </div>
              </div>
              <div className="border_bottom hover_box">
                <div className="py-4 px-6 flex items-center justify-between">
                  <div className="flex">
                    <div className="mb-0 ml-4">
                      <p className="font-medium font-lg text_dark_blue">
                        Naveen Ninu
                      </p>
                      <p className="font-normal font-md text_dark_grey">
                        Hisar, Haryana
                      </p>
                    </div>
                  </div>
                  <p className="font-normal font-md text_dark_grey mb-0">
                    Admin
                  </p>
                  <img className="h-6" src={RightArrow} alt="right_arrow" />
                </div>
              </div>
              <div className="border_bottom hover_box">
                <div className="py-4 px-6 flex items-center justify-between">
                  <div className="flex">
                    <div className="mb-0 ml-4">
                      <p className="font-medium font-lg text_dark_blue">
                        Naveen Ninu
                      </p>
                      <p className="font-normal font-md text_dark_grey">
                        Hisar, Haryana
                      </p>
                    </div>
                  </div>
                  <p className="font-normal font-md text_dark_grey mb-0">
                    Admin
                  </p>
                  <img className="h-6" src={RightArrow} alt="right_arrow" />
                </div>
              </div>
              <div className="border_bottom hover_box">
                <div className="py-4 px-6 flex items-center justify-between">
                  <div className="flex">
                    <div className="mb-0 ml-4">
                      <p className="font-medium font-lg text_dark_blue">
                        Naveen Ninu
                      </p>
                      <p className="font-normal font-md text_dark_grey">
                        Hisar, Haryana
                      </p>
                    </div>
                  </div>
                  <p className="font-normal font-md text_dark_grey mb-0">
                    Admin
                  </p>
                  <img className="h-6" src={RightArrow} alt="right_arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;

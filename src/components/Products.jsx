import React from "react";
import {
  diamond,
  down,
  lessrating,
  pc,
  rating,
  tick,
  trophy,
} from "../assets/images";

const Products = () => {
  return (
    <div className="mt-10">
      <div className=" flex flex-col gap-10">
        <div className="item-1 relative bg-white rounded-xl">
        <div className="w-8 h-8 border rounded-full text-center absolute left-[-20px] bg-white top-7 max-[420px]:hidden">
          1
        </div>
          <div className="flex absolute bottom-60 bg-[rgb(255,119,36)] w-32 p-2 rounded-r-lg items-center text-white max-[420px]:top-[-10px]  max-[420px]:h-8">
            <div className="">                                                            
              <img src={trophy} alt="trophy" className="" />
            </div>
            <div className="ps-2 ">Best Choice</div>
          </div>
          <div className="flex max-[420px]:flex-col ">
            <div className="flex flex-col items-center  ">
              <img src={pc} alt="pc" className="w-72 mt-10" />
              <div className="text-[rgb(98,110,121)] mt-2">Builder 1</div>
            </div>
            <div className="ms-20 mt-10 flex flex-col gap-2">
              <div className="max-[420px]:pe-10">
                <span className="font-semibold pe-2">
                  WixPro 72-Inch Responsive Website Builder-
                </span>
                <div className="max-[420px]:hidden">
                Comprehensive Digital Platform Creation Tool, Streamlined Design
                Interface for Professional Websites and Online Stores
                (Black/Blue)
                </div>
              </div>
              <div className="font-semibold">Main highlights</div>
              <div className="ps-5 max-[420px]:pe-20">
                [What You Get]: Receive the WixPro website builder suite, access
                to premium design templates, an extensive library of widgets and
                apps, and detailed step-by-step guides.
              </div>
              <div className="flex cursor-pointer text-[rgb(27,136,244)] mb-5 w-fit max-[420px]:hidden">
                Show more
                <img src={down} alt="" />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center gap-3 bg-[rgb(243,249,255)] p-2 me-10 max-[420px]:hidden ">
                <div className="text-2xl">9.8</div>
                <div>Exceptional</div>
                <div>
                  <img src={rating} alt="" />
                </div>
              </div>
              <div className="max-[420px]:flex max-[420px]:justify-center ">
                <button className="bg-[rgb(27,136,244)] w-36  mt-16 me-10 text-white p-2 rounded-lg max-[420px]:w-64 max-[420px]:mt-5 max-[420px]:ms-12">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="item-2 relative bg-white rounded-xl">
        <div className="w-8 h-8 border rounded-full text-center absolute left-[-20px] bg-white top-7 max-[420px]:hidden">
          2
        </div>
          <div className="flex absolute bottom-60 bg-[rgb(255,119,36)] w-32 p-2 rounded-r-lg items-center text-white max-[420px]:top-[-10px]  max-[420px]:h-8">
            <div className="">
              <img src={diamond} alt="diamond" className="" />
            </div>
            <div className="ps-2">Best value</div>
          </div>
          <div className="flex max-[420px]:flex-col">
            <div className="flex flex-col items-center">
              <img src={pc} alt="pc" className="w-72 mt-10" />
              <div className="text-[rgb(98,110,121)] mt-2">Builder 1</div>
            </div>
            <div className="ms-20 mt-10 flex flex-col gap-2">
              <div className="max-[420px]:pe-10">
                <span className="font-semibold pe-2">
                  WixPro 72-Inch Responsive Website Builder-
                </span>
                <div className="max-[420px]:hidden">
                Comprehensive Digital Platform Creation Tool, Streamlined Design
                Interface for Professional Websites and Online Stores
                (Black/Blue)
                </div>
              </div>
              <div className="font-semibold">Main highlights</div>
              <div className="ps-5 max-[420px]:pe-20">
                [What You Get]: Receive the WixPro website builder suite, access
                to premium design templates, an extensive library of widgets and
                apps, and detailed step-by-step guides.
              </div>
              <div className="flex cursor-pointer text-[rgb(27,136,244)] mb-5 w-fit max-[420px]:hidden">
                Show more
                <img src={down} alt="" />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center gap-3 bg-[rgb(243,249,255)] p-2 me-10 max-[420px]:hidden ">
                <div className="text-2xl">9.5</div>
                <div>Exceptional</div>
                <div>
                  <img src={rating} alt="" />
                </div>
              </div>
              <div className="max-[420px]:flex max-[420px]:justify-center ">
                <button className="bg-[rgb(27,136,244)] w-36  mt-16 me-10 text-white p-2 rounded-lg  max-[420px]:w-64 max-[420px]:mt-5 max-[420px]:ms-12">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="item-3 relative bg-white rounded-xl">
        <div className="w-8 h-8 border rounded-full text-center absolute left-[-20px] bg-white top-7 max-[420px]:hidden">
          3
        </div>
          <div className="flex max-[420px]:flex-col">
            <div className="flex flex-col items-center">
              <img src={pc} alt="pc" className="w-72 mt-10" />
              <div className="text-[rgb(98,110,121)] mt-2">Builder 1</div>
            </div>
            <div className="ms-20 mt-10 flex flex-col gap-2">
              <div className="max-[420px]:pe-10">
                <span className="font-semibold pe-2">
                  WixPro 72-Inch Responsive Website Builder-
                </span>
                <div className="max-[420px]:hidden">
                Comprehensive Digital Platform Creation Tool, Streamlined Design
                Interface for Professional Websites and Online Stores
                (Black/Blue)</div>
                
              </div>
              <div className="font-semibold">Main highlights</div>
              <div className="ps-5 max-[420px]:pe-20">
                [What You Get]: Receive the WixPro website builder suite, access
                to premium design templates, an extensive library of widgets and
                apps, and detailed step-by-step guides.
              </div>
              <div className="flex cursor-pointer text-[rgb(27,136,244)] mb-5 w-fit max-[420px]:hidden">
                Show more
                <img src={down} alt="" />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center gap-3 bg-[rgb(243,249,255)] p-2 me-10 max-[420px]:hidden">
                <div className="text-2xl">9.3</div>
                <div>Exceptional</div>
                <div>
                  <img src={rating} alt="" />
                </div>
              </div>
              <div className="max-[420px]:flex max-[420px]:justify-center">
                <button className="bg-[rgb(27,136,244)] w-36  mt-16 me-10 text-white p-2 rounded-lg  max-[420px]:w-64 max-[420px]:mt-5 max-[420px]:ms-12">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="item-4 relative bg-white rounded-xl">
        <div className="w-8 h-8 border rounded-full text-center absolute left-[-20px] bg-white top-7 max-[420px]:hidden">
          4
        </div>
          <div className="flex max-[420px]:flex-col">
            <div className="flex flex-col items-center">
              <img src={pc} alt="pc" className="w-40 mt-10" />
              <div className="text-[rgb(98,110,121)] mt-2">CDK</div>
            </div>
            <div className="ms-20 mt-10 flex flex-col gap-2">
              <div className="max-[420px]:pe-10">
                <span className="font-semibold pe-2">
                  CDK Resposive Builder-
                </span>
                An extensive library of widgets and apps, and detailed
                step-by-step guides
              </div>
              <div className="font-semibold">Main highlights</div>
              <div className="ps-5 max-[420px]:pe-20">
                <div className="flex flex-col  gap-3 bg-[rgb(250,236,245)] p-2 rounded-lg">
                  <div className="flex gap-3 items-center">
                    <div className=" bg-white px-2 text-[rgb(27,136,244)] w-fit">
                      9.9.
                    </div>
                    <div>Building Responsive</div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="bg-white px-2 text-[rgb(27,136,244)] w-fit">
                      8.9.
                    </div>
                    <div>Cool</div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="bg-white px-2 text-[rgb(27,136,244)] w-fit">
                      8.9.
                    </div>
                    <div>Docs</div>
                  </div>
                </div>

                <div className="mt-3">
                  <div>Why we love it</div>
                  <div className="mt-2">
                    <div className="flex items-center mt-2">
                      <img src={tick} alt="tick" className="pe-3" />
                      Documentation
                    </div>
                    <div className="flex items-center mt-2">
                    <img src={tick} alt="tick" className="pe-3" />
                    Easy Use
                    </div>
                    <div className="flex items-center mt-2">
                    <img src={tick} alt="tick" className="pe-3"/>
                    Out of box
                    </div>
                  </div>

                </div>
              </div>
              <div className="flex cursor-pointer text-[rgb(27,136,244)] mb-5 w-fit max-[420px]:hidden">
                Show more
                <img src={down} alt="" />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center gap-3 bg-[rgb(243,249,255)] p-2 me-10 max-[420px]:hidden">
                <div className="text-2xl">9.1</div>
                <div>Exceptional</div>
                <div>
                  <img src={lessrating} alt="" />
                </div>
              </div>
              <div className="max-[420px]:flex max-[420px]:justify-center">
                <button className="bg-[rgb(27,136,244)] w-36  mt-64 me-10 text-white p-2 rounded-lg  max-[420px]:w-64 max-[420px]:mt-5 max-[420px]:ms-12">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

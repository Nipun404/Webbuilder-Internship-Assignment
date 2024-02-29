import React from 'react';
import { pc } from '../assets/images';

const Card = ({ title, description, price, discount }) => {
    return (
        <div className="bg-white w-[20rem] p-5 mt-5">
            <div className="flex justify-center pt-10">
                <img src={pc} alt="" />
            </div>
            <div className="flex gap-5 mt-7 ms-3">
                <div className="bg-[rgb(242,244,247)] rounded-lg ps-2 py-1 w-24 h-8 text-[rgb(7,71,134)]">20% Off</div>
                <div className="bg-[rgb(242,244,247)] rounded-lg ps-2 py-1 w-32 h-8 text-[rgb(7,71,134)]">Limited time</div>
            </div>
            <div className="text-center mt-3 text-[rgb(98,110,121)] font-semibold">{title}</div>
            <div className="mt-3 text-[rgb(98,110,121)]">{description}</div>
            <div className="flex mt-3 gap-2">
                <div className="text-[rgb(98,110,121)]">{price}</div>
                <div className="text-[rgb(159,169,179)]"><s>{discount}</s></div>
                <div className="text-[rgb(239,76,93)]">(20% Off)</div>
            </div>
            <div className="mt-5">
                <button className="bg-[rgb(27,136,244)] text-white p-3 w-full rounded-md">View Deal</button>
            </div>
        </div>
    );
};

export default Card;

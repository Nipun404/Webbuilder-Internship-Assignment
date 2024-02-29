import React from 'react';
import Card from './Card';

const Cards = () => {
    return (
        <div className="">
            <div className="text-4xl">Related deals you might like for</div>
            <div className="flex justify-between max-[420px]:flex-col max-[420px]:items-center">
                <Card
                    title="Webbuilder 1"
                    description="Computer Modern clasic with wix support"
                    price="$39.96"
                    discount="$49.96"
                />
                <Card
                    title="Webbuilder 1"
                    description="Computer Modern clasic with wix support"
                    price="$39.96"
                    discount="$49.96"
                />
                <Card
                    title="Webbuilder 1"
                    description="Computer Modern clasic with wix support"
                    price="$39.96"
                    discount="$49.96"
                />
            </div>
        </div>
    );
};

export default Cards;

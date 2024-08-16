import React from 'react';
import { Card } from 'flowbite-react';

const CardPage = () => {
  return (
    <div>
        <div className="flex justify-center items-center mb-4">
        <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="./../images/newplot.png"
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Demand Forecasting
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            We can define the quantity of sales as demand. 
            The graph clearly shows a seasonal influence on pricing, including weekly and monthly patterns.
            </p>
        </Card>
        </div>
        <div className="flex justify-center items-center mb-4">
        <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="./../images/newplot (1).png"
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ABC Analysis
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            The dataset was divided into three categories according to sales: 
            Group A, the priority group for the company due to high demand; 
            Group B, with moderate demand; and Group C, which has the lowest demand.
            </p>
        </Card>
        </div>
        <div className="flex justify-center items-center mb-4">
        <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="./../images/newplot (2).png"
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Reorder Point
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            For this analysis we define safety stock as the maximum sales per day of a brand subtracted by average sales per day of a brand.
            </p>
        </Card>
        </div>
        <div className="flex justify-center items-center mb-4">
        <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="./../images/newplot (3).png"
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Lead Time Analysis
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            The distribution of average lead time shows a normal distribution, where a collective of brands have a mean lead time of 7.25-8.25 days. 
            The lowest average lead time is around 2.75-3.25.
            </p>
        </Card>
        </div>
        <div className="flex justify-center items-center mb-4">
        <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="./../images/newplot (4).png"
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Carrying Cost Analysis
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            A business' inventory carrying costs will generally total about 20% to 30% of its total inventory value.
            </p>
        </Card>
        </div>
    </div>
  );
};

export default CardPage;

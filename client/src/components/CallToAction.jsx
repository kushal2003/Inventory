import React from 'react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <div>
      <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center mb-4'>
        <div className="flex-1 justify-center flex flex-col items-center"> {/* Added items-center */}
          <h2 className='text-2xl'>
            Inventory Analysis
          </h2>
          <p className='text-gray-500 my-2'>
          By carefully analyzing current inventory data and aligning it with production and demand forecasts, the company can reduce both stock outs and excess inventory. 
          </p>
          <Link to="/cardPage" className='rounded-tl-xl rounded-bl-none'>
            <Button gradientDuoTone='purpleToPink' className='mx-auto'> {/* Added mx-auto */}
              View Card Page
            </Button>
          </Link>
        </div>
        <div className="p-7 flex-1">
          <img src="../../images/Front-image.jpg" alt="Model graph" />
          Model graph
        </div>
      </div>

      <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col items-center"> {/* Added items-center */}
          <h2 className='text-2xl'>
            Dynamic Pricing
          </h2>
          <p className='text-gray-500 my-2'>
          Dynamic pricing enables businesses to optimize revenue, respond to market changes, and manage inventory efficiently. By automating pricing decisions and personalizing offers based on real-time data, it eases the workload for corporations, enhances competitiveness, and improves forecasting, allowing for more efficient and scalable operations, ultimately leading to better customer satisfaction.
          </p>
          <Button gradientDuoTone='purpleToPink' className='mx-auto'> {/* Added mx-auto */}
            <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
              Open button
            </a>
          </Button>
        </div>
        <div className="p-7 flex-1">
          <img src="../../images/price_prediction.png" alt="Price prediction image" />
          Price prediction image
        </div>
      </div>

      <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col items-center"> {/* Added items-center */}
          <h2 className='text-2xl'>
            Blockchain
          </h2>
          <p className='text-gray-500 my-2'>
          Blockchain optimizes supply chains by enhancing transparency, traceability, and security. It reduces fraud, streamlines processes, and improves data accuracy across all stakeholders. By providing real-time visibility and reducing intermediaries, blockchain increases efficiency, lowers costs, and strengthens trust throughout the supply chain.
          </p>
        </div>
        <div className="p-7 flex-1">
          <img src="../../images/BlockChain.jpg" alt="Price prediction image" />
          Flowchart
        </div>
      </div>
    </div>
  );
}

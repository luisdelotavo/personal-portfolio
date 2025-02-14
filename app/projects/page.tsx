import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Projects – Luis Delotavo',
};

const ProjectsPage: React.FC = () => {
  return (
    <main className="bg-white text-black tracking-[-0.1em] flex items-center py-8 mt-20">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* First Project */}
        <div className="flex flex-col md:flex-row items-start md:items-center border-b border-black py-4">
          <div className="w-full md:w-3/4 pr-6">
            <h1 className="text-4xl font-bold tracking-[-0.1em]">Stockr:</h1>
            <p className="text-lg mt-2 tracking-[-0.08em]">
              Stockr is a comprehensive finance application that empowers users to manage personalized watchlists, access real-time market data, and review summarized investment portfolios. It provides an intuitive interface for investors to monitor trends and make informed decisions about their financial assets.
            </p>
          </div>
          <div className="w-full md:w-1/4 mt-4 md:mt-0 md:ml-4 flex justify-center">
            <a
              href="https://github.com/luisdelotavo/stockr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/stockr.png"
                alt="Stockr project screenshot"
                width={200}
                height={150}
                className="w-full md:w-auto shadow-lg"
              />
            </a>
          </div>
        </div>

        {/* Second Project */}
        <div className="flex flex-col md:flex-row items-start md:items-center border-b border-black py-4">
          <div className="w-full md:w-3/4 pr-6">
            <h1 className="text-4xl font-bold tracking-[-0.1em]">London Transit Delays Dashboard:</h1>
            <p className="text-lg mt-2 tracking-[-0.08em]">
              This dashboard delivers real-time insights into transit delays and weather conditions, helping city planners and commuters anticipate disruptions and adjust travel plans accordingly. By transforming raw data into actionable visualizations, it outlines the need for transit management to enhance the overall commuter experience.
            </p>
          </div>
          <div className="w-full md:w-1/4 mt-4 md:mt-0 md:ml-4 flex justify-center">
            <a
              href="https://www.youtube.com/watch?v=cd3fIOiDZpY&t=473s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/london-transit-delay.png"
                alt="London Transit Delays Dashboard project screenshot"
                width={200}
                height={150}
                className="w-full md:w-auto shadow-lg"
              />
            </a>
          </div>
        </div>

        {/* Third Project */}
        <div className="flex flex-col md:flex-row items-start md:items-center py-4">
          <div className="w-full md:w-3/4 pr-6">
            <h1 className="text-4xl font-bold tracking-[-0.1em]">Cardio Risk Engine:</h1>
            <p className="text-lg mt-2 tracking-[-0.08em]">
              The Cardio Risk Engine is an experimental machine learning model that compares random forest and neural network approaches to predict cardiovascular risk. It explores which method more effectively forecasts heart disease risk, providing insights into optimizing predictive accuracy for future applications in preventative healthcare.
            </p>
          </div>
          <div className="w-full md:w-1/4 mt-4 md:mt-0 md:ml-4 flex justify-center">
            <a
              href="https://github.com/luisdelotavo/cardio-risk-engine?tab=readme-ov-file"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/cardio.png"
                alt="Cardio Risk Engine project screenshot"
                width={200}
                height={150}
                className="w-full md:w-auto shadow-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;

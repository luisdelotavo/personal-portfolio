import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Experiences – Luis Delotavo',
};

const ExperiencesPage: React.FC = () => {
  return (
    <main className="bg-white text-black tracking-[-0.1em] flex items-center py-8 mt-36">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* First Experience */}
        <div className="flex flex-col md:flex-row items-start md:items-center border-b border-black py-4">
          <div className="w-full md:w-3/4 pr-6">
            <h1 className="text-4xl font-bold tracking-[-0.1em]">J.D. Power</h1>
            <h2 className="text-lg"> May 2023 - Aug 2024 </h2>
            <p className="text-lg mt-2">
              J.D. Power is a trusted leader in consumer insights and market research, renowned for its rigorous data analysis and unbiased evaluations across diverse industries. Their award-winning studies drive improvements in product quality and customer satisfaction, helping businesses benchmark against best practices.
            </p>
          </div>
          <div className="w-full md:w-1/4 mt-4 md:mt-0 md:ml-4 flex justify-center">
            <a href="https://www.jdpower.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/jdpower.webp"
                alt="J.D. Power logo or related image"
                width={200}
                height={150}
                className="w-full md:w-auto"
              />
            </a>
          </div>
        </div>

        {/* Second Experience */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="w-full md:w-3/4 pr-6">
            <h1 className="text-4xl font-bold tracking-[-0.1em]">Glendor</h1>
            <h2 className="text-lg"> May 2022 - Aug 2022 </h2>
            <p className="text-lg mt-2">
              Glendor is an innovative technology firm dedicated to enhancing urban mobility and transit operations. Leveraging data-driven insights and smart analytics, Glendor empowers cities to optimize transportation systems and deliver an improved commuter experience.
            </p>
          </div>
          <div className="w-full md:w-1/4 mt-4 md:mt-0 md:ml-4 flex justify-center">
            <a href="https://glendor.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/glendor.png"
                alt="Glendor logo or related image"
                width={200}
                height={150}
                className="w-full md:w-auto"
              />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
};

export default ExperiencesPage;

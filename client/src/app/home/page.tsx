'use client';

import Navbar from '../components/Navbar';
import PlanCardList from '../components/PlanCardList';
import { STATUS } from '../constans/constans';
import { useState } from 'react';
const data = [
  {
    status: 'Expired',
    dateStart: '01/01/2023',
    dateEnd: '04/01/2023',
    comsuption: null,
    flag: 'https://flagcdn.com/co.svg',
    country: 'Colombia',
    plan: '4 dias, 3GB',
  },
  {
    status: 'Expired',
    dateStart: '02/01/2023',
    dateEnd: '02/01/2023',
    comsuption: null,
    flag: 'https://flagcdn.com/co.svg',
    country: 'Colombia',
    plan: '30 dias, 25GB',
  },
  {
    status: 'Pending',
    dateStart: '01/01/2024',
    dateEnd: null,
    comsuption: {
      totalComsumption: 1468006.4,
    },
    flag: 'https://flagcdn.com/pe.svg',
    country: 'Peru',
    plan: '1 dia, 1.4GB',
  },
  {
    status: 'Pending',
    dateStart: '01/02/2024',
    dateEnd: null,
    comsuption: {
      totalComsumption: 1468006.4,
    },
    flag: 'https://flagcdn.com/ar.svg',
    country: 'Argentina',
    plan: '1 dia, 1.4GB',
  },
  {
    status: 'Active',
    dateStart: '06/10/2023',
    dateEnd: '16/10/2023',
    comsuption: {
      totalComsumption: 12582912,
    },
    flag: 'https://flagcdn.com/es.svg',
    country: 'España',
    plan: '10 dias, 12GB',
  },
];

const Home = () => {
  const [filterValue, setFilterValue] = useState<string[]>([STATUS.ACTIVE, STATUS.PENDING]);

  return (
    <>
      <Navbar onHandleClick={setFilterValue} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Currently Plans</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Check here and tarck your active and pending plans to use them wherever you want.
        </p>
        <div className="mt-10">
          <PlanCardList data={data} filterValue={filterValue} />
        </div>
      </div>
    </>
  );
};

export default Home;

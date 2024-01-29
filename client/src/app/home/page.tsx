'use client';
import Navbar from '../components/Navbar';
import PlanCardList from '../components/PlanCardList';
import { STATUS } from '../constans/constans';
import { useState } from 'react';

export default function Home() {
  const [filterValue, setFilterValue] = useState<string[]>([STATUS.ACTIVE, STATUS.PENDING]);

  return (
    <>
      <Navbar onHandleClick={setFilterValue} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {filterValue.length > 1 ? 'Currently Plans' : 'Expired plans'}
        </h2>
        <p className="mt-6 text-md leading-8 text-gray-600">
          {filterValue.length > 1
            ? 'Check here and tarck your active and pending plans to use them wherever you want'
            : 'Check here here your expired plans'}
        </p>
        <div className="mt-10">
          <PlanCardList filterValue={filterValue} />
        </div>
      </div>
    </>
  );
}

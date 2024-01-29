import PlanCard from './PlanCard';
import { PlanCardProps } from './PlanCard';
import { useEffect, useState } from 'react';

export interface PlanCardListProps {
  filterValue: string[];
}

const PlanCardList = ({ filterValue }: PlanCardListProps) => {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    async function getPlans() {
      const res = await fetch(`/api/plans`);
      const data = await res.json();
      setPlans(data);
    }
    getPlans();
  }, []);

  const filteredPlans = plans.filter((item: PlanCardProps) => filterValue.includes(item.status));

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {plans &&
        filteredPlans.map((item: PlanCardProps, idx: number) => {
          return (
            <li
              key={idx}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center border border-gray-300"
            >
              <PlanCard
                status={item.status}
                dateStart={item.dateStart}
                dateEnd={item.dateEnd}
                comsuption={item.comsuption}
                flag={item.flag}
                country={item.country}
                plan={item.plan}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default PlanCardList;

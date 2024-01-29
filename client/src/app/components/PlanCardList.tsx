import PlanCard from './PlanCard';
import { PlanCardProps } from './PlanCard';

export interface PlanCardListProps {
  data: Array<PlanCardProps>;
  filterValue: string[];
}

const PlanCardList = ({ data, filterValue }: PlanCardListProps) => {
  const filteredPlans = data.filter((item) => filterValue.includes(item.status));
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data &&
        filteredPlans.map((item, idx) => {
          return (
            <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center border border-gray-300">
              <PlanCard
                key={idx}
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

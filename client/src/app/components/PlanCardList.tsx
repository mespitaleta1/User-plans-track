import PlanCard from './PlanCard';
import { PlanCardProps } from './PlanCard';

export interface PlanCardListProps {
  data: Array<PlanCardProps>;
}

const PlanCardList = ({ data }: PlanCardListProps) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data &&
        data.map((item, idx) => {
          return (
            <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
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

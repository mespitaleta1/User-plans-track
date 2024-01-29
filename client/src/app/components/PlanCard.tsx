import { STATUS } from '../constans/constans';
import PlanCardButton from './PlanCardButton';
export interface PlanCardProps {
  status: string;
  dateStart: string;
  dateEnd: null | string;
  comsuption: null | {
    totalComsumption: number;
  };
  flag: string;
  country: string;
  plan: string;
}

const PlanCard = ({ status, dateStart, dateEnd, comsuption, flag, country, plan }: PlanCardProps) => {
  const statusClasses = {
    [STATUS.PENDING]: { bg: 'bg-amber-500/10', text: 'text-amber-500', mt: 'mt-3' },
    [STATUS.ACTIVE]: { bg: 'bg-sky-500/10', text: 'text-blue-900', mt: 'mt-3' },
    [STATUS.EXPIRED]: { bg: 'bg-gray-400/10', text: 'text-gray-700', flag: 'grayscale', mt: 'mt-1' },
  };

  const fontOnExpiredClass = status === STATUS.EXPIRED ? 'text-xs text-gray-400' : 'text-gray-600 text-sm';

  const convertKBtoGB = (kylobytes: number) => {
    const bytesInGB = 1048576;
    const gigaBytes = Math.floor(kylobytes) / bytesInGB;
    const formatGB = gigaBytes.toString().slice(0, 3).replace('.', ',');
    return formatGB;
  };
  const formatActiveGB = plan.split(',')[1].replace('GB', '');

  return (
    <div className="px-8 py-8">
      {/*Flag and status card info */}
      <div className={`w-fit flex items-center flex-wrap rounded-full ${statusClasses[status].bg} mb-4`}>
        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-white">
          <img
            className={`inline-block h-5 w-5 rounded-full ${statusClasses[status].flag}`}
            src={flag}
            alt={`${country} flag`}
          />
        </div>
        <p className={`${statusClasses[status].text} text-xs pl-2 pr-3`}>{status}</p>
      </div>

      {/* Content Wrapper */}
      <div className={status === STATUS.ACTIVE && comsuption ? 'flex justify-between mb-3' : ''}>
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900 text-left">{country}</h2>
          {status === STATUS.EXPIRED && (
            <p className="mt-2 flex items-baseline text-gray-600 text-xs">{`${dateStart} - ${dateEnd}`}</p>
          )}
          <p className={`${statusClasses[status].mt} flex items-baseline ${fontOnExpiredClass}`}>{plan}</p>
        </div>

        {status === STATUS.ACTIVE && comsuption && (
          <div className="border border-gray-950 rounded-full w-20 h-20 p-3 flex flex-col items-center justify-center">
            <p className="font-semibold text-black-500 text-center mb-0">{`${convertKBtoGB(comsuption.totalComsumption)}`}</p>
            <span className="text-xs text-gray-400">{`/${formatActiveGB}GB`}</span>
          </div>
        )}
      </div>
      {/*button Section */}
      {status === STATUS.EXPIRED ? null : <PlanCardButton cardStatus={status} />}
    </div>
  );
};

export default PlanCard;

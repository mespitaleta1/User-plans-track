import {STATUS} from "../constans/constans";
import PlanCardButton from "./PlanCardButton";

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
};

const PlanCard = ({
    status,
          dateStart,
          dateEnd,
          comsuption,
          flag,
          country,
          plan,
    }: PlanCardProps) => {
  
      const statusClasses = {
          [STATUS.PENDING]: {bg: "bg-amber-500/10", text:"text-amber-500" },
          [STATUS.ACTIVE]: {bg:"bg-sky-500/10", text:"text-blue-900"},
          [STATUS.EXPIRED]: {bg:"bg-gray-400/10", text:"text-gray-700", flag: "grayscale"}
      }

      const fontOnExpiredClass = status === STATUS.EXPIRED ? "text-xs text-gray-400" : "text-gray-600 text-sm";
      
      const convertKBtoGB = (kylobytes: number) => {
        const bytesInGB = 1048576;
        const gigaBytes = Math.floor(kylobytes) / bytesInGB;
        const formatGB = gigaBytes.toString().slice(0,3).replace(".",",");
        return formatGB;
    } 

      return (
        <div className=" px-8 py-8">
          {/*Flag and status card info */}
          <div className={`w-fit flex items-center flex-wrap rounded-full ${statusClasses[status].bg}`}>
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
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900 text-left">{country}</h2>
            {status === STATUS.EXPIRED && <p className="mt-1 flex items-baseline text-gray-600 text-xs">{`${dateStart} - ${dateEnd}`}</p>}
            <p className={`mt-1 flex items-baseline ${fontOnExpiredClass}`}>{plan}</p>
            {status === STATUS.ACTIVE && comsuption && (<p className="text-left">{`${convertKBtoGB(comsuption.totalComsumption)} GB`}</p>)}
            
            {/*button Section */}
            {status === STATUS.EXPIRED ? null : <PlanCardButton cardStatus={status}/> }
          </div>
        </div>
      );
  }
  
  export default PlanCard;
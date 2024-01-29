import { STATUS, BTN_TEXT } from '../constans/constans';

const PlanCardButton = ({ cardStatus }: { cardStatus: string }) => {
  return cardStatus === STATUS.PENDING ? (
    <button className="mt-10 block w-full rounded-md bg-rose-600 px-3 py-2 text-center text-sm text-white shadow-sm hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">
      {BTN_TEXT.PENDING}
    </button>
  ) : (
    <div className="flex flex-col">
      <button className="mb-3 block w-full border border-gray-200 rounded-md bg-white px-3 py-2 text-center text-sm text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300">
        {BTN_TEXT.ACTIVE.DETAILS}
      </button>

      <button className="align-baseline justify-center flex w-full rounded-md bg-green-400 px-3 py-2 text-center text-sm text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-4 h-4 mt-[1px] mr-[7px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          />
        </svg>

        {BTN_TEXT.ACTIVE.CTA}
      </button>
    </div>
  );
};

export default PlanCardButton;

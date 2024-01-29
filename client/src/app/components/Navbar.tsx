import { useEffect, useState } from 'react';

interface UserProfile {
  id: string;
  userName: string;
  fullName: string;
}

const Navbar = ({ onHandleClick }: { onHandleClick: (value: string[]) => void }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  useEffect(() => {
    async function getUser() {
      const res = await fetch(`/api/user`);
      const data = await res.json();
      setUser(data);
    }
    getUser();
  }, []);

  return (
    <>
      <nav id="nav" className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              {/*Nav tab section*/}
              <div className="flex md:ml-6 md:flex md:space-x-8">
                <a
                  onClick={() => onHandleClick(['Active', 'Pending'])}
                  className="cursor-pointer inline-flex items-center border-b-2 border-rose-500 px-1 pt-1 text-sm font-medium text-gray-900 hover:border-gray-300 hover:text-gray-700"
                >
                  Plans
                </a>
                <a
                  onClick={() => onHandleClick(['Expired'])}
                  className="cursor-pointer inline-flex items-center border-b-2  border-rose-500 px-1 pt-1 text-sm font-medium text-gray-900 hover:border-gray-300 hover:text-gray-700"
                >
                  Expired plans
                </a>
              </div>
              {/*End of Nav tab section*/}
            </div>

            <div className="flex items-center">
              {/*<div className="flex-shrink-0">
                <button
                  type="button"
                  className="relative inline-flex items-center gap-x-1.5 rounded-md bg-rose-500 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Add plans
                </button>
              </div>*/}
              {user && <p>{user.fullName}</p>}
              <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                {/* Profile dropdown */}
                <div className="relative ml-3">
                  <div>
                    <button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100">
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                {/*End of Profile dropdown */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

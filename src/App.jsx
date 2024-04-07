 function App() {
  return (
    <>
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center"></div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Projects
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="relative ml-3">
                <div>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Team
            </a>
            <a
              href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Projects
            </a>
          </div>
        </div>
      </nav>

      <div className=" flex flex-wrap">
        <div className="bg-white rounded-lg shadow-md p-4 inline-block ">
          <img
            src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Employee Photo"
            className="w-48 h-52  pl-8"
          />

          <p className="text-black mb-4 font-bold ">
            Designation :{" "}
            <span className="text-gray-500 font-bold">Software Engineer</span>
          </p>
          <div className="flex justify-between items-center mb-4 font-semibold">
            <p className="text-black  mb-4 font-bold">
              Role : <span className="text-gray-500 font-bold"> Developer</span>
            </p>
          </div>
          <div className="flex justify-between items-center mb-4 font-semibold">
            <p className="text-black  mb-4 font-bold">
              Member Since :
              <span className="text-gray-500 font-bold"> Nov 07, 16</span>
            </p>
          </div>
          <div className=" flex flex-wrap font-bold text-black">
            Status :
            <span className="bg-green-700 text-white p-1 ml-1 rounded-md hover:bg-black">
              Active
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-around ml-4 mt-2 w-2/3 flex-wrap">
          <div className="flex">
            <span>
              <svg
                class="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </span>
            <span className=" font-bold ">About</span>
          </div>
          <div className=" flex flex-wrap font-bold justify-between bg-white rounded-lg shadow-2xl pl-11 pr-40 py-4">
            <div className="flex-col text-sm font-bold space-y-4 italic  ">
              <div className="flex text-black justify-between ">
                <div>Name </div>
                <div>
                  <span className="text-gray-400">John Doe</span>
                </div>
              </div>
              <div className="text-black flex justify-between">
                ID <span className="text-gray-400">EMP123</span>
              </div>
              <div className="text-black flex justify-between ">
                DOB <span className="text-gray-400">1990-03-07</span>
              </div>

              <div className="text-black flex">
                Email <span className="text-gray-400 pl-2">doe@123.com</span>
              </div>

              <div className="text-black flex justify-between">
                Salary <span className="text-gray-400">50000</span>
              </div>
            </div>
            <div className="flex-col text-sm font-bold space-y-4 italic  ">
              <div className="text-black flex justify-between">
                Gender <span className="text-gray-400">MALE</span>
              </div>

              <div className="text-black flex justify-between ">
                JoinDate <span className="text-gray-400"> Feb 2024</span>
              </div>

              <div className="text-black flex justify-between">
                Contact <span className="text-gray-400 ">123456</span>
              </div>

              <div className="text-black flex justify-between">
                Address <span className="text-gray-400 pl-2">Main Street</span>
              </div>
              <div className="text-black flex justify-between">
                MontlyHr <span className="text-gray-400">0</span>
              </div>
            </div>
          </div>
          <div className="flex mt-7 bg-white rounded-lg shadow-xl p-4 justify-between pl-11 pr-40 py-4 flex-wrap">
            <div className=" flex-col  text-sm italic font-bold space-y-1 flex-wrap ">
              <svg
                class="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  fill="#fff"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
              EDUCATION
              <p className="text-green-500 text-md ">MASTER DEGREE IN OXFORD</p>
              <p className="text-gray-400"> 2016 - 2018</p>
              <p className="text-green-500 text-md ">BACHELOR DEGREE IN LPU</p>
              <p className="text-gray-400"> 2012 - 2016</p>
            </div>

            <div className=" flex-col  text-sm italic font-bold space-y-1">
              <svg
                class="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              EXPERIENCE
              <p className="text-green-500 text-md ">
                SHALOW INDIA PVT LIMITED
              </p>
              <p className="text-gray-400">March 2020 - now</p>
              <p className=" text-green-500 text-md">SS&K INDIA PVT LIMITED</p>
              <p className="text-gray-400"> 2018 - 2020</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;



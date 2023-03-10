import React from "react";

function header() {
  return (
    <div className="flex flex-row md:justify-between justify-center items-center md:px-16 px-6 py-6 text-white">
      <div className="md:text-start text-center flex flex-col md:items-start items-center font-Kanit w-full">
        <h1 className="text-xl font-semibold uppercase md:text-start text-center">
          rare studios new york
        </h1>
        <h1 className="font-medium uppercase md:text-start text-center">
            A web3 company
        </h1>
      </div>

      <div className="hidden md:flex">
        <div className="flex flex-row items-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/skeleenft"
          >
            <div className="px-10 py-1  bg-white rounded-md uppercase mx-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hover:scale-110"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#00000"
              >
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
              </svg>
            </div>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/skeleenft"
          >
            <div className="px-10 py-1  bg-white rounded-md uppercase mx-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hover:scale-110"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#00000"
              >
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default header;

import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import FAQ from "../components/FAQs";
import Header from "../components/header";
import FAQs from "../components/FAQs";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

export default function Index() {

const [ArrowClicked , setArrowClicked ] = useState(false)

const ArrowClickedHnadler= () => {
    setArrowClicked(!ArrowClicked);
  };

  return (
    <>
      <Head>
        <title>Galactaverse-demo</title>
        <meta name="Description" content="DEMO" />
        <link rel="icon" href="/galactaverse-favicon.png" />
      </Head>
      
        <div className="h-screen w-screen bg-bg2 md:bg-bg1 fixed top-0 -z-10 bg-cover bg-no-repeat bg-center">

        </div>
        {/* <img
          src="/rarestudiosnewyork-sitebg.png"
          className="h-screen md:w-screen w-auto fixed top-0 -z-10"
        /> */}
        <div className="relative h-screen w-screen flex flex-col">
        <div className="absolute md:bottom-[20px] bottom-16 flex flex-col items-center w-screen">
        <div className="flex flex-row justify-center w-full mt-2"> 
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
              <svg className="hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#00000"><path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path></svg>
            </div>
          </a>
        </div>

        <Link className="cursor-pointer mt-4" activeClass ="active" to={ArrowClicked?'head':'footer'} spy={true} smooth={true} offset={-70} duration={600}>
        <svg onClick={ArrowClickedHnadler} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className={ArrowClicked?"rotate-180 fill-white":"fill-white animate-bounce"}><path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z"></path></svg>
        </Link>
        
        {/* <Link className={ArrowClicked ? "cursor-pointer mt-4" : 'hidden'} activeClass ="active" to='head' spy={true} smooth={true} offset={-70} duration={600}>
        <svg onClick={ArrowClickedHnadler} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="fill-white animate-bounce rotate-90"><path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z"></path></svg>
        </Link> */}
        
        </div>

          <Header/>
        </div>
        
        <div>
          <FAQs/>
          <Footer/>
        </div>
    </>
  );
}

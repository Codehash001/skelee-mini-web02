import { useState, Fragment } from "react";
import Footer from "../components/footer";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-scroll";
 
export default function FAQs() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { opacity:1 },
    unmount: { opacity:0 },
  };
 
  return (
  <div className='w-screen h-auto md:mb-0 font-Kanit'>
    <div id='faqs'className='md:px-16 px-4 py-4 bg-black/30 filter backdrop-blur-sm text-white'>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>Background</h1>
            <div>{open == 1 ?
            (
              <svg onClick={() => handleOpen(1)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
            <Link onClick={() => handleOpen(1)}  activeClass ="active" to='footer' spy={true} smooth={true} offset={-70} duration={600}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
            </Link>
            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='text-justify'>
         des
        </AccordionBody>
      </Accordion>


      
      <Accordion open={open === 2} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>Our brands</h1>
            <div>{open == 2 ?
            (
              <svg onClick={() => handleOpen(2)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
              <Link onClick={() => handleOpen(2)}   activeClass ="active" to='footer' spy={true} smooth={true} offset={-70} duration={600}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
              </Link>            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='text-justify'>
         des
        </AccordionBody>
      </Accordion>


      
      <Accordion open={open === 3} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>Team</h1>
            <div>{open == 3 ?
            (
              <svg onClick={() => handleOpen(3)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
              <Link onClick={() => handleOpen(3)}  activeClass ="active" to='footer' spy={true} smooth={true} offset={-70} duration={600}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
              </Link>            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='flex flex-col md:items-start items-center'>
         <div className={open == 3 ? "md:flex items-start justify-start transition duration-300 ease-in-out" : 'h-0 hidden transition duration-300 ease-in-out'}>

          <div className=" flex flex-col items-start w-full h-full p-4 bg-gray-800">
            <img src="team-1.png" className="w-[150px] h-[180px]"/>
            <h1 className="font-semibold text-white text-[18px] mt-1">Ethereum.jpg</h1>
            <h1 className="font-medium text-white text-[15px]">Founder</h1>
            <h1 className="font-medium text-white text-[16px] mt-3">Entrepreneur <br/> & Blockchain OG</h1>
          </div>
          
          <div className=" flex flex-col items-start w-full h-full p-4 bg-gray-800 md:mx-5 md:my-0 my-4">
            <img src="team-4.png" className="w-[150px] h-[180px]"/>
            <h1 className="font-semibold text-white text-[18px] mt-1">Ordinal.jpg</h1>
            <h1 className="font-medium text-white text-[15px]">Founder</h1>
            <h1 className="font-medium text-white text-[16px] mt-3">Gang Leader &<br/>Legit Builder</h1>
          </div>

          <div className=" flex flex-col items-start w-full h-full p-4 bg-gray-800">
            <img src="team-3.png" className="w-[150px] h-[180px]"/>
            <h1 className="font-semibold text-white text-[18px] mt-1">CodeHash</h1>
            <h1 className="font-medium text-white text-[15px]">Development Lead</h1>
            <h1 className="font-medium text-white text-[16px] mt-3">Code wiz &<br/>Builder</h1>
          </div>

         </div>
        </AccordionBody>
      </Accordion>


      </div>
    </div>
  );
}

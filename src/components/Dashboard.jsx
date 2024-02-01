import { GrHomeRounded } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CgMenuLeft } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { RiGroupLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { CiMail } from "react-icons/ci";
import React, { useRef } from 'react';

import {
    Card,
    CardBody,
    CardHeader,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

const Dashboard = () => {

    const menuRef = useRef(null);
    const userRef = useRef(null);

    const toggle = (ref) => {
        if (ref.current.style.display === 'block') {
            ref.current.style.display = 'none';
        } else {
            ref.current.style.display = 'block';
        }
    };


    const chartConfig = {
        type: "bar",
        height: 240,
        series: [
            {
                name: "Sales",
                data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
            },
        ],
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            title: {
                show: "",
            },
            dataLabels: {
                enabled: false,
            },
            colors: ["#2A50ED"],
            plotOptions: {
                bar: {
                    columnWidth: "40%",
                    borderRadius: 2,
                },
            },
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
                categories: [
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
            },
            grid: {
                show: true,
                borderColor: "#dddddd",
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: {
                    top: 5,
                    right: 20,
                },
            },
            fill: {
                opacity: 0.8,
            },
            tooltip: {
                theme: "dark",
            },
        },
    };





    return (

        <div className="flex h-[100%] bg-[#EEF0F6] font-sans items">

            <div ref={menuRef} id="menu" className="pt-7 pl-7 pr-7 text-[#778194] shadow-lg hidden bg-white lg:block mt-[50px] md:mt-0 absolute md:fixed h-[100vh] w-[100vw] md:w-[100px] mx-auto">
                <div className="mb-4 cursor-pointer w-[40px] mx-auto"><img src="/rectangle.png" height={40} width={40} /></div>
                <div className="mb-4 cursor-pointer w-[35px] mx-auto"><GrHomeRounded size={35} className="p-2 bg-[#2A50ED] text-white rounded-[7px]" /></div>
                <div className="mb-4 cursor-pointer w-[35px] mx-auto"><IoSearch size={35} className="p-2 " /></div>
                <div className="mb-4 cursor-pointer w-[35px] mx-auto"><PiStudentBold size={35} className="p-2" /></div>
                <div className="mb-4 cursor-pointer w-[35px] mx-auto"><IoDocumentTextOutline size={35} className="p-2" /></div>
                <div className="mb-4 cursor-pointer w-[35px] mx-auto"><AiOutlineDollarCircle size={35} className="p-2" /></div>
            </div>





            <div className=" w-full lg:ml-[90px]">

                <div className="flex justify-between shadow-lg md:pl-10 pl-5 pb-[13px] pt-2 bg-white ">

                    <div className="flex gap-5 items-center">
                        <div className="cursor-pointer text-[#535E6F] block md:hidden" onClick={() => toggle(menuRef)}><CgMenuLeft size={20} /></div>
                        <div className="cursor-pointer text-[#535E6F] hidden md:block"><CgMenuLeft size={20} /></div>
                        <div className="text-[18px] text-[#535E6F] font-semibold">DashBoard</div>
                    </div>


                    <div className="flex items-center gap-5 md:pr-10 pr-5">
                        <div>
                            <div className="absolute px-1 text-white rounded-21 text-[9px] bg-[red] ml-6 mt-[-4px]">2</div>
                            <IoMdNotificationsOutline size={35} color="#0057CA" className="cursor-pointer p-2 bg-[#f0efef] rounded-xl" />

                        </div>
                        <div className="hidden md:block"><img src="/girl.webp" className="h-[35px] w-[38px] rounded-lg" /></div>
                        <div className="hidden md:block">
                            <div className="text-sm font-bold text-[#394663]">Niraj</div>
                            <div className="text-sm text-[#8C94AA]">Niraj@gmail.com</div>
                        </div>
                        <div className="hidden md:block"> <MdKeyboardArrowDown size={20} className="cursor-pointer" /></div>
                        <div className="md:hidden block" onClick={() => toggle(userRef)}> <MdKeyboardArrowDown size={20} className="cursor-pointer" /></div>
                    </div>

                </div>


                <div ref={userRef} id="user" className="hidden">
                    <div className="flex items-center gap-5 pr-10 justify-center  bg-white pt-5 pb-5">
                        <div><img src="/girl.webp" className="h-[35px] w-[38px] rounded-lg" /></div>
                        <div>
                            <div className="text-sm font-bold text-[#394663]">Niraj</div>
                            <div className="text-sm text-[#8C94AA]">Niraj@gmail.com</div>
                        </div>
                    </div>
                </div>


                <div className="flex justify-center gap-10 pt-5 px-3 flex-wrap">


                    <div className="max-w-[320px] px-5 py-10 bg-white rounded-2xl shadow-custom">
                        <div className="flex gap-6 items-center">
                            <div className="text-[#2A50ED] p-3 rounded-2xl bg-[#ecedee]">  <IoDocumentTextOutline size={30} /></div>
                            <div>
                                <div className="text-[#7A839D] font-bold text-sm">All</div>
                                <div className="text-[#535E6F] font-bold">Applications</div>
                            </div>
                            <div className="text-[#394663] font-bold text-[28px] pl-4">31</div>
                        </div>
                    </div>


                    <div className="max-w-[320px] px-8 py-10  bg-white rounded-2xl shadow-custom">
                        <div className="flex gap-6 items-center">
                            <div className="text-[#2A50ED] p-3 rounded-2xl bg-[#ecedee]">  <HiOutlineDocumentCheck size={30} /></div>
                            <div>
                                <div className="text-[#7A839D]  font-bold text-sm">Offers</div>
                                <div className="text-[#535E6F] font-bold">Received</div>
                            </div>
                            <div className="text-[#394663] font-bold text-[28px] pl-4">1</div>
                        </div>
                    </div>



                    <div className="max-w-[320px] px-8 py-10  bg-white rounded-2xl shadow-custom">
                        <div className="flex gap-6 items-center">
                            <div className="text-[#2A50ED] p-3 rounded-2xl bg-[#ecedee]">  <RiGroupLine size={30} /></div>
                            <div>
                                <div className="text-[#7A839D] font-bold text-sm">Total </div>
                                <div className="text-[#535E6F] font-bold">Students</div>
                            </div>
                            <div className="text-[#394663] font-bold text-[28px] pl-4">34</div>
                        </div>
                    </div>



                    <div className="max-w-[320px] px-8 py-10 shadow-custom bg-white rounded-2xl">
                        <div className="flex gap-6 items-center">
                            <div className="text-[#2A50ED] p-3 rounded-2xl bg-[#ecedee]">  <AiOutlineDollarCircle size={30} /></div>
                            <div>
                                <div className="text-[#7A839D] font-bold text-sm">Total</div>
                                <div className="text-[#535E6F] font-bold">Payments</div>
                            </div>
                            <div className="text-[#394663] font-bold text-[28px] pl-4">7</div>
                        </div>
                    </div>

                </div>



                <div className="lg:flex justify-center gap-10 mt-10 mb-10 px-5">


                    <div className="bg-white rounded-21 shadow-custom">
                        <div className=" text-2xl pl-8 pt-5 text-[#535E6F] pb-6 font-semibold">Summary</div>

                        <div class="border-b border-[#C8D7F7]"></div>

                        <div className="xl:flex justify-between gap-10 pl-8 pr-8 pb-10 pt-6">
                            <div>
                                <div className="text-[#535E6F] font-semibold text-[21px]">Application Statuses</div>
                                <div className="text-[#7A839D] text-[15px] pt-1 pb-3 md:pb-0">Number of applications by status and intake over time</div>
                            </div>


                            <div className="flex flex-wrap gap-5 items-center pt-5 xl:pt-0">

                                <div className="w-[100px] pb-3 md:pb-0">
                                    <select className="cursor-pointer border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 ">
                                        <option selected>All Staff</option>
                                        <option value="US">All Staff 1</option>
                                        <option value="CA">All Staff 2</option>
                                        <option value="FR">All Staff 3</option>
                                    </select>
                                </div>


                                <div className="w-[100px] pb-3 md:pb-0">
                                    <select className="cursor-pointer border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 ">
                                        <option selected>2023</option>
                                        <option value="US">2022</option>
                                        <option value="CA">2021</option>
                                        <option value="FR">2020</option>
                                    </select>
                                </div>


                                <div className="w-[130px] pb-3 md:pb-0">
                                    <select className=" cursor-pointer border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 ">
                                        <option selected>All Countries</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                    </select>
                                </div>


                                <div className="p-2 bg-[#EEF0F6] cursor-pointer max-w-[35px] mb-3 md:mb-0 ">
                                    <BsThreeDotsVertical />
                                </div>

                            </div>


                        </div>

                        <div className="pl-8 pr-8 pb-10">

                            <Card>
                                <CardHeader floated={false} shadow={false} color="transparent" className="flex flex-col gap-4 rounded-none md:flex-row md:items-center">
                                </CardHeader>
                                <CardBody className="px-2 pb-0">
                                    <Chart {...chartConfig} />
                                </CardBody>
                            </Card>

                        </div>
                    </div>





                    <div className="mb-[100px]">

                        <div className="bg-white rounded-21 shadow-custom">

                            <div className=" pb-5 pt-6 lg:mt-0 mt-10">
                                <div className="flex justify-between items-center gap-[120px] pl-6 pr-6 pb-5">
                                    <div className="text-[#535E6F] font-bold">Your Balance</div>
                                    <div>
                                        <select className=" cursor-pointer border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-1.5 ">
                                            <option selected>CAD</option>
                                            <option value="US">CAD 1</option>
                                            <option value="CA">CAD 2</option>
                                            <option value="FR">CAD 3</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="border-b border-[#C8D7F7]"></div>


                                <div className="pl-6 pr-6 pt-5">

                                    <div className="flex justify-between pb-3">
                                        <div className="text-[#778194]">Commissiom</div>
                                        <div className="font-semibold text-[#394663] pl-2">$2,783.79 CAD</div>
                                    </div>

                                    <div className="flex justify-between pb-3">
                                        <div className="text-[#778194]">Enrol Credits</div>
                                        <div className="font-semibold text-[#394663] pl-2">$60.00 CAD</div>
                                    </div>

                                    <div className="flex justify-between pb-3">
                                        <div className="text-[#778194]">Commission Status</div>
                                        <div className="font-semibold text-[#394663] pl-2">$1500.00 CAD</div>
                                    </div>

                                    <div className="flex items-center gap-5 pt-3 pb-1 text-[#2A50ED] ">
                                        <div className="font-bold">Withdrawl Instructions</div>
                                        <div><FaExternalLinkAlt /></div>
                                    </div>

                                </div>
                            </div>


                        </div>

                        <div className="bg-white rounded-21 shadow-custom mt-7">

                            <div className=" pb-5 pt-6 ">
                                <div className="flex justify-between items-center gap-[120px] pl-6 pr-6 pb-5">
                                    <div className="text-[#535E6F] font-bold">Your Balance</div>
                                    <div>
                                        <select className=" cursor-pointer border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-1.5 ">
                                            <option selected>CAD</option>
                                            <option value="US">CAD 1</option>
                                            <option value="CA">CAD 2</option>
                                            <option value="FR">CAD 3</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="border-b border-[#C8D7F7]"></div>


                                <div className="pl-6 pr-6 pt-5">

                                    <div className="flex justify-between pb-3">
                                        <div className="text-[#778194]">Commissiom</div>
                                        <div className="font-semibold text-[#394663] pl-2">$2,783.79 CAD</div>
                                    </div>

                                    <div className="flex justify-between pb-3">
                                        <div className="text-[#778194]">Enrol Credits</div>
                                        <div className="font-semibold text-[#394663] pl-2">$60.00 CAD</div>
                                    </div>

                                    <div className="flex justify-between pb-3">
                                        <div className="text-[#778194]">Commission Status</div>
                                        <div className="font-semibold text-[#394663] pl-2">$1500.00 CAD</div>
                                    </div>

                                    <div className="flex items-center gap-5 pt-3 pb-1 text-[#2A50ED] ">
                                        <div className="font-bold">Withdrawl Instructions</div>
                                        <div><FaExternalLinkAlt /></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="p-3">
                    <div className="bg-[white] max-w-[1200px] mx-auto p-3 md:pt-[65px] md:px-[50px] md:pb-[40px] mb-[100px] rounded-21 shadow-custom">

                        <div className="md:flex items-center justify-between">

                            <div className="md:flex items-center gap-8 md:w-[312px] mb-7 md:mb-0">
                                <div><img src="/logo.jpg" className="h-[90px] w-[100px] mx-auto" /></div>
                                <div>
                                    <div className="text-2xl text-[#394663] font-semibold">Jaspreet Singh</div>
                                    <div className="text-[#414C69] pt-1">UNItravel canada ltd</div>
                                </div>
                            </div>


                            <div class="bg-[#bcbbbb] h-[80px] w-[2px] ml-[25%]  hidden xl:block"></div>

                            <div className="lg:pr-[18%] mx-auto">


                                <div className="flex items-center gap-7 text-[#5F6678] justify-center md:justify-start">
                                    <div><CiMail size={25} color="#656565" /></div>
                                    <div className="font-semibold">jaspreet@unitravel.in</div>
                                </div>

                                <div className="flex items-center gap-7 text-[#5F6678] mt-3 justify-center md:justify-start">
                                    <div><LiaPhoneVolumeSolid size={25} color="#656565" /></div>
                                    <div className="font-semibold">+91 172 676 7031</div>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Dashboard;

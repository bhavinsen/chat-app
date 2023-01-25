import React, { useEffect, useState } from "react"
import UseMediaQuery from "../hooks/UseMediaQuery";
import { HiArrowLeft } from "react-icons/hi";
import ContactLists from "./contactLists";
import { getContactsList } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const Message = () => {
    const matches = UseMediaQuery("(min-width: 1024px)");
    const [scroll, setScroll] = useState();
    const [inviteId, setInviteId] = useState()
    const [messageData, setMessageData] = useState()
    const [openSt, setOpenSt] = useState()
    const contacts = useSelector((state) => state?.simpleReducer?.contact)
    const dispatch = useDispatch()
    
    const invite = (id) => {
        setInviteId(id)
    }

    const responseD = (d) => {
        setMessageData(d)
    }
    const openS = (state) => {
        setOpenSt(state)
    }

    useEffect(() => {
        dispatch(getContactsList())
    }, [])

    return (
        <div className="min-h-[calc(100vh-7.4rem)] md:min-h-[calc(100vh-119px)] lg:min-h-[calc(100vh-76px)] bg-white flex">
            <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                <div className="relative z-0 flex flex-1 overflow-hidden">
                    {(matches || (!matches && openSt)) && (
                        <main className="relative  z-0 flex-1 overflow-y-auto md:justify-between  flex flex-col  focus:outline-none lg:order-last">
                            <div className="relative  w-full top-0">
                                <div className="flex bg-white border-b-[1.5px] h-[68px] border-[#0904151F] px-5 md:px-6 pt-[11px] pb-2.5 justify-between items-center">
                                    <div className="flex items-center">
                                        <button
                                            onClick={() => {
                                                setOpenSt(!openSt);
                                            }}
                                            className="mr-4 lg:hidden"
                                        >
                                            <HiArrowLeft />
                                        </button>
                                        {
                                            contacts?.chatModals?.filter((item) => item.id === inviteId).map((data) => {
                                                return (
                                                    <div className="flex items-center" key={data.id}>
                                                        <div className="mr-[12px] ">
                                                            {/* <IoPersonCircleOutline className="w-[40px] h-[40px] rounded-full text-indigo-400 " /> */}
                                                            <img src={`https://enapi.flyenbot.com${data.pic}`} />
                                                        </div>
                                                        <div>
                                                            <h2 className="text-[17px] font-medium leading-5 text-gray-800">
                                                                {data.name}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 chat-bg-img max-h-[calc(100vh_-_14.5rem)] md:max-h-[calc(100vh_-_15rem)] lg:max-h-[calc(100vh_-_12.8rem)] justify-between flex flex-col">
                                <div
                                    id="messages"
                                    onScroll={(event) => {
                                        setScroll(event.target.scrollTop);
                                    }}
                                    className={`${Number(scroll) > 0 ? "chat-box-show" : "chat-box"
                                        } flex flex-col space-y-4 p-3  overflow-y-auto custom-scroll1`}
                                >
                                    {
                                        messageData && messageData?.sort().map((data) => {
                                            return (
                                                <div key={data.id}>
                                                    <div className="flex items-end flex-col gap-2 justify-end">
                                                        <div className="flex  px-4 py-2.5 flex-col space-y-[4px] bg-[#E0F6CA] rounded text-xs max-w-[442px] mr-2 order-1 items-end">
                                                            <div className="">
                                                                <span className=" text-xs block md:text-[15px] font-medium leading-[22px] rounded-[30px]  rounded-tr-none bg-violet600 text-black ">
                                                                    {data.body.replace(/(<([^>]+)>)/gi, " ")}
                                                                </span>

                                                            </div>
                                                            <div>
                                                                <span className="text-[13px] flex text-medium text-[#84828A]">
                                                                    {moment(data?.time).format('DD/MM/YY, h:mm:ss A')}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="chat-message relative">
                                        <div className="flex items-start ">
                                            <div className="flex flex-col rounded bg-white space-y-1 text-xs max-w-[442px] mx-2 order-2 items-start">
                                                <div className="flex items-center space-x-[12px]">
                                                    <div className="bg-white rounded">
                                                        <div className="rounded-l-[1px] bg-gray-200 flex overflow-hidden  ml-[4px]  mb-[6px] mr-2 mt-[7px] relative">
                                                            <div className="w-[3px] absolute h-full left-0 bg-green-600 "></div>
                                                            <div className=" text-[15px] opacity-50 shadow-dark10 pl-2.5 font-medium leading-[22px] overflow-hidden rounded-[3px] inline-block  bg-white  ">
                                                                <div className="">
                                                                    <span className=" text-xs block md:text-[15px] font-medium leading-[22px] rounded-[30px]  rounded-tr-none bg-violet600 text-black ">
                                                                        Hi Manoj deshmukh Manoj, do you need any help with the products you have selected? We have saved your selection for your convenience so that you can continue where you left off. You have added the following items: Sank Magic Book(SET OF 4 Book + Pens+ Multiple Refills+Holder) View YOur Product
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="pl-[4px] text-xs md:text-[15px] font-medium leading-[22px] rounded-[30px] inline-block rounded-bl-none text-gray800">
                                                            Cancel My Order
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="text-end pb-2 w-full px-3">
                                                    <span className="text-[13px]  text-medium text-[#84828A]">
                                                        30/01/22 8:00 AM
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="chat-message relative">
                                        <div className="flex items-start justify-end">
                                            <div className="flex  px-4 py-2.5 flex-col space-y-[4px] bg-[#E0F6CA] rounded text-xs max-w-[442px] mr-2 order-1 items-end">
                                                <div className="flex items-center space-x-[12px] ">
                                                </div>
                                                <div className="flex items-center space-x-[12px]">
                                                    <span className=" text-xs md:text-[15px] font-medium leading-[22px] rounded-[30px] inline-block rounded-tr-none bg-violet600 text-black ">
                                                        Would you please tell us why you're cancelling this order?
                                                        <div className="mt-4">

                                                            <span className="text-xs block md:text-sm text-gray-800 "><span className="font-bold text-gray-900">Send 1 -</span> Ordered by Mistake</span>
                                                            <span className="text-xs block md:text-sm text-gray-800 "><span className="font-bold text-gray-900">Send 2 -</span> PRoduct not Required</span>
                                                            <span className="text-xs block md:text-sm text-gray-800 "><span className="font-bold text-gray-900">Send 3 -</span> Found Cheaper Alternative</span>
                                                            <span className="text-xs block md:text-sm text-gray-800 "><span className="font-bold text-gray-900">Send 4 -</span> Price to High</span>
                                                            <span className="text-xs block md:text-sm text-gray-800 "><span className="font-bold text-gray-900">Send 5 -</span> Cancelled by Mistake</span>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="text-[13px] flex text-medium text-[#84828A]">
                                                        30/01/22 8:00 AM <BsCheckAll className="w-4 ml-2 text-blue-600 h-4" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="chat-message relative">
                                        <div className="flex items-start ">
                                            <div className="flex flex-col rounded bg-white space-y-1 text-xs max-w-[442px] mx-2 order-2 items-start">
                                                <div className="flex items-center space-x-[12px]">
                                                    <div className="bg-white rounded">
                                                        <div className="rounded-l-[1px] bg-gray-200 flex overflow-hidden  ml-[4px]  mb-[6px] mr-2 mt-[7px] relative">
                                                            <div className="w-[3px] absolute h-full left-0 bg-green-600 "></div>
                                                            <div className=" text-[15px] opacity-50 shadow-dark10 pl-2.5 font-medium leading-[22px] overflow-hidden rounded-[3px] inline-block  bg-white  ">
                                                                <div className="flex flex-col mb-1 ">
                                                                    <span className="text-green-500 "> You</span>
                                                                    <span className=" text-xs md:text-[15px] font-medium leading-[22px] rounded-[30px] inline-block rounded-tr-none bg-violet600 text-black ">
                                                                        Would you please tell us why you're cancelling this order?
                                                                        <div className="mt-4">
                                                                            <span className="text-xs block md:text-sm text-gray-800 "><span className="font-bold text-gray-900">Send 1 -</span> Ordered by Mistake</span>
                                                                            <span className="text-xs block md:text-sm text-gray-800 "><span className="font-bold text-gray-900">Send 2 -</span> PRoduct not Required</span>
                                                                            <span className="text-xs block md:text-sm text-gray-800 "><span className="font-bold text-gray-900">Send 3 -</span> Found Cheaper Alternative</span>
                                                                            <span className="text-xs block md:text-sm text-gray-800 "><span className="font-bold text-gray-900">Send 4 -</span> Price to High</span>
                                                                            <span className="text-xs block md:text-sm text-gray-800 "><span className="font-bold text-gray-900">Send 5 -</span> Cancelled by Mistake</span>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="pl-[4px] text-xs md:text-[15px] font-medium leading-[22px] rounded-[30px] inline-block rounded-bl-none text-gray800">
                                                            Cancel My Order
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="text-end pb-2 w-full px-3">
                                                    <span className="text-[13px]  text-medium text-[#84828A]">
                                                        30/01/22 8:00 AM
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="fixed bg-indigo-200 md:bg-gray40  py-[18px] text-center md:relative flex-shrink-0 bottom-0 w-full">
                                <span className="text-gray-500 text-[12px] md:text-[14px]">Messaging is disabled as buyer has not responded in last 24 hours.</span>
                            </div>
                        </main>
                    )}
                    {(matches || (!matches && !openSt)) && (
                    <ContactLists  openState={openS} func={invite} data={responseD} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Message;

import React, { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { CheckIcon } from '@heroicons/react/20/solid'
import { getContactsList, loginUser } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import axios from 'axios';

const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Ordered cancelled by Buyer' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const ContactLists = (props) => {
    const [selected, setSelected] = useState(people[3])
    const [open, setOpen] = useState(false);
    const [invite, setInvite] = useState("d540d7b2-4203-ed11-8576-98f2b3d58af2");
    const [data, setData] = useState('')
    const contacts = useSelector((state) => state?.simpleReducer?.contact?.chatModals)
    const dispatch = useDispatch()

    props.func(invite)
    props.data(data)
    props.openState(open)

    useEffect(() => {
        dispatch(loginUser())
        dispatch(getContactsList())
    }, [])

    const handleMessageDetail = async (number) => {
        const res = await axios.get(`https://enapi.flyenbot.com/API/Chat/LoadChatDataOnScroll?AccountId=38&toNumber=${number}&offset=0&rowSize=10`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('Token')}`
            }
        }).then((r) => setData(r?.data?.userMessageModels))
    }

    return (
        <aside className="relative w-full lg:w-[462px] flex-shrink-0  border-r-[1.5px] bg-white overflow-hidden border-[#0904151F] lg:order-first flex flex-col">
            <div className="w-full">
                <div className=" my-3 ml-[25px] mr-[11.5px] bg-[#FAF9FD] ">
                    <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                            <>

                                <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                                        <span className="block truncate">{selected.name}</span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <BiChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </span>

                                    </Listbox.Button>
                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full custom-scroll overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {people.map((person) => (
                                                <Listbox.Option
                                                    key={person.id}
                                                    className={({ active }) =>
                                                        classNames(
                                                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                                        )
                                                    }
                                                    value={person}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                                                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                {person.name}
                                                            </span>

                                                            {selected ? (
                                                                <span
                                                                    className={classNames(
                                                                        active ? 'text-white' : 'text-indigo-600',
                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                    )}
                                                                >
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Listbox>
                </div>
            </div>
            <div className="absolute border-t-[1.5px] border-[#0904151F]  massage-scroll divide-y  overflow-y-auto mt-[66px]  inset-0 custom-scroll">
                {contacts?.map((item) => (
                    <div
                        className="flex items-center pl-[20px] pr-[18px] pt-[23.5px] pb-[23.5px] hover:bg-[#0904150F] "
                        onClick={() => {
                            setOpen(!open);
                            setInvite(item.id); handleMessageDetail(item?.number.replace(/ /g, ''))
                        }}
                        key={item.id}
                    >
                        <span

                            className="w-[50px] mr-2 text-green-500 flex items-center justify-center sm:mr-4 flex-shrink-0 h-[50px] rounded-full border-[2px] border-green-500 "
                        >
                            {/* {item.name} */}
                            <img src={`https://enapi.flyenbot.com${item.pic}`} className="text-sm truncate md:text-[14px] mb-[3px] font-medium leading-[26px] text-gray-800" />
                        </span>
                        <div className="flex-1 truncate">
                            <div className="flex items-center justify-between">
                                <h2 className="text-sm truncate md:text-[14px] mb-[3px] font-medium leading-[26px] text-gray-800">
                                    {item.name}
                                </h2>
                                <span className="text-[11px] md:text-[12px] text-gray-500 font-noraml leading-5">
                                    {moment(item.lastSeen).format('DD/MM/YY')}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}

export default ContactLists
import React, { Fragment, useState } from 'react'
import UseMediaQuery from '../hooks/UseMediaQuery';
import { Listbox, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { CheckIcon } from '@heroicons/react/20/solid'

const massage = [
    {
        id: 1,
        name: "Srinath Ravindranathan",
        status:
            "Kiara:",
        time: "30/01/22",

        current: true,
    },
    {
        id: 2,
        name: "Subbiah Suresh",
        status:
            "Re:",
        time: "27/01/22",
        pending: "10",
        current: true,
    },
    {
        id: 3,
        name: "Harish Agrawal",
        status:
            "Kiara:",
        time: "27/01/22",
        pending: "4",
        current: true,
    },
    {
        id: 4,
        name: "Sunain Buch",
        status:
            "Kiara:",
        time: "25/01/22",
        pending: "",
        current: true,
    },
    {
        id: 5,
        name: "Jumsheer Jamz",
        status:
            "Kiara:",
        time: "19/01/22",
        pending: "",
        current: true,
    },
    {
        id: 6,
        name: "Sameena Sameena",
        status:
            "Kiara:",
        time: "18/01/22",
        pending: "",
        current: true,
    },
    {
        id: 7,
        name: "Srikanth Ky",
        status:
            "Kiara:",
        time: "18/01/22",
        pending: "",
        current: true,
    },
    {
        id: 8,
        name: "Patel Nita",
        status:
            "Kiara:",
        time: "18/01/22",
        pending: "",
        current: true,
    },
    {
        id: 9,
        name: "Jeff Martin",
        status:
            "Kiara:",
        time: "18/01/22",
        pending: "",
        current: true,
    },
];

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
const ContactLists = () => {
    const matches = UseMediaQuery("(min-width: 1024px)");
    const [selected, setSelected] = useState(people[3])
    const [open, setOpen] = useState(false);
    const [invite, setInvite] = useState(1);

    return (
        <div className="min-h-[calc(100vh-7.4rem)] md:min-h-[calc(100vh-119px)] lg:min-h-[calc(100vh-76px)] bg-white flex">
            {(matches || (!matches && !open)) && (
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
                        {massage.map((item) => (
                            <div
                                className="flex items-center pl-[20px] pr-[18px] pt-[23.5px] pb-[23.5px] hover:bg-[#0904150F] "
                                onClick={() => {
                                    setOpen(!open);
                                    setInvite(item.id);
                                }}
                            >
                                <span

                                    className="w-[50px] mr-2 text-green-500 flex items-center justify-center sm:mr-4 flex-shrink-0 h-[50px] rounded-full border-[2px] border-green-500 "
                                >
                                    {item.name.substring(0, 1)}
                                </span>
                                <div className="flex-1 truncate">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-sm truncate md:text-[14px] mb-[3px] font-medium leading-[26px] text-gray-800">
                                            {item.name}
                                        </h2>
                                        <span className="text-[11px] md:text-[12px] text-gray-500 font-noraml leading-5">
                                            {item.time}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs text-gray-800 md:text-[14px] text-medium leading-[22px] truncate w-[266px]">
                                            {item.status}
                                        </p>
                                        {
                                            item.pending ? <span className="bg-green-600 flex-shrink-0 flex items-center justify-center text-[10px] pt-px leading-5 font-semibold text-white min-w-[20px] h-[20px] rounded-full">
                                                {item.pending}
                                            </span>
                                                :
                                                <></>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>
            )}
        </div>
    )
}

export default ContactLists
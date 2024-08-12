import React from "react";
import Notic from '../assets/Notic.svg'
import DarklightMode from '../assets/DarklightMode.svg'

const Sidebar = () => {
    return (
        <>
            <div className="flex  gap-3">
                <div className="h-10 w-10">
                    <img className="h-full w-full rounded-md object-cover object-center" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <h1 className="text-xl font-bold">Prashant</h1>
            </div>
            <div className="flex justify-between align-middle my-3">
                <div className="flex gap-2">
                    <img src={Notic} />
                    <img src={DarklightMode} />
                    <h1>{`>>`}</h1>
                </div>
                <button className="border border-black rounded px-2 bg-white">Logout</button>
            </div>
            <nav className="list-none">
                <li className="hover:(bg-red) p-2">Home</li>
                <li className="hover:bg-white p-2">Boards</li>
                <li className="hover:bg-white p-2">Setting</li>
                <li className="hover:bg-white p-2">Team</li>
                <li className="hover:bg-white p-2">Analytics</li>
            </nav>

        </>
    )
}
export default Sidebar;
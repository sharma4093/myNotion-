// create a layout with header, sidebar, and content

import Sidebar from "../Components/Sidebar";

// 

export default function Main() {
    return (
        <div className="flex h-screen">
            <aside className=" w-72 flex-none bg-blue-200 p-4"><Sidebar/></aside>
            <main className="min-w-0 flex-1 overflow-auto bg-blue-50 p-4">Content</main>
        </div>
    )
}   
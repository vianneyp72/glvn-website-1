import Link from 'next/link'
import NavBarParents from "../components/NavBarParents";

export default function ParentPortal () {
    return (
        <main className="bg-[url('/ClassListBackground.png')] bg-cover h-screen w-screen">
            <NavBarParents/>
            <div>
                <h1 className="flex py-8 px-8 flex-col items-center justify-between text-8xl font-bold">
                    Schedule/Calendar</h1><br/>
            </div>
        </main>
    )
}
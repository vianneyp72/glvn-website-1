import Link from 'next/link'
import NavBarParents from "../components/NavBarParents";

export default function ParentPortal () {
    return (
        <main className="bg-[url('/MultiPurposeBackground.png')] bg-cover h-screen w-screen">
            <NavBarParents/>
            <div>
                <h1 className="flex py-8 px-8 flex-col items-center justify-between text-8xl font-bold">
                    Parent Portal</h1><br/>
                <ul className="mt-4 rounded-2xl text-4xl text-neutral-600 font-bold text-center space-y-24">
                    <li><Link href="/registration-page" className="rounded-3xl bg-blue-200 hover:bg-blue-300 py-4 px-64 shadow-lg hover:shadow-2xl">
                        Registration</Link></li>
                    <li><Link href="/AbsentStudentPage" className="rounded-3xl bg-blue-200 hover:bg-blue-300 py-4 px-60 shadow-lg hover:shadow-2xl">
                        Absent Student</Link></li>
                    <li><Link href="/TeacherContactPage" className="rounded-3xl bg-blue-200 hover:bg-blue-300 py-4 px-60 shadow-lg hover:shadow-2xl">
                        Teacher Contact</Link></li>
                    <li><Link href="/SchedulePage" className="rounded-3xl bg-blue-200 hover:bg-blue-300 py-4 px-52 shadow-lg hover:shadow-2xl">
                        Schedule/Calendar</Link></li>
                </ul>
            </div>
        </main>
    )
}
import Link from 'next/link'
export default function TeacherPortal () {
    return (
        <main className="bg-[url('/TeacherPortalBackground.png')] h-screen w-screen">
            <div>
                <h1 className="flex py-8 px-8 flex-col items-center justify-between text-8xl font-bold">Teacher Portal</h1><br/>
                <ul className="mt-4 rounded-2xl text-4xl text-neutral-600 font-bold text-center space-y-16">
                    <li><Link href="/AttendancePage" className="rounded-3xl bg-yellow-100 hover:bg-yellow-200 py-2 px-64">Attendance</Link></li>
                    <li><Link href="/ClassListPage" className="rounded-3xl bg-yellow-100 hover:bg-yellow-200 py-2 px-64">Class List</Link></li>
                    <li><Link href="/DirectoryPage" className="rounded-3xl bg-yellow-100 hover:bg-yellow-200 py-2 px-64">Directory</Link></li>
                </ul>
            </div>
            <div className="flex py-8 px-8 flex flex-col items-center justify-between">
                <Link href="/" className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Go back</Link>
            </div>
        </main>
    )
}
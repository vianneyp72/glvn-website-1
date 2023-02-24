import Link from 'next/link'
export default function TeacherPortal () {
    return (
        <main className="bg-[url('/TeacherPortalBackground.png')] bg-cover h-screen w-screen">
            <div>
                <h1 className="flex py-8 px-8 flex-col items-center justify-between text-8xl font-bold">Teacher Portal</h1><br/>
                <ul className="mt-4 rounded-2xl text-4xl text-neutral-600 font-bold text-center space-y-16">
                    <li><Link href="/AttendancePage" className="rounded-3xl bg-yellow-100 hover:bg-yellow-200 py-2 px-64 shadow-lg hover:shadow-2xl">
                        Attendance</Link></li>
                    <li><Link href="/ClassListPage" className="rounded-3xl bg-yellow-100 hover:bg-yellow-200 py-2 px-64 shadow-lg hover:shadow-2xl">
                        Class List</Link></li>
                    <li><Link href="/DirectoryPage" className="rounded-3xl bg-yellow-100 hover:bg-yellow-200 py-2 px-64 shadow-lg hover:shadow-2xl">
                        Directory</Link></li>
                </ul>
            </div>
        </main>
    )
}
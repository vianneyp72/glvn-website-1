import Link from "next/link";
import Image from 'next/image'

function LandingPageViet() {
    return (
        <main className="bg-[url('/LandingPageBackgroundEdit.png')] h-screen w-screen">
            <title>GLVN</title>
            <div className="flex justify-center">
                <Link href="/">
                    <Image src="/GLVN_Minimal_small.png" alt="GLVN Icon" width={600} height={500}></Image>
                </Link>
            </div><br></br>

            <div className="flex justify-evenly px-96">

                <div className="teacher-portal rounded-3xl bg-fuchsia-200/75 py-8 px-8 flex flex-col items-center justify-between">
                    <h1 className="text-6xl font-bold text-neutral-700">Thầy Giáo Portal</h1>
                    <ul className="mt-4 text-4xl text-white text-center space-y-2">
                        <li>Danh Sách Lớp</li>
                        <li>Attendance</li>
                        <li>Directory</li>
                    </ul>
                    <div className="mt-8">
                        <Link href="/TeacherPortal" className="rounded-2xl bg-violet-300 hover:bg-violet-500 text-white text-4xl py-2 px-8">Visit!</Link>
                    </div>
                </div>

                <div className="parent-portal rounded-3xl bg-fuchsia-200/75 py-8 px-8 flex flex-col items-center justify-between">
                    <h1 className="text-6xl font-bold text-neutral-700">Cha Mẹ Portal</h1>
                    <ul className="mt-4 text-4xl text-white text-center space-y-2">
                        <li>Registration</li>
                        <li>Absent Student</li>
                        <li>Teacher Contact</li>
                        <li>Schedule/Calendar</li>
                    </ul>
                    <div className="mt-8">
                        <Link href="/ParentPortal" className="rounded-2xl bg-violet-300 hover:bg-violet-500 text-white text-4xl py-2 px-8">Visit!</Link>
                    </div>
                </div>

            </div>
            <footer className="flex h-10 justify-end ">
                <Link href="/" className="rounded bg-red-500 hover:bg-red-600 text-white py-2 px-4">
                    Translate to English!
                </Link>
            </footer>
        </main>
    );
}

export default LandingPageViet;
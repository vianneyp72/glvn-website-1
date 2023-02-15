import Link from "next/link";
import Image from 'next/image'

function LandingPage() {
    return (
        // FIND POSSIBLE WAY TO SCALE WEB APP
        <main className="bg-[url('/LandingPageBackground.png')] bg-cover h-screen w-screen">
            <title>GLVN</title>
            <div className="flex justify-center">
                <button onClick={()=> {history.go(0);}}>
                    <Image src="/GLVN_Minimal_small.png" alt="GLVN Icon" width={600} height={500}></Image>
                </button>
            </div><br></br>

            <div className="flex justify-evenly px-96 mr-20">

                <div className="teacher-portal rounded-3xl bg-fuchsia-200/75 py-5 px-5 flex flex-col items-center justify-between">
                    <h1 className="text-6xl font-bold text-neutral-700">Teacher Portal</h1>
                    <ul className="mt-4 text-4xl text-white text-center space-y-4">
                        <li>Class Lists</li>
                        <li>Attendance</li>
                        <li>Directory</li>
                    </ul>
                    <div className="mt-8">
                        <Link href="/TeacherPortal" className="rounded-2xl bg-violet-400 hover:bg-violet-500 text-white text-4xl py-2 px-8 shadow-lg hover:shadow-lg">Visit!</Link>
                    </div>
                </div>

                <div className="parent-portal rounded-3xl bg-fuchsia-200/75 py-5 px-5 flex flex-col items-center justify-between">
                    <h1 className="text-6xl font-bold text-neutral-700">Parent Portal</h1>
                    <ul className="mt-4 text-4xl text-white text-center space-y-4">
                        <li>Registration</li>
                        <li>Absent Student</li>
                        <li>Teacher Contact</li>
                        <li>Schedule/Calendar</li>
                    </ul>
                    <div className="mt-8">
                        <Link href="/ParentPortal" className="rounded-2xl bg-violet-400 hover:bg-violet-500 text-white text-4xl py-2 px-8 shadow-lg hover:shadow-lg">Visit!</Link>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default LandingPage;
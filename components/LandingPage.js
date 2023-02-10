import Image from 'next/image'
import React from "react";
import Link from 'next/link'

function LandingPage() {
    return (
        <body>
            <div className="flex justify-center">
                <Image src="/GLVN_Minimal.png" alt="GLVN Icon" width={600} height={500}></Image>
            </div><br></br>
            <div className="flex justify-evenly">
                <div className="teacher-portal">
                    <h1 className="text-4xl">Teacher Portal</h1>
                    <div className="mt-4 text-2xl text-center">
                        <p>Class Lists</p>
                        <p>Attendance</p>
                        <p>Directory</p>
                        <div className="mt-8">
                            <Link href="/TeacherPortal" className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Visit!</Link>
                        </div>
                    </div>
                </div>
                <div className="parent-portal">
                    <h1 className="text-4xl">Parent Portal</h1>
                    <div className="mt-4 text-2xl text-center">
                        <p>Registration</p>
                        <p>Absent Student</p>
                        <p>Teacher Contact</p>
                        <p>Schedule/Calendar</p>
                        {/*<button className="container mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 content-start">*/}
                        {/*    Visit!</button>*/}

                        {/*<a href="/components/ParentPortal" className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Visit!</a>*/}

                        <div className="mt-8">
                            <Link href="/ParentPortal" className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Visit!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default LandingPage;
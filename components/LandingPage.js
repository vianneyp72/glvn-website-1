import Image from 'next/image'

function LandingPage() {
    return (
        <body>
            <div
                style={{display: "flex", justifyContent: "center",}}
                className="flex">

                <Image src="/GLVN_Minimal.png" alt="GLVN Icon" width={350} height={200}></Image>
            </div><br></br>
            <div className="flex justify-evenly">
                {/*<button className="container bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 content-start">*/}
                {/*    I am a button*/}
                {/*</button>*/}
                <div class="teacher-portal">
                    <h1 className="text-3xl">Teacher Portal</h1>
                    <div className="text-1xl text-center">
                        <p>Class Lists</p>
                        <p>Attendance</p>
                        <p>Directory</p>
                        <button className="container bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 content-start">
                            Visit!</button>
                    </div>
                </div>
                <div class="parent-portal">
                    <h1 className="text-3xl">Parent Portal</h1>
                    <div className="text-1xl text-center">
                        <p>Registration</p>
                        <p>Absent Student</p>
                        <p>Teacher Contact</p>
                        <p>Schedule/Calendar</p>
                        <button className="container bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 content-start">
                            Visit!</button>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default LandingPage;
import Head from 'next/head';

const LandingPage = () => (
  <div className=" h-full min-h-screen justify-center items-center bg-purple-200">
    <Head>
      <title>Next13 App Landing Page</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.2/dist/tailwind.min.css" />
    </Head>
    <header className="w-full bg-white border-b border-gray-200 p-4">
      <nav className="flex items-center justify-between">
        <div className="text-lg font-medium">Next13 App</div>
        <div>
          <a href="#" className="text-blue-500 hover:text-blue-700">Sign In</a>
        </div>
      </nav>
    </header>
    <div className='flex'>

    <div className="w-full max-w-sm mt-16">
      <div className="bg-white rounded shadow-lg p-8 flex flex-col justify-between h-64 w-64">
        <h2 className="text-lg font-medium mb-4">Parent Portal</h2>
        <ul className="list-disc ml-4 text-gray-700 text-base mb-4">
          <li>Registration</li>
          <li>Absent Student</li>
          <li>Teacher Contact</li>
          <li>Schedule/Calendar</li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mb-8 visit-btn">
          Visit!
        </button>
      </div>
    </div>
    <div className="w-full max-w-sm mt-8">
      <div className="bg-white rounded shadow-lg p-8 flex flex-col justify-between h-64 w-64">
        <h2 className="text-lg font-medium mb-4">Teacher Portal</h2>
        <ul className="list-disc ml-4 text-gray-700 text-base mb-4">
          <li>Class List</li>
          <li>Attendance</li>
          <li>Directory</li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mb-8 visit-btn">
          Visit!
        </button>
      </div>
    </div>
  </div>
    </div>
);

export default LandingPage;

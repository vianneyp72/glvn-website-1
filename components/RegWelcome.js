export default function RegWelcome() {
  return (
    <div className="min-h-screen bg-primary overflow-auto text-white ">
      <p className="pt-10 pb-10 mb-10"></p>
      <div className="flex justify-center">
        <div className="bg-secondary shadow-lg p-10 rounded-lg w-2/3 sm:w-1/2 lg:w-1/3 text-center">
          <h3 className="font-bold text-4xl sm:text-6xl pb-10">Welcome!</h3>
          <p1 className="text-primarytext text-xs sm:text-lg font-bold">
            Create an Account.
            <br />
            Setup your family profile.
            <br />
            Register your kids for the following school year!
          </p1>
          <br />
          <div className="border border-gray-700 mt-10 mb-10"></div>
          <a
            href="/family-profile-page"
            className="bg-fourth p-3 mt-3 rounded-md hover:bg-onhover shadow-lg"
          >
            Get Started!
          </a>
        </div>
      </div>
    </div>
  );
}

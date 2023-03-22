import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function RegWelcome() {
  const { locale, locales, push } = useRouter();
  const { t: translate } = useTranslation("welcome");

  // const handleClick = (l) => {
  //   push("/family-profile-page", undefined, { locale: l });
  // };

  return (
    <div className="min-h-screen bg-primary overflow-auto text-white ">
      <p className="pt-10 pb-10 mb-10"></p>
      <div className="flex justify-center">
        <div className="bg-secondary shadow-lg p-10 rounded-lg w-2/3 sm:w-1/2 lg:w-1/3 text-center">
          <h3 className="font-bold text-4xl sm:text-6xl pb-10">
            {translate("Welcome!")}
          </h3>
          <h3 className="text-primarytext text-xs sm:text-lg font-bold">
            {translate("Create an Account.")}
            <br />
            {translate("Setup your family profile.")}
            <br />
            {translate("Register for the school year!")}
            <br />
          </h3>
          <div className="border border-gray-700 mt-10 mb-10"></div>
          <button className="bg-fourth p-3 mt-3 rounded-md hover:bg-onhover shadow-lg">
            <Link href={"/family-profile-page"} locale={locale}>
              {translate("Get Started!")}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

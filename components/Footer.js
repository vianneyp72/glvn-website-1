export default function NavBar() {
  return (
    <footer class="p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-primary border-t border-gray-700">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="" class="hover:underline">
          St.Anne St.Joseph Hien Giáo Lý Việt Ngữ
        </a>
        <a>. All Rights Reserved.</a>
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" class="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
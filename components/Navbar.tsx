export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="text-2xl font-bold text-blue-900">
          Hiranyakh Chatterjee
        </div>

        <ul className="hidden gap-8 font-medium md:flex">
          <li className="cursor-pointer hover:text-blue-700">Home</li>
          <li className="cursor-pointer hover:text-blue-700">About</li>
          <li className="cursor-pointer hover:text-blue-700">Services</li>
          <li className="cursor-pointer hover:text-blue-700">Blog</li>
          <li className="cursor-pointer hover:text-blue-700">Contact</li>
        </ul>

        <button className="rounded-lg bg-blue-700 px-5 py-2 text-white hover:bg-blue-800">
          Book Consultation
        </button>

      </div>
    </nav>
  );
}
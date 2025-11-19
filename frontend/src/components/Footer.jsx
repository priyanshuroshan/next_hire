import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and About */}
          <div>
            <h1 className='text-2xl font-bold'>Next<span className='text-[#F83002]'>Hire</span></h1>
            <p className="text-gray-600 mt-3">
              Find your dream job or hire top talent with ease. A smarter platform for modern hiring.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">Jobs</a></li>
              <li><a href="#" className="hover:text-blue-600">Companies</a></li>
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600">Career Tips</a></li>
              <li><a href="#" className="hover:text-blue-600">Support</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600"><Facebook /></a>
              <a href="#" className="text-gray-500 hover:text-blue-600"><Twitter /></a>
              <a href="#" className="text-gray-500 hover:text-blue-600"><Linkedin /></a>
              <a href="#" className="text-gray-500 hover:text-blue-600"><Github /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} NextHire - A Fullstack JobPortal Project</p>
          <p className="mt-2 md:mt-0">
            Built with ❤️ by <span className="text-blue-600 font-semibold">Priyanshu Roshan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

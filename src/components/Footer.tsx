import React from 'react';

interface FooterProps {
  companyName: string;
  address: string;
  phone: string;
  email: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ companyName, address, phone, email, year }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">{companyName}</h3>
          <p className="text-sm">{address}</p>
          <p className="text-sm mt-2">Phone: {phone}</p>
          <p className="text-sm">Email: {email}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-sm hover:text-gray-300">About Us</a></li>
            <li><a href="/services" className="text-sm hover:text-gray-300">Services</a></li>
            <li><a href="/contact" className="text-sm hover:text-gray-300">Contact</a></li>
            <li><a href="/privacy" className="text-sm hover:text-gray-300">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        {/* <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">Subscribe for updates</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mb-2 text-black rounded"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
            Subscribe
          </button>
        </div> */}

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-300">Facebook</a>
            <a href="https://twitter.com" className="hover:text-gray-300">Twitter</a>
            <a href="https://instagram.com" className="hover:text-gray-300">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">© {year} {companyName}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";

const Footer = () => {
  const linkClasses = "hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-left";

  return (
    <footer className="bg-black text-gray-400 py-16 px-8 md:px-20">
      <div className="grid md:grid-cols-4 gap-12">
        {/* Column 1 */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">RexiPay</h2>
          <p className="mb-6">
            Experience the future of financial transactions — fast, secure, and limitless.
            Transfer, withdraw, and manage your funds with ease.
          </p>
          <p className="text-sm">© {new Date().getFullYear()} RexiPay. All rights reserved.</p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {["Money Transfer", "Bill Payments", "Crypto Exchange", "POS-Free Payments"].map((item, i) => (
              <li key={i}>
                <button className={linkClasses}>{item}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            {["About Us", "Careers", "Blog", "Contact"].map((item, i) => (
              <li key={i}>
                <button className={linkClasses}>{item}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            {["Help Center", "FAQs", "Security", "Report Issue"].map((item, i) => (
              <li key={i}>
                <button className={linkClasses}>{item}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">Built with  by the RexiPay Team</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          {["Privacy Policy", "Terms of Service"].map((item, i) => (
            <button key={i} className={linkClasses}>{item}</button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { X, Phone, Mail, Building2, Calendar } from "lucide-react";

const ContactUs = ({ onClose }) => {
  return (
    // Full screen overlay with very high z-index
    <div className="fixed inset-0 z-[1000] bg-black bg-opacity-40 flex justify-center items-center">
      {/* Modal content box */}
      <div className="bg-white w-full max-w-md max-h-[90vh] p-8 relative rounded shadow-lg overflow-y-auto animate-slideInRight">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          <X size={24} />
        </button>

        <h2 className="text-xl font-semibold mb-6">CONTACT US</h2>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Phone size={16} />
            <span className="font-medium">+977 98000000</span>
          </div>
          <p className="text-sm text-gray-600">Monday - Friday, 8am - 6pm (ET)</p>
        </div>

        <div className="mb-6 space-y-1 text-sm">
          <div>
            <Mail size={14} className="inline mr-2" />
            Consumer: <span className="font-medium">concierge@decor.com</span>
          </div>
          <div>Trade: <span className="font-medium">us.sales@decor.com</span></div>
          <div>Contract: <span className="font-medium">contract@decor.com</span></div>
          <div>Press: <span className="font-medium">press@decor.com</span></div>
        </div>

        <div className="mb-6 text-sm">
          <div className="flex items-center gap-2">
            <Building2 size={14} />
            <span>
              <strong>Decor Galleria Biratnagar</strong>
              <br />
              518 West 19th Street, Biratnagar
            </span>
          </div>
        </div>

        <button className="mt-8 border border-black px-6 py-3 flex items-center gap-2 text-sm hover:bg-black hover:text-white transition">
          <Calendar size={16} />
          BOOK A CALL
        </button>
      </div>
    </div>
  );
};

export default ContactUs;

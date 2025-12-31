import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactForm() {

  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormEmpty = !formData.name.trim() || !formData.email.trim() || !formData.message.trim();

  const handleSendMail = () => {

    if (isFormEmpty) {
      return; // stop execution if fields are empty
    }

    const email = "deepikagovindaswamy@gmail.com";
    const subject = encodeURIComponent(`Mail from ${formData.name} + ${formData.email}`);
    const body = encodeURIComponent(formData.message);
  
   window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

   setShowPopup(true);

  setFormData({
    name: "",
    email: "",
    message: ""
  });

  // Auto-hide popup after 3 seconds
  setTimeout(() => {
    setShowPopup(false);
  }, 3000);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 via-purple-50 to-yellow-50 flex items-center justify-center px-4 py-12">
      {showPopup && (
        <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-green-600 px-5 py-3 text-white shadow-lg transition-all">
          ✅ Your message has been sent to Deepika successfully!
        </div>
      )}
      <div className="w-full mt-9 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
            Get in touch
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            I'd like to hear from you! <br/> If you have any inquire or opportunities let's discuss!
          </p>
        </div>

        {/* Form Section */}
        <div className="space-y-6 mb-10">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Message Textarea */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="6"
            className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all text-gray-900 placeholder-gray-400 resize-none"
          />

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSendMail}
              className="group bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-base hover:text-black hover:bg-transparent transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Send now
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center pt-8 border-t border-gray-200">
          {/* <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Deepika
          </h2> */}
          <div className="flex items-center justify-center gap-7 text-gray-600">

            <div className="flex items-center justify-center gap-2">
              <FaLinkedin className="w-5 h-5" />
              <a href="https://www.linkedin.com/in/deepika-gs" target="_blank" className="text-base md:text-lg hover:text-gray-900 transition-colors">
                LinkedIn
              </a>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:deepikagovindaswamy@gmail.com" target="_blank" className="text-base md:text-lg hover:text-gray-900 transition-colors">
                deepikagovindaswamy@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-2">
              <FaGithub className="w-5 h-5" />
              <a href="https://github.com/Deepika-Govindaswamy" target="_blank" className="text-base md:text-lg hover:text-gray-900 transition-colors">
                GitHub
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
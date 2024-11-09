import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-tr-2xl shadow-lg ${className}`}>
      {children}
    </div>
  );
};

const RegistrationForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <Card className="max-w-5xl mx-auto p-8">
        <div className="text-center mb-8">
          <h1 className="text-blue-900 font-bold text-xl">OCL LOGO</h1>
          <h2 className="text-blue-900 font-bold text-2xl">REGISTRATION FORM</h2>
        </div>

        <form className="space-y-8">
          {/* Personal Details Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-orange">1. PERSONAL DETAILS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-gray-700">First Name :</label>
                <input
                  type="text"
                  placeholder="Enter your name.."
                  className="w-full p-3 bg-[#EEEEEE] rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700">Surname :</label>
                <input
                  type="text"
                  placeholder="Enter your name.."
                  className="w-full p-3 bg-[#EEEEEE] rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700">Date of Birth :</label>
                <input
                  type="date"
                  className="w-full p-3 bg-[#EEEEEE] rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700">Age at Program Start :</label>
                <input
                  type="number"
                  placeholder="Enter your age..."
                  className="w-full p-3 bg-[#EEEEEE] rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700">Gender :</label>
                <select className="w-full p-3 bg-[#EEEEEE] rounded-md">
                  <option value="">Select your gender...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-gray-700">Country (as per Passport) :</label>
                <input
                  type="text"
                  placeholder="Enter your country..."
                  className="w-full p-3 bg-[#EEEEEE] rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Academic Information Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-orange">2. ACADEMIC INFORMATION</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-gray-700">Institution Attended/Enrolled :</label>
                <select className="w-full p-3 bg-[#EEEEEE] rounded-md">
                  <option value="">Select your Institution ...</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-gray-700">Major Subject (Desired)</label>
                <select className="w-full p-3 bg-[#EEEEEE] rounded-md">
                  <option value="">Select your subject ...</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-gray-700">Minor Subject (Desired)</label>
                <select className="w-full p-3 bg-[#EEEEEE] rounded-md">
                  <option value="">Select your subject ...</option>
                </select>
              </div>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-orange">3. CONTACT DETAILS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-700">Email Id :</label>
                <input
                  type="email"
                  placeholder="info@xyz.com"
                  className="w-full p-3 bg-[#EEEEEE] rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700">Mobile No. :</label>
                <input
                  type="tel"
                  placeholder="+91 - 98596 58000"
                  className="w-full p-3 bg-[#EEEEEE] rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Program Information Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-orange">4. PROGRAM INFORMATION</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-gray-700">Program Applied For :</label>
                <select className="w-full p-3 bg-[#EEEEEE] rounded-md">
                  <option value="">Select your program ...</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-gray-700">Visa Requirement (Yes/No)</label>
                <select className="w-full p-3 bg-[#EEEEEE] rounded-md">
                  <option value="">Select requirement ...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-gray-700">How Did You Hear About This Program?</label>
                <input
                  type="text"
                  placeholder="..."
                  className="w-full p-3 bg-[#EEEEEE] rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-darkblue text-white px-8 py-3 rounded-full "
            >
              Register Now
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default RegistrationForm;
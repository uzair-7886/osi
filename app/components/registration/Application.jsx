import { useState } from 'react';

const RegistrationFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ageGroup: '',
    subject1: '',
    subject2: '',
    firstName: '',
    surname: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    mobile: '',
    address: '',
    town: '',
    country: '',
    institution: '',
    institutionName: '',
    institutionCity: '',
    institutionCountry: '',
    visaRequirement: '',
    hearAbout: '',
    cardType: '',
    cardHolder: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    cvv: '',
    agreed: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const StepIndicator = () => (
    <div className="w-2/5 bg-[#003180] p-8 flex flex-col">
      <div className="text-white text-2xl font-bold mb-12">OCL LOGO</div>
      <div className="flex flex-col space-y-8 font-semibold relative">
        <div className="absolute left-5 top-10 w-0.5 h-[calc(100%-40px)] bg-grey"></div>
        <div 
          className="absolute left-5 top-10 w-0.5 bg-orange transition-all duration-300"
          style={{
            height: `${(Math.max(0, Math.min(step - 1, 2)) * 25)}%`
          }}
        ></div>
        
        <div className="flex items-center">
          <div className={`w-10 h-10 rounded-full border-2 ${step >= 1 ? 'border-orange' : 'border-grey'} flex items-center justify-center text-white bg-[#003180] relative z-10`}>1</div>
          <span className="ml-4 text-white">Registration Form</span>
        </div>
        <div className="flex items-center">
          <div className={`w-10 h-10 rounded-full border-2 ${step >= 2 ? 'border-orange' : 'border-grey'} flex items-center justify-center text-white bg-[#003180] relative z-10`}>2</div>
          <span className="ml-4 text-white">Application Form</span>
        </div>
        <div className="flex items-center">
          <div className={`w-10 h-10 rounded-full border-2 ${step >= 4 ? 'border-orange' : 'border-grey'} flex items-center justify-center text-white bg-[#003180] relative z-10`}>3</div>
          <span className="ml-4 text-white">Confirm Application</span>
        </div>
      </div>
    </div>
  );

  const RegistrationStep = () => (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-[#003180] mb-2 text-center">OCL LOGO</h1>
      <h2 className="text-xl text-orange font-semibold mb-8 text-center">REGISTRATION FORM</h2>
      <div className="space-y-6 max-w-sm w-full text-[#555555]">
        <div>
          <label className="block mb-2">Age Group :</label>
          <div className="relative">
            <select 
              name="ageGroup"
              value={formData.ageGroup}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#EEEEEE] rounded-lg appearance-none"
            >
              <option value="">Select your age...</option>
            </select>
            <img 
              src="/svgs/chev-down.svg" 
              alt="dropdown" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2">Subject 1 :</label>
          <div className="relative">
            <select
              name="subject1"
              value={formData.subject1}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#EEEEEE] rounded-lg appearance-none"
            >
              <option value="">Select subject ...</option>
            </select>
            <img 
              src="/svgs/chev-down.svg" 
              alt="dropdown" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2">Subject 2 :</label>
          <div className="relative">
            <select
              name="subject2"
              value={formData.subject2}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#EEEEEE] rounded-lg appearance-none"
            >
              <option value="">Select subject ...</option>
            </select>
            <img 
              src="/svgs/chev-down.svg" 
              alt="dropdown" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button 
            onClick={() => setStep(2)}
            className="bg-[#003180] text-white px-6 py-3 rounded-full "
          >
            Apply Now
          </button>
        </div>
          <div>
            <ProgressBars currentStep={step}/>
          </div>
      </div>
    </div>
  );

  const ApplicationStep = () => (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#003180] mb-2 text-center">OCL LOGO</h1>
      <h2 className="text-xl text-orange font-semibold mb-4 text-center">APPLICATION FORM</h2>
      <h3 className="text-2xl font-semibold mb-6 text-center text-[#003180]">1. PERSONAL DETAILS</h3>
      <div className="grid grid-cols-2 gap-6 max-w-4xl text-[#555555]">
        <div>
          <label className="block mb-2">First Name :</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your name.."
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Surname :</label>
          <input
            type="text"
            name="surname"
            placeholder="Enter your name.."
            value={formData.surname}
            onChange={handleInputChange}
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Date of Birth :</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Gender:</label>
          <div className="relative">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#EEEEEE] rounded-lg appearance-none"
            >
              <option value="">Select gender ...</option>
            </select>
            <img 
              src="/svgs/chev-down.svg" 
              alt="dropdown" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2">Email Id :</label>
          <input
            type="email"
            name="email"
            placeholder="info@xyz.com"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Mobile No. :</label>
          <input
            type="tel"
            name="mobile"
            placeholder="+91 - 98596 58000"
            value={formData.mobile}
            onChange={handleInputChange}
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Home Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address..."
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Town/City</label>
          <input
            type="text"
            name="town"
            placeholder="Enter your Town/City..."
            value={formData.town}
            onChange={handleInputChange}
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div className="col-span-2">
          <label className="block mb-2">Country (as per Passport) :</label>
          <input
            type="text"
            name="country"
            placeholder="Enter your country..."
            value={formData.country}
            onChange={handleInputChange}
            className="w-1/2 p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
      </div>
      <div className='flex justify-center'>
      <button 
        onClick={() => setStep(3)}
        className="mt-8 bg-[#003180] text-white px-6 py-2 rounded-full"
      >
        Next
      </button>
      </div>
      <div>
            <ProgressBars currentStep={step}/>
          </div>
    </div>
  );

  const FurtherInfoStep = () => (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#003180] mb-2 text-center">OCL LOGO</h1>
      <h2 className="text-xl text-orange font-semibold mb-4 text-center">APPLICATION FORM</h2>
      <h3 className="text-2xl font-semibold mb-6 text-center text-[#003180]">2. FURTHER INFORMATION</h3>
      <div className="grid grid-cols-2 gap-6 max-w-4xl text-[#555555]">
      <div>
          <label className="block mb-2">Your Institution (School/University/Organisation):</label>
          <div className="relative">
            <select
              name="institution"
              value={formData.institution}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#EEEEEE] rounded-lg appearance-none"
            >
              <option value="">Select your institution ...</option>
            </select>
            <img 
              src="/svgs/chev-down.svg" 
              alt="dropdown" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2">Institution Name :</label>
          <input
            type="text"
            name="institutionName"
            placeholder="Enter your Institution name.."
            value={formData.institutionName}
            onChange={handleInputChange}
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Institution City :</label>
          <input
            type="text"
            name="institutionCity"
            placeholder="Enter your Institution city .."
            value={formData.institutionCity}
            onChange={handleInputChange}
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Institution Country(Optional) :</label>
          <input
            type="text"
            name="institutionCountry"
            placeholder="Enter your Institution Country .."
            value={formData.institutionCountry}
            onChange={handleInputChange}
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Visa Requirement (Yes/No):</label>
          <div className="relative">
            <select
              name="visaRequirement"
              value={formData.institution}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#EEEEEE] rounded-lg appearance-none"
            >
              <option value="">Select requirement ...</option>
            </select>
            <img 
              src="/svgs/chev-down.svg" 
              alt="dropdown" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2">How Did You Hear About This Program?</label>
          <input
            type="text"
            name="hearAbout"
            placeholder="..."
            value={formData.hearAbout}
            onChange={handleInputChange}
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
      </div>
      <div className='flex justify-center'>
      <button 
        onClick={() => setStep(4)}
        className="mt-8 bg-[#003180] text-white px-6 py-2 rounded-full"
      >
        Apply Now
      </button>
      </div>
      <div>
            <ProgressBars currentStep={step}/>
          </div>
    </div>
  );

  const ConfirmationStep = () => (
    <div className="p-8 ">
      <h1 className="text-2xl font-bold text-[#003180] mb-2 text-center">OCL LOGO</h1>
      <h2 className="text-xl text-orange font-semibold mb-8 text-center">CONFIRM APPLICATION</h2>
      <div className="max-w-4xl text-[#555555]">
      <table className="w-full border-collapse border border-[#555555] mb-8">
        <thead>
          <tr>
            <th className="border border-[#555555] p-1 text-left font-normal">Program</th>
            <th className="border border-[#555555] p-1 text-right w-[200px] font-normal">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#555555] p-1">
              <div className="mb-4">Oxford Centre for Leadership Summer Program Summer Program - th Jul - st Aug 2025</div>
              <div className="space-y-1">
                <div>Age Group: (Auto Filled)</div>
                <div>Subject 1: (Auto Filled)</div>
                <div>Subject 2: (Auto Filled)</div>
              </div>
            </td>
            <td className="border border-[#555555] p-1 text-right">£ (Auto Filled)</td>
          </tr>
          <tr>
            <td className="border border-[#555555] p-1 ">Total</td>
            <td className="border border-[#555555] p-1 text-right ">£ (Auto Filled)</td>
          </tr>
        </tbody>
      </table>

        <div className="space-y-6">
          <h3 className="font-semibold">Credit/Debit Card Secure Payment</h3>
          <div className="grid grid-cols-2 gap-6">
            
            <div>
              <label className="block mb-2">Cardholder *</label>
              <input
                type="text"
                name="cardHolder"
                placeholder="..."
                value={formData.cardHolder}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#EEEEEE] rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2">Card Number *</label>
              <input
                type="text"
                name="cardNumber"
                placeholder="..."
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#EEEEEE] rounded-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block mb-2">Expiration Date *</label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="expirationMonth"
                  placeholder="Month"
                  value={formData.expirationMonth}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#EEEEEE] rounded-lg"
                />
                <input
                  type="text"
                  name="expirationYear"
                  placeholder="Year"
                  value={formData.expirationYear}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#EEEEEE] rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2">Card Verification Number *</label>
              <input
                type="text"
                name="cvv"
                placeholder="..."
                value={formData.cvv}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#EEEEEE] rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm mb-4">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes</p>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleInputChange}
                className="mr-4"
            />
            <span>I have read and agree to the website terms and conditions</span>
            </div>
            <div className="flex justify-center">
            <button
                className="bg-[#003180] text-white px-6 py-2 rounded-full"
            >
                Confirm Application
            </button>
            </div>
            <div>
            <ProgressBars currentStep={step}/>
          </div>
        </div>
        </div>
    </div>
    );

    const ProgressBars = ({ currentStep = 1 }) => {
        const getBarStyle = (barIndex) => {
          if (barIndex === 0) {
            return currentStep >= 1 ? 'bg-orange flex-grow' : 'bg-[#12243E] bg-opacity-10 flex-grow';
          }
          if (barIndex === 1) {
            if (currentStep < 2) return 'bg-[#12243E] bg-opacity-10 flex-grow';
            if (currentStep === 2) return 'bg-orange w-1/2';
            return 'bg-orange flex-grow';
          }
          if (barIndex === 2) {
            return currentStep >= 4 ? 'bg-orange flex-grow' : 'bg-[#12243E] bg-opacity-10 flex-grow';
          }
        };
      
        return (
          <div className="w-auto mx-auto flex gap-5 justify-center mt-10">
            {[0, 1, 2].map((barIndex) => (
              <div key={barIndex} className="h-[5px] flex bg-[#12243E] bg-opacity-10 overflow-hidden" style={{ minWidth: '90px' }}>
                <div 
                  className={`h-full transition-all duration-300 ${getBarStyle(barIndex)}`}
                />
              </div>
            ))}
          </div>
        );
      };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-5">
        <div className="flex rounded-tr-[40px] w-4/5 shadow-2xl">
            <StepIndicator/>
            <div className="w-full">
                {step === 1 && <RegistrationStep/>}
                {step === 2 && <ApplicationStep/>}
                {step === 3 && <FurtherInfoStep/>}
                {step === 4 && <ConfirmationStep/>}
            </div>
        </div>
        </div>
    );

    
}

export default RegistrationFlow;
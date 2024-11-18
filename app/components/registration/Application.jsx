import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { client } from "@/sanity/lib/client";

const RegistrationFlow = () => {
  const [step, setStep] = useState(1);
  const [applicationId, setApplicationId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm({
    defaultValues: {
      applicationId: "",
      status: "draft",
      step1: {
        ageGroup: "",
        subject1: "",
        subject2: "",
      },
      step2: {
        firstName: "",
        surname: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        mobile: "",
        address: "",
        town: "",
        country: "",
      },
      step3: {
        institution: "",
        institutionName: "",
        institutionCity: "",
        institutionCountry: "",
        visaRequirement: false,
        hearAbout: "",
      },
      payment: {
        amount: 0,
        paymentStatus: "pending",
      },
      termsAgreed: false,
    },
  });

  const { handleSubmit, register, getValues, setValue } = methods;

  const saveRegistration = async (data) => {
    setIsSubmitting(true);
    try {
      const registrationDoc = {
        _type: "registration",
        status: "pending_payment",
        applicationId: uuidv4(),
        step1: {
          ageGroup: data.step1.ageGroup,
          subject1: data.step1.subject1,
          subject2: data.step1.subject2,
        },
        step2: {
          firstName: data.step2.firstName,
          surname: data.step2.surname,
          dateOfBirth: data.step2.dateOfBirth,
          gender: data.step2.gender,
          email: data.step2.email,
          mobile: data.step2.mobile,
          address: data.step2.address,
          town: data.step2.town,
          country: data.step2.country,
        },
        step3: {
          institution: data.step3.institution,
          institutionName: data.step3.institutionName,
          institutionCity: data.step3.institutionCity,
          institutionCountry: data.step3.institutionCountry,
          visaRequirement: data.step3.visaRequirement,
          hearAbout: data.step3.hearAbout,
        },
        payment: {
          amount: data.payment.amount,
          paymentStatus: "pending",
        },
        termsAgreed: data.termsAgreed,
      };

      const result = await client.create(registrationDoc);
      setApplicationId(result._id);
      setValue("applicationId", result._id);
      return result._id;
    } catch (error) {
      console.error("Error saving registration:", error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentUpdate = async (registrationId, paymentStatus) => {
    try {
      await client
        .patch(registrationId)
        .set({
          "payment.paymentStatus": paymentStatus,
          status: "completed",
        })
        .commit();
    } catch (error) {
      console.error("Error updating payment:", error);
      throw error;
    }
  };

  const onSubmit = async (data) => {
    try {
      if (step < 3) {
        setStep(step + 1);
      } else if (step === 3) {
        if (data.step3.visaRequirement) {
          data.step3.visaRequirement =
            data.step3.visaRequirement === "yes" ? true : false;
        }
        const registrationId = await saveRegistration(data);
        setStep(4);
      } else if (step === 4) {
        // Handle payment confirmation
        await handlePaymentUpdate(applicationId, "completed");
        // Redirect to success page or show success message
        console.log("Registration and payment completed");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const ProgressBars = ({ currentStep }) => {
    const getBarStyle = (barIndex) => {
      if (barIndex === 0) {
        return currentStep >= 1
          ? "bg-orange flex-grow"
          : "bg-[#12243E] bg-opacity-10 flex-grow";
      }
      if (barIndex === 1) {
        if (currentStep < 2) return "bg-[#12243E] bg-opacity-10 flex-grow";
        if (currentStep === 2) return "bg-orange w-1/2";
        return "bg-orange flex-grow";
      }
      if (barIndex === 2) {
        return currentStep >= 4
          ? "bg-orange flex-grow"
          : "bg-[#12243E] bg-opacity-10 flex-grow";
      }
    };

    return (
      <div className="w-auto mx-auto flex gap-5 justify-center mt-10">
        {[0, 1, 2].map((barIndex) => (
          <div
            key={barIndex}
            className="h-[5px] flex bg-[#12243E] bg-opacity-10 overflow-hidden"
            style={{ minWidth: "90px" }}
          >
            <div
              className={`h-full transition-all duration-300 ${getBarStyle(barIndex)}`}
            />
          </div>
        ))}
      </div>
    );
  };

  const StepIndicator = () => {
    // Mobile Step Indicator (Horizontal)
    const MobileSteps = () => (
      <div className="relative flex justify-center items-center px-8 mb-4">
        {/* Container for steps and lines */}
        <div className="relative flex items-center justify-between w-full max-w-xs">
          {/* Background line */}
          <div className="absolute top-5 left-10 right-10 h-0.5 bg-grey"></div>
          {/* Progress line */}
          <div 
            className="absolute top-5 left-10 h-0.5 bg-orange transition-all duration-300"
            style={{
              width: `${Math.max(0, Math.min(step - 1, 2)) * 40}%`,
            }}
          ></div>
          
          {/* Step indicators */}
          {[1, 2, 3].map((num) => (
            <div key={num} className="relative z-10">
              <div
                className={`w-10 h-10 rounded-full border-2 ${
                  step >= (num === 3 ? 4 : num) ? "border-orange" : "border-grey"
                } flex items-center justify-center text-white bg-[#003180]`}
              >
                {num}
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    // Desktop Step Indicator (Vertical)
    const DesktopSteps = () => (
      <div className="flex flex-col space-y-8 font-semibold relative">
        <div className="absolute left-5 top-10 w-0.5 h-[calc(100%-40px)] bg-grey"></div>
        <div
          className="absolute left-5 top-10 w-0.5 bg-orange transition-all duration-300"
          style={{
            height: `${Math.max(0, Math.min(step - 1, 2)) * 25}%`,
          }}
        ></div>
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full border-2 ${
              step >= 1 ? "border-orange" : "border-grey"
            } flex items-center justify-center text-white bg-[#003180] relative z-10`}
          >
            1
          </div>
          <span className="ml-4 text-white">Registration Form</span>
        </div>
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full border-2 ${
              step >= 2 ? "border-orange" : "border-grey"
            } flex items-center justify-center text-white bg-[#003180] relative z-10`}
          >
            2
          </div>
          <span className="ml-4 text-white">Application Form</span>
        </div>
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full border-2 ${
              step >= 4 ? "border-orange" : "border-grey"
            } flex items-center justify-center text-white bg-[#003180] relative z-10`}
          >
            3
          </div>
          <span className="ml-4 text-white">Confirm Application</span>
        </div>
      </div>
    );

    return (
      <div className="w-full md:w-2/5 bg-[#003180] p-4 md:p-8">
        <div className="text-white text-xl md:text-2xl font-bold mb-6 md:mb-12">
          OCL LOGO
        </div>
        <div className="block md:hidden">
          <MobileSteps />
        </div>
        <div className="hidden md:block">
          <DesktopSteps />
        </div>
      </div>
    );
  };

  const RegistrationStep = () => (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 flex flex-col items-center"
    >
      <h1 className="text-2xl font-bold text-[#003180] mb-2 text-center">
        OCL LOGO
      </h1>
      <h2 className="text-xl text-orange font-semibold mb-8 text-center">
        REGISTRATION FORM
      </h2>
      <div className="space-y-6 max-w-sm w-full text-[#555555]">
        <div>
          <label className="block mb-2">Age Group :</label>
          <div className="relative">
            <select
              {...register("step1.ageGroup")}
              className="w-full p-3 bg-[#EEEEEE] rounded-lg appearance-none"
              disabled={isSubmitting}
            >
              <option value="">Select your age...</option>
              <option value="13-15">13-15</option>
              <option value="16-17">16-17</option>
              <option value="18+">18+</option>
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
              {...register("step1.subject1")}
              className="w-full p-3 bg-[#EEEEEE] rounded-lg appearance-none"
              disabled={isSubmitting}
            >
              <option value="">Select subject ...</option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
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
              {...register("step1.subject2")}
              className="w-full p-3 bg-[#EEEEEE] rounded-lg appearance-none"
              disabled={isSubmitting}
            >
              <option value="">Select subject ...</option>
              <option value="biology">Biology</option>
              <option value="computerScience">Computer Science</option>
              <option value="economics">Economics</option>
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
            type="submit"
            className="bg-[#003180] text-white px-6 py-3 rounded-full disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Apply Now"}
          </button>
        </div>
        <ProgressBars currentStep={step} />
      </div>
    </form>
  );

  const ApplicationStep = () => (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 md:p-8 flex flex-col items-center"
    >
      <h1 className="text-xl md:text-2xl font-bold text-[#003180] mb-2 text-center">
        OCL LOGO
      </h1>
      <h2 className="text-lg md:text-xl text-orange font-semibold mb-4 text-center">
        APPLICATION FORM
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl text-[#555555]">
        <div>
          <label className="block mb-2 text-sm md:text-base">First Name:</label>
          <input
            {...register("step2.firstName")}
            type="text"
            placeholder="Enter your name.."
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm md:text-base">Surname:</label>
          <input
            {...register("step2.surname")}
            type="text"
            placeholder="Enter your surname.."
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm md:text-base">Date of Birth:</label>
          <input
            {...register("step2.dateOfBirth")}
            type="date"
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm md:text-base">Gender:</label>
          <div className="relative">
          <select
            {...register("step2.gender")}
            className="w-full p-3 bg-[#EEEEEE] rounded-lg appearance-none"
            disabled={isSubmitting}
          >
            <option value="">Select gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <img
              src="/svgs/chev-down.svg"
              alt="dropdown"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm md:text-base">Email Id:</label>
          <input
            {...register("step2.email")}
            type="email"
            placeholder="info@xyz.com"
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm md:text-base">Mobile No.:</label>
          <input
            {...register("step2.mobile")}
            type="tel"
            placeholder="+91 - 98596 58000"
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm md:text-base">Home Address:</label>
          <input
            {...register("step2.address")}
            type="text"
            placeholder="Enter your address..."
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm md:text-base">Town/City:</label>
          <input
            {...register("step2.town")}
            type="text"
            placeholder="Enter your Town/City..."
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
            disabled={isSubmitting}
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-2 text-sm md:text-base">
            Country (as per Passport):
          </label>
          <input
            {...register("step2.country")}
            type="text"
            placeholder="Enter your country..."
            className="w-full md:w-1/2 p-3 bg-[#EEEEEE] rounded-lg"
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button
          type="submit"
          className="mt-6 md:mt-8 bg-[#003180] text-white px-6 py-2 rounded-full disabled:opacity-50 w-full md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Next"}
        </button>
      </div>
        <ProgressBars currentStep={step} />
    </form>
  );

  const FurtherInfoStep = () => (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 md:p-8 flex flex-col items-center"
    >
      <h1 className="text-xl md:text-2xl font-bold text-[#003180] mb-2 text-center">
        OCL LOGO
      </h1>
      <h2 className="text-lg md:text-xl text-orange font-semibold mb-4 text-center">
        APPLICATION FORM
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl text-[#555555]">
        <div>
          <label className="block mb-2 text-sm md:text-base">
            Your Institution (School/University/Organisation):
          </label>
          <div className="relative">
            <select
              {...register("step3.institution")}
              className="w-full p-3 pr-10 bg-[#EEEEEE] rounded-lg appearance-none"
              disabled={isSubmitting}
            >
              <option value="">Select your institution...</option>
              <option value="school">School</option>
              <option value="university">University</option>
              <option value="organisation">Organisation</option>
            </select>
            <img
              src="/svgs/chev-down.svg"
              alt="dropdown"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
  
        <div>
          <label className="block mb-2 text-sm md:text-base">Institution Name:</label>
          <input
            {...register("step3.institutionName")}
            type="text"
            placeholder="Enter your Institution name..."
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
            disabled={isSubmitting}
          />
        </div>
  
        <div>
          <label className="block mb-2 text-sm md:text-base">Institution City:</label>
          <input
            {...register("step3.institutionCity")}
            type="text"
            placeholder="Enter your Institution city..."
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
            disabled={isSubmitting}
          />
        </div>
  
        <div>
          <label className="block mb-2 text-sm md:text-base">
            Institution Country (Optional):
          </label>
          <input
            {...register("step3.institutionCountry")}
            type="text"
            placeholder="Enter your Institution country..."
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
            disabled={isSubmitting}
          />
        </div>
  
        <div>
          <label className="block mb-2 text-sm md:text-base">
            Visa Requirement (Yes/No):
          </label>
          <div className="relative">
            <select
              {...register("step3.visaRequirement")}
              className="w-full p-3 pr-10 bg-[#EEEEEE] rounded-lg appearance-none"
              disabled={isSubmitting}
            >
              <option value="">Select requirement...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <img
              src="/svgs/chev-down.svg"
              alt="dropdown"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
  
        <div>
          <label className="block mb-2 text-sm md:text-base">
            How Did You Hear About This Program?
          </label>
          <input
            {...register("step3.hearAbout")}
            type="text"
            placeholder="Enter response..."
            className="w-full p-3 bg-[#EEEEEE] rounded-lg"
            disabled={isSubmitting}
          />
        </div>
      </div>
  
      <div className="flex justify-center w-full">
        <button
          type="submit"
          className="mt-6 md:mt-8 bg-[#003180] text-white px-6 py-2 rounded-full disabled:opacity-50 w-full md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Apply Now"}
        </button>
      </div>
      <ProgressBars currentStep={step} />
    </form>
  );

  const ConfirmationStep = () => (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-8">
      <h1 className="text-xl md:text-2xl font-bold text-[#003180] mb-2 text-center">
        OCL LOGO
      </h1>
      <h2 className="text-lg md:text-xl text-orange font-semibold mb-4 md:mb-8 text-center">
        CONFIRM APPLICATION
      </h2>
      <div className="max-w-4xl text-[#555555] mx-auto">
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-[#555555]">
            <thead>
              <tr>
                <th className="border border-[#555555] p-1 text-left font-normal min-w-[200px]">
                  Program
                </th>
                <th className="border border-[#555555] p-1 text-right w-[120px] md:w-[200px] font-normal">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#555555] p-1">
                  <div className="mb-4">
                    <span className="text-sm md:text-base">
                      Oxford Centre for Leadership Summer Program - July 8th -
                      August 1st, 2025
                    </span>
                  </div>
                  <div className="space-y-1 text-sm md:text-base">
                    <div>Age Group: (Auto Filled)</div>
                    <div>Subject 1: (Auto Filled)</div>
                    <div>Subject 2: (Auto Filled)</div>
                  </div>
                </td>
                <td className="border border-[#555555] p-1 text-right">
                  £ (Auto Filled)
                </td>
              </tr>
              <tr>
                <td className="border border-[#555555] p-1">Total</td>
                <td className="border border-[#555555] p-1 text-right">
                  £ (Auto Filled)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div className="space-y-6">
          <h3 className="font-semibold">Credit/Debit Card Secure Payment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block mb-2 text-sm md:text-base">Cardholder *</label>
              <input
                {...register("cardHolder", { required: true })}
                type="text"
                placeholder="Enter cardholder name"
                className="w-full p-2 md:p-3 bg-[#EEEEEE] rounded-lg text-sm md:text-base"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm md:text-base">Card Number *</label>
              <input
                {...register("cardNumber", { required: true })}
                type="text"
                placeholder="Enter card number"
                className="w-full p-2 md:p-3 bg-[#EEEEEE] rounded-lg text-sm md:text-base"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div>
              <label className="block mb-2 text-sm md:text-base">Expiration Date *</label>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <input
                  {...register("expirationMonth", { required: true })}
                  type="text"
                  placeholder="Month"
                  className="w-full p-2 md:p-3 bg-[#EEEEEE] rounded-lg text-sm md:text-base"
                />
                <input
                  {...register("expirationYear", { required: true })}
                  type="text"
                  placeholder="Year"
                  className="w-full p-2 md:p-3 bg-[#EEEEEE] rounded-lg text-sm md:text-base"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm md:text-base">Card Verification Number *</label>
              <input
                {...register("cvv", { required: true })}
                type="text"
                placeholder="Enter CVV"
                className="w-full p-2 md:p-3 bg-[#EEEEEE] rounded-lg text-sm md:text-base"
              />
            </div>
          </div>
        </div>
  
        <div className="mt-6 md:mt-8">
          <p className="text-xs md:text-sm mb-4">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
          <div className="flex items-start md:items-center mb-6">
            <input
              {...register("agreed", { required: true })}
              type="checkbox"
              className="mr-2 md:mr-4 mt-1 md:mt-0"
            />
            <span className="text-sm md:text-base">
              I have read and agree to the website terms and conditions
            </span>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#003180] text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base w-full md:w-auto"
            >
              Confirm Application
            </button>
          </div>
          <div className="mt-4">
            <ProgressBars currentStep={step} />
          </div>
        </div>
      </div>
    </form>
  );
  

  const steps = [
    <RegistrationStep />,
    <ApplicationStep />,
    <FurtherInfoStep />,
    <ConfirmationStep />,
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-5xl md:flex rounded-tr-[40px] shadow-2xl">
        <StepIndicator />
        <div className="w-full md:p-8">
          <FormProvider {...methods}>{steps[step - 1]}</FormProvider>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFlow;

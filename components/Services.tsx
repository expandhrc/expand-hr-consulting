import Image from "next/image";
import Button from "./Button";

const Services = () => {
  return (
    <section
      id="services"
      className="max-container bg-indigo-100/80 rounded-xl padding-container flex flex-col gap-6 xl:gap-12 py-10 pb-32 mb-4"
    >
      <div className="relative z-20 flex flex-1 flex-col ">
        <h2 className="bold-40 lg:bold-52 text-indigo-900">Services</h2>
        <p className="regular-20 mt-6 text-gray-50 ">
          At <span className="font-extrabold">HR Expand Plus Consulting </span>,
          our suite of consultancy services is meticulously designed to propel
          businesses toward success in the modern landscape. With a
          forward-thinking approach, we offer strategic guidance across various
          domains. Whether navigating complex challenges, optimizing operations,
          or fostering innovation, our seasoned team of experts leverages a
          wealth of experience to tailor solutions that align with your unique
          goals. We prioritize collaboration, ensuring that our clients actively
          participate in the consulting process, fostering a partnership that
          goes beyond traditional advisory services. From in-depth market
          analysis to hands-on implementation,{" "}
          <span className="font-extrabold">HR Expand Plus Consulting </span> is
          committed to delivering results that drive lasting impact. Welcome to
          a consultancy experience where your aspirations meet our expertise.
        </p>
      </div>

      <div className="relative flex flex-col gap-8 flex-1 items-start">
        <p className="bold-20 font-extrabold mt-6 text-gray-50 ">
          <span className="font-extrabold">
            Strategic HR Solutions Tailored for Your Success
          </span>
        </p>
        <div className="flex flex-col gap-2">
          <h3 className="bold-32 lg:bold-32 text-indigo-500">
            Talent Acquisition and Recruitment:
          </h3>
          <p className="regular-18 text-gray-50 ml-4">
            - Attract top talent with our comprehensive recruitment services.
          </p>
          <p className="regular-18 text-gray-50 ml-4">
            - Services include job posting, candidate sourcing, and recruitment
            process outsourcing.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="bold-32 lg:bold-32 text-indigo-500">
            Workforce Planning:
          </h3>
          <p className="regular-18 text-gray-50 ml-4">
            - Classify and each unit&apos;s activities and evaluate gaps and
            excess in terms of FTEs.
          </p>
          <p className="regular-18 text-gray-50 ml-4">
            - Provide a detailed scientific model showing excess and gaps of
            employees in different business units of the organization.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="bold-32 lg:bold-32 text-indigo-500">
            Organizational Development:
          </h3>
          <p className="regular-18 text-gray-50 ml-4">
            - Enhance organizational efficiency through strategic initiatives.
          </p>
          <p className="regular-18 text-gray-50 ml-4">
            - Services cover employee training, change management, and
            leadership development.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="bold-32 lg:bold-32 text-indigo-500">
            Competency Framework:
          </h3>
          <p className="regular-18 text-gray-50 ml-4">
            - Study the core business of the organization and propose suitable
            competencies.
          </p>
          <p className="regular-18 text-gray-50 ml-4">
            - Services cover Competencies dictionary and competencies matrix
            with allocation to positions.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="bold-32 lg:bold-32 text-indigo-500">
            Business Model Re-engineering:
          </h3>
          <p className="regular-18 text-gray-50 ml-4">
            - Assess currently operative business model and propose enhancements
            and upgrades.
          </p>
          <p className="regular-18 text-gray-50 ml-4">
            - Services cover policies, procedures and processes rewriting and
            knowledge transfer to HR team.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="bold-32 lg:bold-32 text-indigo-500">HR Consulting:</h3>
          <p className="regular-18 text-gray-50 ml-4">
            - Get expert guidance on HR strategy, compliance, and performance
            management.
          </p>
          <p className="regular-18 text-gray-50 ml-4">
            - Tailored services include HR strategy development and policy
            consulting, and complete performance evaluation methodology.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="bold-32 lg:bold-32 text-indigo-500">
            Employee Engagement:
          </h3>
          <p className="regular-18 text-gray-50 ml-4">
            - Foster a positive work environment with our employee engagement
            programs.
          </p>
          <p className="regular-18 text-gray-50 ml-4">
            - Offerings include surveys, recognition programs, and team-building
            initiatives.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="bold-32 lg:bold-32 text-indigo-500">
            Succession Planning:
          </h3>
          <p className="regular-18 text-gray-50 ml-4">
            - Develop and implement effective succession plans for key roles.
          </p>
          <p className="regular-18 text-gray-50 ml-4">
            - Ensure a smooth transition of leadership within your organization.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="bold-32 lg:bold-32 text-indigo-500">
            Talent Management:
          </h3>
          <p className="regular-18 text-gray-50 ml-4">
            - Optimize your workforce through comprehensive talent management
            solutions. -
          </p>
          <p className="regular-18 text-gray-50 ml-4">
            - Services cover performance appraisal, career development, and
            talent retention strategies.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="bold-32 lg:bold-32 text-indigo-500">
            HR Technology Solutions:
          </h3>
          <p className="regular-18 text-gray-50 ml-4">
            - Streamline HR processes with cutting-edge technology solutions.
          </p>
          <p className="regular-18 text-gray-50 ml-4">
            - Implement applicant tracking systems, HRIS, and automation of
            workflows.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="bold-32 lg:bold-32 text-indigo-500">
            HR Compliance and Regulations:
          </h3>
          <p className="regular-18 text-gray-50 ml-4">
            - Stay compliant with ever-changing HR laws and regulations.
          </p>
          <p className="regular-18 text-gray-50 ml-4">
            - Services cover compliance audits, policy reviews, and training on
            legal requirements.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="bold-32 lg:bold-32 text-indigo-500">
            Customized Workshops and Training:
          </h3>
          <p className="regular-18 text-gray-50 ml-4">
            - Enhance skills and knowledge within your workforce with our
            customized workshops.
          </p>
          <p className="regular-18 text-gray-50 ml-4">
            - Offerings range from leadership workshops to diversity and
            inclusion training.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="bold-32 lg:bold-32 text-indigo-500">
            Startup HR Solutions:
          </h3>
          <p className="regular-18 text-gray-50 ml-4">
            - Specialized support for startups navigating HR challenges during
            growth phases.
          </p>
          <p className="regular-18 text-gray-50 ml-4">
            - Services include scalable HR solutions, recruitment for startups,
            and HR strategy.
          </p>
        </div>
        <p className="bold-20 font-extrabold mt-6 text-gray-50 ">
          <span className="font-extrabold">
            Contact Us to Learn More About Our Services.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Services;

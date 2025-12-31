import React, { useState } from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

export default function QualificationTimeline({ education, experience }) {

  const [activeTab, setActiveTab] = useState('education');

  // Map contents in JSON to a unified format
  const mappedEducation = education.map((item, index) => ({
    side: 'left',
    title: item.course,
    institution: item.institution,
    period: item.academic_years,
    coursework: item.coursework
  }));

  const mappedExperience = experience.map((item, index) => ({
    side: 'right',
    title: item.designation,
    institution: item.company_name,
    period: item.duration,
    location: item.location,
    intern_description: item.intern_description
  }));

  const items =
    activeTab === 'education' ? mappedEducation : mappedExperience;

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">

      <div className="max-w-4xl mx-auto mt-12 flex-1 overflow-y-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
            Qualification
          </h1>
          <p className="text-gray-500 text-lg">My educational & professional journey</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-16">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              activeTab === 'education'
                ? 'bg-gray-800 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <GraduationCap size={20} />
            <span className="font-medium">Education</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              activeTab === 'experience'
                ? 'bg-gray-800 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Briefcase size={20} />
            <span className="font-medium">Experience</span>
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop center line */}
          {/* <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-300 hidden md:block"></div> */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300"></div>
          {/* Mobile line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-300 md:hidden"></div>

          <div className="space-y-12 mb-10">
            {items.map((item, index) => (
              <div key={index}
                   className={`relative flex items-center ${
                     item.side === 'left' ? 'md:justify-start' : 'md:justify-end'
                   }`}>

                {/* Desktop Layout */}
                <div className="hidden md:block w-full">
                  <div className="flex items-center">

                    {/* LEFT SIDE */}
                    {item.side === 'left' ? (
                      <>
                        <div className="w-1/2 text-justify pr-8 text-justify leading-relaxed">

                          <h3 className="text-xl font-semibold text-gray-800">
                            {item.title}
                          </h3>

                          
                            <p className="text-gray-500">{item.institution}</p>

                            <div className="flex justify-start items-center gap-2 text-gray-700 text-sm ">
                                <Calendar size={16} />
                                <span>{item.period}</span>
                            </div>
                          
                          {item.location && (
                            <p className="text-gray-500">{item.location}</p>
                          )}

                          <br/>

                          {item.coursework && (
                            <p className="text-gray-500 text-sm">
                              Coursework: {item.coursework.join(', ')}
                            </p>
                          )}

                          {item.intern_description && (
                            <ul className="text-gray-500 text-sm list-disc ml-auto pr-4">
                              {item.intern_description.map((d, i) => (
                                <li key={i}>{d}</li>
                              ))}
                            </ul>
                          )}

                          
                        </div>

                        <div className="absolute left-1/2 -translate-x-1/2">
                          <div className="w-4 h-4 bg-gray-700 rounded-full border-4 border-gray-50 shadow-lg"></div>
                        </div>

                        <div className="w-1/2"></div>
                      </>
                      ) : (
                      /* RIGHT SIDE */
                      <>
                        <div className="w-6/12"></div>

                        <div className="absolute left-1/2 -translate-x-1/2">
                          <div className="w-4 h-4 bg-gray-700 rounded-full border-4 border-gray-50 shadow-lg"></div>
                        </div>

                        <div className="w-6/12 text-left pl-8">
                          <h3 className="text-xl font-semibold text-gray-800">
                            {item.title}
                          </h3>

                          <div className="flex gap-5">
                            <p className="text-gray-500">{item.institution}</p>

                            {item.location && (
                                <p className="text-gray-500">{item.location}</p>
                            )}
                          </div>

                          <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                            <Calendar size={16} />
                            <span>{item.period}</span>
                          </div>

                          <br/>

                          {item.intern_description && (
                            <ul className="text-gray-500 text-justify text-sm list-disc pl-4">
                              {item.intern_description.map((d, i) => (
                                <>
                                  <li key={i}>{d}</li>
                                  <br/>
                                </>
                              ))}
                            </ul>
                          )}

                          
                        </div>
                      </>
                    )}

                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex items-start w-full">
                  <div className="flex-shrink-0 w-16 flex justify-center">
                    <div className="w-4 h-4 bg-gray-700 rounded-full border-4 border-gray-50 shadow-lg"></div>
                  </div>

                  <div className="flex-1 bg-white p-4 rounded-lg shadow-md ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-500">{item.institution}</p>

                    {item.location && (
                      <p className="text-gray-500">{item.location}</p>
                    )}

                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}

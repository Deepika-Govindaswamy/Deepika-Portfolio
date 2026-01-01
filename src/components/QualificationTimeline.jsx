import React from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

export default function QualificationTimeline({ education = [], experience = [] }) {
  // Sort items by date
  const sortedEducation = [...education].sort((a, b) => {
    const getYear = (period) => {
      const matches = period.match(/\d{4}/g);
      return matches ? parseInt(matches[matches.length - 1]) : 0;
    };
    return getYear(b.period) - getYear(a.period);
  });

  const sortedExperience = [...experience].sort((a, b) => {
    const getYear = (period) => {
      const matches = period.match(/\d{4}/g);
      return matches ? parseInt(matches[matches.length - 1]) : 0;
    };
    return getYear(b.period) - getYear(a.period);
  });

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto mt-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
            Qualification
          </h1>
          <p className="text-gray-500 text-lg">My educational & professional journey</p>
        </div>

        {/* Section Labels */}
        <div className="flex justify-center gap-10 mb-16">
          <div className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg">
            <GraduationCap size={20} className="text-white" />
            <span className="font-medium text-white">Education</span>
          </div>

          <div className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg">
            <Briefcase size={20} className="text-white" />
            <span className="font-medium text-white">Experience</span>
          </div>
        </div>

        {/* Two Separate Timelines Side by Side */}
        <div className="grid md:grid-cols-2 gap-15">
          {/* Education Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-2.5 top-0 h-full w-[2px] bg-gray-300"></div>

            <div className="space-y-10 pl-8">
              {sortedEducation.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-7 top-1.5">
                    <div className="w-4 h-4 bg-gray-700 rounded-full border-4 border-gray-50 shadow-lg"></div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1 mt-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">{item.institution}</p>

                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>

                    {item.description && (
                      <p className="text-gray-600 text-sm text-justify">
                        <span className="font-medium">Coursework:</span> {item.description.join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Experience Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-2.5 top-0 h-full w-[2px] bg-gray-300"></div>

            <div className="space-y-10 pl-8">
              {sortedExperience.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-7 top-1.5">
                    <div className="w-4 h-4 bg-gray-700 rounded-full border-4 border-gray-50 shadow-lg"></div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1 mt-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">{item.institution}</p>

                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>

                    {item.description && (
                      <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4 text-justify">
                        {item.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
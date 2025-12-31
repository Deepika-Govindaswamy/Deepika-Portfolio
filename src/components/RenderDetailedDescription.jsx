

export default function RenderDetailedDescription (detailedDesc)  {
    if (!detailedDesc) return null;

    return (
      <div className="space-y-6">
        {/* Introduction */}
        {detailedDesc.introDescription && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
            <div className="space-y-3">
              {detailedDesc.introDescription.map((para, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed text-justify">
                  {para}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Problems Addressed */}
        {detailedDesc.problemsAddressed && detailedDesc.problemsAddressed.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Problems Addressed</h3>
            <ul className="space-y-2">
              {detailedDesc.problemsAddressed.map((problem, idx) => (
                <li key={idx} className="text-gray-700 leading-relaxed text-justify flex">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        {detailedDesc.techstack && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              {detailedDesc.techstack}
            </p>
          </div>
        )}

        {/* Results */}
        {detailedDesc.results && detailedDesc.results.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Results</h3>
            <ul className="space-y-2">
              {detailedDesc.results.map((result, idx) => (
                <li key={idx} className="text-gray-700 leading-relaxed text-justify flex">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
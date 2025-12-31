
import React, { useState } from 'react';
import { ArrowRight, X, Github } from 'lucide-react';

import RenderDetailedDescription from './RenderDetailedDescription.jsx'

import stockPortfolioImg from '/assets/stock_portfolio_home.png'
import fxPlaygroundImg from '/assets/fx_playground_readme.png'
import ewasteImg from '/assets/ewaste_home.png'
import paymentImg from '/assets/distributed_payment_pipeline_home.png'

export default function Projects ({projects}) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectImages = {
    stockPortfolio: stockPortfolioImg,
    fxPlayground: fxPlaygroundImg,
    ewaste: ewasteImg,
    payment: paymentImg
  };


  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

return (
    <div className="min-h-screen mt-10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-gray-900 sm:text-5xl lg:text-6xl">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-10">
            Explore my portfolio of backend engineering projects showcasing scalable architectures, secure APIs, and high-performance Java solutions.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[380px] bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={projectImages[project.image]}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techstack.map((tech, i) => (
                    <span key={i} className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 leading-tight min-h-[56px]">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 text-justify mb-7 min-h-[63px]">
                  {project.intro}
                </p>

                {/* Action Buttons */}
                <div className='flex gap-3'>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-full transition-all duration-300 group"
                  >
                    <span>View Source</span>
                    <ArrowRight 
                      size={20} 
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </a>

                  <button
                    onClick={() => openModal(project)}
                    className="inline-flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-full transition-all duration-300 group"
                  >
                    <span>Read More</span>
                    <ArrowRight 
                      size={20} 
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Other Projects Button */}
        <div className="space-y-6 mt-12">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button  onClick={() => window.open("https://github.com/Deepika-Govindaswamy?tab=repositories", "_blank")}
            className="flex items-center justify-center gap-2 px-8 py-4 lg:px-10 lg:py-5 bg-2 border-gray-300 rounded-full bg-gray-900 text-white hover:bg-white hover:text-black border transition font-sans text-base sm:text-lg">
              View Other Projects
              <Github size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-start rounded-t-3xl z-10">
              <div className="flex-1 pr-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {selectedProject.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techstack.map((tech, i) => (
                    <span key={i} className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={closeModal}
                className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Close modal"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-8 py-6">
              {selectedProject.detailedDescription ? (
                RenderDetailedDescription(selectedProject.detailedDescription)
              ) : (
                <p className="text-gray-700 text-base leading-relaxed text-justify whitespace-pre-line">
                  {selectedProject.description || selectedProject.intro}
                </p>
              )}

              {/* GitHub Link */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full transition-all duration-300 group"
                >
                  <Github size={20} />
                  <span>View on GitHub</span>
                  <ArrowRight 
                    size={20} 
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { CodeXml, GraduationCap, FolderCode } from 'lucide-react';
import {
  SiSpringboot,
  SiHibernate,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiPostgresql,
  SiGit,
  SiGithubactions
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

export default function AboutMe ({skills}) {

  const iconMap = {
    java: FaJava,
    springboot: SiSpringboot,
    hibernate: SiHibernate,
    docker: SiDocker,
    kubernetes: SiKubernetes,
    aws: FaAws,
    kafka: SiApachekafka,
    postgresql: SiPostgresql,
    git: SiGit,
    githubActions: SiGithubactions
  };


  return (
    <div className="bg-white px-4 py-12 sm:px-6 lg:px-8 min-h-screen h-screen flex flex-col">

      <div className="mx-auto max-w-7xl">

        {/* Introduction Header */}
        <div className="mb-15 mt-15 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-600">
            Introduction
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
            About me
          </h1>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl">

          {/* Content */}
          <div className="space-y-12">
            <p className="text-center text-lg leading-relaxed text-gray-600">
              I’m a Java Backend Developer with hands-on experience in designing resilient distributed systems inspired 
              by enterprise and fintech architectures. My designs reflect production-grade engineering 
              through clean architecture, containerisation, documentation, and performance optimisation. <br/>
            </p>

            {/* Info Cards */}
            <div className="flex justify-center gap-6 flex-wrap">
              {/* Languages Card */}
              <div className="rounded-2xl border border-gray-300 p-6 transition-all hover:shadow-lg w-2/3 sm:w-53">
                <div className="mb-4 text-gray-700">
                  <CodeXml className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Languages</h3>
                <p className="text-sm text-gray-600">
                  Java, Spring Boot, Hibernate, Docker, K8s, SQL.
                </p>
              </div>

              {/* Education Card */}
              <div className="rounded-2xl border border-gray-300 p-6 transition-all hover:shadow-lg w-2/3 sm:w-53">
                <div className="mb-4 text-gray-700">
                  <GraduationCap className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Education</h3>
                <p className="text-sm text-gray-600">
                  MSc in Advanced Computer Science
                </p>
              </div>

              {/* Projects Card */}
              <div className="rounded-2xl border border-gray-300 p-6 transition-all hover:shadow-lg w-2/3 sm:w-53">
                <div className="mb-4 text-gray-700">
                  <FolderCode className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Projects</h3>
                <p className="text-sm text-gray-600">
                  Built 5+ projects
                </p> 
              </div>

              <div className="pt-6">
                <h3 className="mb-6 text-xl font-semibold text-center text-gray-800">Tools I use</h3>
                <div className="flex flex-wrap gap-4">
                  {skills.map((skill, index) => {
                    const IconComponent = iconMap[skill.icon];

                    return (
                      <div
                        key={index}
                        className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 transition-transform hover:scale-110 hover:shadow-md"
                      >
                        {IconComponent && (
                          <IconComponent className={`text-4xl ${skill.color}`} />
                        )}
                        
                        {/* Tooltip */}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
          </div>


            
          </div>
        </div>
      </div>
    </div>
  );
}
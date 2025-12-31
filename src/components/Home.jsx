 import {Download} from 'lucide-react';

 import profilePic from '/assets/Deepika_Linkedin_Profile.jpg'

export default function Home() {
  
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/Deepika_Resume.pdf";
    link.download = "Deepika_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="bg-gradient-to-br from-yellow-50 via-pink-50 via-purple-50 to-blue-50 flex flex-col min-h-screen h-screen">
      
      
      {/* Hero Section */}
      <div className="flex-1 mt-10 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 lg:py-16 w-full text-center">
        {/* Profile Image */}
        <div className="mb-6 sm:mb-8">
          <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src={profilePic} 
              alt="Deepika"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Greeting */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-6 sm:mb-8 font-sans">
          Hi! I'm Deepika <span className="inline-block">👋</span>
        </h2>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold font-serif tracking-wide text-black mb-6 sm:mb-8 lg:mb-10 leading-tight max-w-7xl px-4">
            Java Developer based in the United Kingdom.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 font-outfit mb-8 sm:mb-12 lg:mb-14 max-w-4xl leading-relaxed font-sans px-4">
          I am a java developer from The University of Sheffield, United Kingdom looking for entry-level Java Developer oportunities in the UK (open to relocation).
        </p>
        
      {/* Download Resume Section */}
            <div className="space-y-6 ">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">

                <button onClick={downloadResume} className="flex items-center justify-center gap-2 px-8 py-4 lg:px-10 lg:py-5 bg-2 border-gray-300 rounded-full bg-gray-900 text-white hover:bg-white hover:text-black border transition font-sans text-base sm:text-lg">
                    My Resume
                    <Download size={20} />
                </button>
              </div>
            </div>
      </div>

    </div>
  );
}


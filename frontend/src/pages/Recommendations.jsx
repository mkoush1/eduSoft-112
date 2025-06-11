import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiBook, FiExternalLink, FiChevronRight, FiAward } from 'react-icons/fi';
import DashboardLayout from '../components/DashboardLayout';

const skillCategories = [
  {
    category: "Adaptability and Flexibility",
    description: "Courses to enhance your ability to adapt to changing situations and environments",
    courses: [
      {
        title: "Adaptive Leadership",
        description: "Learn how to lead through change and uncertainty",
        link: "https://acumenacademy.org/course/adaptive-leadership/"
      },
      {
        title: "Adaptability and Resiliency",
        description: "Develop skills for rapid problem-solving and decision-making",
        link: "https://www.coursera.org/learn/adaptability-and-resiliency?msockid=32a78592d00f6cbe348b9664d1646d1f"
      }
    ]
  },
  {
    category: "Communication",
    description: "Courses to improve your verbal and written communication skills",
    courses: [
      {
        title: "Effective Communication",
        description: "Master the art of clear and impactful communication",
        link: "https://academy.rics.org/e-learning/business-and-management-skills/business-skills/effective-communication"
      },
      {
        title: "Business Writing",
        description: "Professional writing skills for the workplace",
        link: "https://www.coursera.org/learn/writing-for-business?msockid=32a78592d00f6cbe348b9664d1646d1f"
      }
    ]
  },
  {
    category: "Leadership",
    description: "Courses to develop your leadership capabilities",
    courses: [
      {
        title: "Leadership Fundamentals",
        description: "Core concepts of effective leadership",
        link: "https://www.oxfordhomestudy.com/courses/leadership-courses-online/leadership-v-management-free"
      },
      {
        title: "Team Leadership",
        description: "Leading and managing teams effectively",
        link: "https://www.coursera.org/learn/leading-teams?msockid=32a78592d00f6cbe348b9664d1646d1f"
      }
    ]
  },
  {
    category: "Presentation",
    description: "Courses to enhance your presentation skills",
    courses: [
      {
        title: "Presentation Skills",
        description: "Master the art of presenting effectively",
        link: "https://www.futurelearn.com/courses/become-a-better-presenter"
      },
      {
        title: "Visual Storytelling",
        description: "Create compelling visual presentations",
        link: "https://www.udemy.com/visual-storytelling"
      }
    ]
  },
  {
    category: "Problem Solving",
    description: "Courses to develop your analytical and problem-solving skills",
    courses: [
      {
        title: "Critical Thinking",
        description: "Enhance your analytical reasoning skills",
        link: "https://www.coursera.org/specializations/logic-critical-thinking-duke?msockid=32a78592d00f6cbe348b9664d1646d1f"
      },
      {
        title: "Decision Making",
        description: "Effective decision-making strategies",
        link: "https://www.coursera.org/learn/problem-solving"
      }
    ]
  }
];

const Recommendations = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = skillCategories.filter(category => 
    category.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.courses.some(course => 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <DashboardLayout title="Skill Development">
      <div className="flex flex-col lg:flex-row gap-6 h-full">
        {/* Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm p-4 sticky top-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#592538] mb-2">Skills Center</h1>
              <p className="text-gray-600 text-sm">Enhance your professional skills</p>
            </div>
            
            {/* Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search skills..."
                className="w-full px-4 py-2 pl-10 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#592538] focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Categories List */}
            <nav className="space-y-1">
              {filteredCategories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(skillCategories.findIndex(c => c.category === category.category))}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeCategory === idx 
                      ? 'bg-[#f8f0f2] text-[#592538]' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FiBook className="mr-3 h-5 w-5" />
                  <span className="truncate">{category.category}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm p-6">
            {skillCategories[activeCategory] && (
              <>
                <div className="mb-8">
                  <div className="flex items-center mb-2">
                    <h2 className="text-2xl font-bold text-[#592538]">
                      {skillCategories[activeCategory].category}
                    </h2>
                    <span className="ml-3 px-3 py-1 text-xs font-medium bg-[#f8f0f2] text-[#592538] rounded-full">
                      {skillCategories[activeCategory].courses.length} courses
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {skillCategories[activeCategory].description}
                  </p>
                </div>

                <div className="space-y-6">
                  {skillCategories[activeCategory].courses.map((course, idx) => (
                    <div 
                      key={idx}
                      className="group border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <div className="h-10 w-10 rounded-lg bg-[#f8f0f2] flex items-center justify-center mr-4">
                              <FiAward className="h-5 w-5 text-[#592538]" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {course.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 text-sm mb-4 md:mb-0 md:ml-14">
                            {course.description}
                          </p>
                        </div>
                        <a
                          href={course.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-[#592538] hover:bg-[#4a1d2d] transition-colors duration-200 group-hover:shadow-sm"
                        >
                          <span>View Course</span>
                          <FiExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Recommendations;

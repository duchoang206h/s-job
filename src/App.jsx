import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SAMPLE_JOBS = [
  {
    id: "1",
    title: "Devops Engineer",
    company: "Collabera",
    category: "IT Services",
    workArrangement: "In Person",
    jobType: "Full Time",
    compensation: "$80k - $150k",
    experienceLevel: "Mid Level",
    education: "Bachelor's",
    description:
      "We are seeking a skilled DevOps Engineer to join our team. You will be responsible for implementing and maintaining our CI/CD pipelines, managing cloud infrastructure, and ensuring system reliability and performance.",
    logo: "https://via.placeholder.com/64?text=C",
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "TechCorp",
    category: "Software Development",
    workArrangement: "Remote",
    jobType: "Full Time",
    compensation: "$70k - $120k",
    experienceLevel: "Senior Level",
    education: "Bachelor's",
    description:
      "Build user-facing features using React. Work closely with product and design teams to create amazing user experiences.",
    logo: "https://via.placeholder.com/64?text=TC",
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "ScaleUp",
    category: "Engineering",
    workArrangement: "Hybrid",
    jobType: "Full Time",
    compensation: "$90k - $160k",
    experienceLevel: "Mid Level",
    education: "Master's",
    description:
      "Design and build reliable APIs and background services. Work with modern technologies like Node.js, PostgreSQL, and Kubernetes.",
    logo: "https://via.placeholder.com/64?text=SU",
  },
  {
    id: "4",
    title: "Product Designer",
    company: "StudioX",
    category: "Design",
    workArrangement: "Remote",
    jobType: "Contract",
    compensation: "$60k - $100k",
    experienceLevel: "Entry Level",
    education: "Bachelor's",
    description:
      "Design delightful user experiences across mobile and web platforms. Collaborate with cross-functional teams to bring ideas to life.",
    logo: "https://via.placeholder.com/64?text=SX",
  },
  {
    id: "1",
    title: "Devops Engineer",
    company: "Collabera",
    category: "IT Services",
    workArrangement: "In Person",
    jobType: "Full Time",
    compensation: "$80k - $150k",
    experienceLevel: "Mid Level",
    education: "Bachelor's",
    description:
      "We are seeking a skilled DevOps Engineer to join our team. You will be responsible for implementing and maintaining our CI/CD pipelines, managing cloud infrastructure, and ensuring system reliability and performance.",
    logo: "https://via.placeholder.com/64?text=C",
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "TechCorp",
    category: "Software Development",
    workArrangement: "Remote",
    jobType: "Full Time",
    compensation: "$70k - $120k",
    experienceLevel: "Senior Level",
    education: "Bachelor's",
    description:
      "Build user-facing features using React. Work closely with product and design teams to create amazing user experiences.",
    logo: "https://via.placeholder.com/64?text=TC",
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "ScaleUp",
    category: "Engineering",
    workArrangement: "Hybrid",
    jobType: "Full Time",
    compensation: "$90k - $160k",
    experienceLevel: "Mid Level",
    education: "Master's",
    description:
      "Design and build reliable APIs and background services. Work with modern technologies like Node.js, PostgreSQL, and Kubernetes.",
    logo: "https://via.placeholder.com/64?text=SU",
  },
  {
    id: "4",
    title: "Product Designer",
    company: "StudioX",
    category: "Design",
    workArrangement: "Remote",
    jobType: "Contract",
    compensation: "$60k - $100k",
    experienceLevel: "Entry Level",
    education: "Bachelor's",
    description:
      "Design delightful user experiences across mobile and web platforms. Collaborate with cross-functional teams to bring ideas to life.",
    logo: "https://via.placeholder.com/64?text=SX",
  },
  {
    id: "1",
    title: "Devops Engineer",
    company: "Collabera",
    category: "IT Services",
    workArrangement: "In Person",
    jobType: "Full Time",
    compensation: "$80k - $150k",
    experienceLevel: "Mid Level",
    education: "Bachelor's",
    description:
      "We are seeking a skilled DevOps Engineer to join our team. You will be responsible for implementing and maintaining our CI/CD pipelines, managing cloud infrastructure, and ensuring system reliability and performance.",
    logo: "https://via.placeholder.com/64?text=C",
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "TechCorp",
    category: "Software Development",
    workArrangement: "Remote",
    jobType: "Full Time",
    compensation: "$70k - $120k",
    experienceLevel: "Senior Level",
    education: "Bachelor's",
    description:
      "Build user-facing features using React. Work closely with product and design teams to create amazing user experiences.",
    logo: "https://via.placeholder.com/64?text=TC",
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "ScaleUp",
    category: "Engineering",
    workArrangement: "Hybrid",
    jobType: "Full Time",
    compensation: "$90k - $160k",
    experienceLevel: "Mid Level",
    education: "Master's",
    description:
      "Design and build reliable APIs and background services. Work with modern technologies like Node.js, PostgreSQL, and Kubernetes.",
    logo: "https://via.placeholder.com/64?text=SU",
  },
  {
    id: "4",
    title: "Product Designer",
    company: "StudioX",
    category: "Design",
    workArrangement: "Remote",
    jobType: "Contract",
    compensation: "$60k - $100k",
    experienceLevel: "Entry Level",
    education: "Bachelor's",
    description:
      "Design delightful user experiences across mobile and web platforms. Collaborate with cross-functional teams to bring ideas to life.",
    logo: "https://via.placeholder.com/64?text=SX",
  },
  {
    id: "1",
    title: "Devops Engineer",
    company: "Collabera",
    category: "IT Services",
    workArrangement: "In Person",
    jobType: "Full Time",
    compensation: "$80k - $150k",
    experienceLevel: "Mid Level",
    education: "Bachelor's",
    description:
      "We are seeking a skilled DevOps Engineer to join our team. You will be responsible for implementing and maintaining our CI/CD pipelines, managing cloud infrastructure, and ensuring system reliability and performance.",
    logo: "https://via.placeholder.com/64?text=C",
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "TechCorp",
    category: "Software Development",
    workArrangement: "Remote",
    jobType: "Full Time",
    compensation: "$70k - $120k",
    experienceLevel: "Senior Level",
    education: "Bachelor's",
    description:
      "Build user-facing features using React. Work closely with product and design teams to create amazing user experiences.",
    logo: "https://via.placeholder.com/64?text=TC",
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "ScaleUp",
    category: "Engineering",
    workArrangement: "Hybrid",
    jobType: "Full Time",
    compensation: "$90k - $160k",
    experienceLevel: "Mid Level",
    education: "Master's",
    description:
      "Design and build reliable APIs and background services. Work with modern technologies like Node.js, PostgreSQL, and Kubernetes.",
    logo: "https://via.placeholder.com/64?text=SU",
  },
  {
    id: "4",
    title: "Product Designer",
    company: "StudioX",
    category: "Design",
    workArrangement: "Remote",
    jobType: "Contract",
    compensation: "$60k - $100k",
    experienceLevel: "Entry Level",
    education: "Bachelor's",
    description:
      "Design delightful user experiences across mobile and web platforms. Collaborate with cross-functional teams to bring ideas to life.",
    logo: "https://via.placeholder.com/64?text=SX",
  },
  {
    id: "1",
    title: "Devops Engineer",
    company: "Collabera",
    category: "IT Services",
    workArrangement: "In Person",
    jobType: "Full Time",
    compensation: "$80k - $150k",
    experienceLevel: "Mid Level",
    education: "Bachelor's",
    description:
      "We are seeking a skilled DevOps Engineer to join our team. You will be responsible for implementing and maintaining our CI/CD pipelines, managing cloud infrastructure, and ensuring system reliability and performance.",
    logo: "https://via.placeholder.com/64?text=C",
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "TechCorp",
    category: "Software Development",
    workArrangement: "Remote",
    jobType: "Full Time",
    compensation: "$70k - $120k",
    experienceLevel: "Senior Level",
    education: "Bachelor's",
    description:
      "Build user-facing features using React. Work closely with product and design teams to create amazing user experiences.",
    logo: "https://via.placeholder.com/64?text=TC",
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "ScaleUp",
    category: "Engineering",
    workArrangement: "Hybrid",
    jobType: "Full Time",
    compensation: "$90k - $160k",
    experienceLevel: "Mid Level",
    education: "Master's",
    description:
      "Design and build reliable APIs and background services. Work with modern technologies like Node.js, PostgreSQL, and Kubernetes.",
    logo: "https://via.placeholder.com/64?text=SU",
  },
  {
    id: "4",
    title: "Product Designer",
    company: "StudioX",
    category: "Design",
    workArrangement: "Remote",
    jobType: "Contract",
    compensation: "$60k - $100k",
    experienceLevel: "Entry Level",
    education: "Bachelor's",
    description:
      "Design delightful user experiences across mobile and web platforms. Collaborate with cross-functional teams to bring ideas to life.",
    logo: "https://via.placeholder.com/64?text=SX",
  },
  {
    id: "1",
    title: "Devops Engineer",
    company: "Collabera",
    category: "IT Services",
    workArrangement: "In Person",
    jobType: "Full Time",
    compensation: "$80k - $150k",
    experienceLevel: "Mid Level",
    education: "Bachelor's",
    description:
      "We are seeking a skilled DevOps Engineer to join our team. You will be responsible for implementing and maintaining our CI/CD pipelines, managing cloud infrastructure, and ensuring system reliability and performance.",
    logo: "https://via.placeholder.com/64?text=C",
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "TechCorp",
    category: "Software Development",
    workArrangement: "Remote",
    jobType: "Full Time",
    compensation: "$70k - $120k",
    experienceLevel: "Senior Level",
    education: "Bachelor's",
    description:
      "Build user-facing features using React. Work closely with product and design teams to create amazing user experiences.",
    logo: "https://via.placeholder.com/64?text=TC",
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "ScaleUp",
    category: "Engineering",
    workArrangement: "Hybrid",
    jobType: "Full Time",
    compensation: "$90k - $160k",
    experienceLevel: "Mid Level",
    education: "Master's",
    description:
      "Design and build reliable APIs and background services. Work with modern technologies like Node.js, PostgreSQL, and Kubernetes.",
    logo: "https://via.placeholder.com/64?text=SU",
  },
  {
    id: "4",
    title: "Product Designer",
    company: "StudioX",
    category: "Design",
    workArrangement: "Remote",
    jobType: "Contract",
    compensation: "$60k - $100k",
    experienceLevel: "Entry Level",
    education: "Bachelor's",
    description:
      "Design delightful user experiences across mobile and web platforms. Collaborate with cross-functional teams to bring ideas to life.",
    logo: "https://via.placeholder.com/64?text=SX",
  },
  {
    id: "1",
    title: "Devops Engineer",
    company: "Collabera",
    category: "IT Services",
    workArrangement: "In Person",
    jobType: "Full Time",
    compensation: "$80k - $150k",
    experienceLevel: "Mid Level",
    education: "Bachelor's",
    description:
      "We are seeking a skilled DevOps Engineer to join our team. You will be responsible for implementing and maintaining our CI/CD pipelines, managing cloud infrastructure, and ensuring system reliability and performance.",
    logo: "https://via.placeholder.com/64?text=C",
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "TechCorp",
    category: "Software Development",
    workArrangement: "Remote",
    jobType: "Full Time",
    compensation: "$70k - $120k",
    experienceLevel: "Senior Level",
    education: "Bachelor's",
    description:
      "Build user-facing features using React. Work closely with product and design teams to create amazing user experiences.",
    logo: "https://via.placeholder.com/64?text=TC",
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "ScaleUp",
    category: "Engineering",
    workArrangement: "Hybrid",
    jobType: "Full Time",
    compensation: "$90k - $160k",
    experienceLevel: "Mid Level",
    education: "Master's",
    description:
      "Design and build reliable APIs and background services. Work with modern technologies like Node.js, PostgreSQL, and Kubernetes.",
    logo: "https://via.placeholder.com/64?text=SU",
  },
  {
    id: "4",
    title: "Product Designer",
    company: "StudioX",
    category: "Design",
    workArrangement: "Remote",
    jobType: "Contract",
    compensation: "$60k - $100k",
    experienceLevel: "Entry Level",
    education: "Bachelor's",
    description:
      "Design delightful user experiences across mobile and web platforms. Collaborate with cross-functional teams to bring ideas to life.",
    logo: "https://via.placeholder.com/64?text=SX",
  },
];

export default function App() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("feed");
  const [exitX, setExitX] = useState(0);
  const [dragX, setDragX] = useState(0);

  const currentJob = SAMPLE_JOBS[currentJobIndex];

  // Prevent browser UI from showing on scroll and pull-to-refresh
  useEffect(() => {
    // Scroll to hide address bar on mobile
    const scrollToHideBar = () => {
      window.scrollTo(0, 1);
    };

    // Run on load and orientation change
    scrollToHideBar();
    window.addEventListener("orientationchange", scrollToHideBar);
    window.addEventListener("resize", scrollToHideBar);

    // Prevent pull-to-refresh only at the top of scrollable containers
    let lastTouchY = 0;
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      lastTouchY = touchStartY;
    };

    const preventPullToRefresh = (e) => {
      const touchY = e.touches[0].clientY;
      const touchYDelta = touchY - lastTouchY;
      lastTouchY = touchY;

      // Find the scrollable parent
      let scrollableParent = e.target;
      while (scrollableParent && scrollableParent !== document.body) {
        const overflowY = window.getComputedStyle(scrollableParent).overflowY;
        if (
          overflowY === "auto" ||
          overflowY === "scroll" ||
          scrollableParent.scrollHeight > scrollableParent.clientHeight
        ) {
          break;
        }
        scrollableParent = scrollableParent.parentElement;
      }

      // Only prevent if we're at the top of the page/container and pulling down
      const isAtTop = scrollableParent
        ? scrollableParent.scrollTop === 0
        : window.scrollY === 0;

      if (isAtTop && touchYDelta > 0 && touchY > touchStartY) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });

    document.addEventListener("touchmove", preventPullToRefresh, {
      passive: false,
    });

    return () => {
      window.removeEventListener("orientationchange", scrollToHideBar);
      window.removeEventListener("resize", scrollToHideBar);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", preventPullToRefresh);
    };
  }, []);

  const handleLike = () => {
    // Show APPLY label briefly
    setDragX(150);
    setExitX(1000);

    setTimeout(() => {
      handleNext();
    }, 300);
  };

  const handleDislike = () => {
    // Show PASS label briefly
    setDragX(-150);
    setExitX(-1000);

    setTimeout(() => {
      handleNext();
    }, 300);
  };

  const handleNext = () => {
    if (currentJobIndex < SAMPLE_JOBS.length - 1) {
      setCurrentJobIndex((prev) => prev + 1);
      setExitX(0);
      setDragX(0);
    }
  };

  const handleBack = () => {
    if (currentJobIndex > 0) {
      setCurrentJobIndex((prev) => prev - 1);
    }
  };

  const handleDrag = (event, info) => {
    setDragX(info.offset.x);
  };

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 100;

    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) {
        // Swiped right - like
        setExitX(1000);
        handleLike();
      } else {
        // Swiped left - dislike/skip
        setExitX(-1000);
        handleDislike();
      }
    }
    setDragX(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col touch-pan-y">
      {/* Header */}
      <header
        className="bg-white border-b border-gray-200 px-4 py-3"
        style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
      >
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center text-xl">
              ⚡
            </button>
            <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl border border-gray-200">
              🎁
            </button>
          </div>
          <h1 className="text-2xl font-bold text-green-600">JOB</h1>
          <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-gray-200">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main
        className="flex-1 overflow-y-auto overflow-x-hidden pb-20"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="max-w-md mx-auto px-4 py-6">
          {currentJob ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentJob.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
                exit={{
                  opacity: 0,
                  x: exitX,
                  transition: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                dragDirectionLock={true}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                whileDrag={{
                  rotate: 0,
                  scale: 1.05,
                  cursor: "grabbing",
                }}
                style={{
                  cursor: "grab",
                  touchAction: "pan-y",
                }}
                className="bg-white rounded-3xl shadow-lg p-6 space-y-6 relative"
              >
                {/* Swipe Feedback Labels */}
                {dragX !== 0 && (
                  <>
                    {/* APPLY label when swiping right */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: dragX > 30 ? Math.min(dragX / 100, 1) : 0,
                      }}
                      className="absolute top-8 right-8 bg-green-500 text-white px-6 py-3 rounded-xl font-bold text-2xl transform rotate-12 border-4 border-green-600 shadow-lg z-10"
                      style={{ pointerEvents: "none" }}
                    >
                      APPLY
                    </motion.div>

                    {/* PASS label when swiping left */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity:
                          dragX < -30 ? Math.min(Math.abs(dragX) / 100, 1) : 0,
                      }}
                      className="absolute top-8 left-8 bg-red-500 text-white px-6 py-3 rounded-xl font-bold text-2xl transform -rotate-12 border-4 border-red-600 shadow-lg z-10"
                      style={{ pointerEvents: "none" }}
                    >
                      PASS
                    </motion.div>
                  </>
                )}

                {/* Category Badge */}
                <div>
                  <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {currentJob.category}
                  </span>
                </div>

                {/* Job Title */}
                <h2 className="text-3xl font-bold text-gray-900">
                  {currentJob.title}
                </h2>

                {/* Company */}
                <button className="flex items-center justify-between w-full p-4 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white font-bold">
                      {currentJob.company.charAt(0)}
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      {currentJob.company}
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Work Arrangement */}
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">
                    Work arrangement
                  </h3>
                  <div className="flex gap-3">
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-sm font-medium flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {currentJob.workArrangement}
                    </span>
                    <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-xl text-sm font-medium flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {currentJob.jobType}
                    </span>
                  </div>
                </div>

                {/* Compensation */}
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">
                    Compensation
                  </h3>
                  <span className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-xl text-sm font-semibold flex items-center gap-2 w-fit">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {currentJob.compensation}
                  </span>
                </div>

                {/* Experience Level */}
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">
                    Experience level
                  </h3>
                  <span className="inline-block px-4 py-2 bg-purple-50 text-purple-700 rounded-xl text-sm font-medium flex items-center gap-2 w-fit">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {currentJob.experienceLevel}
                  </span>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">
                    Education
                  </h3>
                  <span className="inline-block px-4 py-2 bg-orange-50 text-orange-700 rounded-xl text-sm font-medium flex items-center gap-2 w-fit">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    {currentJob.education}
                  </span>
                </div>

                {/* Job Description */}
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">
                    Job description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {currentJob.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
              <p className="text-xl font-semibold text-gray-900 mb-2">
                No more jobs
              </p>
              <p className="text-gray-500">
                You've viewed all available jobs. Check back later!
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Action Buttons */}
      {currentJob && (
        <div
          className="fixed left-0 right-0 bg-white border-t border-gray-200 py-4 px-4"
          style={{ bottom: "calc(64px + env(safe-area-inset-bottom))" }}
        >
          <div className="max-w-md mx-auto flex items-center justify-center gap-4">
            <button
              onClick={handleBack}
              disabled={currentJobIndex === 0}
              className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              aria-label="Go back"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>

            <button
              onClick={handleDislike}
              className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors"
              aria-label="Reject"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button
              className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Save note"
            >
              <svg
                className="w-6 h-6 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>

            <button
              onClick={handleLike}
              className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-green-500 hover:bg-green-50 transition-colors"
              aria-label="Like"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>

            <button
              className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Share"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 pb-safe"
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        <div className="max-w-md mx-auto flex items-center justify-around">
          <button
            onClick={() => setActiveTab("feed")}
            className={`flex flex-col items-center gap-1 py-2 px-3 ${
              activeTab === "feed" ? "text-green-600" : "text-gray-400"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="text-xs font-medium">Feed</span>
          </button>

          <button
            onClick={() => setActiveTab("applications")}
            className={`flex flex-col items-center gap-1 py-2 px-3 ${
              activeTab === "applications" ? "text-green-600" : "text-gray-400"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-xs font-medium">Applications</span>
          </button>

          <button
            onClick={() => setActiveTab("live")}
            className={`flex flex-col items-center gap-1 py-2 px-3 ${
              activeTab === "live" ? "text-green-600" : "text-gray-400"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs font-medium">Live</span>
          </button>

          <button
            onClick={() => setActiveTab("feedback")}
            className={`flex flex-col items-center gap-1 py-2 px-3 ${
              activeTab === "feedback" ? "text-green-600" : "text-gray-400"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-xs font-medium">Feedback</span>
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center gap-1 py-2 px-3 ${
              activeTab === "profile" ? "text-green-600" : "text-gray-400"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

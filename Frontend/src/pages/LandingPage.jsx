import React, { useContext, useState } from "react";
import { landingPageStyles } from "../assets/dummystyle";
import {
  LayoutTemplate,
  X,
  Menu,
  ArrowRight,
  Zap,
  Download,
} from "lucide-react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { ProfileInfoCard } from "../components/Cards";
import Modal from "../components/Modal";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(null); // FIX: null instead of false
  const currentYear = new Date().getFullYear();

  const handleCTA = () => {
    if (!user) {
      setCurrentPage("login");
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  const stats = [
    {
      value: "20K+",
      label: "Resumes Created",
      gradient: "from-violet-600 to-fuchsia-600",
    },
    {
      value: "4.9★",
      label: "User Rating",
      gradient: "from-orange-500 to-red-500",
    },
    {
      value: "5 Min",
      label: "Build Time",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const features = [
    {
      icon: <Zap className={landingPageStyles.featureIcon} />,
      title: "Lightning Fast Creation",
      description:
        "Build your professional resume in just minutes, with our quick and easy guided process.",
      gradient: landingPageStyles.featureIconViolet,
      bg: landingPageStyles.featureCardViolet,
    },
    {
      icon: <LayoutTemplate className={landingPageStyles.featureIcon} />,
      title: "Standout Templates",
      description:
        "Select from a diverse collection of professionally designed, recruiter-approved templates.",
      gradient: landingPageStyles.featureIconFuchsia,
      bg: landingPageStyles.featureCardFuchsia,
    },
    {
      icon: <Download className={landingPageStyles.featureIcon} />,
      title: "Seamless Download",
      description:
        "Instantly export and share your resume as a perfectly formatted PDF.",
      gradient: landingPageStyles.featureIconOrange,
      bg: landingPageStyles.featureCardOrange,
    },
  ];

  return (
    <div className={landingPageStyles.container}>
      {/* Header */}
      <header className={landingPageStyles.header}>
        <div className={landingPageStyles.headerContainer}>
          {/* Logo */}
          <div className={landingPageStyles.logoContainer}>
            <div className={landingPageStyles.logoIcon}>
              <LayoutTemplate className={landingPageStyles.logoIconInner} />
            </div>
            <span className={landingPageStyles.logoText}>ResumePro</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={landingPageStyles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className={landingPageStyles.mobileMenuIcon} />
            ) : (
              <Menu size={24} className={landingPageStyles.mobileMenuIcon} />
            )}
          </button>

          {/* Desktop Auth Button */}
          <div className="hidden md:flex items-center">
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className={landingPageStyles.desktopAuthButton}
                onClick={() => {
                  setCurrentPage("login");
                  setOpenAuthModal(true);
                }}
              >
                <div
                  className={landingPageStyles.desktopAuthButtonOverlay}
                ></div>
                <div className={landingPageStyles.desktopAuthButtonText}>
                  Get Started
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={landingPageStyles.mobileMenu}>
            <div className={landingPageStyles.mobileMenuContainer}>
              {user ? (
                <div className={landingPageStyles.mobileUserInfo}>
                  <div className={landingPageStyles.mobileUserWelcome}>
                    Welcome Back
                  </div>
                  <button
                    className={landingPageStyles.mobileDashboardButton}
                    onClick={() => {
                      navigate("/dashboard");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Go to Dashboard
                  </button>
                </div>
              ) : (
                <button
                  className={landingPageStyles.mobileAuthButton}
                  onClick={() => {
                    setCurrentPage("login");
                    setOpenAuthModal(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className={landingPageStyles.main}>
        {/* Hero Section */}
        <section className={landingPageStyles.heroSection}>
          <div className={landingPageStyles.heroGrid}>
            {/* Left */}
            <div className={landingPageStyles.heroLeft}>
              <div className={landingPageStyles.tagline}>
                Professional Resume Builder
              </div>
              <h1 className={landingPageStyles.heading}>
                <span className={landingPageStyles.headingText}>Design</span>
                <span className={landingPageStyles.headingGradient}>
                  Professional
                </span>
                <span className={landingPageStyles.headingText}>Resumes</span>
              </h1>
              <p className={landingPageStyles.description}>
                Build a perfect resume in minutes. Our easy-to-use tools help
                you create a polished and effective resume that opens doors to
                new career opportunities.
              </p>
              <div className={landingPageStyles.ctaButtons}>
                <button
                  className={landingPageStyles.primaryButton}
                  onClick={handleCTA}
                >
                  <div className={landingPageStyles.primaryButtonOverlay}></div>
                  <span className={landingPageStyles.primaryButtonContent}>
                    Start Project
                    <ArrowRight
                      className={landingPageStyles.primaryButtonIcon}
                    />
                  </span>
                </button>
                <button
                  className={landingPageStyles.secondaryButton}
                  onClick={handleCTA}
                >
                  View Templates
                </button>
              </div>

              {/* Stats */}
              <div className={landingPageStyles.statsContainer}>
                {stats.map((stat, idx) => (
                  <div className={landingPageStyles.statItem} key={idx}>
                    <div className={landingPageStyles.statNumber}>
                      <span
                        className={`bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient}`}
                      >
                        {stat.value}
                      </span>
                    </div>
                    <div className={landingPageStyles.statLabel}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={landingPageStyles.heroIllustration}>
              <div className={landingPageStyles.heroIllustrationBg}></div>
              <div className={landingPageStyles.heroIllustrationContainer}>
                <svg
                  viewBox="0 0 400 500"
                  className={landingPageStyles.svgContainer}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background */}
                  <defs>
                    <linearGradient
                      id="bgGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                    <linearGradient
                      id="cardGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#f8fafc" />
                    </linearGradient>
                  </defs>

                  {/* SVG elements */}
                  <rect
                    x="50"
                    y="50"
                    width="300"
                    height="400"
                    rx="20"
                    className={landingPageStyles.svgRect}
                  />
                  <circle
                    cx="120"
                    cy="120"
                    r="25"
                    className={landingPageStyles.svgCircle}
                  />
                  <rect
                    x="160"
                    y="105"
                    width="120"
                    height="8"
                    rx="4"
                    className={landingPageStyles.svgRectPrimary}
                  />
                  <rect
                    x="160"
                    y="120"
                    width="80"
                    height="6"
                    rx="3"
                    className={landingPageStyles.svgRectSecondary}
                  />
                  <rect
                    x="70"
                    y="170"
                    width="260"
                    height="4"
                    rx="2"
                    className={landingPageStyles.svgRectLight}
                  />
                  <rect
                    x="70"
                    y="185"
                    width="200"
                    height="4"
                    rx="2"
                    className={landingPageStyles.svgRectLight}
                  />
                  <rect
                    x="70"
                    y="200"
                    width="240"
                    height="4"
                    rx="2"
                    className={landingPageStyles.svgRectLight}
                  />
                  <rect
                    x="70"
                    y="230"
                    width="60"
                    height="6"
                    rx="3"
                    className={landingPageStyles.svgRectPrimary}
                  />
                  <rect
                    x="70"
                    y="250"
                    width="40"
                    height="15"
                    rx="7"
                    className={landingPageStyles.svgRectSkill}
                  />
                  <rect
                    x="120"
                    y="250"
                    width="50"
                    height="15"
                    rx="7"
                    className={landingPageStyles.svgRectSkill}
                  />
                  <rect
                    x="180"
                    y="250"
                    width="45"
                    height="15"
                    rx="7"
                    className={landingPageStyles.svgRectSkill}
                  />
                  <rect
                    x="70"
                    y="290"
                    width="80"
                    height="6"
                    rx="3"
                    className={landingPageStyles.svgRectSecondary}
                  />
                  <rect
                    x="70"
                    y="310"
                    width="180"
                    height="4"
                    rx="2"
                    className={landingPageStyles.svgRectLight}
                  />
                  <rect
                    x="70"
                    y="325"
                    width="150"
                    height="4"
                    rx="2"
                    className={landingPageStyles.svgRectLight}
                  />
                  <rect
                    x="70"
                    y="340"
                    width="200"
                    height="4"
                    rx="2"
                    className={landingPageStyles.svgRectLight}
                  />

                  {/* Animated elements */}
                  <circle
                    cx="320"
                    cy="100"
                    r="15"
                    className={landingPageStyles.svgAnimatedCircle}
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-10; 0,0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <rect
                    x="30"
                    y="300"
                    width="12"
                    height="12"
                    rx="6"
                    className={landingPageStyles.svgAnimatedRect}
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 5,0; 0,0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <polygon
                    points="360,200 370,220 350,220"
                    className={landingPageStyles.svgAnimatedPolygon}
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 360 210; 360 360 210; 0 360 210"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </polygon>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={landingPageStyles.featuresSection}>
          <div className={landingPageStyles.featuresContainer}>
            <div className={landingPageStyles.featuresHeader}>
              <h2 className={landingPageStyles.featuresTitle}>
                Why Choose{" "}
                <span className={landingPageStyles.featuresTitleGradient}>
                  ResumePro?
                </span>
              </h2>
              <p className={landingPageStyles.featuresDescription}>
                Create a job-winning resume that gets you noticed.
              </p>
            </div>
            <div className={landingPageStyles.featuresGrid}>
              {features.map((feature, ind) => (
                <div key={ind} className={landingPageStyles.featureCard}>
                  <div className={landingPageStyles.featureCardHover}></div>
                  <div
                    className={`${landingPageStyles.featureCardContent} ${feature.bg}`}
                  >
                    <div
                      className={`${landingPageStyles.featureIconContainer} ${feature.gradient}`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className={landingPageStyles.featureTitle}>
                      {feature.title}
                    </h3>
                    <p className={landingPageStyles.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={landingPageStyles.ctaSection}>
          <div className={landingPageStyles.ctaContainer}>
            <div className={landingPageStyles.ctaCard}>
              <div className={landingPageStyles.ctaCardBg}></div>
              <div className={landingPageStyles.ctaCardContent}>
                <h2 className={landingPageStyles.ctaTitle}>
                  Ready to Build Your{" "}
                  <span className={landingPageStyles.ctaTitleGradient}>
                    Professional Resume?
                  </span>
                </h2>
                <p className={landingPageStyles.ctaDescription}>
                  Our platform helps thousands of professionals land their dream
                  jobs with standout, custom resumes.
                </p>
                <button
                  className={landingPageStyles.ctaButton}
                  onClick={handleCTA}
                >
                  <div className={landingPageStyles.ctaButtonOverlay}></div>
                  <span className={landingPageStyles.ctaButtonText}>
                    Start Building
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={landingPageStyles.footer}>
        <div className={landingPageStyles.footerContainer}>
          <p className={landingPageStyles.footerText}>
            &copy; {currentYear} Made with{" "}
            <span className={landingPageStyles.footerHeart}>💗</span> by Sandip
            Naskar
          </p>
        </div>
      </footer>

      {/* Auth Modal */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage(null);
        }}
        hideHeader
      >
        <div key={currentPage}>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
         {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}

        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;

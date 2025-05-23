type AboutProps = {
  isHome?: boolean;
};

const About: React.FC<AboutProps> = ({ isHome = false }) => {
  return (
    <div className={isHome ? "section-outer" : "section-outer section-outer--page"}>
      <div className="page-box">
        {/* Title at top center */}
        <h2 className="section-title">
          {isHome ? 'Welcome!' : 'About Me'}
        </h2>

        {/* Content area: image + text */}
        <div className="flex flex-1 items-center">
          {/* Left: Circle image */}
          <div className="w-1/3 flex items-center justify-center">
            <img
              src="/portrait.jpg"
              alt="Profile"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-secondary shadow-md"
            />
          </div>

          {/* Right: Introduction */}
          <div className="w-2/3 flex flex-col justify-center px-6">
            <p className="text-gray-600 text-center">
              {isHome
                ? "Here's a brief introduction about me."
                : 'This is the full About page with more detailed information.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

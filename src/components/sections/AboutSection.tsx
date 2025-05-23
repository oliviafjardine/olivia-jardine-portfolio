type AboutProps = {
  isHome?: boolean;
};

const About: React.FC<AboutProps> = ({ isHome = false }) => {
  return (
    <div className={isHome ? "section-outer" : "section-outer section-outer--page"}>
      <div className="page-box">
        {/* Title at top center */}
        <h2 className="section-title">
          {isHome ? 'About' : 'About Me'}
        </h2>

        {/* Content area: image + text */}
        <div className="flex flex-col md:flex-row flex-1 items-center">
          {/* Left: Circle image */}
          <div className="w-full md:w-1/3 flex items-center justify-center mb-6 md:mb-0">
            <img
              src="/portrait.jpg"
              alt="Profile"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-2 border-secondary shadow-md"
            />
          </div>

          {/* Right: Introduction */}
          <div className="w-full md:w-2/3 flex flex-col justify-center px-6 space-y-4">
            <p className="leading-relaxed md:leading-loose">
              As a sophomore at the <span className="text-violet-900">University of Washington</span> pursuing a degree in Discrete Math and Algorithms, I build full-stack web applications that help businesses streamline their marketing workflows and boost productivity. I specialize in bridging clean design with computational efficiency—creating responsive, user-focused interfaces powered by optimized backend logic.
            </p>
            {!isHome && (
              <p className="leading-relaxed md:leading-loose">This is the full About page with more detailed information.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

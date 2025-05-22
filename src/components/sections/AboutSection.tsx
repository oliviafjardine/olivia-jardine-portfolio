// components/About.tsx (or pages/About.tsx if that's how you're structuring it)
type AboutProps = {
    isHome?: boolean;
  };
  
  const About: React.FC<AboutProps> = ({ isHome = false }) => {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <h2 className="section-title">About Me</h2>
      </div>
    );
  };
  
  export default About;
  
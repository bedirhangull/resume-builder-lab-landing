const Footer10 = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container">
        <footer>
          {/* Heading */}
          <div className="text-left">
            <h3 className="font-bold text-xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              resumebuilderlab.com
            </h3>
          </div>

          {/* Footer Content */}
          <div className="flex flex-col justify-between gap-4 py-8 sm:py-12 md:flex-row md:gap-0">
            <div className="text-base sm:text-lg">
              © Copyright resumebuilderlab.com 2025
            </div>
            <div className="text-base sm:text-lg">
              info@resumebuilderlab.com
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer10;
const Shimmer = () => {
  return (
    <>
      <div data-testid="shimmer-container" className="w-62.5 h-80">
        <div className="shimmer w-full h-50 rounded-xl"></div>
        <div className="flex flex-col h-[35%] justify-center gap-2 px-[5%]">
          <div className="shimmer w-[50%] h-5 rounded-sm"></div>
          <div className="shimmer w-full h-5 rounded-sm"></div>
        </div>
      </div>
    </>
  );
};

export default Shimmer;

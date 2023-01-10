export const CardContainer = ({ children }) => {
  return (
    <div
      className={`bg-[#F6F5F8] w-full sm:min-w-[250px] sm:max-w-[400px] p-4 rounded-xl flex flex-col overflow-hidden select-none`}
    >
      {children}
    </div>
  );
};

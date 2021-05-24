type TextContent = { innerText: string | number };

function Badge({ innerText }: TextContent) {
  return (
    <button className="relative focus:outline-none">
      <div className="w-12 h-6 transition rounded-full outline-none bg-primary-100 dark:bg-primary-darker">
        {innerText}
      </div>
      <div className="absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform scale-110 rounded-full shadow-sm"></div>
    </button>
  );
}

export default Badge;

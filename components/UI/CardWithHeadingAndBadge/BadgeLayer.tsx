type TextContent = { innerText: string };

function BadgeLayer({ innerText }: TextContent) {
  return (
    <span className="text-sm text-gray-500 dark:text-light">{innerText}</span>
  );
}

export default BadgeLayer;

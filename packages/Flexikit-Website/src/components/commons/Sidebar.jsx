import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Command } from "lucide-react";
import { data } from "./Data";
// import { buttonData } from "./Data";

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const SidebarSection = ({ title, items, section }) => (
    <li>
      <button
        onClick={() => toggleSection(section)}
        className="flex items-center justify-between w-full text-left font-bold py-2 px-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        {title}
        {expandedSections[section] ? (
          <ChevronDown size={20} />
        ) : (
          <ChevronRight size={20} />
        )}
      </button>
      {expandedSections[section] && (
        <ul className="pl-4 mt-2 space-y-2">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center gap-2 py-1 px-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Command size={24} className="text-blue-500"/>{item.usageCode}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <div className="z-10 flex-shrink-0 w-72 p-4 bg-opacity-80  text-gray-900 dark:text-gray-100 sticky top-0 h-screen overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 dark:scrollbar-track-gray-950">
      <h2 className="text-2xl font-bold mb-6 px-4 text-blue-500">
        <span>{`<`}</span>Flexikit<span>{` />`}</span>
      </h2>

      <ul className="space-y-2">
        <SidebarSection title="Loaders" items={data} section="loaders" />
        {/* <SidebarSection title="Buttons" items={buttonData} section="buttons" /> */}
      </ul>
    </div>

  );
};

export default Sidebar;

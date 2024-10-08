import { useState } from "react";
import { Copy, ClipboardCheck } from "lucide-react";

const PreviewBox = ({
  Component,
  importPath,
  UsageCode,
  propsTable,
  secColor = true,
}) => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [compColor, setCompColor] = useState("#3498db");
  const [secondaryColor, setSecondaryColor] = useState("#e74c3c");
  const [importCopy, setImportCopy] = useState(false);
  const [usageCopy, setUsageCopy] = useState(false);

  const copyToClipBoard = (text, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="p-4 relative z-10">
      <h3 className="text-2xl text-blue-500 font-semibold mb-4">{UsageCode}</h3>

      {/* Preview Box */}
      <div
        key={bgColor}
        className="p-4 h-40 rounded-md border-2 flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        <div style={{ color: compColor }}>
          {secColor ? (
            <Component color={compColor} secondaryColor={secondaryColor} />
          ) : (
            <Component color={compColor} />
          )}
        </div>
      </div>
      {/* Customization Controls */}
      <div className="flex flex-col items-center md:flex-row md:gap-4 my-4">
        <h4 className="text-blue-500 text-lg font-bold mb-2">Customize:</h4>
        <div className="flex gap-2">
          <label className="block mb-2">Background Color :</label>
          <input
            type="color"
            value={bgColor}
            onInput={(e) => setBgColor(e.target.value)}
            className="bg-transparent cursor-pointer"
          />
        </div>
        <div className="flex gap-2">
          <label className="block mb-2"> Color :</label>
          <input
            type="color"
            value={compColor}
            onChange={(e) => setCompColor(e.target.value)}
            className="bg-transparent cursor-pointer"
          />
        </div>
        {secColor && (
          <div className="flex gap-2">
            <label className="block mb-2">Secondary Color :</label>
            <input
              type="color"
              value={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
              className="bg-transparent cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Code Section */}
      <div className="mt-4">
        <h4 className="text-blue-500 text-lg font-bold mb-2">Code :</h4>
        <pre className="bg-gray-200 dark:bg-gray-800 dark:bg-opacity-50 dark:backdrop-blur-md p-4 rounded mb-2 relative">
          <button
            className="inset-y-2 right-4 absolute"
            onClick={() =>
              copyToClipBoard(
                `import { ${UsageCode} } from '${importPath}'`,
                setImportCopy
              )
            }
          >
            {importCopy ? <ClipboardCheck /> : <Copy />}
          </button>
          <code>
            <span className="text-blue-500">import</span>
            <span className="text-orange-500">{` { `}</span>
            {`${UsageCode}`}
            <span className="text-orange-500">{` } `}</span>
            <span className="text-blue-500">from</span>
            <span className="text-green-500">{` '${importPath}'`}</span>
          </code>
        </pre>
        <pre className="bg-gray-200 dark:bg-gray-800 dark:bg-opacity-50 dark:backdrop-blur-md p-4 rounded mb-2 relative">
          <button
            className="inset-y-2 right-4 absolute"
            onClick={() => copyToClipBoard(`<${UsageCode} />`, setUsageCopy)}
          >
            {usageCopy ? <ClipboardCheck /> : <Copy />}
          </button>
          <code>
            <span className="text-green-500">{`<`}</span>
            <span>{`${UsageCode}`}</span>
            <span className="text-green-500">{` />`}</span>
          </code>
        </pre>
      </div>

      {/* Props Table */}
      <div className="mt-4">
        <h4 className="text-blue-500 text-lg font-bold mb-2">Props Table:</h4>
        <table className="w-full bg-gray-200 dark:bg-gray-800 dark:bg-opacity-50 dark:backdrop-blur-md rounded-md text-left overflow-y-hidden overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 dark:scrollbar-track-gray-950">
          <thead>
            <tr>
              <th className="p-4 border-b dark:border-gray-600">Prop Name</th>
              <th className="p-4 border-b dark:border-gray-600">Default</th>
              <th className="p-4 border-b dark:border-gray-600">Recommended</th>
              <th className="p-4 border-b dark:border-gray-600">Description</th>
            </tr>
          </thead>
          <tbody>
            {propsTable.map((prop, index) => (
              <tr key={index}>
                <td className="p-4">{prop.name}</td>
                <td className="p-4">{prop.defaultValue}</td>
                <td className="p-4">{prop.recommended}</td>
                <td className="p-4">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviewBox;

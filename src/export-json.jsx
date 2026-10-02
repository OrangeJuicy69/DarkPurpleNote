import "./basicnode.css";

export const ExportJSON = ({ nodeList = [] }) => {
  const handleExport = () => {
    const jsonString = JSON.stringify(nodeList, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="export-json-container">
      <button id="export-json" onClick={handleExport}>
        Export JSON
      </button>
    </div>
  );
};
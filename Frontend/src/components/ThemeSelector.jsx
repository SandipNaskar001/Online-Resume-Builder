import React, { useState, useRef, useEffect } from "react";
import { resumeTemplates, DUMMY_RESUME_DATA } from "../utils/data";
import Tabs from "../components/Tabs";
import { Check } from "lucide-react";
import { TemplateCard } from "./Cards";
import RenderResume from "./RenderResume";

const TAB_DATA = [{ label: "Templates" }];

const ThemeSelector = ({
  selectedTheme: initialTheme,
  setSelectedTheme,
  resumeData,
  onClose,
}) => {
  const resumeRef = useRef(null);
  const [baseWidth, setBaseWidth] = useState(800);

  // Find initial index
  const initialIndex = resumeTemplates.findIndex((t) => t.id === initialTheme);

  // Local state for selected template
  const [selectedTemplate, setSelectedTemplate] = useState({
    theme: initialTheme || resumeTemplates[0]?.id || "",
    index: initialIndex >= 0 ? initialIndex : 0,
  });

  const [tabValue, setTabValue] = useState("Templates");

  // Update preview width on resize
  const updateBaseWidth = () => {
    if (resumeRef.current) {
      setBaseWidth(resumeRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateBaseWidth();
    window.addEventListener("resize", updateBaseWidth);
    return () => {
      window.removeEventListener("resize", updateBaseWidth);
    };
  }, []);

  // Handle template selection
  const handleTemplateSelect = (template, index) => {
    setSelectedTemplate({ theme: template.id, index });
    setSelectedTheme(template.id); // Update parent immediately
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:p-6 bg-gradient-to-r from-white to-blue-50 rounded-2xl border border-blue-100">
        <Tabs tabs={TAB_DATA} activeTab={tabValue} setActiveTab={setTabValue} />

        <button
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-300 to-cyan-400 text-white font-bold rounded-2xl hover:scale-105 hover:shadow-xl transition-all"
          onClick={onClose} // just close modal
        >
          <Check size={18} /> Done
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
        {/* Template List */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] lg:max-h-[70vh] overflow-auto p-2">
            {resumeTemplates.map((template, index) => (
              <TemplateCard
                key={`template_${index}`}
                thumbnailImg={template.thumbnailImg}
                isSelected={selectedTemplate.index === index}
                onSelect={() => handleTemplateSelect(template, index)}
              />
            ))}
          </div>
        </div>

        {/* Preview */}
        <div
          className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-4 sm:p-6"
          ref={resumeRef}
        >
          <RenderResume
            key={`preview-${selectedTemplate.theme}`}
            templateId={selectedTemplate.theme || ""}
            resumeData={resumeData || DUMMY_RESUME_DATA}
            containerWidth={baseWidth}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;

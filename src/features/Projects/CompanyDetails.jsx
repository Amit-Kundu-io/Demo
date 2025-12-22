import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import VO from "./tabs/VO";
import History from "./tabs/HistoryScreen";
import Approve from "./tabs/Approve";

const TABS = ["VO", "History", "Approve"];

export default function CompanyDetails() {
  const { state } = useLocation();
  const { companyId } = useParams();
  const [activeTab, setActiveTab] = useState("VO");

  const companyName = state?.name || `Company ${companyId}`;

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{companyName}</h2>
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div className="py-4">
        {activeTab === "VO" && <VO />}
        {activeTab === "History" && <History />}
        {activeTab === "Approve" && <Approve />}
      </div>
    </div>
  );
}

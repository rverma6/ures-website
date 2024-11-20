import {
  BookOpenIcon,
  GraduationCapIcon,
  BeakerIcon,
  BrainIcon,
  FlaskConicalIcon,
  LineChartIcon,
  HelpCircleIcon,
  CheckCircleIcon,
} from "lucide-react";
import React, { useState } from "react";

export default function ResearchGroup() {
  const [selectedResearcher, setSelectedResearcher] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  
  const researchers = [
    {
      id: 1,
      name: "Professor. Christopher Kinson",
      role: "Supervising Professor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80",
      project: "Statistical Learning in High Dimensions",
      description: "Leading research in modern statistical learning methods with applications in genomics and neuroscience.",
      publications: ["Nature Statistics 2023", "Journal of Machine Learning 2022"],
      hypothesis: "High-dimensional statistical learning methods can improve genomic data analysis accuracy by 40%",
      methodology: "Comparative analysis of traditional vs. modern statistical learning methods using genomic datasets",
      researchQuestions: [
        "How do high-dimensional methods compare to traditional approaches?",
        "What are the computational trade-offs?",
        "How can we optimize for both accuracy and efficiency?",
      ],
      results: "Achieved 45% improvement in accuracy with novel statistical learning approach",
      graphs: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
      ],
    },
    {
      id: 2,
      name: "Sanjana Addanki",
      role: "Undergraduate Researcher",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.1&auto=format&fit=crop&w=200&q=80",
      project: "Bayesian Methods in Climate Science",
      description: "Developing novel Bayesian statistical methods for analyzing climate data and improving prediction models.",
      publications: ["Climate Statistics Review 2023", "Environmental Data Science 2022"],
      hypothesis: "Bayesian methods can improve climate prediction accuracy by incorporating historical data patterns",
      methodology: "Implementation of hierarchical Bayesian models with advanced MCMC techniques",
      researchQuestions: [
        "How can we better model climate uncertainty?",
        "What role does prior knowledge play in prediction accuracy?",
        "How can we scale Bayesian methods to global datasets?",
      ],
      results: "Developed new Bayesian model with 30% better prediction accuracy",
      graphs: [
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
      ],
    },
    {
      id: 3,
      name: "Leah Decatus-Haddad",
      role: "Undergraduate Researcher",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.1&auto=format&fit=crop&w=200&q=80",
      project: "Neural Networks in Medical Imaging",
      description: "Applying advanced statistical methods to improve medical image analysis using deep learning.",
      publications: ["Medical AI Journal 2023", "Statistical Computing in Medicine 2022"],
      hypothesis: "Deep learning models can detect early-stage diseases with higher accuracy than traditional methods",
      methodology: "Development of custom neural network architectures with statistical validation",
      researchQuestions: [
        "How can we ensure reliability in medical AI systems?",
        "What statistical guarantees can we provide?",
        "How do we handle rare disease cases?",
      ],
      results: "Achieved 92% accuracy in early-stage disease detection",
      graphs: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
      ],
    },
    {
      id: 4,
      name: "Ethan Lai",
      role: "Undergraduate Researcher",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.1&auto=format&fit=crop&w=200&q=80",
      project: "Causal Inference in Economics",
      description: "Investigating causal relationships in economic systems using advanced statistical methods.",
      publications: ["Econometrics Journal 2023", "Statistical Economics Review 2022"],
      hypothesis: "Novel causal inference methods can better identify economic policy effects",
      methodology: "Development of new instrumental variable approaches with machine learning",
      researchQuestions: [
        "How can we better identify causality in economic systems?",
        "What role does machine learning play in causal inference?",
        "How do we handle confounding in large-scale economic data?",
      ],
      results: "Developed new method showing 25% improvement in policy effect estimation",
      graphs: [
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
      ],
    },
    {
      id: 5,
      name: "Rayva Verma",
      role: "Undergraduate Researcher",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.1&auto=format&fit=crop&w=200&q=80",
      project: "Statistical Genetics",
      description: "Developing statistical methods for analyzing large-scale genetic data and disease associations.",
      publications: ["Genetic Statistics 2023", "Computational Biology Review 2022"],
      hypothesis: "Advanced statistical methods can identify complex genetic disease patterns",
      methodology: "Integration of machine learning with traditional genetic analysis methods",
      researchQuestions: [
        "How can we better identify gene-disease associations?",
        "What role does epistasis play in disease risk?",
        "How do we handle high-dimensional genetic data?",
      ],
      results: "Identified novel genetic markers with 35% improved prediction accuracy",
      graphs: [
        "https://images.unsplash.com/photo-1542992015-c75d42ecab0f?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1542992015-7550f1f2a4e9?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen p-8">
      <header className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCapIcon className="w-8 h-8" />
          <h1 className="text-3xl font-bold">URES Statistical Research Group</h1>
        </div>
        <p className="text-lg text-gray-600">
          Department of Statistics, University of Illinois at Urbana-Champaign
        </p>
      </header>

      <main className="max-w-7xl mx-auto flex gap-8">
        {/* Team members sidebar */}
        <div className="w-64 space-y-4">  {/* Changed from w-72 to w-64 */}
          {researchers.map((researcher) => (
            <div key={researcher.id} className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => {
                  setSelectedResearcher(researcher);
                  setActiveTab("overview");
                }}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  selectedResearcher?.id === researcher.id
                    ? "border-purple-600 bg-purple-50"
                    : "border-gray-200 hover:border-purple-400"
                }`}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={researcher.image}
                    alt={researcher.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{researcher.name}</h3>
                    <p className="text-sm text-gray-600">{researcher.role}</p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Project details section */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          {selectedResearcher ? (
            <div>
              {/* Researcher header */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={selectedResearcher.image}
                  alt={selectedResearcher.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold">
                    {selectedResearcher.name}
                  </h2>
                  <p className="text-gray-600">{selectedResearcher.role}</p>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex space-x-4 mb-6 border-b">
                {[
                  { id: "overview", icon: BeakerIcon, label: "Overview" },
                  { id: "research", icon: FlaskConicalIcon, label: "Research" },
                  { id: "results", icon: LineChartIcon, label: "Results" },
                  { id: "publications", icon: BookOpenIcon, label: "Publications" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-all ${
                      activeTab === tab.id
                        ? "border-purple-600 text-purple-600"
                        : "border-transparent hover:border-purple-400"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold mb-2">
                      <BeakerIcon className="w-5 h-5" />
                      Current Project
                    </h3>
                    <h4 className="text-lg mb-2">{selectedResearcher.project}</h4>
                    <p className="text-gray-600">
                      {selectedResearcher.description}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "research" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold mb-4">
                      <FlaskConicalIcon className="w-5 h-5" />
                      Research Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Hypothesis</h4>
                        <p className="text-gray-600">
                          {selectedResearcher.hypothesis}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Methodology</h4>
                        <p className="text-gray-600">
                          {selectedResearcher.methodology}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Research Questions</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          {selectedResearcher.researchQuestions.map(
                            (question, index) => (
                              <li key={index}>{question}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "results" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold mb-4">
                      <LineChartIcon className="w-5 h-5" />
                      Research Results
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {selectedResearcher.results}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedResearcher.graphs.map((graph, index) => (
                        <img
                          key={index}
                          src={graph}
                          alt={`Research graph ${index + 1}`}
                          className="rounded-lg shadow-md"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "publications" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold mb-4">
                      <BookOpenIcon className="w-5 h-5" />
                      Publications
                    </h3>
                    <ul className="space-y-2">
                      {selectedResearcher.publications.map((pub, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <CheckCircleIcon className="w-4 h-4 text-green-500" />
                          {pub}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <BrainIcon className="w-12 h-12 mx-auto mb-4" />
                <p>Select a researcher to view their project details</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
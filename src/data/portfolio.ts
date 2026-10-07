// All portfolio content lives here. Edit this file to update the site.
// Every item below comes from the candidate's résumé and LinkedIn profile.

export const profile = {
  name: "Shivaprasad Mavila",
  title: "AI Engineer",
  positioning:
    "I build machine learning systems that detect threats, serve predictions through APIs, and stay accurate once they are deployed.",
  location: "Al Qusais, Dubai, UAE",
  email: "mavilashivaprasad@gmail.com",
  phone: "+971 50 279 2663",
  linkedin: "https://www.linkedin.com/in/shivaprasad-mavila",
  github: "https://github.com/shivaprasad99m-creator",
  // Put your PDF at public/resume.pdf and set this to "/resume.pdf" to show a download button.
  resumeUrl: "",
};

export const about = [
  "I'm an AI Engineer with an MSc in Artificial Intelligence and Robotics from the University of Hertfordshire. My work spans supervised machine learning, computer vision, and the APIs and pipelines that put models into use.",
  "At Fortray Global Services I built threat and anomaly detection pipelines, automated data preprocessing, served predictions through FastAPI and Flask, and helped monitor deployed models for drift. Before that, I worked in enterprise IT support, which gives me a practical view of the systems AI has to run inside.",
  "I'm interested in applying AI and automation to improve business processes, productivity, and decision making.",
];

export type Metric = {
  label: string;
  value: string;
  context: string;
  bar?: number; // 0-100, only for values that are percentages
};

export const metrics: Metric[] = [
  { label: "Threat and anomaly detection accuracy", value: "+18%", context: "Fortray Global Services", bar: 18 },
  { label: "False-positive rate", value: "−22%", context: "Fortray Global Services", bar: 22 },
  { label: "Model training preparation time", value: "−30%", context: "Fortray Global Services", bar: 30 },
  { label: "Model inference latency", value: "−25%", context: "Fortray Global Services", bar: 25 },
  { label: "Waste classification accuracy", value: "95%", context: "800 labelled images, MSc project", bar: 95 },
  { label: "Phishing and SQL injection detection", value: "90%", context: "ROC-AUC 0.96, independent project", bar: 90 },
];

export type Project = {
  name: string;
  context: string;
  problem: string;
  solution: string;
  contribution: string;
  outcome: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "Production ML for threat and anomaly detection",
    context: "Fortray Global Services Limited, London, 2025",
    problem:
      "Detect threats and anomalies accurately with fewer false alarms, then serve those predictions in real time and keep deployed models reliable.",
    solution:
      "Supervised learning pipelines in Scikit-learn, automated preprocessing for raw multi-source datasets, and lightweight FastAPI and Flask services to serve predictions.",
    contribution:
      "Engineered and optimised the pipelines, designed the preprocessing automation, built the prediction APIs, and worked with senior engineers on deployment, monitoring and drift troubleshooting.",
    outcome: [
      "Detection accuracy up 18%, false positives down 22%",
      "Training preparation time down 30%, inference latency down 25%",
      "APIs supported 10,000+ daily requests",
      "Model accuracy kept above 95% in production",
    ],
    stack: ["Python", "Scikit-learn", "FastAPI", "Flask"],
  },
  {
    name: "AI-based threat detection for phishing and SQL injection",
    context: "Independent project",
    problem: "Detect phishing URLs and SQL injection attacks automatically.",
    solution:
      "A supervised machine learning pipeline using lexical and pattern-based features. Logistic Regression, Random Forest and Support Vector Machine models were compared with cross-validation and ROC-AUC.",
    contribution:
      "Built the full project: feature engineering, model comparison, evaluation, and a monitoring dashboard that visualises predictions for real-time alerts and threat analysis.",
    outcome: ["Best model reached 90% accuracy with a ROC-AUC of 0.96"],
    stack: ["Python", "Scikit-learn", "Logistic Regression", "Random Forest", "SVM"],
  },
  {
    name: "AI-enabled robotic arm for waste segregation",
    context: "MSc project, University of Hertfordshire, 2022 to 2023",
    problem: "Sort recyclable and non-recyclable waste automatically, reducing manual handling.",
    solution:
      "A deep learning robotic arm that identifies waste using computer vision, backed by an image preprocessing and CNN classification pipeline.",
    contribution:
      "Designed and developed the system, built the preprocessing and classification pipeline, and evaluated it with accuracy, precision and recall.",
    outcome: [
      "95% classification accuracy across 800 labelled waste images",
      "Less manual intervention in waste sorting through AI-driven object recognition",
    ],
    stack: ["Python", "TensorFlow", "OpenCV", "CNN"],
  },
];

export type Role = {
  role: string;
  company: string;
  place: string;
  period: string;
  points: string[];
};

export const experience: Role[] = [
  {
    role: "Junior AI Engineer",
    company: "Fortray Global Services Limited",
    place: "London",
    period: "Jan 2025 to Dec 2025",
    points: [
      "Engineered and optimised supervised ML pipelines in Python with Scikit-learn, raising threat and anomaly detection accuracy by 18% and cutting false positives by 22%.",
      "Designed and automated preprocessing pipelines for raw multi-source datasets, reducing model training preparation time by 30%.",
      "Collaborated on deploying predictive models to production, helping reduce inference latency by 25%.",
      "Developed FastAPI and Flask services that served predictions to 10,000+ daily API requests.",
      "Worked with senior engineers to monitor deployed AI systems and troubleshoot drift, keeping accuracy above 95%.",
    ],
  },
  {
    role: "IT Support Field Engineer",
    company: "A&O IT Group",
    place: "London",
    period: "Sep 2024 to Nov 2024",
    points: [
      "Ran Windows 10/11 migrations with image-based deployment across multiple client sites.",
      "Delivered first and second line support across Windows, Active Directory, Office 365, Teams and SharePoint, resolving 95% of issues on first contact.",
      "Closed 150+ ITSM incidents a month within SLA while maintaining 99% uptime.",
      "Diagnosed and fixed hardware and software faults and kept service logs, incident reports and asset records.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Machine learning",
    items: ["Supervised learning", "Unsupervised learning", "Neural networks", "CNNs", "Feature engineering", "Model evaluation", "Cross-validation", "ROC-AUC"],
  },
  {
    group: "Generative AI and automation",
    items: ["LLM APIs", "Prompt engineering", "RAG", "AI agents", "Workflow automation", "Inference automation", "Monitoring"],
  },
  {
    group: "Languages",
    items: ["Python", "C++", "Java", "C#"],
  },
  {
    group: "Frameworks and libraries",
    items: ["TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas", "OpenCV"],
  },
  {
    group: "APIs, MLOps and cloud",
    items: ["FastAPI", "Flask", "REST APIs", "MLOps", "AWS", "Git"],
  },
  {
    group: "Data and analytics",
    items: ["SQL", "Data cleaning", "MATLAB", "Power BI", "Microsoft Excel"],
  },
  {
    group: "Systems and IT",
    items: ["Windows", "Linux", "macOS", "Active Directory", "DNS", "DHCP", "Group Policy", "ITSM"],
  },
];

export const education = [
  {
    degree: "MSc Artificial Intelligence and Robotics",
    school: "University of Hertfordshire, UK",
    period: "Oct 2021 to Sep 2023",
  },
  {
    degree: "BSc Computer Science",
    school: "St Pius X College, Rajapuram, India",
    period: "Jul 2017 to Jun 2020",
  },
];

export const certificates = [
  { name: "AI in Action Job Simulation, Vista Equity Partners", issuer: "Forage", date: "July 2026" },
  { name: "Data Analytics Job Simulation, Quantium", issuer: "Forage", date: "July 2026" },
  { name: "Data Analytics Job Simulation, Deloitte Australia", issuer: "Forage", date: "July 2026" },
  { name: "MD-102: Endpoint Administrator", issuer: "Microsoft", date: "Oct 2024" },
];

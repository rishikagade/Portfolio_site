export const projectCategories = [
  'All',
  'Business Analytics',
  'Data Visualization',
  'Finance',
  'Forecasting',
  'Machine Learning',
  'Product Analytics',
  'Programming',
];

export const projectsData = [
  {
    id: 1,
    featured: true,
    category: 'Business Analytics',
    title: 'Green Chef Retention Intelligence Capstone',
    problem: 'Identifying churn drivers across Green Chef reviews, pause behavior, and cancellation data.',
    tools: ['Python', 'Tableau / Power BI', 'Excel', 'Business Strategy'],
    methods: ['EDA', 'Sentiment analysis', 'Churn signal analysis', 'Stakeholder recommendations'],
    outcome: 'Analyzed 37,000+ customer records, found negative sentiment correlated with cancellations at r = 0.555 and pause rates 7x higher than cancel rates, then designed GreenSense as a retention intelligence platform.',
    links: [],
  },
  {
    id: 9,
    featured: true,
    category: 'Machine Learning',
    title: 'Credit Risk Classification & MLOps Deployment Pipeline',
    problem: 'Built an end-to-end ML pipeline for automated credit-risk assessment, combining classification, explainability, monitoring, and real-time inference.',
    tools: ['Python', 'Scikit-learn', 'MongoDB', 'REST APIs', 'Evidently AI', 'SHAP', 'DiCE', 'Machine Learning', 'MLOps', 'Model Monitoring', 'Explainable AI'],
    methods: ['Decision Tree classification', 'Model monitoring', 'Explainable AI', 'Real-time inference'],
    contributions: [
      'Built a Decision Tree credit-risk model on 20,000+ loan records, achieving 0.85 AUC.',
      'Integrated Evidently AI, SHAP, and DiCE for monitoring, explainability, and audit-ready insights.',
      'Designed a REST API pipeline connecting MongoDB, the ML model, and client interface for real-time inference.',
    ],
    outcome: 'Improved transparency, compliance readiness, and stakeholder trust in ML-driven credit-risk decisions by combining predictive modeling, explainability, and deployment-oriented pipeline design.',
    links: [],
  },
  {
    id: 2,
    featured: true,
    category: 'Machine Learning',
    title: 'Loan Approval Prediction & Risk Segmentation',
    problem: 'Improving approval decision-making for first-time loan applicants while balancing credit access, default risk, and underwriting efficiency.',
    tools: ['JMP', 'Excel', 'Machine Learning', 'Predictive Analytics', 'ROC / AUC Analysis'],
    methods: ['PCA', 'Hierarchical clustering', 'K-means clustering', 'Logistic Regression', 'Neural Network', 'SVM', 'Stacking Ensemble'],
    outcome: 'Built an end-to-end credit-risk framework across 2,469 loan applicants, identified high-risk borrower segments, and achieved a 0.894 validation AUC.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/rishikagade/Reducing_Risk_and_Maximizing_Revenue_in_Loan_Approvals',
      },
    ],
  },
  {
    id: 3,
    featured: false,
    category: 'Data Visualization',
    title: 'Student Behaviors & Impact of AI to Productivity',
    problem: 'Understanding student productivity patterns and how AI tools influence study behavior and outcomes.',
    tools: ['Tableau', 'Survey Analysis', 'Data Visualization'],
    methods: ['Dashboard storytelling', 'Behavioral segmentation', 'KPI analysis'],
    outcome: 'Created insights for students, faculty, and advisors to identify productivity patterns and responsible AI usage themes.',
    links: [
      { label: 'GitHub', href: 'https://github.com/rishikagade/Student_Behaviors_and_Impact_of_AI_to_Productivity' },
    ],
  },
  {
    id: 4,
    featured: true,
    category: 'Product Analytics',
    title: 'AI + NFC Smart Check-In Kiosk',
    problem: 'Hotel check-in can be slow and fragmented across identity verification, payment, and digital room key activation.',
    tools: ['React', 'face-api.js', 'NFC Verification', 'Enterprise Architecture'],
    methods: ['Multi-step kiosk journey', 'AI face verification', 'Payment flow simulation', 'Digital room key activation'],
    outcome: 'Won Honorary Mention at Marriott International\'s CodeFest — by designing an AI + NFC kiosk that cut check-in time from 7 minutes to under 30 seconds.',
    links: [
      { label: 'GitHub', href: 'https://github.com/rishikagade/CodeFest-2025-Team--404-Not-found' },
    ],
  },
  {
    id: 5,
    featured: false,
    category: 'Finance',
    title: 'Netflix Stock Price & COVID-19 Correlation Analysis',
    problem: 'Evaluating whether pandemic case trends had a measurable relationship with Netflix stock price movement.',
    tools: ['Excel', 'Correlation Analysis', 'Financial Data', 'Macroeconomic Context'],
    methods: ['Time-series comparison', 'Correlation testing', 'Spreadsheet modeling', 'Interpretation of market context'],
    outcome: 'Built an Excel-based analysis to compare pandemic case data with NFLX price movement and summarize the strength and limits of the relationship.',
    links: [
      {
        label: 'Files',
        href: 'https://github.com/rishikagade/Correlation_Between_NFLX_price_and_Covid-19_Pandemic_Cases',
      },
    ],
  },
  {
    id: 6,
    featured: false,
    category: 'Forecasting',
    title: 'Gold Price Forecasting with Holt-Winters',
    problem: 'Forecasting future gold prices while communicating uncertainty and risk for financial decision-making.',
    tools: ['Python', 'Pandas', 'Statsmodels', 'Monte Carlo Simulation', 'Matplotlib'],
    methods: ['Holt-Winters exponential smoothing', 'Time-series preprocessing', 'Feature engineering', 'Geometric Brownian Motion simulation', 'Risk metrics'],
    outcome: 'Built a modular forecasting pipeline with a custom forecast horizon, 1,000-path Monte Carlo simulation, confidence intervals, and risk metrics such as VaR, CVaR, and profit probability.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/rishikagade/Holt_Winters_project',
      },
    ],
  },
  {
    id: 7,
    featured: false,
    category: 'Programming',
    title: 'Medical Calculators Console App',
    problem: 'Creating a simple interactive tool for common health and fitness calculations.',
    tools: ['C', 'GCC', 'Console Application', 'Visual Studio Code'],
    methods: ['Menu-driven logic', 'BMI calculation', 'Ideal body weight calculation', 'Lean body mass calculation'],
    outcome: 'Built a foundational C programming project with height conversion, multiple calculator flows, and simple patient result storage.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/rishikagade/Body_Mass_Index_Calculator',
      },
    ],
  },
  {
    id: 8,
    featured: false,
    category: 'Programming',
    title: 'Hotel Management System',
    problem: 'Managing accommodation records, meals, laundry requests, leave requests, and role-based workflows in a command-line system.',
    tools: ['C++', 'Object-Oriented Programming', 'File I/O', 'CSV Storage'],
    methods: ['Encapsulation', 'Inheritance', 'Polymorphism', 'CRUD operations', 'Role-based authentication'],
    outcome: 'Built a console-based management system with admin and student modules, persistent file-backed records, login verification, and operational request handling.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/rishikagade/hostel_management_cpp',
      },
    ],
  },
  {
    id: 10,
    featured: false,
    category: 'Machine Learning',
    title: 'Music Genre Classification using MFCC + KNN',
    problem: 'Classifying WAV audio files into music genres using spectral audio features and a custom machine learning classifier.',
    tools: ['Python', 'NumPy', 'SciPy', 'MFCC Feature Extraction', 'KNN', 'Machine Learning'],
    methods: ['MFCC extraction', 'Covariance matrix comparison', 'Custom distance function', 'K-nearest neighbors classification', 'Train-test split'],
    outcome: 'Built a machine learning course project that processes WAV audio, extracts MFCC-based genre fingerprints, and predicts one of 10 music categories using a custom KNN classifier.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/rishikagade/ml-music-genre-classification',
      },
    ],
  },
];

export const featuredProjects = projectsData.filter((project) => project.featured);

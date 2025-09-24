const express = require("express");
const path = require("path");
const hbs = require("hbs");

// App setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 80;

// Static paths
const static_path = path.join(__dirname, "./public");
app.use(express.static(static_path));

// hbs setup
const template_path = path.join(__dirname, "./templates/views");
app.set("views", template_path);

const partials_path = path.join(__dirname, "./templates/partials");
hbs.registerPartials(partials_path);

app.set("view engine", "hbs");

// Fetching data from api
const communityPostData = require("./src/api/communityPosts");
const youtubeData = require("./src/api/youtubeData");
const projectsData = require("./src/api/projectsData");
const resourcesData = require("./src/api/resourcesData");
const { log } = require("console");
const { loadavg } = require("os");
//Services
  const services = [
  {
    icon: "https://img.icons8.com/3d-fluency/94/laptop-coding.png",
    title: "Smart Web Development",
    summary: [
      "Responsive Websites with modern UI/UX",
      "Interactive Dashboards for real-time data"
    ],
    points: [
      "⚡ Responsive Websites with modern UI/UX",
      "📊 Interactive Dashboards for real-time data",
      "🤝 Seamless ML/AI integration into websites & apps"
    ]
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/laptop-coding.png",
    title: "Data Analytics & Business Insights",
    summary: [
      "Exploratory Data Analysis (EDA)",
      "Custom KPI Dashboards"
    ],
    points: [
      "🔍 Exploratory Data Analysis (EDA) with actionable findings",
      "📈 Custom KPI Dashboards for business monitoring",
      "📊 Trend Forecasting & decision support analytics"
    ]
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/chatbot.png",
    title: "AI-Powered Machine Learning Solutions",
    summary: [
      "Predictive Models for business & health",
      "NLP (chatbots, sentiment analysis)"
    ],
    points: [
      "🎯 Predictive Models for sales, health, and finance",
      "🗣️ Natural Language Processing (chatbots, text mining, sentiment analysis)",
      "👁️ Computer Vision for images, medical scans, and object detection"
    ]
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/laptop-coding.png",
    title: "Personalized Training",
    summary: [
      "One-on-one Data Science coaching",
      "Hands-on Web Development workshops"
    ],
    points: [
      "📚 One-on-one Data Science & ML coaching",
      "💻 Hands-on Web Development workshops",
      "🚀 Project-based guidance from idea to deployment"
    ]
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/laptop-coding.png",
    title: "Custom Projects & Innovative Solutions",
    summary: [
      "Academic Research Projects",
      "Startup MVP Development"
    ],
    points: [
      "🎓 Academic Research Projects with end-to-end coding support",
      "🌱 Startup MVP Development (fast, scalable prototypes)",
      "🔗 Hybrid Web + ML Apps tailored to unique needs"
    ]
  }
];


  
  

// Routes
app.get("/", (req, res) => {
  const servicesForIndex = [
    {
      icon: "https://img.icons8.com/3d-fluency/94/laptop-coding.png",
      title: "Web Development",
      summary: [
        "Responsive Websites with modern UI/UX",
        "Dashboards for real-time data"
      ]
    },
    {
      icon: "https://img.icons8.com/3d-fluency/94/combo-chart.png",
      title: "Business Insights",
      summary: [
        "Exploratory Data Analysis (EDA), data cleaning.",
        "Custom KPI Dashboards"
      ]
    },
    {
      icon: "https://img.icons8.com/3d-fluency/94/chatbot.png",
      title: "AI / ML models",
      summary: [
        "Predictive Models for business & health",
        "NLP (chatbots, sentiment analysis)"
      ]
    },
    {
      icon: "https://img.icons8.com/3d-fluency/94/graduation-cap.png",
      title: "Personalized Training",
      summary: [
        "Hands-on Web Development workshops",
        "One-on-one Data Science coaching",
      ]
    },
    {
      icon: "https://img.icons8.com/3d-fluency/94/opened-folder.png",
      title: "Custom Projects",
      summary: [
        "Academic Project Help",
        "Web + ML Hybrid Solutions",
      ]
    },
    {
      icon: "https://img.icons8.com/3d-fluency/94/services.png",
      title: "Extra Support",
      summary: [
        "Data Visualization",
        "Data Management",
      ]
    }
  ];

  res.render("index", {
    youtube: { videos },   // keep this if needed
    services: servicesForIndex,
    projects: projectsData ,  // ✅ Add this
    resources: resourcesData
  });
});


  // Flatten the YouTube categories into a single array for the slider
  const videos = [];
  for (const category in youtubeData.categories) {
    youtubeData.categories[category].forEach(link => {
      const idMatch = link.match(/\/embed\/([a-zA-Z0-9_-]+)/);
      if (idMatch) {
        videos.push({ id: idMatch[1], category });
      }
    });
  }

  


app.get("/projects", (req, res) => {
  res.render("projects", { projects: projectsData });
});

app.get("/about", (req, res) => {
  res.render("aboutus");
});
  

app.get("/community", (req, res) => {
  res.render("community", { posts: communityPostData });
});
  
  



app.get("/youtube", (req, res) => {
  res.render("youtube", { youtube: youtubeData });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/resources", (req, res) => {
  res.render("resources", { resources: resourcesData });
});

app.get("/services", (req, res) => {
  res.render("services", {
    services: [
      {
        icon: "https://img.icons8.com/3d-fluency/94/laptop-coding.png",
        title: "Web Development & Apps",
        points: [
          "Portfolio & Business Websites",
          "Interactive Dashboards",
          "ML Model Deployment on Web"
        ]
      },
      {
        icon: "https://img.icons8.com/3d-fluency/94/combo-chart.png",
        title: "Data Analysis & Insights",
        points: [
          "Exploratory Data Analysis",
          "Business KPI Dashboards",
          "Sales & Customer Behavior Analysis"
        ]
      },
      {
        icon: "https://img.icons8.com/3d-fluency/94/chatbot.png",
        title: "Machine Learning & AI",
        points: [
          "Predictive & Classification Models",
          "Recommendation Systems",
          "NLP & Computer Vision"
        ]
      },
      {
        icon: "https://img.icons8.com/3d-fluency/94/graduation-cap.png",
        title: "Training & Mentorship",
        points: [
          "Data Science & Web Training",
          "Project-Based Learning",
          "Interview & Portfolio Prep"
        ]
      },
      {
        icon: "https://img.icons8.com/3d-fluency/94/opened-folder.png",
        title: "Custom Projects",
        points: [
          "Academic Project Help",
          "Startup MVP Development",
          "Web + ML Hybrid Solutions"
        ]
      },
      {
        icon: "https://img.icons8.com/3d-fluency/94/services.png",
        title: "Extra Support",
        points: [
          "Data Visualization",
          "Database Management",
          "Cloud Deployment Basics"
        ]
      }
    ]
  });
});




// 404
app.get("*", (req, res) => {
  res.status(404).render("404");
});
app.post("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



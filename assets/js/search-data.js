// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/Edward_Profio_Portfolio_Site/";
    },
  },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Edward_Profio_Portfolio_Site/books/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Edward_Profio_Portfolio_Site/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Edward_Profio_Portfolio_Site/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Edward_Profio_Portfolio_Site/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Edward_Profio_Portfolio_Site/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Edward_Profio_Portfolio_Site/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "At The University of Texas at Austin, I have supported as a Graduate Teaching Assistant for AI/ML courses.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Edward_Profio_Portfolio_Site/teaching/";
          },
        },{id: "books-artificial-intelligence-a-modern-approach",
          title: 'Artificial Intelligence: A Modern Approach',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Artificial%20Intelligence%20A%20Modern%20Approach/";
            },},{id: "books-co-intelligence",
          title: 'Co-Intelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Co-Intelligence/";
            },},{id: "books-crossing-the-chasm",
          title: 'Crossing the Chasm',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Crossing%20the%20Chasm/";
            },},{id: "books-deep-learning",
          title: 'Deep Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Deep%20Learning/";
            },},{id: "books-empowered",
          title: 'EMPOWERED',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/EMPOWERED/";
            },},{id: "books-elon-musk",
          title: 'Elon Musk',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Elon%20Musk/";
            },},{id: "books-good-strategy-bad-strategy",
          title: 'Good Strategy Bad Strategy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Good%20Strategy%20Bad%20Strategy/";
            },},{id: "books-high-output-management",
          title: 'High Output Management',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/High%20Output%20Management/";
            },},{id: "books-hooked",
          title: 'Hooked',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Hooked/";
            },},{id: "books-how-to-build-a-brain-a-neural-architecture-for-biological-cognition",
          title: 'How to Build a Brain - A Neural Architecture for Biological Cognition',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20to%20Build%20a%20Brain/";
            },},{id: "books-human-compatible",
          title: 'Human Compatible',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Human%20Compatible/";
            },},{id: "books-inspired-how-to-create-tech-products-customers-love",
          title: 'INSPIRED: How to Create Tech Products Customers Love',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Inspired/";
            },},{id: "books-life-3-0",
          title: 'Life 3.0',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Life%203.0/";
            },},{id: "books-measure-what-matters",
          title: 'Measure What Matters',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Measure%20What%20Matters/";
            },},{id: "books-on-intelligence",
          title: 'On Intelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/On%20Intelligence/";
            },},{id: "books-pattern-recognition-and-machine-learning",
          title: 'Pattern Recognition and Machine Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Pattern%20Recognition%20and%20Machine%20Learning/";
            },},{id: "books-playing-to-win",
          title: 'Playing to Win',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Playing%20to%20Win/";
            },},{id: "books-principles-of-neural-science",
          title: 'Principles of Neural Science',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Principles%20of%20Neural%20Science/";
            },},{id: "books-rhythms-of-the-brain",
          title: 'Rhythms of the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Rhythms%20of%20the%20Brain/";
            },},{id: "books-shoe-dog",
          title: 'Shoe Dog',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Shoe%20Dog/";
            },},{id: "books-steve-jobs",
          title: 'Steve Jobs',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Steve%20Jobs/";
            },},{id: "books-superintelligence",
          title: 'Superintelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Superintelligence/";
            },},{id: "books-transformed",
          title: 'TRANSFORMED',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/TRANSFORMED/";
            },},{id: "books-the-alignment-problem",
          title: 'The Alignment Problem',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Alignment%20Problem/";
            },},{id: "books-the-emotion-machine",
          title: 'The Emotion Machine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Emotion%20Machine/";
            },},{id: "books-the-hard-thing-about-hard-things",
          title: 'The Hard Thing About Hard Things',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Hard%20Thing%20About%20Hard%20Things/";
            },},{id: "books-the-innovator-39-s-dilemma",
          title: 'The Innovator&amp;#39;s Dilemma',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Innovator's%20Dilemma/";
            },},{id: "books-the-innovators",
          title: 'The Innovators',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Innovators/";
            },},{id: "books-the-lean-startup",
          title: 'The Lean Startup',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Lean%20Startup/";
            },},{id: "books-the-mom-test",
          title: 'The Mom Test',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Mom%20Test/";
            },},{id: "books-the-mountain-is-you",
          title: 'The Mountain is You',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Mountain%20Is%20You/";
            },},{id: "books-the-nvidia-way-jensen-huang-and-the-making-of-a-tech-giant",
          title: 'The Nvidia Way - Jensen Huang and the Making of a Tech Giant...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Nvidia%20Way/";
            },},{id: "books-the-phoenix-project",
          title: 'The Phoenix Project',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Phoenix%20Project/";
            },},{id: "books-theoretical-neuroscience",
          title: 'Theoretical Neuroscience',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Theoretical%20Neuroscience/";
            },},{id: "books-thinking-fast-and-slow",
          title: 'Thinking, Fast and Slow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Thinking,%20Fast%20and%20Slow/";
            },},{id: "books-zero-to-one",
          title: 'Zero to One',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Zero%20to%20One/";
            },},{id: "news-graduated-from-carnegie-mellon-university",
          title: 'Graduated from Carnegie Mellon University',
          description: "",
          section: "News",},{id: "projects-workday",
          title: 'Workday',
          description: "An exploratory project for Workday identifying high-yield AI/ML products and services for their accessibility team.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/Accessibility/";
            },},{id: "projects-aurifex-jewelry",
          title: 'Aurifex Jewelry',
          description: "A jewelry SaaS platform, improving design and operations through AI/ML.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/Aurifex/";
            },},{id: "projects-business-case-studies",
          title: 'Business Case Studies',
          description: "Varying analyses on business operations and strategy.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/Business%20Case%20Studies/";
            },},{id: "projects-codaworx",
          title: 'CODAworx',
          description: "An e-commerce marketplace for public artists and enthusiasts.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/CODAmarket/";
            },},{id: "projects-goat",
          title: 'GOAT',
          description: "A business analysis on GOAT&#39;s technology strategy.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/GOAT/";
            },},{id: "projects-gallify",
          title: 'Gallify',
          description: "An AR/VR art marketplace built for digital creators and enthusiasts.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/Gallify/";
            },},{id: "projects-jasci-software",
          title: 'JASCI Software',
          description: "An organizational analysis and assessment toward improved operations.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/JASCI%20Software/";
            },},{id: "projects-loan-default",
          title: 'Loan Default',
          description: "An AI/ML-based approach to predicting loan defaults.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/Loan%20Default/";
            },},{id: "projects-quantitative-proteomics",
          title: 'Quantitative Proteomics',
          description: "A research analysis on the capabilities and limitations of TMT/iTRAQ quantitative proteomics.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/Quantitative%20Proteomics/";
            },},{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/led7283981", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%65%64%77%61%72%64%70%72%6F%66%69%6F@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/profio1997", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/ledprofio", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/lp12468", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/profio", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@Profio", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Edward-Profio/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=xQ1hxBoAAAAJ&", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/EdProfio1", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

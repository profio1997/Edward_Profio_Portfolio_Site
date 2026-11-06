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
        },{id: "books-a-theory-of-justice",
          title: 'A Theory of Justice',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Theory%20of%20Justice/";
            },},{id: "books-a-thousand-brains",
          title: 'A Thousand Brains',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Thousand%20Brains/";
            },},{id: "books-ai-engineering",
          title: 'AI Engineering',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/AI%20Engineering/";
            },},{id: "books-an-elegant-puzzle",
          title: 'An Elegant Puzzle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/An%20Elegant%20Puzzle/";
            },},{id: "books-antifragile",
          title: 'Antifragile',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Antifragile/";
            },},{id: "books-artificial-intelligence-a-guide-for-thinking-humans",
          title: 'Artificial Intelligence: A Guide for Thinking Humans',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Artificial%20Intelligence%20A%20Guide%20for%20Thinking%20Humans/";
            },},{id: "books-artificial-intelligence-a-modern-approach",
          title: 'Artificial Intelligence: A Modern Approach',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Artificial%20Intelligence%20A%20Modern%20Approach/";
            },},{id: "books-behave",
          title: 'Behave',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Behave/";
            },},{id: "books-being-you",
          title: 'Being You',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Being%20You/";
            },},{id: "books-blue-ocean-strategy",
          title: 'Blue Ocean Strategy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Blue%20Ocean%20Strategy/";
            },},{id: "books-build-a-large-language-model-from-scratch",
          title: 'Build a Large Language Model (From Scratch)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Build%20a%20Large%20Language%20Model%20(From%20Scratch)/";
            },},{id: "books-co-intelligence",
          title: 'Co-Intelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Co-Intelligence/";
            },},{id: "books-cognitive-neuroscience-the-biology-of-the-mind",
          title: 'Cognitive Neuroscience: The Biology of the Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Cognitive%20Neuroscience%20The%20Biology%20of%20the%20Mind/";
            },},{id: "books-cognitive-psychology",
          title: 'Cognitive Psychology',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Cognitive%20Psychology/";
            },},{id: "books-cognitive-science-an-introduction-to-the-study-of-mind",
          title: 'Cognitive Science: An Introduction to the Study of Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Cognitive%20Science%20An%20Introduction%20to%20the%20Study%20of%20Mind/";
            },},{id: "books-competing-against-luck",
          title: 'Competing Against Luck',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Competing%20Against%20Luck/";
            },},{id: "books-competitive-strategy",
          title: 'Competitive Strategy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Competitive%20Strategy/";
            },},{id: "books-consciousness-explained",
          title: 'Consciousness Explained',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Consciousness%20Explained/";
            },},{id: "books-consciousness-and-the-brain",
          title: 'Consciousness and the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Consciousness%20and%20the%20Brain/";
            },},{id: "books-continuous-discovery-habits",
          title: 'Continuous Discovery Habits',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Continuous%20Discovery%20Habits/";
            },},{id: "books-cracking-the-pm-interview",
          title: 'Cracking the PM Interview',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Cracking%20the%20PM%20Interview/";
            },},{id: "books-critique-of-pure-reason",
          title: 'Critique of Pure Reason',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Critique%20of%20Pure%20Reason/";
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
            },},{id: "books-deep-work",
          title: 'Deep Work',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Deep%20Work/";
            },},{id: "books-descartes-39-error",
          title: 'Descartes&amp;#39; Error',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Descartes'%20Error/";
            },},{id: "books-designing-data-intensive-applications",
          title: 'Designing Data-Intensive Applications',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Designing%20Data-Intensive%20Applications/";
            },},{id: "books-designing-machine-learning-systems",
          title: 'Designing Machine Learning Systems',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Designing%20Machine%20Learning%20Systems/";
            },},{id: "books-don-39-t-make-me-think",
          title: 'Don&amp;#39;t Make Me Think',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Don't%20Make%20Me%20Think/";
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
            },},{id: "books-escaping-the-build-trap",
          title: 'Escaping the Build Trap',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Escaping%20the%20Build%20Trap/";
            },},{id: "books-from-bacteria-to-bach-and-back",
          title: 'From Bacteria to Bach and Back',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/From%20Bacteria%20to%20Bach%20and%20Back/";
            },},{id: "books-fundamentals-of-cognitive-neuroscience",
          title: 'Fundamentals of Cognitive Neuroscience',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Fundamentals%20of%20Cognitive%20Neuroscience/";
            },},{id: "books-genius-makers",
          title: 'Genius Makers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Genius%20Makers/";
            },},{id: "books-good-strategy-bad-strategy",
          title: 'Good Strategy Bad Strategy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Good%20Strategy%20Bad%20Strategy/";
            },},{id: "books-good-to-great",
          title: 'Good to Great',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Good%20to%20Great/";
            },},{id: "books-gödel-escher-bach",
          title: 'Gödel, Escher, Bach',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/G%C3%B6del,%20Escher,%20Bach/";
            },},{id: "books-hands-on-large-language-models",
          title: 'Hands-On Large Language Models',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Hands-On%20Large%20Language%20Models/";
            },},{id: "books-hands-on-machine-learning-with-scikit-learn-keras-and-tensorflow",
          title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Hands-On%20Machine%20Learning%20with%20Scikit-Learn,%20Keras,%20and%20TensorFlow/";
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
            },},{id: "books-how-we-learn",
          title: 'How We Learn',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20We%20Learn/";
            },},{id: "books-how-the-mind-works",
          title: 'How the Mind Works',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20the%20Mind%20Works/";
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
            },},{id: "books-i-am-a-strange-loop",
          title: 'I Am a Strange Loop',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/I%20Am%20a%20Strange%20Loop/";
            },},{id: "books-incognito",
          title: 'Incognito',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Incognito/";
            },},{id: "books-influence",
          title: 'Influence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Influence/";
            },},{id: "books-information-theory-inference-and-learning-algorithms",
          title: 'Information Theory, Inference, and Learning Algorithms',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Information%20Theory,%20Inference,%20and%20Learning%20Algorithms/";
            },},{id: "books-inspired-how-to-create-tech-products-customers-love",
          title: 'INSPIRED: How to Create Tech Products Customers Love',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Inspired/";
            },},{id: "books-intuition-pumps-and-other-tools-for-thinking",
          title: 'Intuition Pumps and Other Tools for Thinking',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Intuition%20Pumps%20and%20Other%20Tools%20for%20Thinking/";
            },},{id: "books-justice-what-39-s-the-right-thing-to-do",
          title: 'Justice: What&amp;#39;s the Right Thing to Do?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Justice%20What's%20the%20Right%20Thing%20to%20Do/";
            },},{id: "books-lean-analytics",
          title: 'Lean Analytics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Lean%20Analytics/";
            },},{id: "books-life-3-0",
          title: 'Life 3.0',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Life%203.0/";
            },},{id: "books-make-it-stick",
          title: 'Make It Stick',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Make%20It%20Stick/";
            },},{id: "books-man-39-s-search-for-meaning",
          title: 'Man&amp;#39;s Search for Meaning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Man's%20Search%20for%20Meaning/";
            },},{id: "books-marketing-management",
          title: 'Marketing Management',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Marketing%20Management/";
            },},{id: "books-measure-what-matters",
          title: 'Measure What Matters',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Measure%20What%20Matters/";
            },},{id: "books-meditations",
          title: 'Meditations',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Meditations/";
            },},{id: "books-models-of-the-mind",
          title: 'Models of the Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Models%20of%20the%20Mind/";
            },},{id: "books-moral-tribes",
          title: 'Moral Tribes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Moral%20Tribes/";
            },},{id: "books-neuroscience-exploring-the-brain",
          title: 'Neuroscience: Exploring the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Neuroscience%20Exploring%20the%20Brain/";
            },},{id: "books-neuroscience",
          title: 'Neuroscience',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Neuroscience/";
            },},{id: "books-never-split-the-difference",
          title: 'Never Split the Difference',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Never%20Split%20the%20Difference/";
            },},{id: "books-nicomachean-ethics",
          title: 'Nicomachean Ethics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Nicomachean%20Ethics/";
            },},{id: "books-noise",
          title: 'Noise',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Noise/";
            },},{id: "books-nudge",
          title: 'Nudge',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Nudge/";
            },},{id: "books-obviously-awesome",
          title: 'Obviously Awesome',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Obviously%20Awesome/";
            },},{id: "books-on-intelligence",
          title: 'On Intelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/On%20Intelligence/";
            },},{id: "books-only-the-paranoid-survive",
          title: 'Only the Paranoid Survive',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Only%20the%20Paranoid%20Survive/";
            },},{id: "books-other-minds",
          title: 'Other Minds',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Other%20Minds/";
            },},{id: "books-pattern-recognition-and-machine-learning",
          title: 'Pattern Recognition and Machine Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Pattern%20Recognition%20and%20Machine%20Learning/";
            },},{id: "books-phantoms-in-the-brain",
          title: 'Phantoms in the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Phantoms%20in%20the%20Brain/";
            },},{id: "books-playing-to-win",
          title: 'Playing to Win',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Playing%20to%20Win/";
            },},{id: "books-power-and-prediction",
          title: 'Power and Prediction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Power%20and%20Prediction/";
            },},{id: "books-predictably-irrational",
          title: 'Predictably Irrational',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Predictably%20Irrational/";
            },},{id: "books-prediction-machines",
          title: 'Prediction Machines',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Prediction%20Machines/";
            },},{id: "books-principles-of-economics",
          title: 'Principles of Economics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Principles%20of%20Economics/";
            },},{id: "books-principles-of-neural-science",
          title: 'Principles of Neural Science',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Principles%20of%20Neural%20Science/";
            },},{id: "books-principles",
          title: 'Principles',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Principles/";
            },},{id: "books-probabilistic-machine-learning-an-introduction",
          title: 'Probabilistic Machine Learning: An Introduction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Probabilistic%20Machine%20Learning%20An%20Introduction/";
            },},{id: "books-product-leadership",
          title: 'Product Leadership',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Product%20Leadership/";
            },},{id: "books-product-roadmaps-relaunched",
          title: 'Product Roadmaps Relaunched',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Product%20Roadmaps%20Relaunched/";
            },},{id: "books-reasons-and-persons",
          title: 'Reasons and Persons',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Reasons%20and%20Persons/";
            },},{id: "books-rebooting-ai",
          title: 'Rebooting AI',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Rebooting%20AI/";
            },},{id: "books-reinforcement-learning-an-introduction",
          title: 'Reinforcement Learning: An Introduction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Reinforcement%20Learning%20An%20Introduction/";
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
            },},{id: "books-sprint",
          title: 'Sprint',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Sprint/";
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
            },},{id: "books-surfing-uncertainty",
          title: 'Surfing Uncertainty',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Surfing%20Uncertainty/";
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
            },},{id: "books-the-almanack-of-naval-ravikant",
          title: 'The Almanack of Naval Ravikant',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Almanack%20of%20Naval%20Ravikant/";
            },},{id: "books-the-beginning-of-infinity",
          title: 'The Beginning of Infinity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Beginning%20of%20Infinity/";
            },},{id: "books-the-black-swan",
          title: 'The Black Swan',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Black%20Swan/";
            },},{id: "books-the-brain-that-changes-itself",
          title: 'The Brain That Changes Itself',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Brain%20That%20Changes%20Itself/";
            },},{id: "books-the-brain-the-story-of-you",
          title: 'The Brain: The Story of You',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Brain%20The%20Story%20of%20You/";
            },},{id: "books-the-coming-wave",
          title: 'The Coming Wave',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Coming%20Wave/";
            },},{id: "books-the-conscious-mind",
          title: 'The Conscious Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Conscious%20Mind/";
            },},{id: "books-the-design-of-everyday-things",
          title: 'The Design of Everyday Things',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Design%20of%20Everyday%20Things/";
            },},{id: "books-the-elements-of-moral-philosophy",
          title: 'The Elements of Moral Philosophy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Elements%20of%20Moral%20Philosophy/";
            },},{id: "books-the-elements-of-statistical-learning",
          title: 'The Elements of Statistical Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Elements%20of%20Statistical%20Learning/";
            },},{id: "books-the-embodied-mind",
          title: 'The Embodied Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Embodied%20Mind/";
            },},{id: "books-the-emotion-machine",
          title: 'The Emotion Machine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Emotion%20Machine/";
            },},{id: "books-the-feeling-of-what-happens",
          title: 'The Feeling of What Happens',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Feeling%20of%20What%20Happens/";
            },},{id: "books-the-hard-thing-about-hard-things",
          title: 'The Hard Thing About Hard Things',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Hard%20Thing%20About%20Hard%20Things/";
            },},{id: "books-the-idea-of-the-brain",
          title: 'The Idea of the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Idea%20of%20the%20Brain/";
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
            },},{id: "books-the-language-instinct",
          title: 'The Language Instinct',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Language%20Instinct/";
            },},{id: "books-the-lean-product-playbook",
          title: 'The Lean Product Playbook',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Lean%20Product%20Playbook/";
            },},{id: "books-the-lean-startup",
          title: 'The Lean Startup',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Lean%20Startup/";
            },},{id: "books-the-logic-of-scientific-discovery",
          title: 'The Logic of Scientific Discovery',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Logic%20of%20Scientific%20Discovery/";
            },},{id: "books-the-making-of-a-manager",
          title: 'The Making of a Manager',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Making%20of%20a%20Manager/";
            },},{id: "books-the-man-who-mistook-his-wife-for-a-hat",
          title: 'The Man Who Mistook His Wife for a Hat',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Man%20Who%20Mistook%20His%20Wife%20for%20a%20Hat/";
            },},{id: "books-the-master-algorithm",
          title: 'The Master Algorithm',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Master%20Algorithm/";
            },},{id: "books-the-master-and-his-emissary",
          title: 'The Master and His Emissary',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Master%20and%20His%20Emissary/";
            },},{id: "books-the-mind-39-s-i",
          title: 'The Mind&amp;#39;s I',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Mind's%20I/";
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
            },},{id: "books-the-organized-mind",
          title: 'The Organized Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Organized%20Mind/";
            },},{id: "books-the-phoenix-project",
          title: 'The Phoenix Project',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Phoenix%20Project/";
            },},{id: "books-the-problems-of-philosophy",
          title: 'The Problems of Philosophy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Problems%20of%20Philosophy/";
            },},{id: "books-the-psychology-of-money",
          title: 'The Psychology of Money',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Psychology%20of%20Money/";
            },},{id: "books-the-republic",
          title: 'The Republic',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Republic/";
            },},{id: "books-the-righteous-mind",
          title: 'The Righteous Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Righteous%20Mind/";
            },},{id: "books-the-structure-of-scientific-revolutions",
          title: 'The Structure of Scientific Revolutions',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Structure%20of%20Scientific%20Revolutions/";
            },},{id: "books-the-tell-tale-brain",
          title: 'The Tell-Tale Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Tell-Tale%20Brain/";
            },},{id: "books-theoretical-neuroscience",
          title: 'Theoretical Neuroscience',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Theoretical%20Neuroscience/";
            },},{id: "books-thinking-in-bets",
          title: 'Thinking in Bets',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Thinking%20in%20Bets/";
            },},{id: "books-thinking-fast-and-slow",
          title: 'Thinking, Fast and Slow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Thinking,%20Fast%20and%20Slow/";
            },},{id: "books-understanding-deep-learning",
          title: 'Understanding Deep Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Understanding%20Deep%20Learning/";
            },},{id: "books-value-proposition-design",
          title: 'Value Proposition Design',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Value%20Proposition%20Design/";
            },},{id: "books-weapons-of-math-destruction",
          title: 'Weapons of Math Destruction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Weapons%20of%20Math%20Destruction/";
            },},{id: "books-why-we-sleep",
          title: 'Why We Sleep',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Why%20We%20Sleep/";
            },},{id: "books-why-zebras-don-39-t-get-ulcers",
          title: 'Why Zebras Don&amp;#39;t Get Ulcers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Why%20Zebras%20Don't%20Get%20Ulcers/";
            },},{id: "books-working-backwards",
          title: 'Working Backwards',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Working%20Backwards/";
            },},{id: "books-zero-to-one",
          title: 'Zero to One',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Zero%20to%20One/";
            },},{id: "news-graduated-from-carnegie-mellon-university",
          title: 'Graduated from Carnegie Mellon University',
          description: "",
          section: "News",},{id: "projects-workday-accessibility-ai-strategy",
          title: 'Workday Accessibility AI Strategy',
          description: "Twelve months on Workday&#39;s accessibility AI strategy: we researched 50+ vendors, surfaced 8 partnerships, and recommended 3 to roll out first, with a roadmap and AI development practices.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/Accessibility/";
            },},{id: "projects-aurifex-jewelry",
          title: 'Aurifex Jewelry',
          description: "Founder of an AI jewelry-design platform and marketplace that connects buyers with verified manufacturers.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/Aurifex/";
            },},{id: "projects-mba-business-cases",
          title: 'MBA business cases',
          description: "Twelve MBA cases on M&amp;A, expansion and restructuring across technology, consumer and manufacturing.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/Business%20Case%20Studies/";
            },},{id: "projects-matching-buyers-with-the-right-artist-on-codamarket",
          title: 'Matching buyers with the right artist on CODAmarket',
          description: "I co-founded CODAworx&#39;s consumer marketplace and ran product and operations through launch and growth. Match rates rose 20%, repeat bookings 15%, retention doubled.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/CODAmarket/";
            },},{id: "projects-goat-building-trust-in-a-resale-marketplace",
          title: 'GOAT: building trust in a resale marketplace',
          description: "How GOAT uses machine learning and human experts to build trust, and how to cut fraud costs without slowing sign-up.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/GOAT/";
            },},{id: "projects-building-gallify-and-deciding-to-wind-it-down",
          title: 'Building Gallify, and deciding to wind it down',
          description: "An iOS app for collecting digital art in AR. I led product and an engineering team of 8 to 10; our recommender lifted click-through 20% and order value 10%. Then I made the call to wind it down.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/Gallify/";
            },},{id: "projects-jasci-adding-human-feedback-to-warehouse-robotics",
          title: 'JASCI: adding human feedback to warehouse robotics',
          description: "Diagnosed a warehouse-software scale-up and proposed adding human feedback to its robotics AI.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/JASCI%20Software/";
            },},{id: "projects-loan-default-prediction",
          title: 'Loan Default Prediction',
          description: "Chose a logistic model (AUC 68.2%, 9.5% false negatives) and a 16% approval cutoff that maximizes expected profit.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/Loan%20Default/";
            },},{id: "projects-quantitative-proteomics-tmt-and-itraq",
          title: 'Quantitative proteomics (TMT and iTRAQ)',
          description: "How TMT and iTRAQ measure thousands of proteins at once, applied to heart-valve development.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/Quantitative%20Proteomics/";
            },},{id: "projects-building-veritas-a-learning-app-that-checks-what-you-remember",
          title: 'Building Veritas, a learning app that checks what you remember',
          description: "A learning app I&#39;m building: it reads your book to you in your own voice, checks what you understood and brings back what you missed. Waitlist open.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/Veritas/";
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

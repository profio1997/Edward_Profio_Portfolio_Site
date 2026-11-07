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
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Edward_Profio_Portfolio_Site/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Edward_Profio_Portfolio_Site/cv/";
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
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Edward_Profio_Portfolio_Site/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "At The University of Texas at Austin, I have supported as a Graduate Teaching Assistant for AI/ML courses.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Edward_Profio_Portfolio_Site/teaching/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Edward_Profio_Portfolio_Site/books/";
          },
        },{id: "post-meta-has-the-distribution-wang-has-to-build-the-model",
        
          title: "Meta Has the Distribution, Wang Has to Build the Model",
        
        description: "What Alexandr Wang&#39;s first year leading Meta Superintelligence Labs says about a company that owns the customers and now has to build the model that serves them.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/Edward_Profio_Portfolio_Site/blog/2026/meta-has-the-distribution-wang-has-to-build-the-model/";
          
        },
      },{id: "post-anthropic-39-s-expensive-promise",
        
          title: "Anthropic&#39;s Expensive Promise",
        
        description: "Anthropic&#39;s public filing describes a company that sells trust, and the structure and compute bills behind that promise matter more than the valuation talk.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/Edward_Profio_Portfolio_Site/blog/2026/anthropics-expensive-promise/";
          
        },
      },{id: "post-apple-chooses-the-integrator",
        
          title: "Apple Chooses the Integrator",
        
        description: "Apple handed the company to a hardware engineer after an operator, and the choice shows what it thinks it is still for now that AI changes what integration means.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/Edward_Profio_Portfolio_Site/blog/2026/apple-chooses-the-integrator/";
          
        },
      },{id: "books-the-four-steps-to-the-epiphany",
          title: 'The Four Steps to the Epiphany',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Four%20Steps%20to%20the%20Epiphany/";
            },},{id: "books-blindsight",
          title: 'Blindsight',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Blindsight/";
            },},{id: "books-why-we-love",
          title: 'Why We Love',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Why%20We%20Love/";
            },},{id: "books-the-dark-knight-returns",
          title: 'The Dark Knight Returns',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Dark%20Knight%20Returns/";
            },},{id: "books-on-bullshit",
          title: 'On Bullshit',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/On%20Bullshit/";
            },},{id: "books-secrets-and-lies",
          title: 'Secrets and Lies',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Secrets%20and%20Lies/";
            },},{id: "books-globalization-and-its-discontents",
          title: 'Globalization and Its Discontents',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Globalization%20and%20Its%20Discontents/";
            },},{id: "books-the-sense-of-an-ending",
          title: 'The Sense of an Ending',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Sense%20of%20an%20Ending/";
            },},{id: "books-the-shallows",
          title: 'The Shallows',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Shallows/";
            },},{id: "books-annihilation",
          title: 'Annihilation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Annihilation/";
            },},{id: "books-the-simple-path-to-wealth",
          title: 'The Simple Path to Wealth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Simple%20Path%20to%20Wealth/";
            },},{id: "books-the-100-startup",
          title: 'The $100 Startup',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20$100%20Startup/";
            },},{id: "books-just-my-type",
          title: 'Just My Type',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Just%20My%20Type/";
            },},{id: "books-reading-in-the-brain",
          title: 'Reading in the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Reading%20in%20the%20Brain/";
            },},{id: "books-the-persian-expedition",
          title: 'The Persian Expedition',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Persian%20Expedition/";
            },},{id: "books-the-practice-of-programming",
          title: 'The Practice of Programming',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Practice%20of%20Programming/";
            },},{id: "books-mistakes-were-made-but-not-by-me",
          title: 'Mistakes Were Made (But Not by Me)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Mistakes%20Were%20Made%20(But%20Not%20by%20Me)/";
            },},{id: "books-the-red-queen",
          title: 'The Red Queen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Red%20Queen/";
            },},{id: "books-things-fall-apart",
          title: 'Things Fall Apart',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Things%20Fall%20Apart/";
            },},{id: "books-the-gifts-of-imperfection",
          title: 'The Gifts of Imperfection',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Gifts%20of%20Imperfection/";
            },},{id: "books-norwegian-wood",
          title: 'Norwegian Wood',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Norwegian%20Wood/";
            },},{id: "books-the-cult-of-the-amateur",
          title: 'The Cult of the Amateur',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Cult%20of%20the%20Amateur/";
            },},{id: "books-the-annals-of-imperial-rome",
          title: 'The Annals of Imperial Rome',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Annals%20of%20Imperial%20Rome/";
            },},{id: "books-a-guide-to-the-good-life",
          title: 'A Guide to the Good Life',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Guide%20to%20the%20Good%20Life/";
            },},{id: "books-charlotte-39-s-web",
          title: 'Charlotte&amp;#39;s Web',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Charlotte's%20Web/";
            },},{id: "books-the-first-90-days",
          title: 'The First 90 Days',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20First%2090%20Days/";
            },},{id: "books-my-stroke-of-insight",
          title: 'My Stroke of Insight',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/My%20Stroke%20of%20Insight/";
            },},{id: "books-machines-of-loving-grace",
          title: 'Machines of Loving Grace',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Machines%20of%20Loving%20Grace/";
            },},{id: "books-the-sleep-revolution",
          title: 'The Sleep Revolution',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Sleep%20Revolution/";
            },},{id: "books-in-the-plex",
          title: 'In the Plex',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/In%20the%20Plex/";
            },},{id: "books-the-extended-phenotype",
          title: 'The Extended Phenotype',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Extended%20Phenotype/";
            },},{id: "books-master-and-commander",
          title: 'Master and Commander',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Master%20and%20Commander/";
            },},{id: "books-how-we-know-what-isn-39-t-so",
          title: 'How We Know What Isn&amp;#39;t So',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20We%20Know%20What%20Isn't%20So/";
            },},{id: "books-the-crucible",
          title: 'The Crucible',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Crucible/";
            },},{id: "books-the-truthful-art",
          title: 'The Truthful Art',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Truthful%20Art/";
            },},{id: "books-data-science-for-business",
          title: 'Data Science for Business',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Data%20Science%20for%20Business/";
            },},{id: "books-our-mathematical-universe",
          title: 'Our Mathematical Universe',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Our%20Mathematical%20Universe/";
            },},{id: "books-black-box-thinking",
          title: 'Black Box Thinking',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Black%20Box%20Thinking/";
            },},{id: "books-the-noonday-demon",
          title: 'The Noonday Demon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Noonday%20Demon/";
            },},{id: "books-the-4-hour-workweek",
          title: 'The 4-Hour Workweek',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%204-Hour%20Workweek/";
            },},{id: "books-living-with-complexity",
          title: 'Living with Complexity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Living%20with%20Complexity/";
            },},{id: "books-you-are-not-so-smart",
          title: 'You Are Not So Smart',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/You%20Are%20Not%20So%20Smart/";
            },},{id: "books-extreme-ownership",
          title: 'Extreme Ownership',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Extreme%20Ownership/";
            },},{id: "books-big-data",
          title: 'Big Data',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Big%20Data/";
            },},{id: "books-dreams-of-a-final-theory",
          title: 'Dreams of a Final Theory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Dreams%20of%20a%20Final%20Theory/";
            },},{id: "books-social",
          title: 'Social',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Social/";
            },},{id: "books-the-subtle-art-of-not-giving-a-f-ck",
          title: 'The Subtle Art of Not Giving a F*ck',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Subtle%20Art%20of%20Not%20Giving%20a%20Fck/";
            },},{id: "books-contagious",
          title: 'Contagious',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Contagious/";
            },},{id: "books-machine-learning-the-new-ai",
          title: 'Machine Learning: The New AI',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Machine%20Learning%20The%20New%20AI/";
            },},{id: "books-on-writing",
          title: 'On Writing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/On%20Writing/";
            },},{id: "books-a-mind-for-numbers",
          title: 'A Mind for Numbers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Mind%20for%20Numbers/";
            },},{id: "books-the-black-box-society",
          title: 'The Black Box Society',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Black%20Box%20Society/";
            },},{id: "books-articulating-design-decisions",
          title: 'Articulating Design Decisions',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Articulating%20Design%20Decisions/";
            },},{id: "books-thinking-in-pictures",
          title: 'Thinking in Pictures',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Thinking%20in%20Pictures/";
            },},{id: "books-prisoners-of-geography",
          title: 'Prisoners of Geography',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Prisoners%20of%20Geography/";
            },},{id: "books-grokking-algorithms",
          title: 'Grokking Algorithms',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Grokking%20Algorithms/";
            },},{id: "books-why-evolution-is-true",
          title: 'Why Evolution Is True',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Why%20Evolution%20Is%20True/";
            },},{id: "books-the-daily-stoic",
          title: 'The Daily Stoic',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Daily%20Stoic/";
            },},{id: "books-born-to-run",
          title: 'Born to Run',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Born%20to%20Run/";
            },},{id: "books-design-patterns",
          title: 'Design Patterns',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Design%20Patterns/";
            },},{id: "books-maus",
          title: 'Maus',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Maus/";
            },},{id: "books-the-power-of-now",
          title: 'The Power of Now',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Power%20of%20Now/";
            },},{id: "books-against-empathy",
          title: 'Against Empathy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Against%20Empathy/";
            },},{id: "books-scarcity",
          title: 'Scarcity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Scarcity/";
            },},{id: "books-thank-you-for-arguing",
          title: 'Thank You for Arguing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Thank%20You%20for%20Arguing/";
            },},{id: "books-in-the-woods",
          title: 'In the Woods',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/In%20the%20Woods/";
            },},{id: "books-cod",
          title: 'Cod',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Cod/";
            },},{id: "books-the-mind-gut-connection",
          title: 'The Mind-Gut Connection',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Mind-Gut%20Connection/";
            },},{id: "books-decisive",
          title: 'Decisive',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Decisive/";
            },},{id: "books-kindred",
          title: 'Kindred',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Kindred/";
            },},{id: "books-the-marshmallow-test",
          title: 'The Marshmallow Test',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Marshmallow%20Test/";
            },},{id: "books-the-consolations-of-philosophy",
          title: 'The Consolations of Philosophy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Consolations%20of%20Philosophy/";
            },},{id: "books-the-inner-citadel",
          title: 'The Inner Citadel',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Inner%20Citadel/";
            },},{id: "books-the-lost-city-of-z",
          title: 'The Lost City of Z',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Lost%20City%20of%20Z/";
            },},{id: "books-in-defense-of-food",
          title: 'In Defense of Food',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/In%20Defense%20of%20Food/";
            },},{id: "books-the-big-picture",
          title: 'The Big Picture',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Big%20Picture/";
            },},{id: "books-the-toyota-way",
          title: 'The Toyota Way',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Toyota%20Way/";
            },},{id: "books-dark-territory",
          title: 'Dark Territory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Dark%20Territory/";
            },},{id: "books-bad-astronomy",
          title: 'Bad Astronomy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Bad%20Astronomy/";
            },},{id: "books-the-art-of-war",
          title: 'The Art of War',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Art%20of%20War/";
            },},{id: "books-the-forever-war",
          title: 'The Forever War',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Forever%20War/";
            },},{id: "books-the-botany-of-desire",
          title: 'The Botany of Desire',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Botany%20of%20Desire/";
            },},{id: "books-a-streetcar-named-desire",
          title: 'A Streetcar Named Desire',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Streetcar%20Named%20Desire/";
            },},{id: "books-the-end-of-poverty",
          title: 'The End of Poverty',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20End%20of%20Poverty/";
            },},{id: "books-platform-revolution",
          title: 'Platform Revolution',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Platform%20Revolution/";
            },},{id: "books-the-boy-who-was-raised-as-a-dog",
          title: 'The Boy Who Was Raised as a Dog',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Boy%20Who%20Was%20Raised%20as%20a%20Dog/";
            },},{id: "books-steppenwolf",
          title: 'Steppenwolf',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Steppenwolf/";
            },},{id: "books-are-we-smart-enough-to-know-how-smart-animals-are",
          title: 'Are We Smart Enough to Know How Smart Animals Are?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Are%20We%20Smart%20Enough%20to%20Know%20How%20Smart%20Animals%20Are/";
            },},{id: "books-the-whole-brain-child",
          title: 'The Whole-Brain Child',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Whole-Brain%20Child/";
            },},{id: "books-down-and-out-in-paris-and-london",
          title: 'Down and Out in Paris and London',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Down%20and%20Out%20in%20Paris%20and%20London/";
            },},{id: "books-kingpin",
          title: 'Kingpin',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Kingpin/";
            },},{id: "books-everything-is-obvious",
          title: 'Everything Is Obvious',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Everything%20Is%20Obvious/";
            },},{id: "books-the-joy-of-x",
          title: 'The Joy of x',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Joy%20of%20x/";
            },},{id: "books-the-first-three-minutes",
          title: 'The First Three Minutes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20First%20Three%20Minutes/";
            },},{id: "books-designing-your-life",
          title: 'Designing Your Life',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Designing%20Your%20Life/";
            },},{id: "books-the-conquest-of-gaul",
          title: 'The Conquest of Gaul',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Conquest%20of%20Gaul/";
            },},{id: "books-the-fire-next-time",
          title: 'The Fire Next Time',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Fire%20Next%20Time/";
            },},{id: "books-the-effective-executive",
          title: 'The Effective Executive',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Effective%20Executive/";
            },},{id: "books-radical-focus",
          title: 'Radical Focus',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Radical%20Focus/";
            },},{id: "books-animal-farm",
          title: 'Animal Farm',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Animal%20Farm/";
            },},{id: "books-orientalism",
          title: 'Orientalism',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Orientalism/";
            },},{id: "books-the-vital-question",
          title: 'The Vital Question',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Vital%20Question/";
            },},{id: "books-factory-man",
          title: 'Factory Man',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Factory%20Man/";
            },},{id: "books-killers-of-the-flower-moon",
          title: 'Killers of the Flower Moon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Killers%20of%20the%20Flower%20Moon/";
            },},{id: "books-programming-pearls",
          title: 'Programming Pearls',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Programming%20Pearls/";
            },},{id: "books-ready-player-one",
          title: 'Ready Player One',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Ready%20Player%20One/";
            },},{id: "books-home-a-short-history-of-an-idea",
          title: 'Home: A Short History of an Idea',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Home%20A%20Short%20History%20of%20an%20Idea/";
            },},{id: "books-your-money-or-your-life",
          title: 'Your Money or Your Life',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Your%20Money%20or%20Your%20Life/";
            },},{id: "books-connectome",
          title: 'Connectome',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Connectome/";
            },},{id: "books-moonwalking-with-einstein",
          title: 'Moonwalking with Einstein',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Moonwalking%20with%20Einstein/";
            },},{id: "books-the-hidden-life-of-trees",
          title: 'The Hidden Life of Trees',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Hidden%20Life%20of%20Trees/";
            },},{id: "books-a-mind-at-play",
          title: 'A Mind at Play',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Mind%20at%20Play/";
            },},{id: "books-the-metamorphosis",
          title: 'The Metamorphosis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Metamorphosis/";
            },},{id: "books-the-cold-war-a-new-history",
          title: 'The Cold War: A New History',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Cold%20War%20A%20New%20History/";
            },},{id: "books-how-brands-grow",
          title: 'How Brands Grow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20Brands%20Grow/";
            },},{id: "books-technically-wrong",
          title: 'Technically Wrong',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Technically%20Wrong/";
            },},{id: "books-leaders-eat-last",
          title: 'Leaders Eat Last',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Leaders%20Eat%20Last/";
            },},{id: "books-the-box",
          title: 'The Box',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Box/";
            },},{id: "books-the-color-of-law",
          title: 'The Color of Law',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Color%20of%20Law/";
            },},{id: "books-walkable-city",
          title: 'Walkable City',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Walkable%20City/";
            },},{id: "books-our-final-invention",
          title: 'Our Final Invention',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Our%20Final%20Invention/";
            },},{id: "books-practical-statistics-for-data-scientists",
          title: 'Practical Statistics for Data Scientists',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Practical%20Statistics%20for%20Data%20Scientists/";
            },},{id: "books-the-knowledge-illusion",
          title: 'The Knowledge Illusion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Knowledge%20Illusion/";
            },},{id: "books-the-drunkard-39-s-walk",
          title: 'The Drunkard&amp;#39;s Walk',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Drunkard's%20Walk/";
            },},{id: "books-the-design-of-business",
          title: 'The Design of Business',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Design%20of%20Business/";
            },},{id: "books-designing-brand-identity",
          title: 'Designing Brand Identity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Designing%20Brand%20Identity/";
            },},{id: "books-a-sand-county-almanac",
          title: 'A Sand County Almanac',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Sand%20County%20Almanac/";
            },},{id: "books-cradle-to-cradle",
          title: 'Cradle to Cradle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Cradle%20to%20Cradle/";
            },},{id: "books-hallucinations",
          title: 'Hallucinations',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Hallucinations/";
            },},{id: "books-the-twelve-caesars",
          title: 'The Twelve Caesars',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Twelve%20Caesars/";
            },},{id: "books-statistics-done-wrong",
          title: 'Statistics Done Wrong',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Statistics%20Done%20Wrong/";
            },},{id: "books-atonement",
          title: 'Atonement',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Atonement/";
            },},{id: "books-hillbilly-elegy",
          title: 'Hillbilly Elegy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Hillbilly%20Elegy/";
            },},{id: "books-persian-fire",
          title: 'Persian Fire',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Persian%20Fire/";
            },},{id: "books-letters-to-a-young-mathematician",
          title: 'Letters to a Young Mathematician',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Letters%20to%20a%20Young%20Mathematician/";
            },},{id: "books-empire-of-the-summer-moon",
          title: 'Empire of the Summer Moon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Empire%20of%20the%20Summer%20Moon/";
            },},{id: "books-a-visit-from-the-goon-squad",
          title: 'A Visit from the Goon Squad',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Visit%20from%20the%20Goon%20Squad/";
            },},{id: "books-discourses-and-selected-writings",
          title: 'Discourses and Selected Writings',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Discourses%20and%20Selected%20Writings/";
            },},{id: "books-atomic-design",
          title: 'Atomic Design',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Atomic%20Design/";
            },},{id: "books-how-to-live",
          title: 'How to Live',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20to%20Live/";
            },},{id: "books-capitalism-and-freedom",
          title: 'Capitalism and Freedom',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Capitalism%20and%20Freedom/";
            },},{id: "books-lord-of-the-flies",
          title: 'Lord of the Flies',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Lord%20of%20the%20Flies/";
            },},{id: "books-the-manager-39-s-path",
          title: 'The Manager&amp;#39;s Path',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Manager's%20Path/";
            },},{id: "books-pilgrim-at-tinker-creek",
          title: 'Pilgrim at Tinker Creek',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Pilgrim%20at%20Tinker%20Creek/";
            },},{id: "books-the-myth-of-repressed-memory",
          title: 'The Myth of Repressed Memory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Myth%20of%20Repressed%20Memory/";
            },},{id: "books-the-craving-mind",
          title: 'The Craving Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Craving%20Mind/";
            },},{id: "books-in-the-blink-of-an-eye",
          title: 'In the Blink of an Eye',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/In%20the%20Blink%20of%20an%20Eye/";
            },},{id: "books-the-obesity-code",
          title: 'The Obesity Code',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Obesity%20Code/";
            },},{id: "books-black-holes-and-baby-universes-and-other-essays",
          title: 'Black Holes and Baby Universes and Other Essays',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Black%20Holes%20and%20Baby%20Universes%20and%20Other%20Essays/";
            },},{id: "books-rocket-surgery-made-easy",
          title: 'Rocket Surgery Made Easy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Rocket%20Surgery%20Made%20Easy/";
            },},{id: "books-do-androids-dream-of-electric-sheep",
          title: 'Do Androids Dream of Electric Sheep?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Do%20Androids%20Dream%20of%20Electric%20Sheep/";
            },},{id: "books-the-hunger-games",
          title: 'The Hunger Games',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Hunger%20Games/";
            },},{id: "books-how-to-be-a-stoic",
          title: 'How to Be a Stoic',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20to%20Be%20a%20Stoic/";
            },},{id: "books-brain-on-fire",
          title: 'Brain on Fire',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Brain%20on%20Fire/";
            },},{id: "books-the-art-of-learning",
          title: 'The Art of Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Art%20of%20Learning/";
            },},{id: "books-a-field-guide-to-getting-lost",
          title: 'A Field Guide to Getting Lost',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Field%20Guide%20to%20Getting%20Lost/";
            },},{id: "books-mindsight",
          title: 'Mindsight',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Mindsight/";
            },},{id: "books-the-unbearable-lightness-of-being",
          title: 'The Unbearable Lightness of Being',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Unbearable%20Lightness%20of%20Being/";
            },},{id: "books-life-ascending",
          title: 'Life Ascending',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Life%20Ascending/";
            },},{id: "books-reading-lolita-in-tehran",
          title: 'Reading Lolita in Tehran',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Reading%20Lolita%20in%20Tehran/";
            },},{id: "books-the-orchid-thief",
          title: 'The Orchid Thief',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Orchid%20Thief/";
            },},{id: "books-on-tyranny",
          title: 'On Tyranny',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/On%20Tyranny/";
            },},{id: "books-being-wrong",
          title: 'Being Wrong',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Being%20Wrong/";
            },},{id: "books-strangers-in-their-own-land",
          title: 'Strangers in Their Own Land',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Strangers%20in%20Their%20Own%20Land/";
            },},{id: "books-gone-girl",
          title: 'Gone Girl',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Gone%20Girl/";
            },},{id: "books-flowers-for-algernon",
          title: 'Flowers for Algernon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Flowers%20for%20Algernon/";
            },},{id: "books-ethics-inventing-right-and-wrong",
          title: 'Ethics: Inventing Right and Wrong',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Ethics%20Inventing%20Right%20and%20Wrong/";
            },},{id: "books-conjectures-and-refutations",
          title: 'Conjectures and Refutations',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Conjectures%20and%20Refutations/";
            },},{id: "books-the-great-escape",
          title: 'The Great Escape',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Great%20Escape/";
            },},{id: "books-the-hitchhiker-39-s-guide-to-the-galaxy",
          title: 'The Hitchhiker&amp;#39;s Guide to the Galaxy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Hitchhiker's%20Guide%20to%20the%20Galaxy/";
            },},{id: "books-doughnut-economics",
          title: 'Doughnut Economics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Doughnut%20Economics/";
            },},{id: "books-never-let-me-go",
          title: 'Never Let Me Go',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Never%20Let%20Me%20Go/";
            },},{id: "books-astrophysics-for-people-in-a-hurry",
          title: 'Astrophysics for People in a Hurry',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Astrophysics%20for%20People%20in%20a%20Hurry/";
            },},{id: "books-crucial-conversations",
          title: 'Crucial Conversations',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Crucial%20Conversations/";
            },},{id: "books-nonviolent-communication",
          title: 'Nonviolent Communication',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Nonviolent%20Communication/";
            },},{id: "books-being-mortal",
          title: 'Being Mortal',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Being%20Mortal/";
            },},{id: "books-change-by-design",
          title: 'Change by Design',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Change%20by%20Design/";
            },},{id: "books-mrs-dalloway",
          title: 'Mrs Dalloway',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Mrs%20Dalloway/";
            },},{id: "books-style-lessons-in-clarity-and-grace",
          title: 'Style: Lessons in Clarity and Grace',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Style%20Lessons%20in%20Clarity%20and%20Grace/";
            },},{id: "books-the-outsiders",
          title: 'The Outsiders',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Outsiders/";
            },},{id: "books-development-as-freedom",
          title: 'Development as Freedom',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Development%20as%20Freedom/";
            },},{id: "books-galileo-39-s-daughter",
          title: 'Galileo&amp;#39;s Daughter',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Galileo's%20Daughter/";
            },},{id: "books-nine-algorithms-that-changed-the-future",
          title: 'Nine Algorithms That Changed the Future',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Nine%20Algorithms%20That%20Changed%20the%20Future/";
            },},{id: "books-the-optimism-bias",
          title: 'The Optimism Bias',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Optimism%20Bias/";
            },},{id: "books-rise-of-the-robots",
          title: 'Rise of the Robots',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Rise%20of%20the%20Robots/";
            },},{id: "books-negotiation-genius",
          title: 'Negotiation Genius',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Negotiation%20Genius/";
            },},{id: "books-lincoln-in-the-bardo",
          title: 'Lincoln in the Bardo',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Lincoln%20in%20the%20Bardo/";
            },},{id: "books-searching-for-memory",
          title: 'Searching for Memory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Searching%20for%20Memory/";
            },},{id: "books-bargaining-for-advantage",
          title: 'Bargaining for Advantage',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Bargaining%20for%20Advantage/";
            },},{id: "books-blindspot",
          title: 'Blindspot',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Blindspot/";
            },},{id: "books-we-wish-to-inform-you-that-tomorrow-we-will-be-killed-with-our-families",
          title: 'We Wish to Inform You That Tomorrow We Will Be Killed with Our...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/We%20Wish%20to%20Inform%20You%20That%20Tomorrow%20We%20Will%20Be%20Killed%20with%20Our%20Families/";
            },},{id: "books-irresistible",
          title: 'Irresistible',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Irresistible/";
            },},{id: "books-all-systems-red",
          title: 'All Systems Red',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/All%20Systems%20Red/";
            },},{id: "books-the-myth-of-sisyphus",
          title: 'The Myth of Sisyphus',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Myth%20of%20Sisyphus/";
            },},{id: "books-the-filter-bubble",
          title: 'The Filter Bubble',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Filter%20Bubble/";
            },},{id: "books-countdown-to-zero-day",
          title: 'Countdown to Zero Day',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Countdown%20to%20Zero%20Day/";
            },},{id: "books-a-short-history-of-financial-euphoria",
          title: 'A Short History of Financial Euphoria',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Short%20History%20of%20Financial%20Euphoria/";
            },},{id: "books-mere-christianity",
          title: 'Mere Christianity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Mere%20Christianity/";
            },},{id: "books-business-model-generation",
          title: 'Business Model Generation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Business%20Model%20Generation/";
            },},{id: "books-the-art-of-the-start-2-0",
          title: 'The Art of the Start 2.0',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Art%20of%20the%20Start%202.0/";
            },},{id: "books-building-a-storybrand",
          title: 'Building a StoryBrand',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Building%20a%20StoryBrand/";
            },},{id: "books-evicted",
          title: 'Evicted',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Evicted/";
            },},{id: "books-a-canticle-for-leibowitz",
          title: 'A Canticle for Leibowitz',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Canticle%20for%20Leibowitz/";
            },},{id: "books-presentation-zen",
          title: 'Presentation Zen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Presentation%20Zen/";
            },},{id: "books-gut-feelings",
          title: 'Gut Feelings',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Gut%20Feelings/";
            },},{id: "books-the-sirens-of-titan",
          title: 'The Sirens of Titan',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Sirens%20of%20Titan/";
            },},{id: "books-clean-code",
          title: 'Clean Code',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Clean%20Code/";
            },},{id: "books-the-great-railway-bazaar",
          title: 'The Great Railway Bazaar',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Great%20Railway%20Bazaar/";
            },},{id: "books-mauve",
          title: 'Mauve',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Mauve/";
            },},{id: "books-the-center-cannot-hold",
          title: 'The Center Cannot Hold',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Center%20Cannot%20Hold/";
            },},{id: "books-predictable-revenue",
          title: 'Predictable Revenue',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Predictable%20Revenue/";
            },},{id: "books-the-temple-of-the-golden-pavilion",
          title: 'The Temple of the Golden Pavilion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Temple%20of%20the%20Golden%20Pavilion/";
            },},{id: "books-beloved",
          title: 'Beloved',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Beloved/";
            },},{id: "books-the-alchemy-of-finance",
          title: 'The Alchemy of Finance',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Alchemy%20of%20Finance/";
            },},{id: "books-talk-like-ted",
          title: 'Talk Like TED',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Talk%20Like%20TED/";
            },},{id: "books-the-innovator-39-s-solution",
          title: 'The Innovator&amp;#39;s Solution',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Innovator's%20Solution/";
            },},{id: "books-bad-science",
          title: 'Bad Science',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Bad%20Science/";
            },},{id: "books-say-nothing",
          title: 'Say Nothing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Say%20Nothing/";
            },},{id: "books-pale-blue-dot",
          title: 'Pale Blue Dot',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Pale%20Blue%20Dot/";
            },},{id: "books-data-and-goliath",
          title: 'Data and Goliath',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Data%20and%20Goliath/";
            },},{id: "books-where-39-d-you-go-bernadette",
          title: 'Where&amp;#39;d You Go, Bernadette',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Where'd%20You%20Go,%20Bernadette/";
            },},{id: "books-hold-me-tight",
          title: 'Hold Me Tight',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Hold%20Me%20Tight/";
            },},{id: "books-into-thin-air",
          title: 'Into Thin Air',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Into%20Thin%20Air/";
            },},{id: "books-chronicles-volume-one",
          title: 'Chronicles: Volume One',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Chronicles%20Volume%20One/";
            },},{id: "books-i-am-malala",
          title: 'I Am Malala',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/I%20Am%20Malala/";
            },},{id: "books-free-will",
          title: 'Free Will',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Free%20Will/";
            },},{id: "books-factfulness",
          title: 'Factfulness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Factfulness/";
            },},{id: "books-artificial-unintelligence",
          title: 'Artificial Unintelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Artificial%20Unintelligence/";
            },},{id: "books-how-to-lie-with-statistics",
          title: 'How to Lie with Statistics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20to%20Lie%20with%20Statistics/";
            },},{id: "books-grid-systems-in-graphic-design",
          title: 'Grid Systems in Graphic Design',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Grid%20Systems%20in%20Graphic%20Design/";
            },},{id: "books-i-39-ll-be-gone-in-the-dark",
          title: 'I&amp;#39;ll Be Gone in the Dark',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/I'll%20Be%20Gone%20in%20the%20Dark/";
            },},{id: "books-adventures-in-the-screen-trade",
          title: 'Adventures in the Screen Trade',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Adventures%20in%20the%20Screen%20Trade/";
            },},{id: "books-dark-places",
          title: 'Dark Places',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Dark%20Places/";
            },},{id: "books-the-road",
          title: 'The Road',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Road/";
            },},{id: "books-how-doctors-think",
          title: 'How Doctors Think',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20Doctors%20Think/";
            },},{id: "books-how-to-create-a-mind",
          title: 'How to Create a Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20to%20Create%20a%20Mind/";
            },},{id: "books-just-enough-research",
          title: 'Just Enough Research',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Just%20Enough%20Research/";
            },},{id: "books-disgrace",
          title: 'Disgrace',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Disgrace/";
            },},{id: "books-easy-riders-raging-bulls",
          title: 'Easy Riders, Raging Bulls',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Easy%20Riders,%20Raging%20Bulls/";
            },},{id: "books-envisioning-information",
          title: 'Envisioning Information',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Envisioning%20Information/";
            },},{id: "books-imagined-communities",
          title: 'Imagined Communities',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Imagined%20Communities/";
            },},{id: "books-artificial-intelligence-a-very-short-introduction",
          title: 'Artificial Intelligence: A Very Short Introduction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Artificial%20Intelligence%20A%20Very%20Short%20Introduction/";
            },},{id: "books-death-by-black-hole",
          title: 'Death by Black Hole',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Death%20by%20Black%20Hole/";
            },},{id: "books-the-road-to-unfreedom",
          title: 'The Road to Unfreedom',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Road%20to%20Unfreedom/";
            },},{id: "books-the-talented-mr-ripley",
          title: 'The Talented Mr. Ripley',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Talented%20Mr.%20Ripley/";
            },},{id: "books-post-truth",
          title: 'Post-Truth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Post-Truth/";
            },},{id: "books-the-future-of-the-mind",
          title: 'The Future of the Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Future%20of%20the%20Mind/";
            },},{id: "books-self-comes-to-mind",
          title: 'Self Comes to Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Self%20Comes%20to%20Mind/";
            },},{id: "books-the-curious-incident-of-the-dog-in-the-night-time",
          title: 'The Curious Incident of the Dog in the Night-Time',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Curious%20Incident%20of%20the%20Dog%20in%20the%20Night-Time/";
            },},{id: "books-click-here-to-kill-everybody",
          title: 'Click Here to Kill Everybody',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Click%20Here%20to%20Kill%20Everybody/";
            },},{id: "books-lies-my-teacher-told-me",
          title: 'Lies My Teacher Told Me',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Lies%20My%20Teacher%20Told%20Me/";
            },},{id: "books-the-culture-code",
          title: 'The Culture Code',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Culture%20Code/";
            },},{id: "books-the-spirit-level",
          title: 'The Spirit Level',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Spirit%20Level/";
            },},{id: "books-tales-from-both-sides-of-the-brain",
          title: 'Tales from Both Sides of the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Tales%20from%20Both%20Sides%20of%20the%20Brain/";
            },},{id: "books-creative-confidence",
          title: 'Creative Confidence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Creative%20Confidence/";
            },},{id: "books-can-39-t-hurt-me",
          title: 'Can&amp;#39;t Hurt Me',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Can't%20Hurt%20Me/";
            },},{id: "books-this-is-marketing",
          title: 'This Is Marketing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/This%20Is%20Marketing/";
            },},{id: "books-perfume",
          title: 'Perfume',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Perfume/";
            },},{id: "books-designing-for-emotion",
          title: 'Designing for Emotion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Designing%20for%20Emotion/";
            },},{id: "books-bullshit-jobs",
          title: 'Bullshit Jobs',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Bullshit%20Jobs/";
            },},{id: "books-switch",
          title: 'Switch',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Switch/";
            },},{id: "books-the-discovery-of-global-warming",
          title: 'The Discovery of Global Warming',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Discovery%20of%20Global%20Warming/";
            },},{id: "books-the-general-theory-of-employment-interest-and-money",
          title: 'The General Theory of Employment, Interest and Money',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20General%20Theory%20of%20Employment,%20Interest%20and%20Money/";
            },},{id: "books-on-revolution",
          title: 'On Revolution',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/On%20Revolution/";
            },},{id: "books-drinking-a-love-story",
          title: 'Drinking: A Love Story',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Drinking%20A%20Love%20Story/";
            },},{id: "books-the-periodic-table",
          title: 'The Periodic Table',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Periodic%20Table/";
            },},{id: "books-the-dragons-of-eden",
          title: 'The Dragons of Eden',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Dragons%20of%20Eden/";
            },},{id: "books-big-magic",
          title: 'Big Magic',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Big%20Magic/";
            },},{id: "books-scale",
          title: 'Scale',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Scale/";
            },},{id: "books-the-start-up-of-you",
          title: 'The Start-up of You',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Start-up%20of%20You/";
            },},{id: "books-the-facebook-effect",
          title: 'The Facebook Effect',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Facebook%20Effect/";
            },},{id: "books-what-is-history",
          title: 'What Is History?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/What%20Is%20History/";
            },},{id: "books-broad-band",
          title: 'Broad Band',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Broad%20Band/";
            },},{id: "books-the-new-jim-crow",
          title: 'The New Jim Crow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20New%20Jim%20Crow/";
            },},{id: "books-the-reason-i-jump",
          title: 'The Reason I Jump',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Reason%20I%20Jump/";
            },},{id: "books-ordinary-men",
          title: 'Ordinary Men',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Ordinary%20Men/";
            },},{id: "books-a-web-for-everyone",
          title: 'A Web for Everyone',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Web%20for%20Everyone/";
            },},{id: "books-the-art-of-thinking-clearly",
          title: 'The Art of Thinking Clearly',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Art%20of%20Thinking%20Clearly/";
            },},{id: "books-the-liars-39-club",
          title: 'The Liars&amp;#39; Club',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Liars'%20Club/";
            },},{id: "books-blink",
          title: 'Blink',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Blink/";
            },},{id: "books-i-know-why-the-caged-bird-sings",
          title: 'I Know Why the Caged Bird Sings',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/I%20Know%20Why%20the%20Caged%20Bird%20Sings/";
            },},{id: "books-managing-oneself",
          title: 'Managing Oneself',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Managing%20Oneself/";
            },},{id: "books-phishing-for-phools",
          title: 'Phishing for Phools',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Phishing%20for%20Phools/";
            },},{id: "books-a-philosophy-of-software-design",
          title: 'A Philosophy of Software Design',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Philosophy%20of%20Software%20Design/";
            },},{id: "books-the-seven-sins-of-memory",
          title: 'The Seven Sins of Memory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Seven%20Sins%20of%20Memory/";
            },},{id: "books-on-the-shortness-of-life",
          title: 'On the Shortness of Life',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/On%20the%20Shortness%20of%20Life/";
            },},{id: "books-brave-new-world",
          title: 'Brave New World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Brave%20New%20World/";
            },},{id: "books-ten-arguments-for-deleting-your-social-media-accounts-right-now",
          title: 'Ten Arguments for Deleting Your Social Media Accounts Right Now',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Ten%20Arguments%20for%20Deleting%20Your%20Social%20Media%20Accounts%20Right%20Now/";
            },},{id: "books-the-double-helix",
          title: 'The Double Helix',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Double%20Helix/";
            },},{id: "books-circe",
          title: 'Circe',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Circe/";
            },},{id: "books-open",
          title: 'Open',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Open/";
            },},{id: "books-the-deep-learning-revolution",
          title: 'The Deep Learning Revolution',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Deep%20Learning%20Revolution/";
            },},{id: "books-meltdown",
          title: 'Meltdown',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Meltdown/";
            },},{id: "books-expert-political-judgment",
          title: 'Expert Political Judgment',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Expert%20Political%20Judgment/";
            },},{id: "books-the-willpower-instinct",
          title: 'The Willpower Instinct',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Willpower%20Instinct/";
            },},{id: "books-sharp-objects",
          title: 'Sharp Objects',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Sharp%20Objects/";
            },},{id: "books-through-the-language-glass",
          title: 'Through the Language Glass',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Through%20the%20Language%20Glass/";
            },},{id: "books-stuff-matters",
          title: 'Stuff Matters',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Stuff%20Matters/";
            },},{id: "books-blitzscaling",
          title: 'Blitzscaling',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Blitzscaling/";
            },},{id: "books-no-place-to-hide",
          title: 'No Place to Hide',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/No%20Place%20to%20Hide/";
            },},{id: "books-the-code-book",
          title: 'The Code Book',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Code%20Book/";
            },},{id: "books-where-good-ideas-come-from",
          title: 'Where Good Ideas Come From',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Where%20Good%20Ideas%20Come%20From/";
            },},{id: "books-the-life-you-can-save",
          title: 'The Life You Can Save',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Life%20You%20Can%20Save/";
            },},{id: "books-never-eat-alone",
          title: 'Never Eat Alone',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Never%20Eat%20Alone/";
            },},{id: "books-beautiful-boy",
          title: 'Beautiful Boy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Beautiful%20Boy/";
            },},{id: "books-between-the-world-and-me",
          title: 'Between the World and Me',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Between%20the%20World%20and%20Me/";
            },},{id: "books-the-white-man-39-s-burden",
          title: 'The White Man&amp;#39;s Burden',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20White%20Man's%20Burden/";
            },},{id: "books-art-amp-fear",
          title: 'Art &amp;amp; Fear',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Art%20&%20Fear/";
            },},{id: "books-the-functional-art",
          title: 'The Functional Art',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Functional%20Art/";
            },},{id: "books-1177-b-c",
          title: '1177 B.C.',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/1177%20B.C/";
            },},{id: "books-the-hot-zone",
          title: 'The Hot Zone',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Hot%20Zone/";
            },},{id: "books-your-inner-fish",
          title: 'Your Inner Fish',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Your%20Inner%20Fish/";
            },},{id: "books-braiding-sweetgrass",
          title: 'Braiding Sweetgrass',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Braiding%20Sweetgrass/";
            },},{id: "books-ultralearning",
          title: 'Ultralearning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Ultralearning/";
            },},{id: "books-hidden-figures",
          title: 'Hidden Figures',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Hidden%20Figures/";
            },},{id: "books-strange-case-of-dr-jekyll-and-mr-hyde",
          title: 'Strange Case of Dr Jekyll and Mr Hyde',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Strange%20Case%20of%20Dr%20Jekyll%20and%20Mr%20Hyde/";
            },},{id: "books-the-art-of-statistics",
          title: 'The Art of Statistics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Art%20of%20Statistics/";
            },},{id: "books-the-great-mortality",
          title: 'The Great Mortality',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Great%20Mortality/";
            },},{id: "books-ghost-in-the-wires",
          title: 'Ghost in the Wires',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Ghost%20in%20the%20Wires/";
            },},{id: "books-black-hawk-down",
          title: 'Black Hawk Down',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Black%20Hawk%20Down/";
            },},{id: "books-the-autistic-brain",
          title: 'The Autistic Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Autistic%20Brain/";
            },},{id: "books-storytelling-with-data",
          title: 'Storytelling with Data',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Storytelling%20with%20Data/";
            },},{id: "books-train-dreams",
          title: 'Train Dreams',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Train%20Dreams/";
            },},{id: "books-animals-in-translation",
          title: 'Animals in Translation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Animals%20in%20Translation/";
            },},{id: "books-the-net-delusion",
          title: 'The Net Delusion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Net%20Delusion/";
            },},{id: "books-ghost-soldiers",
          title: 'Ghost Soldiers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Ghost%20Soldiers/";
            },},{id: "books-traveling-mercies",
          title: 'Traveling Mercies',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Traveling%20Mercies/";
            },},{id: "books-uprooted",
          title: 'Uprooted',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Uprooted/";
            },},{id: "books-rubicon",
          title: 'Rubicon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Rubicon/";
            },},{id: "books-games-people-play",
          title: 'Games People Play',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Games%20People%20Play/";
            },},{id: "books-the-second-brain",
          title: 'The Second Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Second%20Brain/";
            },},{id: "books-a-walk-in-the-woods",
          title: 'A Walk in the Woods',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Walk%20in%20the%20Woods/";
            },},{id: "books-the-happiness-trap",
          title: 'The Happiness Trap',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Happiness%20Trap/";
            },},{id: "books-the-man-who-solved-the-market",
          title: 'The Man Who Solved the Market',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Man%20Who%20Solved%20the%20Market/";
            },},{id: "books-ghost-work",
          title: 'Ghost Work',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Ghost%20Work/";
            },},{id: "books-the-histories",
          title: 'The Histories',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Histories/";
            },},{id: "books-the-catcher-in-the-rye",
          title: 'The Catcher in the Rye',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Catcher%20in%20the%20Rye/";
            },},{id: "books-why-don-39-t-students-like-school",
          title: 'Why Don&amp;#39;t Students Like School?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Why%20Don't%20Students%20Like%20School/";
            },},{id: "books-the-blind-watchmaker",
          title: 'The Blind Watchmaker',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Blind%20Watchmaker/";
            },},{id: "books-heart-of-darkness",
          title: 'Heart of Darkness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Heart%20of%20Darkness/";
            },},{id: "books-the-big-short",
          title: 'The Big Short',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Big%20Short/";
            },},{id: "books-proust-was-a-neuroscientist",
          title: 'Proust Was a Neuroscientist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Proust%20Was%20a%20Neuroscientist/";
            },},{id: "books-reader-come-home",
          title: 'Reader, Come Home',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Reader,%20Come%20Home/";
            },},{id: "books-computer-power-and-human-reason",
          title: 'Computer Power and Human Reason',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Computer%20Power%20and%20Human%20Reason/";
            },},{id: "books-trillion-dollar-coach",
          title: 'Trillion Dollar Coach',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Trillion%20Dollar%20Coach/";
            },},{id: "books-the-uninhabitable-earth",
          title: 'The Uninhabitable Earth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Uninhabitable%20Earth/";
            },},{id: "books-solaris",
          title: 'Solaris',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Solaris/";
            },},{id: "books-the-demon-in-the-freezer",
          title: 'The Demon in the Freezer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Demon%20in%20the%20Freezer/";
            },},{id: "books-the-cluetrain-manifesto",
          title: 'The Cluetrain Manifesto',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Cluetrain%20Manifesto/";
            },},{id: "books-the-mismeasure-of-man",
          title: 'The Mismeasure of Man',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Mismeasure%20of%20Man/";
            },},{id: "books-trauma-and-recovery",
          title: 'Trauma and Recovery',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Trauma%20and%20Recovery/";
            },},{id: "books-rework",
          title: 'Rework',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Rework/";
            },},{id: "books-the-hacker-crackdown",
          title: 'The Hacker Crackdown',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Hacker%20Crackdown/";
            },},{id: "books-just-kids",
          title: 'Just Kids',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Just%20Kids/";
            },},{id: "books-the-tale-of-the-dueling-neurosurgeons",
          title: 'The Tale of the Dueling Neurosurgeons',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Tale%20of%20the%20Dueling%20Neurosurgeons/";
            },},{id: "books-strangers-to-ourselves",
          title: 'Strangers to Ourselves',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Strangers%20to%20Ourselves/";
            },},{id: "books-consciousness-and-the-social-brain",
          title: 'Consciousness and the Social Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Consciousness%20and%20the%20Social%20Brain/";
            },},{id: "books-steal-like-an-artist",
          title: 'Steal Like an Artist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Steal%20Like%20an%20Artist/";
            },},{id: "books-frankenstein",
          title: 'Frankenstein',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Frankenstein/";
            },},{id: "books-the-sociopath-next-door",
          title: 'The Sociopath Next Door',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Sociopath%20Next%20Door/";
            },},{id: "books-the-philosophical-baby",
          title: 'The Philosophical Baby',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Philosophical%20Baby/";
            },},{id: "books-the-field-guide-to-understanding-human-error",
          title: 'The Field Guide to Understanding Human Error',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Field%20Guide%20to%20Understanding%20Human%20Error/";
            },},{id: "books-existentialism-is-a-humanism",
          title: 'Existentialism Is a Humanism',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Existentialism%20Is%20a%20Humanism/";
            },},{id: "books-digital-minimalism",
          title: 'Digital Minimalism',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Digital%20Minimalism/";
            },},{id: "books-ancillary-justice",
          title: 'Ancillary Justice',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Ancillary%20Justice/";
            },},{id: "books-the-sense-of-style",
          title: 'The Sense of Style',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Sense%20of%20Style/";
            },},{id: "books-saga-volume-one",
          title: 'Saga, Volume One',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Saga,%20Volume%20One/";
            },},{id: "books-stardust",
          title: 'Stardust',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Stardust/";
            },},{id: "books-the-hare-with-amber-eyes",
          title: 'The Hare with Amber Eyes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Hare%20with%20Amber%20Eyes/";
            },},{id: "books-tiny-habits",
          title: 'Tiny Habits',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Tiny%20Habits/";
            },},{id: "books-the-great-crash-1929",
          title: 'The Great Crash 1929',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Great%20Crash%201929/";
            },},{id: "books-kluge",
          title: 'Kluge',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Kluge/";
            },},{id: "books-how-charts-lie",
          title: 'How Charts Lie',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20Charts%20Lie/";
            },},{id: "books-the-analects",
          title: 'The Analects',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Analects/";
            },},{id: "books-the-e-myth-revisited",
          title: 'The E-Myth Revisited',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20E-Myth%20Revisited/";
            },},{id: "books-writing-down-the-bones",
          title: 'Writing Down the Bones',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Writing%20Down%20the%20Bones/";
            },},{id: "books-nineteen-eighty-four",
          title: 'Nineteen Eighty-Four',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Nineteen%20Eighty-Four/";
            },},{id: "books-good-habits-bad-habits",
          title: 'Good Habits, Bad Habits',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Good%20Habits,%20Bad%20Habits/";
            },},{id: "books-just-mercy",
          title: 'Just Mercy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Just%20Mercy/";
            },},{id: "books-sandworm",
          title: 'Sandworm',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Sandworm/";
            },},{id: "books-super-pumped",
          title: 'Super Pumped',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Super%20Pumped/";
            },},{id: "books-nine-stories",
          title: 'Nine Stories',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Nine%20Stories/";
            },},{id: "books-debt-the-first-5-000-years",
          title: 'Debt: The First 5,000 Years',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Debt%20The%20First%205,000%20Years/";
            },},{id: "books-the-hound-of-the-baskervilles",
          title: 'The Hound of the Baskervilles',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Hound%20of%20the%20Baskervilles/";
            },},{id: "books-starship-troopers",
          title: 'Starship Troopers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Starship%20Troopers/";
            },},{id: "books-v-for-vendetta",
          title: 'V for Vendetta',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/V%20for%20Vendetta/";
            },},{id: "books-the-brief-wondrous-life-of-oscar-wao",
          title: 'The Brief Wondrous Life of Oscar Wao',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Brief%20Wondrous%20Life%20of%20Oscar%20Wao/";
            },},{id: "books-permanent-record",
          title: 'Permanent Record',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Permanent%20Record/";
            },},{id: "books-that-will-never-work",
          title: 'That Will Never Work',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/That%20Will%20Never%20Work/";
            },},{id: "books-the-checklist-manifesto",
          title: 'The Checklist Manifesto',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Checklist%20Manifesto/";
            },},{id: "books-lab-girl",
          title: 'Lab Girl',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Lab%20Girl/";
            },},{id: "books-the-princess-bride",
          title: 'The Princess Bride',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Princess%20Bride/";
            },},{id: "books-the-computer-and-the-brain",
          title: 'The Computer and the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Computer%20and%20the%20Brain/";
            },},{id: "books-uncle-tungsten",
          title: 'Uncle Tungsten',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Uncle%20Tungsten/";
            },},{id: "books-design-is-a-job",
          title: 'Design Is a Job',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Design%20Is%20a%20Job/";
            },},{id: "books-the-talent-code",
          title: 'The Talent Code',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Talent%20Code/";
            },},{id: "books-persuasion",
          title: 'Persuasion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Persuasion/";
            },},{id: "books-the-collected-schizophrenias",
          title: 'The Collected Schizophrenias',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Collected%20Schizophrenias/";
            },},{id: "books-the-tyranny-of-metrics",
          title: 'The Tyranny of Metrics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Tyranny%20of%20Metrics/";
            },},{id: "books-give-and-take",
          title: 'Give and Take',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Give%20and%20Take/";
            },},{id: "books-who-39-s-in-charge",
          title: 'Who&amp;#39;s in Charge?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Who's%20in%20Charge/";
            },},{id: "books-the-soul-of-an-octopus",
          title: 'The Soul of an Octopus',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Soul%20of%20an%20Octopus/";
            },},{id: "books-agent-zigzag",
          title: 'Agent Zigzag',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Agent%20Zigzag/";
            },},{id: "books-reading-like-a-writer",
          title: 'Reading Like a Writer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Reading%20Like%20a%20Writer/";
            },},{id: "books-the-music-of-the-primes",
          title: 'The Music of the Primes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Music%20of%20the%20Primes/";
            },},{id: "books-how-we-got-to-now",
          title: 'How We Got to Now',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20We%20Got%20to%20Now/";
            },},{id: "books-the-island-at-the-center-of-the-world",
          title: 'The Island at the Center of the World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Island%20at%20the%20Center%20of%20the%20World/";
            },},{id: "books-coders",
          title: 'Coders',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Coders/";
            },},{id: "books-naming-and-necessity",
          title: 'Naming and Necessity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Naming%20and%20Necessity/";
            },},{id: "books-the-challenger-sale",
          title: 'The Challenger Sale',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Challenger%20Sale/";
            },},{id: "books-h-is-for-hawk",
          title: 'H Is for Hawk',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/H%20Is%20for%20Hawk/";
            },},{id: "books-the-bluest-eye",
          title: 'The Bluest Eye',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Bluest%20Eye/";
            },},{id: "books-bridge-to-terabithia",
          title: 'Bridge to Terabithia',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Bridge%20to%20Terabithia/";
            },},{id: "books-of-mice-and-men",
          title: 'Of Mice and Men',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Of%20Mice%20and%20Men/";
            },},{id: "books-my-brilliant-friend",
          title: 'My Brilliant Friend',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/My%20Brilliant%20Friend/";
            },},{id: "books-delivering-happiness",
          title: 'Delivering Happiness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Delivering%20Happiness/";
            },},{id: "books-visualizing-data",
          title: 'Visualizing Data',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Visualizing%20Data/";
            },},{id: "books-the-problems-of-philosophy",
          title: 'The Problems of Philosophy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Problems%20of%20Philosophy/";
            },},{id: "books-the-boys-in-the-boat",
          title: 'The Boys in the Boat',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Boys%20in%20the%20Boat/";
            },},{id: "books-fear-and-trembling",
          title: 'Fear and Trembling',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Fear%20and%20Trembling/";
            },},{id: "books-childhood-and-society",
          title: 'Childhood and Society',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Childhood%20and%20Society/";
            },},{id: "books-how-to-talk-so-kids-will-listen-amp-listen-so-kids-will-talk",
          title: 'How to Talk So Kids Will Listen &amp;amp; Listen So Kids Will Talk...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20to%20Talk%20So%20Kids%20Will%20Listen%20&%20Listen%20So%20Kids%20Will%20Talk/";
            },},{id: "books-when-genius-failed",
          title: 'When Genius Failed',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/When%20Genius%20Failed/";
            },},{id: "books-station-eleven",
          title: 'Station Eleven',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Station%20Eleven/";
            },},{id: "books-dare-to-lead",
          title: 'Dare to Lead',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Dare%20to%20Lead/";
            },},{id: "books-seven-brief-lessons-on-physics",
          title: 'Seven Brief Lessons on Physics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Seven%20Brief%20Lessons%20on%20Physics/";
            },},{id: "books-history-of-the-peloponnesian-war",
          title: 'History of the Peloponnesian War',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/History%20of%20the%20Peloponnesian%20War/";
            },},{id: "books-naked-economics",
          title: 'Naked Economics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Naked%20Economics/";
            },},{id: "books-wild",
          title: 'Wild',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Wild/";
            },},{id: "books-the-bottom-billion",
          title: 'The Bottom Billion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Bottom%20Billion/";
            },},{id: "books-the-master-switch",
          title: 'The Master Switch',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Master%20Switch/";
            },},{id: "books-cybersecurity-and-cyberwar",
          title: 'Cybersecurity and Cyberwar',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Cybersecurity%20and%20Cyberwar/";
            },},{id: "books-design-justice",
          title: 'Design Justice',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Design%20Justice/";
            },},{id: "books-the-revenge-of-geography",
          title: 'The Revenge of Geography',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Revenge%20of%20Geography/";
            },},{id: "books-bird-by-bird",
          title: 'Bird by Bird',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Bird%20by%20Bird/";
            },},{id: "books-fundamentals-of-software-architecture",
          title: 'Fundamentals of Software Architecture',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Fundamentals%20of%20Software%20Architecture/";
            },},{id: "books-the-internet-is-not-the-answer",
          title: 'The Internet Is Not the Answer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Internet%20Is%20Not%20the%20Answer/";
            },},{id: "books-the-way-of-zen",
          title: 'The Way of Zen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Way%20of%20Zen/";
            },},{id: "books-essentialism",
          title: 'Essentialism',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Essentialism/";
            },},{id: "books-the-girl-on-the-train",
          title: 'The Girl on the Train',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Girl%20on%20the%20Train/";
            },},{id: "books-scrum",
          title: 'Scrum',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Scrum/";
            },},{id: "books-endure",
          title: 'Endure',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Endure/";
            },},{id: "books-how-to-do-nothing",
          title: 'How to Do Nothing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20to%20Do%20Nothing/";
            },},{id: "books-happy-city",
          title: 'Happy City',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Happy%20City/";
            },},{id: "books-limitless",
          title: 'Limitless',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Limitless/";
            },},{id: "books-snow-country",
          title: 'Snow Country',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Snow%20Country/";
            },},{id: "books-the-ascent-of-money",
          title: 'The Ascent of Money',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Ascent%20of%20Money/";
            },},{id: "books-the-namesake",
          title: 'The Namesake',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Namesake/";
            },},{id: "books-the-cheese-and-the-worms",
          title: 'The Cheese and the Worms',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Cheese%20and%20the%20Worms/";
            },},{id: "books-spark",
          title: 'Spark',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Spark/";
            },},{id: "books-the-english-patient",
          title: 'The English Patient',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20English%20Patient/";
            },},{id: "books-the-promise-of-sleep",
          title: 'The Promise of Sleep',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Promise%20of%20Sleep/";
            },},{id: "books-on-being-certain",
          title: 'On Being Certain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/On%20Being%20Certain/";
            },},{id: "books-turing-39-s-cathedral",
          title: 'Turing&amp;#39;s Cathedral',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Turing's%20Cathedral/";
            },},{id: "books-tao-te-ching",
          title: 'Tao Te Ching',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Tao%20Te%20Ching/";
            },},{id: "books-proust-and-the-squid",
          title: 'Proust and the Squid',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Proust%20and%20the%20Squid/";
            },},{id: "books-sketching-user-experiences",
          title: 'Sketching User Experiences',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Sketching%20User%20Experiences/";
            },},{id: "books-the-price-of-inequality",
          title: 'The Price of Inequality',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Price%20of%20Inequality/";
            },},{id: "books-when-breath-becomes-air",
          title: 'When Breath Becomes Air',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/When%20Breath%20Becomes%20Air/";
            },},{id: "books-the-highly-sensitive-person",
          title: 'The Highly Sensitive Person',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Highly%20Sensitive%20Person/";
            },},{id: "books-on-writing-well",
          title: 'On Writing Well',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/On%20Writing%20Well/";
            },},{id: "books-the-god-of-small-things",
          title: 'The God of Small Things',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20God%20of%20Small%20Things/";
            },},{id: "books-mismatch",
          title: 'Mismatch',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Mismatch/";
            },},{id: "books-animal-spirits",
          title: 'Animal Spirits',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Animal%20Spirits/";
            },},{id: "books-the-machine-that-changed-the-world",
          title: 'The Machine That Changed the World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Machine%20That%20Changed%20the%20World/";
            },},{id: "books-the-worldly-philosophers",
          title: 'The Worldly Philosophers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Worldly%20Philosophers/";
            },},{id: "books-machine-learning-design-patterns",
          title: 'Machine Learning Design Patterns',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Machine%20Learning%20Design%20Patterns/";
            },},{id: "books-the-non-designer-39-s-design-book",
          title: 'The Non-Designer&amp;#39;s Design Book',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Non-Designer's%20Design%20Book/";
            },},{id: "books-pedagogy-of-the-oppressed",
          title: 'Pedagogy of the Oppressed',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Pedagogy%20of%20the%20Oppressed/";
            },},{id: "books-because-internet",
          title: 'Because Internet',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Because%20Internet/";
            },},{id: "books-the-paradox-of-choice",
          title: 'The Paradox of Choice',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Paradox%20of%20Choice/";
            },},{id: "books-first-break-all-the-rules",
          title: 'First, Break All the Rules',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/First,%20Break%20All%20the%20Rules/";
            },},{id: "books-anatomy-of-an-epidemic",
          title: 'Anatomy of an Epidemic',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Anatomy%20of%20an%20Epidemic/";
            },},{id: "books-the-man-who-loved-only-numbers",
          title: 'The Man Who Loved Only Numbers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Man%20Who%20Loved%20Only%20Numbers/";
            },},{id: "books-everybody-lies",
          title: 'Everybody Lies',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Everybody%20Lies/";
            },},{id: "books-the-elements-of-moral-philosophy",
          title: 'The Elements of Moral Philosophy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Elements%20of%20Moral%20Philosophy/";
            },},{id: "books-midnight-39-s-furies",
          title: 'Midnight&amp;#39;s Furies',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Midnight's%20Furies/";
            },},{id: "books-binti",
          title: 'Binti',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Binti/";
            },},{id: "books-self-compassion",
          title: 'Self-Compassion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Self-Compassion/";
            },},{id: "books-the-last-days-of-socrates",
          title: 'The Last Days of Socrates',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Last%20Days%20of%20Socrates/";
            },},{id: "books-irrational-exuberance",
          title: 'Irrational Exuberance',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Irrational%20Exuberance/";
            },},{id: "books-watchmen",
          title: 'Watchmen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Watchmen/";
            },},{id: "books-the-elements-of-style",
          title: 'The Elements of Style',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Elements%20of%20Style/";
            },},{id: "books-willpower",
          title: 'Willpower',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Willpower/";
            },},{id: "books-building-machine-learning-powered-applications",
          title: 'Building Machine Learning Powered Applications',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Building%20Machine%20Learning%20Powered%20Applications/";
            },},{id: "books-buddha-39-s-brain",
          title: 'Buddha&amp;#39;s Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Buddha's%20Brain/";
            },},{id: "books-the-sandman-preludes-and-nocturnes",
          title: 'The Sandman: Preludes and Nocturnes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Sandman%20Preludes%20and%20Nocturnes/";
            },},{id: "books-life-amp-times-of-michael-k",
          title: 'Life &amp;amp; Times of Michael K',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Life%20&%20Times%20of%20Michael%20K/";
            },},{id: "books-purple-cow",
          title: 'Purple Cow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Purple%20Cow/";
            },},{id: "books-the-22-immutable-laws-of-marketing",
          title: 'The 22 Immutable Laws of Marketing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%2022%20Immutable%20Laws%20of%20Marketing/";
            },},{id: "books-breath",
          title: 'Breath',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Breath/";
            },},{id: "books-nurtureshock",
          title: 'NurtureShock',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/NurtureShock/";
            },},{id: "books-you-look-like-a-thing-and-i-love-you",
          title: 'You Look Like a Thing and I Love You',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/You%20Look%20Like%20a%20Thing%20and%20I%20Love%20You/";
            },},{id: "books-here-comes-everybody",
          title: 'Here Comes Everybody',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Here%20Comes%20Everybody/";
            },},{id: "books-livewired",
          title: 'Livewired',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Livewired/";
            },},{id: "books-free-to-learn",
          title: 'Free to Learn',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Free%20to%20Learn/";
            },},{id: "books-the-year-of-magical-thinking",
          title: 'The Year of Magical Thinking',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Year%20of%20Magical%20Thinking/";
            },},{id: "books-piranesi",
          title: 'Piranesi',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Piranesi/";
            },},{id: "books-the-ocean-at-the-end-of-the-lane",
          title: 'The Ocean at the End of the Lane',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Ocean%20at%20the%20End%20of%20the%20Lane/";
            },},{id: "books-the-art-of-choosing",
          title: 'The Art of Choosing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Art%20of%20Choosing/";
            },},{id: "books-positioning",
          title: 'Positioning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Positioning/";
            },},{id: "books-hidden-valley-road",
          title: 'Hidden Valley Road',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Hidden%20Valley%20Road/";
            },},{id: "books-american-born-chinese",
          title: 'American Born Chinese',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/American%20Born%20Chinese/";
            },},{id: "books-power-sex-suicide",
          title: 'Power, Sex, Suicide',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Power,%20Sex,%20Suicide/";
            },},{id: "books-triumph-of-the-city",
          title: 'Triumph of the City',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Triumph%20of%20the%20City/";
            },},{id: "books-crazy-like-us",
          title: 'Crazy Like Us',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Crazy%20Like%20Us/";
            },},{id: "books-what-the-dormouse-said",
          title: 'What the Dormouse Said',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/What%20the%20Dormouse%20Said/";
            },},{id: "books-infinite-powers",
          title: 'Infinite Powers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Infinite%20Powers/";
            },},{id: "books-the-upside-of-irrationality",
          title: 'The Upside of Irrationality',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Upside%20of%20Irrationality/";
            },},{id: "books-how-to-win-friends-and-influence-people",
          title: 'How to Win Friends and Influence People',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20to%20Win%20Friends%20and%20Influence%20People/";
            },},{id: "books-letters-to-a-young-poet",
          title: 'Letters to a Young Poet',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Letters%20to%20a%20Young%20Poet/";
            },},{id: "books-the-halo-effect",
          title: 'The Halo Effect',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Halo%20Effect/";
            },},{id: "books-the-master-and-margarita",
          title: 'The Master and Margarita',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Master%20and%20Margarita/";
            },},{id: "books-the-bogleheads-39-guide-to-investing",
          title: 'The Bogleheads&amp;#39; Guide to Investing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Bogleheads'%20Guide%20to%20Investing/";
            },},{id: "books-small-is-beautiful",
          title: 'Small Is Beautiful',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Small%20Is%20Beautiful/";
            },},{id: "books-the-sports-gene",
          title: 'The Sports Gene',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Sports%20Gene/";
            },},{id: "books-normal-people",
          title: 'Normal People',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Normal%20People/";
            },},{id: "books-the-handmaid-39-s-tale",
          title: 'The Handmaid&amp;#39;s Tale',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Handmaid's%20Tale/";
            },},{id: "books-sync",
          title: 'Sync',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Sync/";
            },},{id: "books-alive",
          title: 'Alive',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Alive/";
            },},{id: "books-the-psychopath-test",
          title: 'The Psychopath Test',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Psychopath%20Test/";
            },},{id: "books-invisible-women",
          title: 'Invisible Women',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Invisible%20Women/";
            },},{id: "books-thanks-for-the-feedback",
          title: 'Thanks for the Feedback',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Thanks%20for%20the%20Feedback/";
            },},{id: "books-longitude",
          title: 'Longitude',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Longitude/";
            },},{id: "books-principles-of-economics",
          title: 'Principles of Economics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Principles%20of%20Economics/";
            },},{id: "books-the-little-book-of-common-sense-investing",
          title: 'The Little Book of Common Sense Investing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Little%20Book%20of%20Common%20Sense%20Investing/";
            },},{id: "books-train-your-mind-change-your-brain",
          title: 'Train Your Mind, Change Your Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Train%20Your%20Mind,%20Change%20Your%20Brain/";
            },},{id: "books-economics-in-one-lesson",
          title: 'Economics in One Lesson',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Economics%20in%20One%20Lesson/";
            },},{id: "books-the-disappearing-spoon",
          title: 'The Disappearing Spoon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Disappearing%20Spoon/";
            },},{id: "books-the-c-programming-language",
          title: 'The C Programming Language',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20C%20Programming%20Language/";
            },},{id: "books-the-gay-science",
          title: 'The Gay Science',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Gay%20Science/";
            },},{id: "books-the-war-of-art",
          title: 'The War of Art',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20War%20of%20Art/";
            },},{id: "books-crying-in-h-mart",
          title: 'Crying in H Mart',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Crying%20in%20H%20Mart/";
            },},{id: "books-the-myth-of-artificial-intelligence",
          title: 'The Myth of Artificial Intelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Myth%20of%20Artificial%20Intelligence/";
            },},{id: "books-no-rules-rules",
          title: 'No Rules Rules',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/No%20Rules%20Rules/";
            },},{id: "books-unconditional-parenting",
          title: 'Unconditional Parenting',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Unconditional%20Parenting/";
            },},{id: "books-the-divided-self",
          title: 'The Divided Self',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Divided%20Self/";
            },},{id: "books-why-i-am-not-a-christian",
          title: 'Why I Am Not a Christian',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Why%20I%20Am%20Not%20a%20Christian/";
            },},{id: "books-thirteen-days",
          title: 'Thirteen Days',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Thirteen%20Days/";
            },},{id: "books-the-last-lecture",
          title: 'The Last Lecture',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Last%20Lecture/";
            },},{id: "books-the-obstacle-is-the-way",
          title: 'The Obstacle Is the Way',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Obstacle%20Is%20the%20Way/";
            },},{id: "books-this-is-your-brain-on-music",
          title: 'This Is Your Brain on Music',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/This%20Is%20Your%20Brain%20on%20Music/";
            },},{id: "books-under-a-white-sky",
          title: 'Under a White Sky',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Under%20a%20White%20Sky/";
            },},{id: "books-23-things-they-don-39-t-tell-you-about-capitalism",
          title: '23 Things They Don&amp;#39;t Tell You About Capitalism',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/23%20Things%20They%20Don't%20Tell%20You%20About%20Capitalism/";
            },},{id: "books-to-save-everything-click-here",
          title: 'To Save Everything, Click Here',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/To%20Save%20Everything,%20Click%20Here/";
            },},{id: "books-dealers-of-lightning",
          title: 'Dealers of Lightning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Dealers%20of%20Lightning/";
            },},{id: "books-a-primate-39-s-memoir",
          title: 'A Primate&amp;#39;s Memoir',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Primate's%20Memoir/";
            },},{id: "books-the-everything-store",
          title: 'The Everything Store',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Everything%20Store/";
            },},{id: "books-the-strange-order-of-things",
          title: 'The Strange Order of Things',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Strange%20Order%20of%20Things/";
            },},{id: "books-small-things-like-these",
          title: 'Small Things Like These',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Small%20Things%20Like%20These/";
            },},{id: "books-chasing-the-scream",
          title: 'Chasing the Scream',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Chasing%20the%20Scream/";
            },},{id: "books-ogilvy-on-advertising",
          title: 'Ogilvy on Advertising',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Ogilvy%20on%20Advertising/";
            },},{id: "books-founding-brothers",
          title: 'Founding Brothers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Founding%20Brothers/";
            },},{id: "books-a-world-without-email",
          title: 'A World Without Email',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20World%20Without%20Email/";
            },},{id: "books-i-will-teach-you-to-be-rich",
          title: 'I Will Teach You to Be Rich',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/I%20Will%20Teach%20You%20to%20Be%20Rich/";
            },},{id: "books-the-how-of-happiness",
          title: 'The How of Happiness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20How%20of%20Happiness/";
            },},{id: "books-what-money-can-39-t-buy",
          title: 'What Money Can&amp;#39;t Buy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/What%20Money%20Can't%20Buy/";
            },},{id: "books-the-panda-39-s-thumb",
          title: 'The Panda&amp;#39;s Thumb',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Panda's%20Thumb/";
            },},{id: "books-symposium",
          title: 'Symposium',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Symposium/";
            },},{id: "books-alone-together",
          title: 'Alone Together',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Alone%20Together/";
            },},{id: "books-getting-past-no",
          title: 'Getting Past No',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Getting%20Past%20No/";
            },},{id: "books-the-ghost-map",
          title: 'The Ghost Map',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Ghost%20Map/";
            },},{id: "books-the-end-of-history-and-the-last-man",
          title: 'The End of History and the Last Man',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20End%20of%20History%20and%20the%20Last%20Man/";
            },},{id: "books-the-glass-cage",
          title: 'The Glass Cage',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Glass%20Cage/";
            },},{id: "books-a-wizard-of-earthsea",
          title: 'A Wizard of Earthsea',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Wizard%20of%20Earthsea/";
            },},{id: "books-the-sixth-extinction",
          title: 'The Sixth Extinction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Sixth%20Extinction/";
            },},{id: "books-dopamine-nation",
          title: 'Dopamine Nation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Dopamine%20Nation/";
            },},{id: "books-mindware",
          title: 'Mindware',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Mindware/";
            },},{id: "books-nothing-to-envy",
          title: 'Nothing to Envy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Nothing%20to%20Envy/";
            },},{id: "books-look-me-in-the-eye",
          title: 'Look Me in the Eye',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Look%20Me%20in%20the%20Eye/";
            },},{id: "books-old-man-39-s-war",
          title: 'Old Man&amp;#39;s War',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Old%20Man's%20War/";
            },},{id: "books-so-good-they-can-39-t-ignore-you",
          title: 'So Good They Can&amp;#39;t Ignore You',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/So%20Good%20They%20Can't%20Ignore%20You/";
            },},{id: "books-the-lucifer-effect",
          title: 'The Lucifer Effect',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Lucifer%20Effect/";
            },},{id: "books-anarchy-state-and-utopia",
          title: 'Anarchy, State, and Utopia',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Anarchy,%20State,%20and%20Utopia/";
            },},{id: "books-mismatch-how-inclusion-shapes-design",
          title: 'Mismatch: How Inclusion Shapes Design',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Mismatch%20How%20Inclusion%20Shapes%20Design/";
            },},{id: "books-the-smartest-guys-in-the-room",
          title: 'The Smartest Guys in the Room',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Smartest%20Guys%20in%20the%20Room/";
            },},{id: "books-the-buried-giant",
          title: 'The Buried Giant',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Buried%20Giant/";
            },},{id: "books-the-number-sense",
          title: 'The Number Sense',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Number%20Sense/";
            },},{id: "books-the-invisible-gorilla",
          title: 'The Invisible Gorilla',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Invisible%20Gorilla/";
            },},{id: "books-hackers-amp-painters",
          title: 'Hackers &amp;amp; Painters',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Hackers%20&%20Painters/";
            },},{id: "books-man-and-his-symbols",
          title: 'Man and His Symbols',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Man%20and%20His%20Symbols/";
            },},{id: "books-the-emotional-brain",
          title: 'The Emotional Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Emotional%20Brain/";
            },},{id: "books-who-owns-the-future",
          title: 'Who Owns the Future?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Who%20Owns%20the%20Future/";
            },},{id: "books-why-we-make-mistakes",
          title: 'Why We Make Mistakes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Why%20We%20Make%20Mistakes/";
            },},{id: "books-the-rational-optimist",
          title: 'The Rational Optimist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Rational%20Optimist/";
            },},{id: "books-turn-the-ship-around",
          title: 'Turn the Ship Around!',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Turn%20the%20Ship%20Around!/";
            },},{id: "books-the-ethical-algorithm",
          title: 'The Ethical Algorithm',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Ethical%20Algorithm/";
            },},{id: "books-how-to-change",
          title: 'How to Change',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20to%20Change/";
            },},{id: "books-ubik",
          title: 'Ubik',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Ubik/";
            },},{id: "books-traction",
          title: 'Traction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Traction/";
            },},{id: "books-know-my-name",
          title: 'Know My Name',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Know%20My%20Name/";
            },},{id: "books-fun-home",
          title: 'Fun Home',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Fun%20Home/";
            },},{id: "books-you-are-not-a-gadget",
          title: 'You Are Not a Gadget',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/You%20Are%20Not%20a%20Gadget/";
            },},{id: "books-endless-forms-most-beautiful",
          title: 'Endless Forms Most Beautiful',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Endless%20Forms%20Most%20Beautiful/";
            },},{id: "books-the-elements-of-statistical-learning",
          title: 'The Elements of Statistical Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Elements%20of%20Statistical%20Learning/";
            },},{id: "books-remember",
          title: 'Remember',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Remember/";
            },},{id: "books-merchants-of-doubt",
          title: 'Merchants of Doubt',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Merchants%20of%20Doubt/";
            },},{id: "books-staff-engineer",
          title: 'Staff Engineer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Staff%20Engineer/";
            },},{id: "books-a-universe-of-consciousness",
          title: 'A Universe of Consciousness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Universe%20of%20Consciousness/";
            },},{id: "books-march-book-one",
          title: 'March: Book One',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/March%20Book%20One/";
            },},{id: "books-rethinking-consciousness",
          title: 'Rethinking Consciousness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Rethinking%20Consciousness/";
            },},{id: "books-maybe-you-should-talk-to-someone",
          title: 'Maybe You Should Talk to Someone',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Maybe%20You%20Should%20Talk%20to%20Someone/";
            },},{id: "books-the-elements-of-user-experience",
          title: 'The Elements of User Experience',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Elements%20of%20User%20Experience/";
            },},{id: "books-angela-39-s-ashes",
          title: 'Angela&amp;#39;s Ashes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Angela's%20Ashes/";
            },},{id: "books-a-beautiful-mind",
          title: 'A Beautiful Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Beautiful%20Mind/";
            },},{id: "books-the-silk-roads",
          title: 'The Silk Roads',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Silk%20Roads/";
            },},{id: "books-how-google-works",
          title: 'How Google Works',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20Google%20Works/";
            },},{id: "books-the-poisoner-39-s-handbook",
          title: 'The Poisoner&amp;#39;s Handbook',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Poisoner's%20Handbook/";
            },},{id: "books-the-particle-at-the-end-of-the-universe",
          title: 'The Particle at the End of the Universe',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Particle%20at%20the%20End%20of%20the%20Universe/";
            },},{id: "books-how-to-avoid-a-climate-disaster",
          title: 'How to Avoid a Climate Disaster',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20to%20Avoid%20a%20Climate%20Disaster/";
            },},{id: "books-to-sell-is-human",
          title: 'To Sell Is Human',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/To%20Sell%20Is%20Human/";
            },},{id: "books-waiting-for-the-barbarians",
          title: 'Waiting for the Barbarians',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Waiting%20for%20the%20Barbarians/";
            },},{id: "books-the-happiness-project",
          title: 'The Happiness Project',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Happiness%20Project/";
            },},{id: "books-the-fall",
          title: 'The Fall',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Fall/";
            },},{id: "books-free-as-in-freedom",
          title: 'Free as in Freedom',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Free%20as%20in%20Freedom/";
            },},{id: "books-multipliers",
          title: 'Multipliers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Multipliers/";
            },},{id: "books-the-boy-who-harnessed-the-wind",
          title: 'The Boy Who Harnessed the Wind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Boy%20Who%20Harnessed%20the%20Wind/";
            },},{id: "books-coraline",
          title: 'Coraline',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Coraline/";
            },},{id: "books-the-making-of-the-fittest",
          title: 'The Making of the Fittest',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Making%20of%20the%20Fittest/";
            },},{id: "books-the-remains-of-the-day",
          title: 'The Remains of the Day',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Remains%20of%20the%20Day/";
            },},{id: "books-attached",
          title: 'Attached',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Attached/";
            },},{id: "books-wherever-you-go-there-you-are",
          title: 'Wherever You Go, There You Are',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Wherever%20You%20Go,%20There%20You%20Are/";
            },},{id: "books-the-guide",
          title: 'The Guide',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Guide/";
            },},{id: "books-death-of-a-salesman",
          title: 'Death of a Salesman',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Death%20of%20a%20Salesman/";
            },},{id: "books-the-ego-tunnel",
          title: 'The Ego Tunnel',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Ego%20Tunnel/";
            },},{id: "books-the-culture-map",
          title: 'The Culture Map',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Culture%20Map/";
            },},{id: "books-snow-crash",
          title: 'Snow Crash',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Snow%20Crash/";
            },},{id: "books-lean-ux",
          title: 'Lean UX',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Lean%20UX/";
            },},{id: "books-talking-to-strangers",
          title: 'Talking to Strangers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Talking%20to%20Strangers/";
            },},{id: "books-team-topologies",
          title: 'Team Topologies',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Team%20Topologies/";
            },},{id: "books-the-elements-of-typographic-style",
          title: 'The Elements of Typographic Style',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Elements%20of%20Typographic%20Style/";
            },},{id: "books-authentic-happiness",
          title: 'Authentic Happiness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Authentic%20Happiness/";
            },},{id: "books-the-great-war-and-modern-memory",
          title: 'The Great War and Modern Memory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Great%20War%20and%20Modern%20Memory/";
            },},{id: "books-cognitive-psychology",
          title: 'Cognitive Psychology',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Cognitive%20Psychology/";
            },},{id: "books-hello-world",
          title: 'Hello World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Hello%20World/";
            },},{id: "books-cat-39-s-cradle",
          title: 'Cat&amp;#39;s Cradle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Cat's%20Cradle/";
            },},{id: "books-algorithms-of-oppression",
          title: 'Algorithms of Oppression',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Algorithms%20of%20Oppression/";
            },},{id: "books-range",
          title: 'Range',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Range/";
            },},{id: "books-life-of-pi",
          title: 'Life of Pi',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Life%20of%20Pi/";
            },},{id: "books-the-human-use-of-human-beings",
          title: 'The Human Use of Human Beings',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Human%20Use%20of%20Human%20Beings/";
            },},{id: "books-the-kite-runner",
          title: 'The Kite Runner',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Kite%20Runner/";
            },},{id: "books-educated",
          title: 'Educated',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Educated/";
            },},{id: "books-the-fall-of-constantinople-1453",
          title: 'The Fall of Constantinople 1453',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Fall%20of%20Constantinople%201453/";
            },},{id: "books-parable-of-the-sower",
          title: 'Parable of the Sower',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Parable%20of%20the%20Sower/";
            },},{id: "books-qed-the-strange-theory-of-light-and-matter",
          title: 'QED: The Strange Theory of Light and Matter',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/QED%20The%20Strange%20Theory%20of%20Light%20and%20Matter/";
            },},{id: "books-the-emperor-of-all-maladies",
          title: 'The Emperor of All Maladies',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Emperor%20of%20All%20Maladies/";
            },},{id: "books-blueprint",
          title: 'Blueprint',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Blueprint/";
            },},{id: "books-the-dawn-of-everything",
          title: 'The Dawn of Everything',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Dawn%20of%20Everything/";
            },},{id: "books-enlightenment-now",
          title: 'Enlightenment Now',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Enlightenment%20Now/";
            },},{id: "books-making-movies",
          title: 'Making Movies',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Making%20Movies/";
            },},{id: "books-notes-from-a-small-island",
          title: 'Notes from a Small Island',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Notes%20from%20a%20Small%20Island/";
            },},{id: "books-originals",
          title: 'Originals',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Originals/";
            },},{id: "books-genius",
          title: 'Genius',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Genius/";
            },},{id: "books-understanding-comics",
          title: 'Understanding Comics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Understanding%20Comics/";
            },},{id: "books-start-with-why",
          title: 'Start with Why',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Start%20with%20Why/";
            },},{id: "books-slouching-towards-bethlehem",
          title: 'Slouching Towards Bethlehem',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Slouching%20Towards%20Bethlehem/";
            },},{id: "books-zen-mind-beginner-39-s-mind",
          title: 'Zen Mind, Beginner&amp;#39;s Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Zen%20Mind,%20Beginner's%20Mind/";
            },},{id: "books-exhalation",
          title: 'Exhalation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Exhalation/";
            },},{id: "books-the-pyramid-principle",
          title: 'The Pyramid Principle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Pyramid%20Principle/";
            },},{id: "books-the-gunslinger",
          title: 'The Gunslinger',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Gunslinger/";
            },},{id: "books-how-not-to-be-wrong",
          title: 'How Not to Be Wrong',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20Not%20to%20Be%20Wrong/";
            },},{id: "books-the-order-of-time",
          title: 'The Order of Time',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Order%20of%20Time/";
            },},{id: "books-think",
          title: 'Think',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Think/";
            },},{id: "books-the-three-body-problem",
          title: 'The Three-Body Problem',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Three-Body%20Problem/";
            },},{id: "books-21-lessons-for-the-21st-century",
          title: '21 Lessons for the 21st Century',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/21%20Lessons%20for%20the%2021st%20Century/";
            },},{id: "books-made-to-stick",
          title: 'Made to Stick',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Made%20to%20Stick/";
            },},{id: "books-race-after-technology",
          title: 'Race After Technology',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Race%20After%20Technology/";
            },},{id: "books-obedience-to-authority",
          title: 'Obedience to Authority',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Obedience%20to%20Authority/";
            },},{id: "books-the-scout-mindset",
          title: 'The Scout Mindset',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Scout%20Mindset/";
            },},{id: "books-think-again",
          title: 'Think Again',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Think%20Again/";
            },},{id: "books-the-ministry-for-the-future",
          title: 'The Ministry for the Future',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Ministry%20for%20the%20Future/";
            },},{id: "books-genome",
          title: 'Genome',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Genome/";
            },},{id: "books-good-economics-for-hard-times",
          title: 'Good Economics for Hard Times',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Good%20Economics%20for%20Hard%20Times/";
            },},{id: "books-dune",
          title: 'Dune',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Dune/";
            },},{id: "books-mind-a-brief-introduction",
          title: 'Mind: A Brief Introduction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Mind%20A%20Brief%20Introduction/";
            },},{id: "books-information-theory-inference-and-learning-algorithms",
          title: 'Information Theory, Inference, and Learning Algorithms',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Information%20Theory,%20Inference,%20and%20Learning%20Algorithms/";
            },},{id: "books-neuromancer",
          title: 'Neuromancer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Neuromancer/";
            },},{id: "books-the-elephant-in-the-brain",
          title: 'The Elephant in the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Elephant%20in%20the%20Brain/";
            },},{id: "books-bad-blood",
          title: 'Bad Blood',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Bad%20Blood/";
            },},{id: "books-the-making-of-the-atomic-bomb",
          title: 'The Making of the Atomic Bomb',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Making%20of%20the%20Atomic%20Bomb/";
            },},{id: "books-the-emperor",
          title: 'The Emperor',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Emperor/";
            },},{id: "books-naked-statistics",
          title: 'Naked Statistics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Naked%20Statistics/";
            },},{id: "books-the-affluent-society",
          title: 'The Affluent Society',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Affluent%20Society/";
            },},{id: "books-creativity-inc",
          title: 'Creativity, Inc.',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Creativity,%20Inc/";
            },},{id: "books-the-face-of-battle",
          title: 'The Face of Battle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Face%20of%20Battle/";
            },},{id: "books-endurance",
          title: 'Endurance',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Endurance/";
            },},{id: "books-the-immortal-life-of-henrietta-lacks",
          title: 'The Immortal Life of Henrietta Lacks',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Immortal%20Life%20of%20Henrietta%20Lacks/";
            },},{id: "books-possible-minds",
          title: 'Possible Minds',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Possible%20Minds/";
            },},{id: "books-project-hail-mary",
          title: 'Project Hail Mary',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Project%20Hail%20Mary/";
            },},{id: "books-fermat-39-s-enigma",
          title: 'Fermat&amp;#39;s Enigma',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Fermat's%20Enigma/";
            },},{id: "books-the-five-dysfunctions-of-a-team",
          title: 'The Five Dysfunctions of a Team',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Five%20Dysfunctions%20of%20a%20Team/";
            },},{id: "books-i-robot",
          title: 'I, Robot',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/I,%20Robot/";
            },},{id: "books-introduction-to-machine-learning-with-python",
          title: 'Introduction to Machine Learning with Python',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Introduction%20to%20Machine%20Learning%20with%20Python/";
            },},{id: "books-four-thousand-weeks",
          title: 'Four Thousand Weeks',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Four%20Thousand%20Weeks/";
            },},{id: "books-the-idea-factory",
          title: 'The Idea Factory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Idea%20Factory/";
            },},{id: "books-automating-inequality",
          title: 'Automating Inequality',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Automating%20Inequality/";
            },},{id: "books-difficult-conversations",
          title: 'Difficult Conversations',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Difficult%20Conversations/";
            },},{id: "books-radical-candor",
          title: 'Radical Candor',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Radical%20Candor/";
            },},{id: "books-the-rise-and-fall-of-athens-nine-greek-lives",
          title: 'The Rise and Fall of Athens: Nine Greek Lives',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Rise%20and%20Fall%20of%20Athens%20Nine%20Greek%20Lives/";
            },},{id: "books-grit",
          title: 'Grit',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Grit/";
            },},{id: "books-no-longer-human",
          title: 'No Longer Human',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/No%20Longer%20Human/";
            },},{id: "books-the-devil-in-the-white-city",
          title: 'The Devil in the White City',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Devil%20in%20the%20White%20City/";
            },},{id: "books-stories-of-your-life-and-others",
          title: 'Stories of Your Life and Others',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Stories%20of%20Your%20Life%20and%20Others/";
            },},{id: "books-competitive-advantage",
          title: 'Competitive Advantage',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Competitive%20Advantage/";
            },},{id: "books-peak",
          title: 'Peak',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Peak/";
            },},{id: "books-the-age-of-surveillance-capitalism",
          title: 'The Age of Surveillance Capitalism',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Age%20of%20Surveillance%20Capitalism/";
            },},{id: "books-emotional-design",
          title: 'Emotional Design',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Emotional%20Design/";
            },},{id: "books-algorithms-to-live-by",
          title: 'Algorithms to Live By',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Algorithms%20to%20Live%20By/";
            },},{id: "books-the-castle",
          title: 'The Castle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Castle/";
            },},{id: "books-the-left-hand-of-darkness",
          title: 'The Left Hand of Darkness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Left%20Hand%20of%20Darkness/";
            },},{id: "books-the-gene",
          title: 'The Gene',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Gene/";
            },},{id: "books-foundation",
          title: 'Foundation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Foundation/";
            },},{id: "books-why-buddhism-is-true",
          title: 'Why Buddhism Is True',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Why%20Buddhism%20Is%20True/";
            },},{id: "books-ender-39-s-game",
          title: 'Ender&amp;#39;s Game',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Ender's%20Game/";
            },},{id: "books-klara-and-the-sun",
          title: 'Klara and the Sun',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Klara%20and%20the%20Sun/";
            },},{id: "books-into-the-wild",
          title: 'Into the Wild',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Into%20the%20Wild/";
            },},{id: "books-hit-refresh",
          title: 'Hit Refresh',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Hit%20Refresh/";
            },},{id: "books-howl-39-s-moving-castle",
          title: 'Howl&amp;#39;s Moving Castle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Howl's%20Moving%20Castle/";
            },},{id: "books-the-man-who-knew-infinity",
          title: 'The Man Who Knew Infinity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Man%20Who%20Knew%20Infinity/";
            },},{id: "books-waking-the-tiger",
          title: 'Waking the Tiger',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Waking%20the%20Tiger/";
            },},{id: "books-kitchen-confidential",
          title: 'Kitchen Confidential',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Kitchen%20Confidential/";
            },},{id: "books-napoleon-39-s-buttons",
          title: 'Napoleon&amp;#39;s Buttons',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Napoleon's%20Buttons/";
            },},{id: "books-atomic-habits",
          title: 'Atomic Habits',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Atomic%20Habits/";
            },},{id: "books-quiet",
          title: 'Quiet',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Quiet/";
            },},{id: "books-born-a-crime",
          title: 'Born a Crime',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Born%20a%20Crime/";
            },},{id: "books-deep-medicine",
          title: 'Deep Medicine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Deep%20Medicine/";
            },},{id: "books-after-virtue",
          title: 'After Virtue',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/After%20Virtue/";
            },},{id: "books-loonshots",
          title: 'Loonshots',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Loonshots/";
            },},{id: "books-the-body-keeps-the-score",
          title: 'The Body Keeps the Score',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Body%20Keeps%20the%20Score/";
            },},{id: "books-amusing-ourselves-to-death",
          title: 'Amusing Ourselves to Death',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Amusing%20Ourselves%20to%20Death/";
            },},{id: "books-oryx-and-crake",
          title: 'Oryx and Crake',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Oryx%20and%20Crake/";
            },},{id: "books-unmasking-ai",
          title: 'Unmasking AI',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Unmasking%20AI/";
            },},{id: "books-the-shipping-news",
          title: 'The Shipping News',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Shipping%20News/";
            },},{id: "books-the-good-life",
          title: 'The Good Life',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Good%20Life/";
            },},{id: "books-the-long-goodbye",
          title: 'The Long Goodbye',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Long%20Goodbye/";
            },},{id: "books-one-up-on-wall-street",
          title: 'One Up On Wall Street',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/One%20Up%20On%20Wall%20Street/";
            },},{id: "books-the-creative-act-a-way-of-being",
          title: 'The Creative Act: A Way of Being',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Creative%20Act%20A%20Way%20of%20Being/";
            },},{id: "books-same-as-ever",
          title: 'Same as Ever',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Same%20as%20Ever/";
            },},{id: "books-sapiens",
          title: 'Sapiens',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Sapiens/";
            },},{id: "books-the-mind-and-the-brain",
          title: 'The Mind and the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Mind%20and%20the%20Brain/";
            },},{id: "books-happy-place",
          title: 'Happy Place',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Happy%20Place/";
            },},{id: "books-king-leopold-39-s-ghost",
          title: 'King Leopold&amp;#39;s Ghost',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/King%20Leopold's%20Ghost/";
            },},{id: "books-our-band-could-be-your-life",
          title: 'Our Band Could Be Your Life',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Our%20Band%20Could%20Be%20Your%20Life/";
            },},{id: "books-four-battlegrounds",
          title: 'Four Battlegrounds',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Four%20Battlegrounds/";
            },},{id: "books-peopleware",
          title: 'Peopleware',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Peopleware/";
            },},{id: "books-the-origin-of-consciousness-in-the-breakdown-of-the-bicameral-mind",
          title: 'The Origin of Consciousness in the Breakdown of the Bicameral Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Origin%20of%20Consciousness%20in%20the%20Breakdown%20of%20the%20Bicameral%20Mind/";
            },},{id: "books-a-brief-history-of-intelligence",
          title: 'A Brief History of Intelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Brief%20History%20of%20Intelligence/";
            },},{id: "books-going-infinite",
          title: 'Going Infinite',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Going%20Infinite/";
            },},{id: "books-liar-39-s-poker",
          title: 'Liar&amp;#39;s Poker',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Liar's%20Poker/";
            },},{id: "books-the-cathedral-and-the-bazaar",
          title: 'The Cathedral and the Bazaar',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Cathedral%20and%20the%20Bazaar/";
            },},{id: "books-build",
          title: 'Build',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Build/";
            },},{id: "books-river-out-of-eden",
          title: 'River Out of Eden',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/River%20Out%20of%20Eden/";
            },},{id: "books-code",
          title: 'Code',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Code/";
            },},{id: "books-how-big-things-get-done",
          title: 'How Big Things Get Done',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20Big%20Things%20Get%20Done/";
            },},{id: "books-poverty-by-america",
          title: 'Poverty, by America',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Poverty,%20by%20America/";
            },},{id: "books-the-dream-machine",
          title: 'The Dream Machine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Dream%20Machine/";
            },},{id: "books-the-wager",
          title: 'The Wager',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Wager/";
            },},{id: "books-a-whole-new-mind",
          title: 'A Whole New Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Whole%20New%20Mind/";
            },},{id: "books-getting-to-yes",
          title: 'Getting to Yes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Getting%20to%20Yes/";
            },},{id: "books-the-battle-for-your-brain",
          title: 'The Battle for Your Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Battle%20for%20Your%20Brain/";
            },},{id: "books-godel-39-s-proof",
          title: 'Godel&amp;#39;s Proof',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Godel's%20Proof/";
            },},{id: "books-iron-flame",
          title: 'Iron Flame',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Iron%20Flame/";
            },},{id: "books-awakenings",
          title: 'Awakenings',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Awakenings/";
            },},{id: "books-the-inmates-are-running-the-asylum",
          title: 'The Inmates Are Running the Asylum',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Inmates%20Are%20Running%20the%20Asylum/";
            },},{id: "books-the-power-of-habit",
          title: 'The Power of Habit',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Power%20of%20Habit/";
            },},{id: "books-the-road-to-serfdom",
          title: 'The Road to Serfdom',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Road%20to%20Serfdom/";
            },},{id: "books-letters-from-a-stoic",
          title: 'Letters from a Stoic',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Letters%20from%20a%20Stoic/";
            },},{id: "books-zen-and-the-art-of-motorcycle-maintenance",
          title: 'Zen and the Art of Motorcycle Maintenance',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Zen%20and%20the%20Art%20of%20Motorcycle%20Maintenance/";
            },},{id: "books-eichmann-in-jerusalem",
          title: 'Eichmann in Jerusalem',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Eichmann%20in%20Jerusalem/";
            },},{id: "books-yellowface",
          title: 'Yellowface',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Yellowface/";
            },},{id: "books-hidden-potential",
          title: 'Hidden Potential',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Hidden%20Potential/";
            },},{id: "books-poor-economics",
          title: 'Poor Economics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Poor%20Economics/";
            },},{id: "books-the-stuff-of-thought",
          title: 'The Stuff of Thought',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Stuff%20of%20Thought/";
            },},{id: "books-the-gift-of-therapy",
          title: 'The Gift of Therapy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Gift%20of%20Therapy/";
            },},{id: "books-the-heaven-amp-earth-grocery-store",
          title: 'The Heaven &amp;amp; Earth Grocery Store',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Heaven%20&%20Earth%20Grocery%20Store/";
            },},{id: "books-the-zimmermann-telegram",
          title: 'The Zimmermann Telegram',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Zimmermann%20Telegram/";
            },},{id: "books-spare",
          title: 'Spare',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Spare/";
            },},{id: "books-why-the-allies-won",
          title: 'Why the Allies Won',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Why%20the%20Allies%20Won/";
            },},{id: "books-tom-lake",
          title: 'Tom Lake',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Tom%20Lake/";
            },},{id: "books-philosophical-investigations",
          title: 'Philosophical Investigations',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Philosophical%20Investigations/";
            },},{id: "books-housekeeping",
          title: 'Housekeeping',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Housekeeping/";
            },},{id: "books-outlive",
          title: 'Outlive',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Outlive/";
            },},{id: "books-capital-in-the-twenty-first-century",
          title: 'Capital in the Twenty-First Century',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Capital%20in%20the%20Twenty-First%20Century/";
            },},{id: "books-an-unquiet-mind",
          title: 'An Unquiet Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/An%20Unquiet%20Mind/";
            },},{id: "books-emotional-intelligence",
          title: 'Emotional Intelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Emotional%20Intelligence/";
            },},{id: "books-oxygen",
          title: 'Oxygen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Oxygen/";
            },},{id: "books-freakonomics",
          title: 'Freakonomics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Freakonomics/";
            },},{id: "books-the-sea-around-us",
          title: 'The Sea Around Us',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Sea%20Around%20Us/";
            },},{id: "books-quit",
          title: 'Quit',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Quit/";
            },},{id: "books-the-demon-haunted-world",
          title: 'The Demon-Haunted World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Demon-Haunted%20World/";
            },},{id: "books-the-elegant-universe",
          title: 'The Elegant Universe',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Elegant%20Universe/";
            },},{id: "books-midaq-alley",
          title: 'Midaq Alley',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Midaq%20Alley/";
            },},{id: "books-the-prince",
          title: 'The Prince',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Prince/";
            },},{id: "books-the-jewish-war",
          title: 'The Jewish War',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Jewish%20War/";
            },},{id: "books-the-tipping-point",
          title: 'The Tipping Point',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Tipping%20Point/";
            },},{id: "books-the-geography-of-thought",
          title: 'The Geography of Thought',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Geography%20of%20Thought/";
            },},{id: "books-outliers",
          title: 'Outliers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Outliers/";
            },},{id: "books-in-patagonia",
          title: 'In Patagonia',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/In%20Patagonia/";
            },},{id: "books-generative-deep-learning-2nd-edition",
          title: 'Generative Deep Learning, 2nd Edition',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Generative%20Deep%20Learning,%202nd%20Edition/";
            },},{id: "books-the-covenant-of-water",
          title: 'The Covenant of Water',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Covenant%20of%20Water/";
            },},{id: "books-the-mystery-of-capital",
          title: 'The Mystery of Capital',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Mystery%20of%20Capital/";
            },},{id: "books-the-invention-of-tradition",
          title: 'The Invention of Tradition',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Invention%20of%20Tradition/";
            },},{id: "books-flow",
          title: 'Flow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Flow/";
            },},{id: "books-gilead",
          title: 'Gilead',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Gilead/";
            },},{id: "books-the-island-of-the-colorblind",
          title: 'The Island of the Colorblind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Island%20of%20the%20Colorblind/";
            },},{id: "books-mindset",
          title: 'Mindset',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Mindset/";
            },},{id: "books-six-easy-pieces",
          title: 'Six Easy Pieces',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Six%20Easy%20Pieces/";
            },},{id: "books-on-the-origin-of-species",
          title: 'On the Origin of Species',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/On%20the%20Origin%20of%20Species/";
            },},{id: "books-power-and-progress",
          title: 'Power and Progress',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Power%20and%20Progress/";
            },},{id: "books-skin-in-the-game",
          title: 'Skin in the Game',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Skin%20in%20the%20Game/";
            },},{id: "books-the-little-prince",
          title: 'The Little Prince',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Little%20Prince/";
            },},{id: "books-a-brief-history-of-time",
          title: 'A Brief History of Time',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Brief%20History%20of%20Time/";
            },},{id: "books-the-worlds-i-see",
          title: 'The Worlds I See',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Worlds%20I%20See/";
            },},{id: "books-the-wealth-of-nations",
          title: 'The Wealth of Nations',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Wealth%20of%20Nations/";
            },},{id: "books-probably-overthinking-it",
          title: 'Probably Overthinking It',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Probably%20Overthinking%20It/";
            },},{id: "books-brain-rules",
          title: 'Brain Rules',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Brain%20Rules/";
            },},{id: "books-cognitive-science-an-introduction-to-the-study-of-mind",
          title: 'Cognitive Science: An Introduction to the Study of Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Cognitive%20Science%20An%20Introduction%20to%20the%20Study%20of%20Mind/";
            },},{id: "books-clear-thinking",
          title: 'Clear Thinking',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Clear%20Thinking/";
            },},{id: "books-darkness-visible",
          title: 'Darkness Visible',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Darkness%20Visible/";
            },},{id: "books-an-enquiry-concerning-human-understanding",
          title: 'An Enquiry Concerning Human Understanding',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/An%20Enquiry%20Concerning%20Human%20Understanding/";
            },},{id: "books-the-consolation-of-philosophy",
          title: 'The Consolation of Philosophy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Consolation%20of%20Philosophy/";
            },},{id: "books-surely-you-39-re-joking-mr-feynman",
          title: 'Surely You&amp;#39;re Joking, Mr. Feynman!',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Surely%20You're%20Joking,%20Mr.%20Feynman!/";
            },},{id: "books-fourth-wing",
          title: 'Fourth Wing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Fourth%20Wing/";
            },},{id: "books-ways-of-seeing",
          title: 'Ways of Seeing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Ways%20of%20Seeing/";
            },},{id: "books-drive",
          title: 'Drive',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Drive/";
            },},{id: "books-neuroscience-exploring-the-brain",
          title: 'Neuroscience: Exploring the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Neuroscience%20Exploring%20the%20Brain/";
            },},{id: "books-delirious-new-york",
          title: 'Delirious New York',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Delirious%20New%20York/";
            },},{id: "books-an-anthropologist-on-mars",
          title: 'An Anthropologist on Mars',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/An%20Anthropologist%20on%20Mars/";
            },},{id: "books-guns-germs-and-steel",
          title: 'Guns, Germs, and Steel',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Guns,%20Germs,%20and%20Steel/";
            },},{id: "books-the-denial-of-death",
          title: 'The Denial of Death',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Denial%20of%20Death/";
            },},{id: "books-the-fifth-discipline",
          title: 'The Fifth Discipline',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Fifth%20Discipline/";
            },},{id: "books-tractatus-logico-philosophicus",
          title: 'Tractatus Logico-Philosophicus',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Tractatus%20Logico-Philosophicus/";
            },},{id: "books-the-guns-of-august",
          title: 'The Guns of August',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Guns%20of%20August/";
            },},{id: "books-1776",
          title: '1776',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/1776/";
            },},{id: "books-the-emperor-39-s-new-mind",
          title: 'The Emperor&amp;#39;s New Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Emperor's%20New%20Mind/";
            },},{id: "books-the-gift-of-fear",
          title: 'The Gift of Fear',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Gift%20of%20Fear/";
            },},{id: "books-cosmos",
          title: 'Cosmos',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Cosmos/";
            },},{id: "books-mindstorms",
          title: 'Mindstorms',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Mindstorms/";
            },},{id: "books-the-wisdom-of-crowds",
          title: 'The Wisdom of Crowds',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Wisdom%20of%20Crowds/";
            },},{id: "books-thinking-in-systems",
          title: 'Thinking in Systems',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Thinking%20in%20Systems/";
            },},{id: "books-the-mind-of-a-mnemonist",
          title: 'The Mind of a Mnemonist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Mind%20of%20a%20Mnemonist/";
            },},{id: "books-darwin-39-s-dangerous-idea",
          title: 'Darwin&amp;#39;s Dangerous Idea',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Darwin's%20Dangerous%20Idea/";
            },},{id: "books-risk-savvy",
          title: 'Risk Savvy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Risk%20Savvy/";
            },},{id: "books-the-signal-and-the-noise",
          title: 'The Signal and the Noise',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Signal%20and%20the%20Noise/";
            },},{id: "books-sophie-39-s-world",
          title: 'Sophie&amp;#39;s World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Sophie's%20World/";
            },},{id: "books-cognitive-neuroscience-the-biology-of-the-mind",
          title: 'Cognitive Neuroscience: The Biology of the Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Cognitive%20Neuroscience%20The%20Biology%20of%20the%20Mind/";
            },},{id: "books-fortune-39-s-formula",
          title: 'Fortune&amp;#39;s Formula',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Fortune's%20Formula/";
            },},{id: "books-ai-snake-oil",
          title: 'AI Snake Oil',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/AI%20Snake%20Oil/";
            },},{id: "books-ai-superpowers",
          title: 'AI Superpowers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/AI%20Superpowers/";
            },},{id: "books-a-world-lit-only-by-fire",
          title: 'A World Lit Only by Fire',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20World%20Lit%20Only%20by%20Fire/";
            },},{id: "books-the-time-machine",
          title: 'The Time Machine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Time%20Machine/";
            },},{id: "books-the-creative-habit",
          title: 'The Creative Habit',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Creative%20Habit/";
            },},{id: "books-the-undoing-project",
          title: 'The Undoing Project',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Undoing%20Project/";
            },},{id: "books-the-happiness-hypothesis",
          title: 'The Happiness Hypothesis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Happiness%20Hypothesis/";
            },},{id: "books-determined",
          title: 'Determined',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Determined/";
            },},{id: "books-interpreter-of-maladies",
          title: 'Interpreter of Maladies',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Interpreter%20of%20Maladies/";
            },},{id: "books-the-snow-leopard",
          title: 'The Snow Leopard',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Snow%20Leopard/";
            },},{id: "books-how-the-world-really-works",
          title: 'How the World Really Works',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20the%20World%20Really%20Works/";
            },},{id: "books-in-a-sunburned-country",
          title: 'In a Sunburned Country',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/In%20a%20Sunburned%20Country/";
            },},{id: "books-the-better-angels-of-our-nature",
          title: 'The Better Angels of Our Nature',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Better%20Angels%20of%20Our%20Nature/";
            },},{id: "books-chip-war",
          title: 'Chip War',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Chip%20War/";
            },},{id: "books-practical-ethics",
          title: 'Practical Ethics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Practical%20Ethics/";
            },},{id: "books-the-visual-display-of-quantitative-information",
          title: 'The Visual Display of Quantitative Information',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Visual%20Display%20of%20Quantitative%20Information/";
            },},{id: "books-mountains-beyond-mountains",
          title: 'Mountains Beyond Mountains',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Mountains%20Beyond%20Mountains/";
            },},{id: "books-invisible-cities",
          title: 'Invisible Cities',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Invisible%20Cities/";
            },},{id: "books-lost-in-math",
          title: 'Lost in Math',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Lost%20in%20Math/";
            },},{id: "books-rationality",
          title: 'Rationality',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Rationality/";
            },},{id: "books-7-powers",
          title: '7 Powers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/7%20Powers/";
            },},{id: "books-atlas-of-ai",
          title: 'Atlas of AI',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Atlas%20of%20AI/";
            },},{id: "books-the-road-to-reality",
          title: 'The Road to Reality',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Road%20to%20Reality/";
            },},{id: "books-the-blank-slate",
          title: 'The Blank Slate',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Blank%20Slate/";
            },},{id: "books-the-pragmatic-programmer",
          title: 'The Pragmatic Programmer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Pragmatic%20Programmer/";
            },},{id: "books-code-the-hidden-language-of-computer-hardware-and-software",
          title: 'Code: The Hidden Language of Computer Hardware and Software',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Code%20The%20Hidden%20Language%20of%20Computer%20Hardware%20and%20Software/";
            },},{id: "books-reinforcement-learning-an-introduction",
          title: 'Reinforcement Learning: An Introduction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Reinforcement%20Learning%20An%20Introduction/";
            },},{id: "books-the-woman-warrior",
          title: 'The Woman Warrior',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Woman%20Warrior/";
            },},{id: "books-complexity-a-guided-tour",
          title: 'Complexity: A Guided Tour',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Complexity%20A%20Guided%20Tour/";
            },},{id: "books-in-the-heart-of-the-sea",
          title: 'In the Heart of the Sea',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/In%20the%20Heart%20of%20the%20Sea/";
            },},{id: "books-superforecasting",
          title: 'Superforecasting',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Superforecasting/";
            },},{id: "books-chaos",
          title: 'Chaos',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Chaos/";
            },},{id: "books-the-control-of-nature",
          title: 'The Control of Nature',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Control%20of%20Nature/";
            },},{id: "books-the-evolution-of-cooperation",
          title: 'The Evolution of Cooperation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Evolution%20of%20Cooperation/";
            },},{id: "books-salt-a-world-history",
          title: 'Salt: A World History',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Salt%20A%20World%20History/";
            },},{id: "books-refactoring",
          title: 'Refactoring',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Refactoring/";
            },},{id: "books-what-we-owe-the-future",
          title: 'What We Owe the Future',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/What%20We%20Owe%20the%20Future/";
            },},{id: "books-without-conscience",
          title: 'Without Conscience',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Without%20Conscience/";
            },},{id: "books-stasiland",
          title: 'Stasiland',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Stasiland/";
            },},{id: "books-the-sciences-of-the-artificial",
          title: 'The Sciences of the Artificial',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Sciences%20of%20the%20Artificial/";
            },},{id: "books-seven-and-a-half-lessons-about-the-brain",
          title: 'Seven and a Half Lessons About the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Seven%20and%20a%20Half%20Lessons%20About%20the%20Brain/";
            },},{id: "books-roadside-picnic",
          title: 'Roadside Picnic',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Roadside%20Picnic/";
            },},{id: "books-where-wizards-stay-up-late",
          title: 'Where Wizards Stay Up Late',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Where%20Wizards%20Stay%20Up%20Late/";
            },},{id: "books-the-book-of-why",
          title: 'The Book of Why',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Book%20of%20Why/";
            },},{id: "books-basin-and-range",
          title: 'Basin and Range',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Basin%20and%20Range/";
            },},{id: "books-the-selfish-gene",
          title: 'The Selfish Gene',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Selfish%20Gene/";
            },},{id: "books-to-engineer-is-human",
          title: 'To Engineer Is Human',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/To%20Engineer%20Is%20Human/";
            },},{id: "books-the-little-book-that-beats-the-market",
          title: 'The Little Book That Beats the Market',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Little%20Book%20That%20Beats%20the%20Market/";
            },},{id: "books-being-no-one",
          title: 'Being No One',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Being%20No%20One/";
            },},{id: "books-musicophilia",
          title: 'Musicophilia',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Musicophilia/";
            },},{id: "books-the-soul-of-a-new-machine",
          title: 'The Soul of a New Machine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Soul%20of%20a%20New%20Machine/";
            },},{id: "books-fooled-by-randomness",
          title: 'Fooled by Randomness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Fooled%20by%20Randomness/";
            },},{id: "books-the-great-cat-massacre",
          title: 'The Great Cat Massacre',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Great%20Cat%20Massacre/";
            },},{id: "books-the-information",
          title: 'The Information',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Information/";
            },},{id: "books-beyond-good-and-evil",
          title: 'Beyond Good and Evil',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Beyond%20Good%20and%20Evil/";
            },},{id: "books-accelerate",
          title: 'Accelerate',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Accelerate/";
            },},{id: "books-the-songlines",
          title: 'The Songlines',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Songlines/";
            },},{id: "books-in-search-of-memory",
          title: 'In Search of Memory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/In%20Search%20of%20Memory/";
            },},{id: "books-the-sparrow",
          title: 'The Sparrow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Sparrow/";
            },},{id: "books-stumbling-on-happiness",
          title: 'Stumbling on Happiness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Stumbling%20on%20Happiness/";
            },},{id: "books-the-glass-castle",
          title: 'The Glass Castle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Glass%20Castle/";
            },},{id: "books-the-travels-of-marco-polo",
          title: 'The Travels of Marco Polo',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Travels%20of%20Marco%20Polo/";
            },},{id: "books-jesus-39-son",
          title: 'Jesus&amp;#39; Son',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Jesus'%20Son/";
            },},{id: "books-the-society-of-mind",
          title: 'The Society of Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Society%20of%20Mind/";
            },},{id: "books-metaphors-we-live-by",
          title: 'Metaphors We Live By',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Metaphors%20We%20Live%20By/";
            },},{id: "books-running-with-scissors",
          title: 'Running with Scissors',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Running%20with%20Scissors/";
            },},{id: "books-to-kill-a-mockingbird",
          title: 'To Kill a Mockingbird',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/To%20Kill%20a%20Mockingbird/";
            },},{id: "books-the-fearless-organization",
          title: 'The Fearless Organization',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Fearless%20Organization/";
            },},{id: "books-the-annotated-turing",
          title: 'The Annotated Turing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Annotated%20Turing/";
            },},{id: "books-unweaving-the-rainbow",
          title: 'Unweaving the Rainbow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Unweaving%20the%20Rainbow/";
            },},{id: "books-homo-deus",
          title: 'Homo Deus',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Homo%20Deus/";
            },},{id: "books-computing-a-concise-history",
          title: 'Computing: A Concise History',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Computing%20A%20Concise%20History/";
            },},{id: "books-a-clockwork-orange",
          title: 'A Clockwork Orange',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Clockwork%20Orange/";
            },},{id: "books-the-professor-and-the-madman",
          title: 'The Professor and the Madman',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Professor%20and%20the%20Madman/";
            },},{id: "books-discourse-on-method-and-meditations-on-first-philosophy",
          title: 'Discourse on Method and Meditations on First Philosophy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Discourse%20on%20Method%20and%20Meditations%20on%20First%20Philosophy/";
            },},{id: "books-leviathan",
          title: 'Leviathan',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Leviathan/";
            },},{id: "books-cybernetics",
          title: 'Cybernetics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Cybernetics/";
            },},{id: "books-the-mythical-man-month",
          title: 'The Mythical Man-Month',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Mythical%20Man-Month/";
            },},{id: "books-mind-in-life",
          title: 'Mind in Life',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Mind%20in%20Life/";
            },},{id: "books-misbehaving",
          title: 'Misbehaving',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Misbehaving/";
            },},{id: "books-hackers-heroes-of-the-computer-revolution",
          title: 'Hackers: Heroes of the Computer Revolution',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Hackers%20Heroes%20of%20the%20Computer%20Revolution/";
            },},{id: "books-how-emotions-are-made",
          title: 'How Emotions Are Made',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20Emotions%20Are%20Made/";
            },},{id: "books-the-hundred-page-machine-learning-book",
          title: 'The Hundred-Page Machine Learning Book',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Hundred-Page%20Machine%20Learning%20Book/";
            },},{id: "books-the-rebel",
          title: 'The Rebel',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Rebel/";
            },},{id: "books-why-nations-fail",
          title: 'Why Nations Fail',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Why%20Nations%20Fail/";
            },},{id: "books-the-anxious-generation",
          title: 'The Anxious Generation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Anxious%20Generation/";
            },},{id: "books-complications",
          title: 'Complications',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Complications/";
            },},{id: "books-the-feeling-of-life-itself",
          title: 'The Feeling of Life Itself',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Feeling%20of%20Life%20Itself/";
            },},{id: "books-the-code-breaker",
          title: 'The Code Breaker',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Code%20Breaker/";
            },},{id: "books-the-beak-of-the-finch",
          title: 'The Beak of the Finch',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Beak%20of%20the%20Finch/";
            },},{id: "books-reality",
          title: 'Reality+',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Reality+/";
            },},{id: "books-tidy-first",
          title: 'Tidy First?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Tidy%20First/";
            },},{id: "books-the-second-machine-age",
          title: 'The Second Machine Age',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Second%20Machine%20Age/";
            },},{id: "books-waiting-for-godot",
          title: 'Waiting for Godot',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Waiting%20for%20Godot/";
            },},{id: "books-the-victorian-internet",
          title: 'The Victorian Internet',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Victorian%20Internet/";
            },},{id: "books-pnin",
          title: 'Pnin',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Pnin/";
            },},{id: "books-lean-analytics",
          title: 'Lean Analytics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Lean%20Analytics/";
            },},{id: "books-obviously-awesome",
          title: 'Obviously Awesome',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Obviously%20Awesome/";
            },},{id: "books-silent-spring",
          title: 'Silent Spring',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Silent%20Spring/";
            },},{id: "books-models-of-the-mind",
          title: 'Models of the Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Models%20of%20the%20Mind/";
            },},{id: "books-phantoms-in-the-brain",
          title: 'Phantoms in the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Phantoms%20in%20the%20Brain/";
            },},{id: "books-pedro-paramo",
          title: 'Pedro Paramo',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Pedro%20Paramo/";
            },},{id: "books-emergence",
          title: 'Emergence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Emergence/";
            },},{id: "books-an-introduction-to-statistical-learning",
          title: 'An Introduction to Statistical Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/An%20Introduction%20to%20Statistical%20Learning/";
            },},{id: "books-learned-optimism",
          title: 'Learned Optimism',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Learned%20Optimism/";
            },},{id: "books-rebooting-ai",
          title: 'Rebooting AI',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Rebooting%20AI/";
            },},{id: "books-blood-in-the-machine",
          title: 'Blood in the Machine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Blood%20in%20the%20Machine/";
            },},{id: "books-sprint",
          title: 'Sprint',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Sprint/";
            },},{id: "books-product-leadership",
          title: 'Product Leadership',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Product%20Leadership/";
            },},{id: "books-punished-by-rewards",
          title: 'Punished by Rewards',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Punished%20by%20Rewards/";
            },},{id: "books-the-brain-that-changes-itself",
          title: 'The Brain That Changes Itself',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Brain%20That%20Changes%20Itself/";
            },},{id: "books-a-farewell-to-arms",
          title: 'A Farewell to Arms',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Farewell%20to%20Arms/";
            },},{id: "books-the-road-less-traveled",
          title: 'The Road Less Traveled',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Road%20Less%20Traveled/";
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
            },},{id: "books-the-wretched-of-the-earth",
          title: 'The Wretched of the Earth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Wretched%20of%20the%20Earth/";
            },},{id: "books-the-idea-of-the-brain",
          title: 'The Idea of the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Idea%20of%20the%20Brain/";
            },},{id: "books-climbing-mount-improbable",
          title: 'Climbing Mount Improbable',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Climbing%20Mount%20Improbable/";
            },},{id: "books-the-design-of-everyday-things",
          title: 'The Design of Everyday Things',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Design%20of%20Everyday%20Things/";
            },},{id: "books-the-lean-product-playbook",
          title: 'The Lean Product Playbook',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Lean%20Product%20Playbook/";
            },},{id: "books-the-embodied-mind",
          title: 'The Embodied Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Embodied%20Mind/";
            },},{id: "books-who-moved-my-cheese",
          title: 'Who Moved My Cheese?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Who%20Moved%20My%20Cheese/";
            },},{id: "books-fundamentals-of-data-engineering",
          title: 'Fundamentals of Data Engineering',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Fundamentals%20of%20Data%20Engineering/";
            },},{id: "books-the-feeling-of-what-happens",
          title: 'The Feeling of What Happens',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Feeling%20of%20What%20Happens/";
            },},{id: "books-the-martian-chronicles",
          title: 'The Martian Chronicles',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Martian%20Chronicles/";
            },},{id: "books-the-tell-tale-brain",
          title: 'The Tell-Tale Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Tell-Tale%20Brain/";
            },},{id: "books-as-i-lay-dying",
          title: 'As I Lay Dying',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/As%20I%20Lay%20Dying/";
            },},{id: "books-in-cold-blood",
          title: 'In Cold Blood',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/In%20Cold%20Blood/";
            },},{id: "books-hands-on-machine-learning-with-scikit-learn-keras-and-tensorflow",
          title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Hands-On%20Machine%20Learning%20with%20Scikit-Learn,%20Keras,%20and%20TensorFlow/";
            },},{id: "books-the-man-who-mistook-his-wife-for-a-hat",
          title: 'The Man Who Mistook His Wife for a Hat',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Man%20Who%20Mistook%20His%20Wife%20for%20a%20Hat/";
            },},{id: "books-weapons-of-math-destruction",
          title: 'Weapons of Math Destruction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Weapons%20of%20Math%20Destruction/";
            },},{id: "books-speak-memory",
          title: 'Speak, Memory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Speak,%20Memory/";
            },},{id: "books-abundance",
          title: 'Abundance',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Abundance/";
            },},{id: "books-the-mind-39-s-i",
          title: 'The Mind&amp;#39;s I',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Mind's%20I/";
            },},{id: "books-why-we-sleep",
          title: 'Why We Sleep',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Why%20We%20Sleep/";
            },},{id: "books-how-the-mind-works",
          title: 'How the Mind Works',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20the%20Mind%20Works/";
            },},{id: "books-a-general-theory-of-love",
          title: 'A General Theory of Love',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20General%20Theory%20of%20Love/";
            },},{id: "books-why-zebras-don-39-t-get-ulcers",
          title: 'Why Zebras Don&amp;#39;t Get Ulcers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Why%20Zebras%20Don't%20Get%20Ulcers/";
            },},{id: "books-looking-for-spinoza",
          title: 'Looking for Spinoza',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Looking%20for%20Spinoza/";
            },},{id: "books-make-it-stick",
          title: 'Make It Stick',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Make%20It%20Stick/";
            },},{id: "books-the-goal",
          title: 'The Goal',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Goal/";
            },},{id: "books-the-death-and-life-of-great-american-cities",
          title: 'The Death and Life of Great American Cities',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Death%20and%20Life%20of%20Great%20American%20Cities/";
            },},{id: "books-the-almanack-of-naval-ravikant",
          title: 'The Almanack of Naval Ravikant',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Almanack%20of%20Naval%20Ravikant/";
            },},{id: "books-zero-the-biography-of-a-dangerous-idea",
          title: 'Zero: The Biography of a Dangerous Idea',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Zero%20The%20Biography%20of%20a%20Dangerous%20Idea/";
            },},{id: "books-wonderful-life",
          title: 'Wonderful Life',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Wonderful%20Life/";
            },},{id: "books-the-language-instinct",
          title: 'The Language Instinct',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Language%20Instinct/";
            },},{id: "books-prompt-engineering-for-llms",
          title: 'Prompt Engineering for LLMs',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Prompt%20Engineering%20for%20LLMs/";
            },},{id: "books-a-theory-of-justice",
          title: 'A Theory of Justice',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Theory%20of%20Justice/";
            },},{id: "books-save-the-cat",
          title: 'Save the Cat!',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Save%20the%20Cat!/";
            },},{id: "books-slaughterhouse-five",
          title: 'Slaughterhouse-Five',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Slaughterhouse-Five/";
            },},{id: "books-antifragile",
          title: 'Antifragile',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Antifragile/";
            },},{id: "books-deep-work",
          title: 'Deep Work',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Deep%20Work/";
            },},{id: "books-blue-ocean-strategy",
          title: 'Blue Ocean Strategy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Blue%20Ocean%20Strategy/";
            },},{id: "books-good-to-great",
          title: 'Good to Great',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Good%20to%20Great/";
            },},{id: "books-neverwhere",
          title: 'Neverwhere',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Neverwhere/";
            },},{id: "books-competitive-strategy",
          title: 'Competitive Strategy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Competitive%20Strategy/";
            },},{id: "books-the-lives-of-a-cell",
          title: 'The Lives of a Cell',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Lives%20of%20a%20Cell/";
            },},{id: "books-critique-of-pure-reason",
          title: 'Critique of Pure Reason',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Critique%20of%20Pure%20Reason/";
            },},{id: "books-the-art-of-fiction",
          title: 'The Art of Fiction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Art%20of%20Fiction/";
            },},{id: "books-stolen-focus",
          title: 'Stolen Focus',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Stolen%20Focus/";
            },},{id: "books-man-39-s-search-for-meaning",
          title: 'Man&amp;#39;s Search for Meaning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Man's%20Search%20for%20Meaning/";
            },},{id: "books-a-scanner-darkly",
          title: 'A Scanner Darkly',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Scanner%20Darkly/";
            },},{id: "books-influence",
          title: 'Influence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Influence/";
            },},{id: "books-meditations",
          title: 'Meditations',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Meditations/";
            },},{id: "books-more-everything-forever",
          title: 'More Everything Forever',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/More%20Everything%20Forever/";
            },},{id: "books-justice-what-39-s-the-right-thing-to-do",
          title: 'Justice: What&amp;#39;s the Right Thing to Do?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Justice%20What's%20the%20Right%20Thing%20to%20Do/";
            },},{id: "books-moral-tribes",
          title: 'Moral Tribes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Moral%20Tribes/";
            },},{id: "books-isaac-39-s-storm",
          title: 'Isaac&amp;#39;s Storm',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Isaac's%20Storm/";
            },},{id: "books-if-anyone-builds-it-everyone-dies",
          title: 'If Anyone Builds It, Everyone Dies',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/If%20Anyone%20Builds%20It,%20Everyone%20Dies/";
            },},{id: "books-never-split-the-difference",
          title: 'Never Split the Difference',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Never%20Split%20the%20Difference/";
            },},{id: "books-principles",
          title: 'Principles',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Principles/";
            },},{id: "books-nicomachean-ethics",
          title: 'Nicomachean Ethics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Nicomachean%20Ethics/";
            },},{id: "books-reasons-and-persons",
          title: 'Reasons and Persons',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Reasons%20and%20Persons/";
            },},{id: "books-the-man-with-a-shattered-world",
          title: 'The Man with a Shattered World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Man%20with%20a%20Shattered%20World/";
            },},{id: "books-what-does-it-all-mean",
          title: 'What Does It All Mean?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/What%20Does%20It%20All%20Mean/";
            },},{id: "books-only-the-paranoid-survive",
          title: 'Only the Paranoid Survive',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Only%20the%20Paranoid%20Survive/";
            },},{id: "books-purple-hibiscus",
          title: 'Purple Hibiscus',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Purple%20Hibiscus/";
            },},{id: "books-the-black-swan",
          title: 'The Black Swan',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Black%20Swan/";
            },},{id: "books-the-illusion-of-conscious-will",
          title: 'The Illusion of Conscious Will',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Illusion%20of%20Conscious%20Will/";
            },},{id: "books-the-conscious-mind",
          title: 'The Conscious Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Conscious%20Mind/";
            },},{id: "books-sources-of-power",
          title: 'Sources of Power',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Sources%20of%20Power/";
            },},{id: "books-the-beginning-of-infinity",
          title: 'The Beginning of Infinity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Beginning%20of%20Infinity/";
            },},{id: "books-the-logic-of-scientific-discovery",
          title: 'The Logic of Scientific Discovery',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Logic%20of%20Scientific%20Discovery/";
            },},{id: "books-seeing-like-a-state",
          title: 'Seeing Like a State',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Seeing%20Like%20a%20State/";
            },},{id: "books-i-39-m-glad-my-mom-died",
          title: 'I&amp;#39;m Glad My Mom Died',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/I'm%20Glad%20My%20Mom%20Died/";
            },},{id: "books-the-structure-of-scientific-revolutions",
          title: 'The Structure of Scientific Revolutions',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Structure%20of%20Scientific%20Revolutions/";
            },},{id: "books-the-winner-39-s-curse",
          title: 'The Winner&amp;#39;s Curse',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Winner's%20Curse/";
            },},{id: "books-the-psychology-of-money",
          title: 'The Psychology of Money',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Psychology%20of%20Money/";
            },},{id: "books-thinking-in-bets",
          title: 'Thinking in Bets',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Thinking%20in%20Bets/";
            },},{id: "books-dispatches",
          title: 'Dispatches',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Dispatches/";
            },},{id: "books-the-republic",
          title: 'The Republic',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Republic/";
            },},{id: "books-an-elegant-puzzle",
          title: 'An Elegant Puzzle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/An%20Elegant%20Puzzle/";
            },},{id: "books-spin-selling",
          title: 'SPIN Selling',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/SPIN%20Selling/";
            },},{id: "books-the-righteous-mind",
          title: 'The Righteous Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Righteous%20Mind/";
            },},{id: "books-genghis-khan-and-the-making-of-the-modern-world",
          title: 'Genghis Khan and the Making of the Modern World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Genghis%20Khan%20and%20the%20Making%20of%20the%20Modern%20World/";
            },},{id: "books-noise",
          title: 'Noise',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Noise/";
            },},{id: "books-persepolis",
          title: 'Persepolis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Persepolis/";
            },},{id: "books-nudge",
          title: 'Nudge',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Nudge/";
            },},{id: "books-the-moral-animal",
          title: 'The Moral Animal',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Moral%20Animal/";
            },},{id: "books-predictably-irrational",
          title: 'Predictably Irrational',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Predictably%20Irrational/";
            },},{id: "books-fahrenheit-451",
          title: 'Fahrenheit 451',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Fahrenheit%20451/";
            },},{id: "books-designing-data-intensive-applications",
          title: 'Designing Data-Intensive Applications',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Designing%20Data-Intensive%20Applications/";
            },},{id: "books-the-making-of-a-manager",
          title: 'The Making of a Manager',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Making%20of%20a%20Manager/";
            },},{id: "books-empowered",
          title: 'EMPOWERED',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/EMPOWERED/";
            },},{id: "books-the-old-man-and-the-sea",
          title: 'The Old Man and the Sea',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Old%20Man%20and%20the%20Sea/";
            },},{id: "books-co-intelligence",
          title: 'Co-Intelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Co-Intelligence/";
            },},{id: "books-elon-musk",
          title: 'Elon Musk',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Elon%20Musk/";
            },},{id: "books-the-dispossessed",
          title: 'The Dispossessed',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Dispossessed/";
            },},{id: "books-crossing-the-chasm",
          title: 'Crossing the Chasm',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Crossing%20the%20Chasm/";
            },},{id: "books-good-strategy-bad-strategy",
          title: 'Good Strategy Bad Strategy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Good%20Strategy%20Bad%20Strategy/";
            },},{id: "books-the-millionaire-next-door",
          title: 'The Millionaire Next Door',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Millionaire%20Next%20Door/";
            },},{id: "books-deep-learning",
          title: 'Deep Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Deep%20Learning/";
            },},{id: "books-the-man-in-the-high-castle",
          title: 'The Man in the High Castle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Man%20in%20the%20High%20Castle/";
            },},{id: "books-blindness",
          title: 'Blindness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Blindness/";
            },},{id: "books-hooked",
          title: 'Hooked',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Hooked/";
            },},{id: "books-measure-what-matters",
          title: 'Measure What Matters',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Measure%20What%20Matters/";
            },},{id: "books-against-method",
          title: 'Against Method',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Against%20Method/";
            },},{id: "books-how-to-build-a-brain-a-neural-architecture-for-biological-cognition",
          title: 'How to Build a Brain - A Neural Architecture for Biological Cognition',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20to%20Build%20a%20Brain/";
            },},{id: "books-on-intelligence",
          title: 'On Intelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/On%20Intelligence/";
            },},{id: "books-a-moveable-feast",
          title: 'A Moveable Feast',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Moveable%20Feast/";
            },},{id: "books-human-compatible",
          title: 'Human Compatible',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Human%20Compatible/";
            },},{id: "books-high-output-management",
          title: 'High Output Management',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/High%20Output%20Management/";
            },},{id: "books-life-3-0",
          title: 'Life 3.0',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Life%203.0/";
            },},{id: "books-rendezvous-with-rama",
          title: 'Rendezvous with Rama',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Rendezvous%20with%20Rama/";
            },},{id: "books-principles-of-neural-science",
          title: 'Principles of Neural Science',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Principles%20of%20Neural%20Science/";
            },},{id: "books-superintelligence",
          title: 'Superintelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Superintelligence/";
            },},{id: "books-the-stranger",
          title: 'The Stranger',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Stranger/";
            },},{id: "books-the-drama-of-the-gifted-child",
          title: 'The Drama of the Gifted Child',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Drama%20of%20the%20Gifted%20Child/";
            },},{id: "books-rhythms-of-the-brain",
          title: 'Rhythms of the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Rhythms%20of%20the%20Brain/";
            },},{id: "books-the-cuckoo-39-s-egg",
          title: 'The Cuckoo&amp;#39;s Egg',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Cuckoo's%20Egg/";
            },},{id: "books-pattern-recognition-and-machine-learning",
          title: 'Pattern Recognition and Machine Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Pattern%20Recognition%20and%20Machine%20Learning/";
            },},{id: "books-shoe-dog",
          title: 'Shoe Dog',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Shoe%20Dog/";
            },},{id: "books-technopoly",
          title: 'Technopoly',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Technopoly/";
            },},{id: "books-playing-to-win",
          title: 'Playing to Win',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Playing%20to%20Win/";
            },},{id: "books-steve-jobs",
          title: 'Steve Jobs',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Steve%20Jobs/";
            },},{id: "books-the-lean-startup",
          title: 'The Lean Startup',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Lean%20Startup/";
            },},{id: "books-the-return-of-martin-guerre",
          title: 'The Return of Martin Guerre',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Return%20of%20Martin%20Guerre/";
            },},{id: "books-slow-productivity",
          title: 'Slow Productivity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Slow%20Productivity/";
            },},{id: "books-the-hard-thing-about-hard-things",
          title: 'The Hard Thing About Hard Things',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Hard%20Thing%20About%20Hard%20Things/";
            },},{id: "books-transformed",
          title: 'TRANSFORMED',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/TRANSFORMED/";
            },},{id: "books-the-clash-of-civilizations-and-the-remaking-of-world-order",
          title: 'The Clash of Civilizations and the Remaking of World Order',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Clash%20of%20Civilizations%20and%20the%20Remaking%20of%20World%20Order/";
            },},{id: "books-the-innovator-39-s-dilemma",
          title: 'The Innovator&amp;#39;s Dilemma',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Innovator's%20Dilemma/";
            },},{id: "books-the-alignment-problem",
          title: 'The Alignment Problem',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Alignment%20Problem/";
            },},{id: "books-the-innovators",
          title: 'The Innovators',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Innovators/";
            },},{id: "books-thinking-with-type",
          title: 'Thinking with Type',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Thinking%20with%20Type/";
            },},{id: "books-the-emotion-machine",
          title: 'The Emotion Machine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Emotion%20Machine/";
            },},{id: "books-what-the-buddha-taught",
          title: 'What the Buddha Taught',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/What%20the%20Buddha%20Taught/";
            },},{id: "books-the-phoenix-project",
          title: 'The Phoenix Project',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Phoenix%20Project/";
            },},{id: "books-joel-on-software",
          title: 'Joel on Software',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Joel%20on%20Software/";
            },},{id: "books-the-mom-test",
          title: 'The Mom Test',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Mom%20Test/";
            },},{id: "books-theoretical-neuroscience",
          title: 'Theoretical Neuroscience',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Theoretical%20Neuroscience/";
            },},{id: "books-synaptic-self",
          title: 'Synaptic Self',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Synaptic%20Self/";
            },},{id: "books-the-mountain-is-you",
          title: 'The Mountain is You',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Mountain%20Is%20You/";
            },},{id: "books-thinking-fast-and-slow",
          title: 'Thinking, Fast and Slow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Thinking,%20Fast%20and%20Slow/";
            },},{id: "books-the-art-of-loving",
          title: 'The Art of Loving',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Art%20of%20Loving/";
            },},{id: "books-the-nvidia-way-jensen-huang-and-the-making-of-a-tech-giant",
          title: 'The Nvidia Way - Jensen Huang and the Making of a Tech Giant...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Nvidia%20Way/";
            },},{id: "books-a-thousand-brains",
          title: 'A Thousand Brains',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/A%20Thousand%20Brains/";
            },},{id: "books-weaving-the-web",
          title: 'Weaving the Web',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Weaving%20the%20Web/";
            },},{id: "books-life-on-a-young-planet",
          title: 'Life on a Young Planet',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Life%20on%20a%20Young%20Planet/";
            },},{id: "books-gödel-escher-bach",
          title: 'Gödel, Escher, Bach',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/G%C3%B6del,%20Escher,%20Bach/";
            },},{id: "books-incognito",
          title: 'Incognito',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Incognito/";
            },},{id: "books-machine-learning-q-and-ai",
          title: 'Machine Learning Q and AI',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Machine%20Learning%20Q%20and%20AI/";
            },},{id: "books-the-view-from-nowhere",
          title: 'The View from Nowhere',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20View%20from%20Nowhere/";
            },},{id: "books-surfing-uncertainty",
          title: 'Surfing Uncertainty',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Surfing%20Uncertainty/";
            },},{id: "books-artificial-intelligence-a-modern-approach",
          title: 'Artificial Intelligence: A Modern Approach',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Artificial%20Intelligence%20A%20Modern%20Approach/";
            },},{id: "books-the-art-of-deception",
          title: 'The Art of Deception',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Art%20of%20Deception/";
            },},{id: "books-show-stopper",
          title: 'Show Stopper!',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Show%20Stopper!/";
            },},{id: "books-the-organized-mind",
          title: 'The Organized Mind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Organized%20Mind/";
            },},{id: "books-power-and-prediction",
          title: 'Power and Prediction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Power%20and%20Prediction/";
            },},{id: "books-on-photography",
          title: 'On Photography',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/On%20Photography/";
            },},{id: "books-steering-the-craft",
          title: 'Steering the Craft',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Steering%20the%20Craft/";
            },},{id: "books-prediction-machines",
          title: 'Prediction Machines',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Prediction%20Machines/";
            },},{id: "books-descartes-39-error",
          title: 'Descartes&amp;#39; Error',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Descartes'%20Error/";
            },},{id: "books-the-giver",
          title: 'The Giver',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Giver/";
            },},{id: "books-the-master-algorithm",
          title: 'The Master Algorithm',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Master%20Algorithm/";
            },},{id: "books-on-becoming-a-person",
          title: 'On Becoming a Person',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/On%20Becoming%20a%20Person/";
            },},{id: "books-other-minds",
          title: 'Other Minds',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Other%20Minds/";
            },},{id: "books-being-you",
          title: 'Being You',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Being%20You/";
            },},{id: "books-girl-with-a-pearl-earring",
          title: 'Girl with a Pearl Earring',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Girl%20with%20a%20Pearl%20Earring/";
            },},{id: "books-ai-engineering",
          title: 'AI Engineering',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/AI%20Engineering/";
            },},{id: "books-the-end-of-nature",
          title: 'The End of Nature',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20End%20of%20Nature/";
            },},{id: "books-build-a-large-language-model-from-scratch",
          title: 'Build a Large Language Model (From Scratch)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Build%20a%20Large%20Language%20Model%20(From%20Scratch)/";
            },},{id: "books-artificial-intelligence-a-guide-for-thinking-humans",
          title: 'Artificial Intelligence: A Guide for Thinking Humans',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Artificial%20Intelligence%20A%20Guide%20for%20Thinking%20Humans/";
            },},{id: "books-getting-things-done",
          title: 'Getting Things Done',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Getting%20Things%20Done/";
            },},{id: "books-the-master-and-his-emissary",
          title: 'The Master and His Emissary',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Master%20and%20His%20Emissary/";
            },},{id: "books-behave",
          title: 'Behave',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Behave/";
            },},{id: "books-moneyball",
          title: 'Moneyball',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Moneyball/";
            },},{id: "books-working-backwards",
          title: 'Working Backwards',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Working%20Backwards/";
            },},{id: "books-the-staff-engineer-39-s-path",
          title: 'The Staff Engineer&amp;#39;s Path',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Staff%20Engineer's%20Path/";
            },},{id: "books-consciousness-and-the-brain",
          title: 'Consciousness and the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Consciousness%20and%20the%20Brain/";
            },},{id: "books-don-39-t-make-me-think",
          title: 'Don&amp;#39;t Make Me Think',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Don't%20Make%20Me%20Think/";
            },},{id: "books-introduction-to-algorithms",
          title: 'Introduction to Algorithms',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Introduction%20to%20Algorithms/";
            },},{id: "books-strangers-on-a-train",
          title: 'Strangers on a Train',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Strangers%20on%20a%20Train/";
            },},{id: "books-continuous-discovery-habits",
          title: 'Continuous Discovery Habits',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Continuous%20Discovery%20Habits/";
            },},{id: "books-thus-spoke-zarathustra",
          title: 'Thus Spoke Zarathustra',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Thus%20Spoke%20Zarathustra/";
            },},{id: "books-competing-against-luck",
          title: 'Competing Against Luck',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Competing%20Against%20Luck/";
            },},{id: "books-cracking-the-pm-interview",
          title: 'Cracking the PM Interview',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Cracking%20the%20PM%20Interview/";
            },},{id: "books-feeling-good",
          title: 'Feeling Good',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Feeling%20Good/";
            },},{id: "books-consciousness-explained",
          title: 'Consciousness Explained',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Consciousness%20Explained/";
            },},{id: "books-designing-machine-learning-systems",
          title: 'Designing Machine Learning Systems',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Designing%20Machine%20Learning%20Systems/";
            },},{id: "books-the-power-of-babel",
          title: 'The Power of Babel',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Power%20of%20Babel/";
            },},{id: "books-hands-on-large-language-models",
          title: 'Hands-On Large Language Models',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Hands-On%20Large%20Language%20Models/";
            },},{id: "books-don-39-t-think-of-an-elephant",
          title: 'Don&amp;#39;t Think of an Elephant!',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Don't%20Think%20of%20an%20Elephant!/";
            },},{id: "books-escaping-the-build-trap",
          title: 'Escaping the Build Trap',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Escaping%20the%20Build%20Trap/";
            },},{id: "books-how-we-learn",
          title: 'How We Learn',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/How%20We%20Learn/";
            },},{id: "books-the-practice-of-management",
          title: 'The Practice of Management',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Practice%20of%20Management/";
            },},{id: "books-from-bacteria-to-bach-and-back",
          title: 'From Bacteria to Bach and Back',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/From%20Bacteria%20to%20Bach%20and%20Back/";
            },},{id: "books-girl-interrupted",
          title: 'Girl, Interrupted',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Girl,%20Interrupted/";
            },},{id: "books-i-am-a-strange-loop",
          title: 'I Am a Strange Loop',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/I%20Am%20a%20Strange%20Loop/";
            },},{id: "books-genius-makers",
          title: 'Genius Makers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Genius%20Makers/";
            },},{id: "books-intuition-pumps-and-other-tools-for-thinking",
          title: 'Intuition Pumps and Other Tools for Thinking',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Intuition%20Pumps%20and%20Other%20Tools%20for%20Thinking/";
            },},{id: "books-the-singularity-is-nearer",
          title: 'The Singularity Is Nearer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/The%20Singularity%20Is%20Nearer/";
            },},{id: "books-inspired-how-to-create-tech-products-customers-love",
          title: 'INSPIRED: How to Create Tech Products Customers Love',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/books/Inspired/";
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
            },},{id: "projects-goldsmith-ai-design-plus-a-marketplace-for-custom-jewelry",
          title: 'Goldsmith: AI design plus a marketplace for custom jewelry',
          description: "An AI design tool and a marketplace for custom jewelry, taken from concept to an investor pitch and a launch in 12 weeks.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/Goldsmith%20Case%20Study/";
            },},{id: "projects-goldsmith",
          title: 'Goldsmith',
          description: "A concept for an AI jewelry design tool and a marketplace where buyers compare quotes from manufacturers.",
          section: "Projects",handler: () => {
              window.location.href = "/Edward_Profio_Portfolio_Site/projects/Goldsmith/";
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
          window.open("mailto:%65%64%77%61%72%64@%70%72%6F%66%69%6F.%75%73", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/profio1997", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/profio", "_blank");
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

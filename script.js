/* =========================================================
   EDIT HERE:
   Replace video links, image paths, descriptions, roles and links.
   Put your real images into /assets and update the filenames below.
   ========================================================= */

   if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  
  window.onload = function () {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

const SITE = {
  name: "caoxuefan",
  email: "mailto:shtuiisss@gmail.com",
  linkedin: "https://www.linkedin.com/in/xuefan-cao-66933b378/",
  youtube: "https://www.youtube.com/",
  instagram: "https://www.instagram.com/shtuiisss/",
  cv: "assets/cv.pdf",
  showreelVideo: "assets/showreel.mp4"
};

let currentLang = localStorage.getItem("siteLang") || "en";

const UI_TEXT = {
  en: {
    scroll: "Scroll to explore",
    roleStrip: "2D Animator / Visual development artist / Game artist",
    viewProject: "View Project →",
    about: "About",
    artistProfile: "Artist <em>Profile</em>",
    skills: "Skills",
    software: "Software",
    downloadCV: "Download CV ↓",
    role: "Role",
    tools: "Tools",
    backHome: "← Back to Home",
    ludumDare: "Ludum Dare page",
    language: "Language",
    footerEyebrow: "Contact",
    footerTitle: "Get in <em>touch</em>",
    footerNote: "Open to animation, visual development, storyboarding and game art opportunities.",
    footerEmail: "Email",
    footerLinkedIn: "LinkedIn",
    footerYouTube: "YouTube",
    footerInstagram: "Instagram"
  },
  zh: {
    scroll: "向下滚动浏览",
    roleStrip: "二维动画师 / 视觉开发艺术家 / 游戏美术",
    viewProject: "查看项目 →",
    about: "关于我",
    artistProfile: "艺术家<em>简介</em>",
    skills: "技能",
    software: "软件",
    downloadCV: "下载简历 ↓",
    role: "职责",
    tools: "工具",
    backHome: "← 返回首页",
    ludumDare: "Ludum Dare 页面",
    language: "语言",
    footerEyebrow: "联系",
    footerTitle: "联系<em>我</em>",
    footerNote: "欢迎联系我进行动画、视觉开发、分镜、游戏美术及相关创作合作。",
    footerEmail: "邮箱",
    footerLinkedIn: "领英",
    footerYouTube: "YouTube",
    footerInstagram: "Instagram"
  }
};

const ABOUT_TEXT = {
  en: {
    p1: "I am a 2D animator and emerging visual artist working across experimental animation, visual development, game art and frame-by-frame movement. My practice focuses on colour, rhythm, organic transformation and abstract visual storytelling.",
    p2: "I am interested in how emotion, sensation and atmosphere can be translated into moving images. Through animation, illustration and interactive projects, I explore visual language that feels vivid, expressive and personal.",
    skills: ["2D animation", "3D modeling", "Character design", "Visual development", "Storyboarding", "Game art"],
    software: ["Toon Boom Harmony", "After Effects", "Photoshop", "CSP", "Premiere Pro", "Blender", "ZBrush", "Illustrator", "TouchDesigner", "Procreate Dreams"]
  },
  zh: {
    p1: "我是一名二维动画师和新兴视觉艺术家，创作方向涵盖实验动画、视觉开发、游戏美术和逐帧动画。我的实践关注色彩、节奏、有机形变以及抽象视觉叙事。",
    p2: "我感兴趣的是情绪、感知和氛围如何被转化为动态影像。通过动画、插画和交互项目，我探索一种鲜明、富有表现力并带有个人感受的视觉语言。",
    skills: ["二维动画", "三维建模", "角色设计", "视觉开发", "分镜设计", "游戏美术"],
    software: ["Toon Boom Harmony", "After Effects", "Photoshop", "CSP", "Premiere Pro", "Blender", "ZBrush", "Illustrator", "TouchDesigner", "Procreate Dreams"]
  }
};

const CATEGORY_ZH = {
  animation: { title: "动画", emphasis: "" },
  "game-interactivity": { title: "游戏与", emphasis: "交互" },
  "pre-production": { title: "前期制作", emphasis: "" },
  illustration: { title: "插画", emphasis: "" }
};

const CAPTION_ZH = {
  "Pre-production": "前期制作",
  "Visual development": "视觉开发",
  "Storyboard": "分镜",
  "Character design": "角色设计",
  "Game design and Character design": "游戏设计与角色设计",
  " 3D Model and space ship design and UI design": "三维模型、飞船设计与界面设计",
  "Character design and concept art": "角色设计与概念美术",
  "Style test and visual development": "风格测试与视觉开发",
  "Final concept presentation": "最终概念展示",
  "illustration": "插画",
  "manga": "漫画"
};

function t(key) {
  return UI_TEXT[currentLang]?.[key] || UI_TEXT.en[key] || key;
}

function getProjectContent(project) {
  return currentLang === "zh" && project.zh ? { ...project, ...project.zh } : project;
}

function translateCaption(caption) {
  return currentLang === "zh" ? (CAPTION_ZH[caption] || caption || "") : (caption || "");
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("siteLang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  router();
  updateLanguageButtons();
  updateFooterText();
}

function updateLanguageButtons() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function addLanguageSwitch() {
  if (document.querySelector(".language-switch")) return;

  const langSwitch = document.createElement("div");
  langSwitch.className = "language-switch";
  langSwitch.setAttribute("aria-label", t("language"));

  langSwitch.innerHTML = `
    <button class="lang-btn" data-lang="en" type="button">EN</button>
    <button class="lang-btn" data-lang="zh" type="button">中文</button>
  `;

  document.body.appendChild(langSwitch);

  langSwitch.addEventListener("click", e => {
    const button = e.target.closest(".lang-btn");
    if (button) setLanguage(button.dataset.lang);
  });

  updateLanguageButtons();
}

function updateFooterText() {
  const footer = document.querySelector(".contact-footer");
  if (!footer) return;

  const eyebrow = footer.querySelector(".eyebrow");
  const title = footer.querySelector("h2");
  const note = footer.querySelector(".footer-note");

  if (eyebrow) eyebrow.textContent = t("footerEyebrow");
  if (title) title.innerHTML = t("footerTitle");
  if (note) note.textContent = t("footerNote");

  const buttons = footer.querySelectorAll(".contact-button");

  buttons.forEach(button => {
    const text = button.textContent.toLowerCase();

    if (text.includes("email")) {
      button.innerHTML = `<span>✉</span>${t("footerEmail")}`;
    } else if (text.includes("linkedin")) {
      button.innerHTML = `<span>in</span>${t("footerLinkedIn")}`;
    } else if (text.includes("youtube")) {
      button.innerHTML = `<span>▶</span>${t("footerYouTube")}`;
    } else if (text.includes("instagram")) {
      button.innerHTML = `<span>◎</span>${t("footerInstagram")}`;
    }
  });
}

const projects = [
  {
    slug: "look-at-me",
    title: "Look At Me",
    category: "animation",
    chapter: "CHAPTER I",
    label: "Abstract Animation",
    kind: "Personal Project",
    role: "Director / 2D Animator / Visual Development Artist",
    tools: "Toon Boom Harmony / After Effects / Photoshop / Premiere Pro",
    cover: "assets/posterr.jpg",
    videoType: "youtube",
    video: "https://www.youtube.com/embed/TMxLd-NXAgg?si=boXXR17mj-UtGaKp",
    short: "A frame-by-frame experimental animation exploring temptation, transformation, colour and abstract emotional rhythm.",
    description: [
      "Look At Me is a 2D frame-by-frame experimental animation that uses geometric transformation and vivid colour contrast to explore temptation, self-awareness, and emotional change. The project begins with a restrained grey square and gradually develops into a strange flower-like form through visual rhythm, movement and colour.",
      "The main challenge of this project was to build emotion without relying on conventional character acting. I used shape language, timing, colour progression and compositional contrast to create a sensory journey from restraint to attraction and transformation."
    ],
    images: Array.from({ length: 18 }, (_, i) => ({
      src: `assets/look-at-me/${i + 1}.jpg`,
      thumb: `assets/look-at-me-thumbs/${i + 1}.jpg`,
      caption: "Pre-production"
    })),

    afterGallery: [
      "I developed the film from concept to final compositing, including storyboarding, visual development, frame-by-frame animation, and post-production. Using Toon Boom Harmony and Adobe After Effects, I focused on shape transformation, shot continuity, pacing, and colour contrast to build a stronger sense of tension and visual rhythm. I also explored how abstract forms could function as emotional language rather than simple design elements.",
      "The final outcome is a concept-driven experimental short that reflects my strengths in 2D animation, visual storytelling, and abstract motion design. This project strengthened my skills in animation production, compositing, and pre-production planning, while showing how symbolic ideas can be translated into a bold and expressive animated form."
    ],
  },
  {
    slug: "flare",
    title: "Flare",
    category: "animation",
    chapter: "CHAPTER I",
    label: "Abstract Animation",
    kind: "Personal Project",
    role: "Director / Designer / 2D Animator",
    tools: "After Effects / Photoshop / Toon Boom Harmony",
    cover: "assets/poster.jpg",
    videoType: "youtube",
    video: "https://www.youtube.com/embed/Ov-bBEXEGHQ?si=qVsAhNoSJcYkmpyZ",
    short: "An abstract graphic animation about the tension between flora, urban structures and rhythmic visual transformation.",
    description: [
      "Flare explores the relationship between organic flora and urban development through abstract graphic movement. Natural forms are translated into soft, colourful and rounded shapes, while urban structures are expressed through sharper, colder and more disruptive motion.",
      "The project focuses on rhythm, directional flow, visual contrast and layered composition, using abstraction to express the sensory conflict between living nature and constructed space."
    ],
      images: Array.from({ length: 6 }, (_, i) => ({
        src: `assets/flare/${i + 1}.jpg`,
        thumb: `assets/flare-thumbs/${i + 1}.jpg`,
        caption: "Visual development"
      })),

      afterGallery: [
        "The main challenge of this project was to build a visual language that could communicate the conflict between organic life and urban pressure without relying on literal depiction. I wanted the work to remain abstract while still carrying a clear sense of contrast, growth, and structural tension.",
        "I developed the project through concept planning, compositional experimentation, and frame-by-frame production. I focused on the interaction between organic and geometric forms, the continuity of motion across shots, and the use of transitions to create a flowing visual structure. I also refined the pacing and colour relationships to strengthen the unity of the film and support the central contrast between softness and pressure.",
        "The final work demonstrates my interest in abstract animation as a method of visual interpretation rather than direct representation. This project strengthened my skills in composition, motion continuity, and visual development, while also showing how concept-led thinking can be applied to both animation and pre-production design."
      ],
      
  },
  {
    slug: "meet-cute",
    title: "Meet Cute",
    category: "animation",
    chapter: "CHAPTER I",
    label: "2D Animation",
    kind: "Collaborative Project",
    role: "Storyboard Artist / Animatic Artist / Character Designer / 2D Animator / Acting Designer",
    tools: "Adobe Animate / After Effects / Photoshop / CapCut",
    cover: "assets/lunahazel.jpg",
    videoType: "youtube",
    video: "https://www.youtube.com/embed/LYjflzzkvb8?si=c3cO7OU7jsrlqK0p",
    short: "A collaborative 2D animated short about companionship, emotional attachment and loss between a man and his cat.",
    description: [
      "Meet Cute is a collaborative 2D animated short about the emotional relationship between a man and his cat, focusing on companionship, attachment and loss. The project transforms a broad theme about pets and humans into a short film with clear emotional progression.",
      "My role covered storyboard, animatic planning, character design, 2D animation and acting design. I focused on small everyday gestures to build character emotion and improve the clarity of the story."
    ],
    images: Array.from({ length: 31 }, (_, i) => ({
      src: `assets/meetcute/${i + 1}.jpg`,
      thumb: `assets/meetcute-thumbs/${i + 1}.jpg`,
      caption: "Storyboard"
    })),

    afterGallery: [
      "The main challenge was turning the broad theme of “pets and humans” into a short film with a clear emotional focus. Early versions were too detailed and scattered, while a faster-paced version improved the structure but weakened the emotion. I also needed to balance natural character movement, emotional expression, rhythm, and production efficiency.",
      "We refined the story several times, shifting the focus from mutual healing to companionship and loss. To build emotion more clearly, we used everyday moments, such as the cat scratching curtains, shedding fur, growing up, and comforting its owner, rather than relying on plot-heavy events. In production, I developed rough action sketches, refined them into animation, and composited them with backgrounds and effects. I also moved from drawing everything frame by frame to a key-frame and pose-to-pose workflow, improving both efficiency and movement clarity.",
      "The final film became a more focused 2D animated short about the transition from companionship to loss. The project helped us find a stronger storytelling rhythm and a more mature team workflow. It also strengthened my skills in character animation, timing, and post-production, while deepening my understanding of how emotion can be shaped through movement, rhythm, and everyday details."
    ],
  },
  {
    slug: "are-you-hungry",
    title: "Are You Hungry?",
    category: "animation",
    chapter: "CHAPTER I",
    label: "2D Animation",
    kind: "Collaborative Project",
    role: "Director / Character Designer / 2D Animator",
    tools: "Toon Boom Harmony / Photoshop / After Effects",
    cover: "assets/hungry.jpg",
    videoType: "youtube",
    video: "https://www.youtube.com/embed/owkhr7PZ8zo?si=q9uH7VaJEQqslJEO",
    short: "A stylised animation project about hunger, temptation and character-driven transformation.",
    description: [
      "Are You Hungry? is a stylised animation project developed around hunger, desire and temptation. Through character design, colour choices and movement, the project explores how appetite can become both physical and emotional.",
      "The project includes character design iterations, visual development, colour testing and animation experiments."
    ],
    images: Array.from({ length: 11 }, (_, i) => ({
      src: `assets/areyouhungry/${i + 1}.jpg`,
      thumb: `assets/areyouhungry-thumbs/${i + 1}.jpg`,
      caption: "Character design"
    })),

    afterGallery: [
      "The main challenge was character design. I first wanted to create a red-haired protagonist to attract attention, but later realised the design needed to better fit the Chinese cultural and narrative setting. I also struggled to define the boy’s body shape, as I wanted him to look slightly swollen and food-motivated while keeping the silhouette clear and expressive.",
      "I developed several rounds of character sketches and compared different hairstyles and body shapes. Through testing and supervisor feedback, I refined the design to better communicate the boy’s appetite, innocence, and comedic tension.",
      "The final design became more coherent with the story and more effective in expressing the protagonist’s personality. This process helped me understand character design as a balance between visual appeal, cultural context, silhouette clarity, and narrative function."
    ],

    afterGalleryVideo: "https://www.youtube.com/embed/iPN5lLIZEag?si=QWP99KrKkLcvu2EJ",
    
    afterGalleryVideoText: [
      "His Elegance is a personal undergraduate animation project and a short spin-off of Are You Hungry?. The story follows the young protagonist as he receives his favourite headphones as a Christmas gift and reacts with exaggerated excitement. Compared with the main project, this short focuses more on character personality, playful performance, and a compact humorous narrative.",
      "In this project, I worked across character design, 2D animation, editing, compositing, and visual development. The main challenge was finding suitable background music that matched the light, comedic tone while avoiding copyright issues. Instead of using existing music, I decided to create the soundtrack myself.",
      "Inspired by an a cappella approach, I used my own voice to build the rhythm and sound of the piece. This allowed the music to respond more closely to the character’s movements and emotional reactions. As a result, the final animation developed a more personal audiovisual style, where sound became part of the humour rather than just background accompaniment."
    ],

  },
  {
    slug: "copythat",
    title: "COPYTHAT",
    category: "game-interactivity",
    chapter: "CHAPTER II",
    label: "Game Design",
    kind: "Collaborative Project",
    role: "Lead Artist / Character Design / Screen Design / Sound Design",
    tools: "Procreate / Photoshop / Unity",
    cover: "assets/copythat.jpg",
    videoType: "youtube",
    video: "https://www.youtube.com/embed/XAS0t6IOxz0?si=9wf9FblUyPlLiHFf",
    short: "A language-deciphering puzzle card game where players identify aliens through abstract visual clues.",
    description: [
      "COPYTHAT is an alien language-deciphering puzzle card game. The visual design needed to feel abstract and unfamiliar, because the player is learning a non-human language through observation, comparison and memory.",
      "As lead artist, I developed the overall visual direction, character concepts, card symbols, interface screens and supporting sound. The card designs abstract real-world concepts into alien-like visual signs while still keeping enough logic for gameplay."
    ],
    images: Array.from({ length: 10 }, (_, i) => ({
      src: `assets/copythat/${i + 1}.jpg`,
      thumb: `assets/copythat-thumbs/${i + 1}.jpg`,
      caption: "Game design and Character design"
    })),

    afterGallery: [
      "Since the game is about blending into an alien society, I designed the cover with the protagonist standing among strange creatures, trying to disguise himself as one of them. To save time, I reused existing character assets and used a classic composition.",
      "For the start menu, I guided the viewer’s focus toward the front card through composition and lighting. For the result screens, I designed both success and failure versions based on alien border control: success means “entry approved,” while failure means the passport scan is rejected.",
      "The protagonist was inspired by the visual style of Don’t Starve, with bold outlines and clear colour blocks. The design was first more cartoon-like, but after playtesting, the team realised the game needed a darker puzzle-game tone, closer to Rusty Lake. Therefore, I adjusted the character into a four-heads-tall design.",
      "The alien designs were inspired by comics, illustrations, games, memes, and my own abstract animation Look At Me. I combined familiar elements such as hands, rabbits, bees, wood, lobsters, tentacles, fashion figures, and black-market workers with strange shapes and exaggerated features to make them feel more alien and memorable.",
      "For the cards, the team wanted an abstract visual system that felt like an “alien language.” I transformed real-world objects into symbolic shapes, including identity documents, fake IDs, financial proof, luggage, dangerous items, medicine, equipment, and coins. Each card keeps a loose connection to its original meaning while appearing unfamiliar and alien."
    ],
  },
  {
    slug: "space-oddity",
    title: "Space Oddity",
    category: "game-interactivity",
    chapter: "CHAPTER II",
    label: "Interactive Media",
    kind: "Collaborative Project",
    role: "Visual Artist / Interaction Designer",
    tools: "Unity / Photoshop / After Effects",
    cover: "assets/spaceoddity.jpg",
    videoType: "youtube",
    video: "https://www.youtube.com/embed/r9SX-svBok4?si=L-f3JHG_35-4duhF",
    short: "An interactive project exploring space, movement, atmosphere and user experience.",
    description: [
      "Space Oddity is an interactive media project exploring movement, atmosphere and spatial experience. The project combines visual design and interaction to create an immersive user journey.",
      "In our team, Alca was responsible for particle effects, Rebecca supported Jira with Unity programming and final scene visuals, Jira was our main programmer, and I worked on the core art assets and modelling."
    ],
    images: Array.from({ length: 14 }, (_, i) => ({
      src: `assets/spaceoddity/${i + 1}.jpg`,
      thumb: `assets/spaceoddity-thumbs/${i + 1}.jpg`,
      caption: " 3D Model and space ship design and UI design"
    })),

    afterGallery: [
      "The spaceship design developed quickly through team discussions and sketches. Inspired by the physical shape of the Nova ball, I proposed a round “hamster ball” spaceship to help players feel more immersed. The final design became a futuristic spherical cabin. During modelling, I considered several directions, from minimal sci-fi to detailed mechanical or weathered spacecraft designs, but the team decided to keep the Unity model simple to avoid further technical changes.",
      "For the UI, I designed a slightly futuristic screen-based visual style to match the story of escaping through space. A funny moment happened when I misunderstood “arrow” as “error” and created the wrong graphic. Instead of discarding it, we decided to keep it in the opening sequence."
    ],

    afterGalleryVideo: "https://www.youtube.com/embed/PxuM41fjj3M?si=o1646GEaXRIZWse3"

  },
  {
    slug: "assasins",
    title: "Assasins",
    category: "pre-production",
    chapter: "CHAPTER III",
    label: "Pre-production",
    kind: "Personal Project",
    role: "Character Designer / Visual Development Artist",
    tools: "Photoshop / Clip Studio Paint",
    cover: "assets/assasins.jpg",
    videoType: "image",
    video: "assets/assasins.jpg",
    short: "A pre-production project focused on character design, world-building, mood, silhouettes and visual storytelling.",
    description: [
      "Assasins is a pre-production project focused on character design, world-building and visual storytelling. The work can include character sheets, costume exploration, prop design, colour scripts and environment mood boards.",
      "The story is set in ancient China and follows a conflict between the martial arts world and imperial power. In pursuit of the same goal, assassinating the emperor, skilled fighters from across the land are summoned by a secret order. Those who join the mission are promised rewards, while the one who succeeds will become the next leader of the martial world. At the same time, the emperor gathers his own masters for protection, setting the stage for a large-scale confrontation between jianghu forces and the imperial court."
    ],
    images: Array.from({ length: 31 }, (_, i) => ({
      src: `assets/assassins-character/${i + 1}.jpg`,
      thumb: `assets/assassins-character-thumbs/${i + 1}.jpg`,
      caption: "Character design and concept art"
    })),

    extraImages: Array.from({ length: 4 }, (_, i) => ({
      src: `assets/assassins-background/${i + 1}.jpg`,
      thumb: `assets/assassins-background-thumbs/${i + 1}.jpg`,
      caption: "Style test and visual development"
    })),

    afterGallery: [
      "The biggest challenge was defining a suitable visual style. I explored directions from realism to ink-inspired visuals, but it was difficult to balance the historical atmosphere with the dramatic, heroic fantasy feeling I wanted.",
      "To solve this, I created several style tests and compared different approaches in character rendering, silhouettes, costumes, and overall mood. I gradually moved away from realistic or traditional ink styles and focused on stronger shapes, clearer hierarchy, and a more stylised heroic presence.",
      "This project helped me better understand how visual development supports storytelling. Through Assassins, I became more confident in using iteration to build a visual language that connects character design, atmosphere, and narrative tone."
    ],

    afterGalleryImages: Array.from({ length: 9 }, (_, i) => ({
      src: `assets/assassins-drafts/${i + 1}.jpg`,
      thumb: `assets/assassins-drafs-thumbs/${i + 1}.jpg`,
      caption: "Final concept presentation"
    })),
  },
  {
    slug: "the-future-in-space",
    title: "The Future in Space",
    category: "illustration",
    chapter: "CHAPTER IV",
    label: "Illustration",
    kind: "Personal Project",
    role: "Illustrator / Visual Artist",
    tools: "Photoshop / Procreate / Clip Studio Paint",
    cover: "assets/futurespace.jpg",
    videoType: "youtube",
    video: "https://www.youtube.com/embed/90CvLINGvtk?si=AMxgVYtv_9Fw_dsp",
    short: "A retro-futuristic illustration series exploring imagined space, colour and speculative visual atmosphere.",
    description: [
      "The Future in Space is an illustration project that imagines a future in which interplanetary travel has become part of everyday life. ",
      "As technology continues to advance, people are able to move freely between planets, taking satellites or spaceships on magical journeys through space. In this imagined universe, many things have transformed on a grand scale: golden space stations, mutated plants, and unfamiliar new animals all become part of daily experience. Through these images, the project explores a fantastical vision of future life in space, where wonder, exploration, and new forms of coexistence reshape the world around us."
    ],
    images: Array.from({ length: 10 }, (_, i) => ({
      src: `assets/future/${i + 1}.jpg`,
      thumb: `assets/future/${i + 1}.jpg`,
      caption: "illustration"
    })),

    afterGallery: [
      "The main challenge of this project was maintaining creativity and persistence as a simple retro space illustration gradually expanded into a larger series exploring the universe, belief, and peace.",
      "In response, I allowed the concept to grow organically, using multiple illustrations to build a retro-futuristic visual world with stronger atmosphere, symbolism, and narrative depth.",
      "The final outcome became a more ambitious illustration series that strengthened my confidence in developing a single visual idea into a broader and more personal conceptual universe."
    ],

  },
  {
    slug: "forgs-leg",
    title: "Frog’s Leg",
    category: "illustration",
    chapter: "CHAPTER IV",
    label: "Comic",
    kind: "Collaborative Project",
    role: "Illustrator / Comic Artist",
    tools: "Clip Studio Paint / Photoshop",
    cover: "assets/frog.jpg",
    videoType: "image",
    video: "assets/frog.jpg",
    short: "A comic-related illustration project focused on translating script, mood and character action into visual storytelling.",
    description: [
      "Frog Legs in Breaststroke is a collaborative comic project developed from a script provided by my collaborator, which I adapted into a finished comic through visual storytelling.",
      "The story follows a tattooed man who goes to a swimming pool, only to be confronted by a girl obsessed with rigid ideas of “aesthetics.” She repeatedly compares him to a frog and emphasizes how uncomfortable his appearance makes her feel. What begins as confusion and hesitation gradually turns into self-doubt, and the man is slowly influenced into accepting her judgment. Through this interaction, the comic explores the pressure of social standards, internalized shame, and the unsettling power of repeated aesthetic criticism."
    ],
    images: Array.from({ length: 27 }, (_, i) => ({
      src: `assets/frog/p${i}.jpg`,
      thumb: `assets/frog-thumbs/p${i}.jpg`,
      caption: "manga"
    })),
    
    afterGallery: [
      "The main challenge of this project was collaboration and finding a suitable visual style. Since the comic was based on another person’s script, I needed to translate their narrative into visuals while adding my own interpretation, and gradually define a consistent style that matched the story’s tension, discomfort, and satirical tone.",
      "Through repeated exploration, I focused on pacing, framing, composition, and character expression to support the protagonist’s psychological shift. The final comic became a collaborative work where script and image supported each other, helping me better understand how comics can visualise invisible pressure, social judgment, and internal insecurity."
    ],

  }
];

const PROJECT_ZH = {
  "look-at-me": {
    label: "抽象动画",
    kind: "个人项目",
    role: "导演 / 二维动画师 / 视觉开发艺术家",
    tools: "Toon Boom Harmony / After Effects / Photoshop / Premiere Pro",
    short: "一部逐帧实验动画，探索诱惑、转化、色彩与抽象情绪节奏。",
    description: [
      "《Look At Me》是一部二维逐帧实验动画，通过几何形变和鲜明的色彩对比，探索诱惑、自我意识与情绪变化。影片从一个克制的灰色方块开始，并通过视觉节奏、运动和色彩逐渐发展成一种奇异的花状形态。",
      "这个项目的主要挑战是不依赖传统角色表演来建立情绪。我通过形状语言、时间节奏、色彩推进和构图对比，创造出从克制到吸引再到转化的感官过程。"
    ],
    afterGallery: [
      "我负责从概念到最终合成的完整制作流程，包括分镜、视觉开发、逐帧动画和后期制作。在 Toon Boom Harmony 与 Adobe After Effects 中，我重点处理形状转化、镜头连续性、节奏控制和色彩对比，以建立更强的张力和视觉节奏。",
      "最终作品是一部由概念驱动的实验短片，体现了我在二维动画、视觉叙事和抽象动态设计方面的能力。这个项目强化了我的动画制作、合成和前期规划能力，也展示了象征性想法如何被转化为大胆且富有表现力的动画形式。"
    ]
  },

  "flare": {
    label: "抽象动画",
    kind: "个人项目",
    role: "导演 / 设计师 / 二维动画师",
    tools: "After Effects / Photoshop / Toon Boom Harmony",
    short: "一部关于植物、城市结构与节奏性视觉转化之间张力的抽象图形动画。",
    description: [
      "《Flare》通过抽象图形运动探索有机植物与城市发展之间的关系。自然形态被转化为柔软、明亮、圆润的形状，而城市结构则通过更尖锐、更冷峻、更具压迫感的运动来表现。",
      "项目关注节奏、方向性流动、视觉对比和层次化构图，利用抽象语言表达生命自然与建成空间之间的感官冲突。"
    ],
    afterGallery: [
      "这个项目的主要挑战是建立一种视觉语言，在不依赖具象描绘的情况下传达有机生命与城市压力之间的冲突。",
      "我通过概念规划、构图实验和逐帧制作推进项目，重点研究有机形态与几何形态之间的互动、镜头运动连续性和转场结构。",
      "最终作品展示了我对抽象动画作为视觉诠释方式的兴趣，而不是对现实的直接再现。这个项目提升了我的构图、运动连续性和视觉开发能力。"
    ]
  },

  "meet-cute": {
    label: "二维动画",
    kind: "合作项目",
    role: "分镜师 / 动态分镜师 / 角色设计师 / 二维动画师 / 表演设计",
    tools: "Adobe Animate / After Effects / Photoshop / CapCut",
    short: "一部合作完成的二维动画短片，讲述一个男人与猫之间的陪伴、情感依附与失去。",
    description: [
      "《Meet Cute》是一部合作完成的二维动画短片，围绕一个男人与猫之间的情感关系展开，关注陪伴、依恋与失去。",
      "我的职责包括分镜、动态分镜规划、角色设计、二维动画和表演设计。我专注于通过日常小动作建立角色情绪，并提升故事表达的清晰度。"
    ],
    afterGallery: [
      "这个项目的主要挑战是把“宠物与人”这一宽泛主题转化为情感重点明确的短片，同时平衡自然动作、情绪表现、节奏和制作效率。",
      "我们多次调整故事，将重点从相互治愈转向陪伴与失去。为了更清晰地建立情绪，我们使用猫抓窗帘、掉毛、成长、安慰主人等日常瞬间。",
      "最终影片成为一部更聚焦于从陪伴到失去转变的二维动画短片。这个项目提升了我的角色动画、时间控制和后期制作能力。"
    ]
  },

  "are-you-hungry": {
    label: "二维动画",
    kind: "合作项目",
    role: "导演 / 角色设计师 / 二维动画师",
    tools: "Toon Boom Harmony / Photoshop / After Effects",
    short: "一个围绕饥饿、诱惑和角色驱动转化展开的风格化动画项目。",
    description: [
      "《Are You Hungry?》是一个围绕饥饿、欲望和诱惑展开的风格化动画项目。项目通过角色设计、色彩选择和运动，探索食欲如何同时成为身体层面和情绪层面的体验。",
      "项目内容包括角色设计迭代、视觉开发、色彩测试和动画实验。"
    ],
    afterGallery: [
      "这个项目的主要挑战是角色设计。我最初想设计一个红发主角来吸引注意，但后来意识到角色需要更贴合中国文化与叙事语境。",
      "我进行了多轮角色草图，并比较了不同发型和身体比例。通过测试和导师反馈，我逐渐调整设计，使其更好地传达男孩的食欲、天真感和喜剧张力。",
      "最终设计在故事语境中更加统一，也更有效地表现了主角性格。这个过程让我理解到角色设计需要在视觉吸引力、文化语境、剪影清晰度和叙事功能之间取得平衡。"
    ],
    afterGalleryVideoText: [
      "《His Elegance》是我的本科个人动画项目，也是《Are You Hungry?》的短篇衍生作品。故事讲述小主角在圣诞节收到最喜欢的耳机后产生夸张兴奋反应。",
      "在这个项目中，我负责角色设计、二维动画、剪辑、合成和视觉开发。主要挑战是找到适合轻松喜剧氛围、同时避免版权问题的背景音乐。",
      "受到阿卡贝拉方式的启发，我用自己的声音建立作品的节奏和音效，使音乐能够更贴合角色动作和情绪反应。"
    ]
  },

  "copythat": {
    label: "游戏设计",
    kind: "合作项目",
    role: "主美 / 角色设计 / 界面设计 / 音效设计",
    tools: "Procreate / Photoshop / Unity",
    short: "一款外星语言解谜卡牌游戏，玩家通过抽象视觉线索识别外星人。",
    description: [
      "《COPYTHAT》是一款外星语言解谜卡牌游戏。由于玩家需要通过观察、比较和记忆学习一种非人类语言，视觉设计需要呈现出抽象且陌生的感觉。",
      "作为主美，我负责整体视觉方向、角色概念、卡牌符号、界面画面和辅助音效。卡牌设计将现实概念抽象成外星化的视觉符号，同时保留足够逻辑以支撑玩法。"
    ],
    afterGallery: [
      "由于游戏主题是伪装并融入外星社会，我设计封面时让主角站在一群奇异生物中，试图伪装成其中一员。",
      "在开始菜单中，我通过构图和光线引导观众注意前方的卡牌。结果界面则根据外星边境检查的概念设计了成功与失败两个版本。",
      "主角受到《Don’t Starve》视觉风格的启发，使用粗线条和清晰色块。经过试玩后，团队意识到游戏需要更黑暗的解谜氛围，因此我将角色调整为四头身比例。",
      "外星人设计的灵感来自漫画、插画、游戏、网络迷因以及我自己的抽象动画《Look At Me》。我将熟悉元素与奇异形状和夸张特征结合，使它们更具外星感且容易被记住。",
      "在卡牌设计中，团队希望建立一种像“外星语言”的抽象视觉系统。我将现实物品转化为符号化形状，包括身份证件、假证、财力证明、行李、危险物品、药品、设备和硬币。"
    ]
  },

  "space-oddity": {
    label: "交互媒体",
    kind: "合作项目",
    role: "视觉艺术家 / 交互设计师",
    tools: "Unity / Photoshop / After Effects",
    short: "一个探索太空、运动、氛围与用户体验的交互项目。",
    description: [
      "《Space Oddity》是一个探索运动、氛围和空间体验的交互媒体项目。项目结合视觉设计与交互，创造沉浸式的用户旅程。",
      "在团队中，Alca 负责粒子特效，Rebecca 支持 Jira 进行 Unity 编程和最终场景视觉，Jira 是主程序员，而我负责核心美术资产和建模。"
    ],
    afterGallery: [
      "飞船设计是在团队讨论和草图推进中快速形成的。受到 Nova 球体外形的启发，我提出了一个圆形“仓鼠球”式飞船，让玩家更有沉浸感。",
      "在界面设计方面，我采用了略带未来感的屏幕视觉风格，以配合逃离太空的故事。一个有趣的插曲是，我曾把“arrow”误解成“error”，后来我们决定把这个错误图形保留在开场序列中。"
    ]
  },

  "assasins": {
    label: "前期制作",
    kind: "个人项目",
    role: "角色设计师 / 视觉开发艺术家",
    tools: "Photoshop / Clip Studio Paint",
    short: "一个以前期制作为核心的项目，关注角色设计、世界观、氛围、剪影和视觉叙事。",
    description: [
      "《Assasins》是一个聚焦角色设计、世界观构建和视觉叙事的前期制作项目。作品内容包括角色设定图、服装探索、道具设计、色彩脚本和环境氛围板。",
      "故事设定在古代中国，围绕江湖力量与皇权之间的冲突展开。为了共同目标——刺杀皇帝——来自各地的高手被一个秘密组织召集。参与任务者将获得赏赐，而成功刺杀者将成为下一任武林盟主。与此同时，皇帝也召集高手进行保护，一场江湖势力与朝廷之间的大规模对峙由此展开。"
    ],
    afterGallery: [
      "这个项目最大的挑战是确定合适的视觉风格。我探索了从写实到水墨启发的不同方向，但很难在历史氛围与戏剧化英雄幻想感之间取得平衡。",
      "为了解决这个问题，我进行了多次风格测试，并比较角色渲染、剪影、服装和整体氛围的不同处理方式。",
      "这个项目帮助我更好地理解视觉开发如何支撑叙事。通过《Assasins》，我更加确信迭代能够建立一种连接角色设计、氛围和叙事基调的视觉语言。"
    ]
  },

  "the-future-in-space": {
    label: "插画",
    kind: "个人项目",
    role: "插画师 / 视觉艺术家",
    tools: "Photoshop / Procreate / Clip Studio Paint",
    short: "一组复古未来主义插画，探索想象中的太空、色彩和推想式视觉氛围。",
    description: [
      "《The Future in Space》是一组插画项目，想象了一个星际旅行已经成为日常生活一部分的未来。",
      "随着科技不断发展，人们能够在星球之间自由移动，乘坐卫星或飞船进行奇妙的太空旅行。在这个想象世界中，金色空间站、变异植物和陌生新动物都成为日常经验的一部分。作品探索了一种关于未来太空生活的幻想愿景。"
    ],
    afterGallery: [
      "这个项目的主要挑战是保持创意和持续性，因为一张简单的复古太空插画逐渐扩展成一个探索宇宙、信念与和平的系列。",
      "我允许概念自然生长，并通过多张插画建立一个更具氛围、象征性和叙事深度的复古未来主义视觉世界。",
      "最终成果成为一组更具野心的插画系列，也增强了我将单一视觉想法发展成更广阔、更个人化概念宇宙的信心。"
    ]
  },

  "forgs-leg": {
    label: "漫画",
    kind: "合作项目",
    role: "插画师 / 漫画作者",
    tools: "Clip Studio Paint / Photoshop",
    short: "一个漫画相关插画项目，关注如何将剧本、氛围和角色动作转化为视觉叙事。",
    description: [
      "《Frog Legs in Breaststroke》是一个合作漫画项目，基于合作者提供的剧本发展而成，我通过视觉叙事将其改编为完整漫画。",
      "故事讲述一名有纹身的男人来到游泳池，却遇到一个执着于僵化“审美”观念的女孩。她反复将他比作青蛙，并强调他的外表令她不适。男人从困惑和犹豫逐渐走向自我怀疑，最终受到她的评价影响。漫画借此探讨社会标准、内化羞耻以及重复审美批评带来的不安力量。"
    ],
    afterGallery: [
      "这个项目的主要挑战是合作以及寻找合适的视觉风格。由于漫画基于他人的剧本，我需要在尊重原始叙事的同时加入自己的理解，并逐步确定适合故事张力、不适感和讽刺语气的统一风格。",
      "通过反复探索，我专注于节奏、分镜、构图和角色表情，以支撑主角的心理变化。最终漫画成为一个脚本与图像互相支持的合作作品，也帮助我理解漫画如何视觉化不可见的压力、社会评判和内在不安全感。"
    ]
  }
};

projects.forEach((project) => {
  if (PROJECT_ZH[project.slug]) {
    project.zh = PROJECT_ZH[project.slug];
  }
});

const categories = [
  { id: "animation", chapter: "CHAPTER I", title: "Animation", emphasis: "", cols: 3 },
  { id: "game-interactivity", chapter: "CHAPTER II", title: "Game &", emphasis: "Interactivity", cols: 2 },
  { id: "pre-production", chapter: "CHAPTER III", title: "Pre-production", emphasis: "", cols: 1 },
  { id: "illustration", chapter: "CHAPTER IV", title: "Illustration", emphasis: "", cols: 2 }
];

const app = document.querySelector("#app");

function projectCard(project) {
  const content = getProjectContent(project);

  return `
    <article class="project-card">
      <a class="thumb" href="#project/${project.slug}" aria-label="open ${project.title}">
        <img src="${project.cover}" alt="${project.title} cover">
        <span class="card-label">${content.label}</span>
      </a>
      <div class="card-body">
        <h3>${project.title}</h3>
        <p class="meta">${content.kind}</p>
        <p class="role-text">${content.role}</p>
        <a class="view-link" href="#project/${project.slug}">${t("viewProject")}</a>
      </div>
    </article>
  `;
}

function renderHome() {
  const sections = categories.map(category => {
    const list = projects.filter(p => p.category === category.id);

    const categoryText = currentLang === "zh" && CATEGORY_ZH[category.id]
      ? CATEGORY_ZH[category.id]
      : category;

    const title = categoryText.emphasis
      ? `${categoryText.title} <em>${categoryText.emphasis}</em>`
      : categoryText.title;

    return `
      <section class="section" id="${category.id}">
        <div class="section-header">
          <span class="chapter">${category.chapter}</span>
          <h2 class="section-title">${title}</h2>
          <div class="ornament" aria-hidden="true"><span></span><i>◆</i><span></span></div>
        </div>
        <div class="project-grid ${list.length === 1 ? "center-single" : ""}" style="--cols:${Math.min(category.cols, list.length)}">
          ${list.map(projectCard).join("")}
        </div>
      </section>
    `;
  }).join("");

  app.innerHTML = `
    <section class="hero" id="home">
      <div class="hero-video-wrap">
        <video 
          src="${SITE.showreelVideo}" 
          autoplay 
          muted 
          loop 
          playsinline 
          preload="auto"
          disablepictureinpicture>
        </video>
      </div>

      <p class="scroll-hint">${t("scroll")}</p>
    </section>

    <section class="name-section">
      <h1 class="below-video-name">caoxuefan</h1>
    </section>

    <section class="role-strip">
      ${t("roleStrip")}
    </section>

    ${sections}
  `;

  const heroVideo = document.querySelector(".hero-video-wrap video");

  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    heroVideo.playsInline = true;

    heroVideo.play().catch((error) => {
      console.log("Autoplay blocked:", error);
    });
  }

  afterRender();
}

function renderAbout() {
  const about = ABOUT_TEXT[currentLang] || ABOUT_TEXT.en;

  app.innerHTML = `
    <section class="about-page">
      <div class="about-inner">
        <p class="eyebrow">${t("about")}</p>
        <h1 class="page-title">${t("artistProfile")}</h1>
        <div class="ornament" aria-hidden="true"><span></span><i>◆</i><span></span></div>

        <img class="avatar" src="assets/me.jpg" alt="portrait of caoxuefan">

        <div class="about-copy">
          <p>${about.p1}</p>
          <p>${about.p2}</p>
        </div>
      </div>

      <div class="about-info-wrapper">
        <div class="about-info-card skills-card">
          <div class="card-top purple"></div>
          <h2>${t("skills")}</h2>
          <ul>
            ${about.skills.map(skill => `<li>${skill}</li>`).join("")}
          </ul>
        </div>

        <div class="about-info-card software-card">
          <div class="card-top green"></div>
          <h2>${t("software")}</h2>
          <ul>
            ${about.software.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>

      <a class="download-cv" href="${SITE.cv}" download>${t("downloadCV")}</a>
    </section>
  `;

  afterRender();
}

function projectMedia(project) {
  if (project.videoType === "youtube") {
    let youtubeId = project.youtubeId;
  
    if (!youtubeId && project.video) {
      const match = project.video.match(/embed\/([^?&]+)/);
      youtubeId = match ? match[1] : "";
    }
  
    const poster = project.cover || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  
    return `
      <div class="youtube-lite" data-youtube-id="${youtubeId}">
        <img src="${poster}" alt="${project.title} video cover">
        <button class="youtube-play" aria-label="Play video">▶</button>
      </div>
    `;
  }

  if (project.videoType === "video") {
    return `<video src="${project.video}" controls playsinline poster="${project.cover}"></video>`;
  }

  return `<img src="${project.video || project.cover}" alt="${project.title} main image">`;
}

function renderProject(slug) {
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    renderHome();
    return;
  }

  const content = getProjectContent(project);

  app.innerHTML = `
    <section class="project-page">
      <div class="project-hero-media">
        ${projectMedia(project)}
      </div>
     
      ${project.slug === "copythat" ? `
        <div class="project-link-wrap">
          <a 
            class="external-link-btn"
            href="https://ldjam.com/events/ludum-dare/59/copythat"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${t("ludumDare")}
          </a>
        </div>
      ` : ""}

      <div class="project-intro">
        <p class="eyebrow">${project.chapter}</p>
        <h1>${project.title}</h1>
        <p class="project-kind">${content.kind}</p>

        <div class="detail-facts">
          <div class="fact">
            <strong>${t("role")}</strong>
            <span>${content.role}</span>
          </div>
          <div class="fact">
            <strong>${t("tools")}</strong>
            <span>${content.tools}</span>
          </div>
        </div>
      </div>

      <div class="project-copy">
        ${(content.description || []).map(p => `<p>${p}</p>`).join("")}
      </div>

      <div class="gallery-section">
        <div class="gallery-main">
          <button class="gallery-btn prev" onclick="prevImage()">‹</button>

          <img id="galleryImage" class="gallery-main-image" src="" alt="Project image">
        
          <button class="gallery-btn next" onclick="nextImage()">›</button>
        </div>

        <p id="galleryCaption" class="gallery-caption"></p>

        <p id="galleryCounter"></p>

        <div id="galleryThumbnails" class="gallery-thumbnails"></div>
      </div>

      ${project.extraImages ? `
        <section class="extra-image-grid">
          ${project.extraImages.map((img) => `
            <button class="lightbox-trigger" type="button" data-full="${img.src}" data-caption="${translateCaption(img.caption || project.title)}">
              <img src="${img.src}" alt="${translateCaption(img.caption || project.title)}" loading="lazy">
            </button>
          `).join("")}
        </section>
      ` : ""}

      ${(content.afterGallery && content.afterGallery.length) ? `
        <div class="project-copy after-gallery-text">
          ${content.afterGallery.map((paragraph) => `
            <p>${paragraph}</p>
          `).join("")}
        </div>
      ` : ""}

      ${project.afterGalleryImages ? `
        <section class="extra-image-grid">
          ${project.afterGalleryImages.map((img) => `
            <button class="lightbox-trigger" type="button" data-full="${img.src}" data-caption="${translateCaption(img.caption || project.title)}">
              <img src="${img.src}" alt="${translateCaption(img.caption || project.title)}" loading="lazy">
            </button>
          `).join("")}
        </section>
      ` : ""}

      ${project.afterGalleryVideo ? `
        <div class="project-video after-gallery-video">
          <iframe
            src="${project.afterGalleryVideo}"
            title="${project.title} extra video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
      ` : ""}

      ${(content.afterGalleryVideoText && content.afterGalleryVideoText.length) ? `
        <div class="project-copy after-gallery-text">
          ${content.afterGalleryVideoText.map((paragraph) => `
            <p>${paragraph}</p>
          `).join("")}
        </div>
      ` : ""}

      <p style="text-align:center">
        <a href="#home" class="primary-button">${t("backHome")}</a>
      </p>
    </section>
  `;
  
  currentProject = project;
  currentImageIndex = 0;

  renderGallery();
  initLightbox();
  afterRender();
}

function router() {
  const hash = window.location.hash || "#home";
  const route = hash.replace("#", "");

  if (route === "about") {
    renderAbout();
  } else if (route.startsWith("project/")) {
    renderProject(route.split("/")[1]);
  } else {
    renderHome();
    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target && hash !== "#home") target.scrollIntoView({ behavior: "smooth" });
    }, 80);
  }
}

function afterRender() {
  window.scrollTo({ top: 0, behavior: "instant" });
  setupReveal();
  setupLightbox();
  updateFooterText();
  document.querySelector(".top-nav")?.classList.remove("open");
  document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
}

function setupReveal() {
  const items = document.querySelectorAll(".project-card, .gallery figure");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("reveal"), index * 70);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  items.forEach(item => observer.observe(item));
}

function setupLightbox() {
  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      const box = document.createElement("div");
      box.className = "lightbox";
      box.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
      box.addEventListener("click", () => box.remove());
      document.body.appendChild(box);
    });
  });
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#year").textContent = new Date().getFullYear();
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  addLanguageSwitch();
  updateFooterText();

  document.querySelector(".menu-toggle").addEventListener("click", () => {
    const nav = document.querySelector(".top-nav");
    const isOpen = nav.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    document.querySelector(".menu-toggle").setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelector(".back-to-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  router();
});

window.addEventListener("scroll", () => {
  document.querySelector(".site-header").classList.toggle("scrolled", window.scrollY > 30);
  document.querySelector(".back-to-top").classList.toggle("show", window.scrollY > 600);
});

let currentImageIndex = 0;
let currentProject = null;
const preloadedGalleryImages = new Set();
let thumbnailsRendered = false;

function renderGallery() {
  const gallerySection = document.querySelector(".gallery-section");
  const imageEl = document.getElementById("galleryImage");
  const counterEl = document.getElementById("galleryCounter");
  const thumbnailsEl = document.getElementById("galleryThumbnails");
  const captionEl = document.getElementById("galleryCaption");

  if (!gallerySection || !imageEl || !counterEl || !thumbnailsEl|| !captionEl) {
    return;
  }

  if (!currentProject || !currentProject.images || currentProject.images.length === 0) {
    gallerySection.style.display = "none";
    return;
  }

  gallerySection.style.display = "block";
  

  const image = document.getElementById("galleryImage");

image.classList.add("fade-out");

setTimeout(() => {
  image.src = currentProject.images[currentImageIndex].src;
  image.classList.remove("fade-out");
}, 180);
  counterEl.textContent = `${currentImageIndex + 1} / ${currentProject.images.length}`;
  captionEl.textContent = translateCaption(currentProject.images[currentImageIndex].caption || "");
  thumbnailsEl.innerHTML = currentProject.images
  .map((image, index) => {
    return `
      <img
        class="gallery-thumb ${index === currentImageIndex ? "active" : ""}"
        src="${image.thumb || image.src}"
        alt="Project image ${index + 1}"
        loading="lazy"
        onclick="goToImage(${index})"
      >
    `;
  })
  .join("");

  updateThumbnailActive();
}

function updateThumbnailActive() {
  const thumbs = document.querySelectorAll(".gallery-thumb");

  thumbs.forEach((thumb, index) => {
    if (index === currentImageIndex) {
      thumb.classList.add("active");
    } else {
      thumb.classList.remove("active");
    }
  });
}

function nextImage() {
  currentImageIndex++;

  if (currentImageIndex >= currentProject.images.length) {
    currentImageIndex = 0;
  }

  renderGallery();
}

function prevImage() {
  currentImageIndex--;

  if (currentImageIndex < 0) {
    currentImageIndex = currentProject.images.length - 1;
  }

  renderGallery();
}

function goToImage(index) {
  currentImageIndex = index;
  renderGallery();
}

function preloadCurrentAndNextGalleryImage() {
  if (!currentProject || !currentProject.images || currentProject.images.length === 0) return;

  const images = currentProject.images;
  const total = images.length;

  const indexes = [
    currentImageIndex,
    (currentImageIndex + 1) % total
  ];

  indexes.forEach(index => {
    const item = images[index];
    const src = item.src || item;

    if (!src || preloadedGalleryImages.has(src)) return;

    const img = new Image();
    img.src = src;

    preloadedGalleryImages.add(src);
  });
}

function initLightbox() {
  const triggers = document.querySelectorAll(".lightbox-trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const imgSrc = trigger.dataset.full;
      const caption = trigger.dataset.caption || "";

      const lightbox = document.createElement("div");
      lightbox.className = "image-lightbox";

      lightbox.innerHTML = `
        <button class="lightbox-close" type="button">×</button>
        <img src="${imgSrc}" alt="${caption}">
        ${caption ? `<p>${caption}</p>` : ""}
      `;

      document.body.appendChild(lightbox);
      document.body.style.overflow = "hidden";

      lightbox.addEventListener("click", (e) => {
        if (
          e.target.classList.contains("image-lightbox") ||
          e.target.classList.contains("lightbox-close")
        ) {
          lightbox.remove();
          document.body.style.overflow = "";
        }
      });
    });
  });
}

document.addEventListener("click", function (e) {
  const youtubeBox = e.target.closest(".youtube-lite");

  if (!youtubeBox) return;

  const youtubeId = youtubeBox.dataset.youtubeId;

  youtubeBox.innerHTML = `
  <iframe
    src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&vq=hd1080"
    title="YouTube video player"
    frameborder="0"
    allow="autoplay; encrypted-media; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
  `;
});
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

const categories = [
  { id: "animation", chapter: "CHAPTER I", title: "Animation", emphasis: "", cols: 3 },
  { id: "game-interactivity", chapter: "CHAPTER II", title: "Game &", emphasis: "Interactivity", cols: 2 },
  { id: "pre-production", chapter: "CHAPTER III", title: "Pre-production", emphasis: "", cols: 1 },
  { id: "illustration", chapter: "CHAPTER IV", title: "Illustration", emphasis: "", cols: 2 }
];

const app = document.querySelector("#app");

function projectCard(project) {
  return `
    <article class="project-card">
      <a class="thumb" href="#project/${project.slug}" aria-label="open ${project.title}">
        <img src="${project.cover}" alt="${project.title} cover">
        <span class="card-label">${project.label}</span>
      </a>
      <div class="card-body">
        <h3>${project.title}</h3>
        <p class="meta">${project.kind}</p>
        <p class="role-text">${project.role}</p>
        <a class="view-link" href="#project/${project.slug}">View Project →</a>
      </div>
    </article>
  `;
}

function renderHome() {
  const sections = categories.map(category => {
    const list = projects.filter(p => p.category === category.id);
    const title = category.emphasis
      ? `${category.title} <em>${category.emphasis}</em>`
      : category.title;

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

  <p class="scroll-hint">Scroll to explore</p>
</section>

   <section class="name-section">
   <h1 class="below-video-name">caoxuefan</h1>
</section>

  <section class="role-strip">
     2D Animator / Visual development artist / Game artist
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
  app.innerHTML = `
    <section class="about-page">
      <div class="about-inner">
        <p class="eyebrow">About</p>
        <h1 class="page-title">Artist <em>Profile</em></h1>
        <div class="ornament" aria-hidden="true"><span></span><i>◆</i><span></span></div>

        <img class="avatar" src="assets/me.jpg" alt="portrait of caoxuefan">

        <div class="about-copy">
          <p>
            I am a 2D animator and emerging visual artist working across experimental animation,
            visual development, game art and frame-by-frame movement. My practice focuses on colour,
            rhythm, organic transformation and abstract visual storytelling.
          </p>
          <p>
            I am interested in how emotion, sensation and atmosphere can be translated into moving images.
            Through animation, illustration and interactive projects, I explore visual language that feels vivid,
            expressive and personal.
          </p>
        </div>

        </div>

<div class="about-info-wrapper">
  <div class="about-info-card skills-card">
    <div class="card-top purple"></div>
    <h2>Skills</h2>
    <ul>
      <li>2D animation</li>
      <li>3D modeling</li>
      <li>Character design</li>
      <li>Visual development</li>
      <li>Storyboarding</li>
      <li>Game art</li>
    </ul>
  </div>

  <div class="about-info-card software-card">
    <div class="card-top green"></div>
    <h2>Software</h2>
    <ul>
      <li>Toon Boom Harmony</li>
      <li>After Effects</li>
      <li>Photoshop</li>
      <li>CSP</li>
      <li>Premiere Pro</li>
      <li>Blender</li>
      <li>ZBrush</li>
      <li>Illustrator</li>
      <li>TouchDesigner</li>
      <li>Procreate Dreams</li>
    </ul>
  </div>
</div>

<a class="download-cv" href="${SITE.cv}" download>Download CV ↓</a>
      </div>
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
            Ludum Dare page
          </a>
        </div>
      ` : ""}

      <div class="project-intro">
        <p class="eyebrow">${project.chapter}</p>
        <h1>${project.title}</h1>
        <p class="project-kind">${project.kind}</p>

        <div class="detail-facts">
          <div class="fact">
            <strong>Role</strong>
            <span>${project.role}</span>
          </div>
          <div class="fact">
            <strong>Tools</strong>
            <span>${project.tools}</span>
          </div>
        </div>
      </div>

      <div class="project-copy">
        ${project.description.map(p => `<p>${p}</p>`).join("")}
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
      <button class="lightbox-trigger" type="button" data-full="${img.src}" data-caption="${img.caption || project.title}">
        <img src="${img.src}" alt="${img.caption || project.title}" loading="lazy">
      </button>
    `).join("")}
  </section>
` : ""}

  ${project.afterGallery ? `
    <div class="project-copy after-gallery-text">
      ${project.afterGallery.map((paragraph) => `
        <p>${paragraph}</p>
      `).join("")}
    </div>
  ` : ""}

  ${project.afterGalleryImages ? `
    <section class="extra-image-grid">
      ${project.afterGalleryImages.map((img) => `
        <button class="lightbox-trigger" type="button" data-full="${img.src}" data-caption="${img.caption || project.title}">
          <img src="${img.src}" alt="${img.caption || project.title}" loading="lazy">
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
  ${project.afterGalleryVideoText ? `
    <div class="project-copy after-gallery-text">
      ${project.afterGalleryVideoText.map((paragraph) => `
        <p>${paragraph}</p>
      `).join("")}
    </div>
  ` : ""}

      <p style="text-align:center">
        <a href="#home" class="primary-button">← Back to Home</a>
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
  captionEl.textContent = currentProject.images[currentImageIndex].caption || "";
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
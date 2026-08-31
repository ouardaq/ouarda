export interface Project {
  slug: string;
  title: string;
  description: string;
  detailedDescription?: string[];
  technologies: string[];
  link?: string;
  link_deployed?: string;
  image?: string;
  challenges?: string[];
  features?: string[];
  role?: string;
  duration?: string;
  impact?: string;
}

export const projects: Project[] = [
  {
    slug: 'sweet-nothing',
    title: 'Sweet Nothing',
    description:
      'A full-stack e-commerce storefront for a small-batch bakery, with AI-assisted product copywriting. Server-rendered catalogue, cart with guest sessions, authentication, and atomic checkout.',
    detailedDescription: [
      'A pixel-art bakery storefront built as a complete commerce system rather than a catalogue mockup — the cart survives across sessions for signed-out visitors, checkout places orders atomically so stock can never go negative under concurrent purchases, and prices are stored as integer cents to avoid floating-point rounding.',
      'Next.js Server Components query PostgreSQL through Prisma directly, so there is no separate API layer to keep in sync with the frontend. The one place that does need an endpoint is the AI copywriter: an admin form posts a product name and keywords to a route handler that validates with Zod and calls Google Gemini. The browser never talks to Gemini, so the API key stays server-side and out of the client bundle.',
      'Shipped with the practices I would want on a team project: Conventional Commits, Husky and lint-staged running ESLint and Prettier pre-commit, versioned Prisma migrations rather than ad-hoc schema edits, and GitHub Actions running lint, typecheck, and tests on every push.',
    ],
    technologies: [
      'TypeScript',
      'Next.js 16',
      'React',
      'PostgreSQL',
      'Prisma',
      'Tailwind CSS',
      'Google Gemini',
      'Vitest',
      'Playwright',
      'Docker',
      'GitHub Actions',
      'Vercel',
    ],
    link: 'https://github.com/ouardaq/sweet-nothing',
    link_deployed: 'https://sweet-nothing-tawny.vercel.app',
    features: [
      'Server-rendered product catalogue with category filtering and sorting driven by URL state',
      'Product detail pages with a buy box, related items, and proper 404 handling',
      'Cart backed by guest sessions, so items persist before sign-up',
      'Authentication and authorization, with the admin area gated in production',
      'Atomic order placement — stock is decremented inside the same transaction that creates the order',
      'AI description generator that drafts boutique-style copy from a product name and keywords',
    ],
    challenges: [
      'Making checkout safe under concurrency: two shoppers buying the last item at the same moment must not both succeed, which meant placing the stock check and the order write in one database transaction rather than reading then writing.',
      'Deciding against a separate Python service for the AI work. The project was already committed to TypeScript end to end, and the Gemini call is a single HTTP request — not local model inference — so a second codebase would have bought two type systems and an HTTP boundary for no benefit.',
      'Keeping money exact. Storing prices as floats introduces rounding errors that surface once you start summing line items, so amounts are integer cents throughout and formatted only at the edge.',
    ],
    role: 'Sole developer — design, schema, application code, tests, CI, and deployment',
    duration: 'July 2026 – present',
    impact:
      'My most complete end-to-end project: typed from database to browser, containerized, tested at both the unit and browser level, and deployed.',
  },
  {
    slug: 'gameshelf',
    title: 'GameShelf',
    description:
      'A game backlog tracker with a FastAPI and PostgreSQL backend, RAWG catalogue integration, and a Next.js frontend. Built test-first, against real Postgres.',
    detailedDescription: [
      'An application for tracking which games you own, which you are playing, and what you thought of them once you finished — shelves, reviews, and a searchable catalogue pulled from the RAWG games API.',
      'The interesting work is in the test suite. The models use JSONB columns and a native Postgres enum, and the invariants most worth testing are the ones the database enforces, so testing against SQLite would have exercised a schema the application never actually runs on. Instead every test runs against real PostgreSQL, inside an outer transaction that is rolled back afterwards, with SQLAlchemy’s create_savepoint join mode so code under test can call commit() for real — CHECK constraints fire, cascades happen, defaults apply — without leaking rows into the next test.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
      'Pydantic',
      'pytest',
      'Next.js',
      'TypeScript',
      'Docker',
      'Redis',
      'GitHub Actions',
    ],
    link: 'https://github.com/ouardaq/GameShelf',
    features: [
      'User accounts with hashed credentials and token authentication',
      'Personal shelves — owned, playing, completed, backlog',
      'Reviews and ratings tied to shelf entries',
      'Game catalogue sourced from the RAWG API',
      'Versioned schema migrations via Alembic',
      'CI running ruff and the full test suite against a live Postgres service container',
    ],
    challenges: [
      'Test isolation without giving up realism. Rolling back an outer transaction per test keeps runs independent, but naively that also swallows the application’s own commit() calls; savepoint join mode was what let both be true at once.',
      'Guarding the test database. The suite creates its database on demand, which is convenient right up until someone points it at a real one — so the fixture refuses to run if the target database name is not the expected test name.',
    ],
    role: 'Sole developer',
    duration: 'April 2026 – present',
  },
  {
    slug: 'portfolio-windows-xp',
    title: 'Portfolio — Windows XP Edition',
    description:
      'My portfolio rebuilt as a Windows XP desktop: a BIOS boot sequence, draggable and resizable windows, and a working command prompt you read my CV through.',
    detailedDescription: [
      'A portfolio you navigate by typing. The page boots through a BIOS POST screen and the XP splash, then drops you onto a desktop with a Command Prompt, an MSN Messenger window, and a résumé viewer — each one draggable, resizable, minimizable, and stacked by a real z-order.',
      'The window manager is a custom hook rather than a library. Focusing a window bumps a monotonic counter instead of reshuffling the stack, so raising a window is constant-time and z-indices never need normalising. Dragging and resizing are two more hooks written from scratch.',
      'The terminal implements twenty commands with TAB autocomplete and arrow-key history. Its output is a discriminated union of line types — headings, key/value rows, job entries, rules, spacers — so the renderer switches on the variant and the compiler catches any case I forget to handle.',
    ],
    technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Vercel'],
    link: 'https://github.com/ouardaq/portfolio-windowsXP',
    link_deployed: 'https://portfolio-windows-xp-omega.vercel.app',
    features: [
      'Three-stage boot sequence — BIOS POST, XP splash, fade to desktop',
      'Draggable, resizable windows with a taskbar, Start button, and system tray',
      'Command Prompt with 20 commands, TAB completion, and command history',
      'Two CRT colour schemes, green and amber',
      'A Blue Screen of Death — type `bsod`; it is a feature, not an error',
    ],
    role: 'Sole developer',
    duration: 'May 2026',
  },
  {
    slug: 'expense-tracker',
    title: 'Expense Tracker',
    description:
      'A native Android app for logging personal spending. Multiple accounts on one device, each with private records, a category breakdown chart, and searchable history.',
    detailedDescription: [
      'Written in Java against the Android SDK directly — no Room, no Retrofit, no dependency injection framework — so the data layer, the lifecycle handling, and the UI are all explicit rather than generated.',
      'Everything runs offline against a local SQLite database. Expenses are scoped to their owner by a foreign key with cascade delete, so two accounts sharing a phone never see each other’s records. Data access goes through DAOs instead of raw cursors in Activities, and the database helper is a singleton on the application context — holding an Activity context there is a common leak that pins the Activity for the life of the process.',
    ],
    technologies: [
      'Java',
      'Android SDK',
      'SQLite',
      'MPAndroidChart',
      'Material Components',
      'ViewPager2',
      'RecyclerView',
      'Gradle',
    ],
    link: 'https://github.com/ouardaq/ExpenseTracker',
    features: [
      'Per-user accounts with a persisted session',
      'Add, edit, delete, and search expenses across eleven colour-coded categories',
      'Pie chart of spending by category with a ranked breakdown underneath',
      'Filter by category, keyword, and date range',
      'Currency toggle that persists between launches',
      'Dark glass-morphism theme built from custom drawable XML rather than a UI kit',
    ],
    role: 'Sole developer',
    duration: 'May 2026',
  },
  {
    slug: 'gymnet',
    title: 'Gymnet',
    description:
      'An e-commerce store for gym equipment built with Laravel — customer storefront with cart and checkout, plus an admin dashboard for catalogue and order fulfilment.',
    technologies: [
      'PHP',
      'Laravel 10',
      'Jetstream',
      'Livewire',
      'Blade',
      'MySQL',
      'Tailwind CSS',
    ],
    link: 'https://github.com/ouardaq/GymnetApp',
    features: [
      'Paginated catalogue with category browsing, search, and product detail pages',
      'Cart and cash-on-delivery checkout',
      'Admin dashboard with revenue, order, product, and customer totals',
      'Category and product management, and order fulfilment tracking',
      'Registration, email verification, password reset, and two-factor auth via Jetstream',
    ],
    role: 'Sole developer',
    duration: 'May 2025',
  },
  {
    slug: 'steam-analyzer',
    title: 'My Steam Analyzer',
    description:
      'A dashboard over the Steam Web API showing my owned games, total playtime, and a chart of my ten most-played titles.',
    technologies: ['Python', 'Flask', 'JavaScript', 'Chart.js', 'Steam Web API', 'HTML/CSS'],
    link: 'https://github.com/ouardaq/mySteamAnalyzer',
    features: [
      'Flask backend that holds the Steam API key server-side and exposes a small JSON endpoint',
      'Top-ten most-played games visualised with Chart.js',
      'Full owned-games library listing',
      'Responsive layout',
    ],
    role: 'Sole developer',
    duration: 'August 2025',
  },
  {
    slug: 'mars-rover-gallery',
    title: 'Mars Rover Photo Gallery',
    description:
      'Browse real photographs from the surface of Mars, filtered by rover, Martian sol, and onboard camera, via NASA’s Mars Rover Photos API.',
    technologies: ['JavaScript', 'NASA API', 'Tailwind CSS', 'HTML/CSS'],
    link: 'https://github.com/ouardaq/MarsRoverGallery',
    features: [
      'Three rovers — Curiosity, Opportunity, and Spirit',
      'Camera list repopulates per rover, so you only see cameras that rover actually carries',
      'Search by Martian sol rather than Earth date',
      'Photo metadata modal — full camera name, Earth date, sol, and the rover’s landing date',
    ],
    role: 'Sole developer',
    duration: 'August 2025',
  },
  {
    slug: 'earth-from-space',
    title: 'Earth From Space',
    description:
      'Daily full-disc images of Earth from NASA’s EPIC camera aboard the DSCOVR satellite, with the satellite positioning data behind each shot.',
    technologies: ['JavaScript', 'NASA EPIC API', 'HTML/CSS'],
    link: 'https://github.com/ouardaq/EarthAsSeenfromSpace',
    features: [
      'Fetches the most recent EPIC image automatically',
      'Date picker for browsing historical captures',
      'Metadata panel — capture date, centroid coordinates, and DSCOVR satellite position',
    ],
    role: 'Sole developer',
    duration: 'August 2025',
  },
  {
    slug: 'aim-trainer',
    title: 'Aim Trainer',
    description:
      'A Pygame aim-training game — click berries as they grow and shrink on screen before they disappear, against a timer.',
    technologies: ['Python', 'Pygame'],
    link: 'https://github.com/ouardaq/aimTrainer',
    features: [
      'Targets that appear, grow, and shrink, rewarding reaction time',
      'Score and miss tracking with an end-of-round summary',
      'Custom cursor and a pastel visual theme',
    ],
    role: 'Sole developer',
    duration: 'June 2025',
  },
];

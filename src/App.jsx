import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

const projects = [
  {
    id: 'doodle-jump',
    name: 'Doodle Jump Clone',
    shortDesc: 'A simple Java-based version of the classic Doodle Jump game.',
    details: 'Built with Java Swing. Includes platform generation, collision detection, and scoring system.',
    demoLink: '',
    github: 'https://github.com/yourusername/doodle-jump-clone',
  },
  {
    id: 'money-tracker',
    name: 'Money Tracker',
    shortDesc: 'A personal finance tracker desktop app in Java.',
    details: 'Tracks expenses and income. Built with JavaFX and file-based storage.',
    demoLink: '',
    github: 'https://github.com/yourusername/money-tracker',
  },
  {
    id: 'qr-encoder',
    name: 'QR Encoder',
    shortDesc: 'Generate QR codes from any input using Python.',
    details: 'Uses qrcode and Streamlit to create a user-friendly interface. Hosted demo available.',
    demoLink: '',
    github: 'https://github.com/yourusername/qr-encoder',
  },
];

function Home() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-4xl font-bold">Hi, I'm Tobias</h1>
      <p className="text-lg">Welcome to my portfolio! I'm a developer who loves building cool projects with Java, Python, and more. Explore my work and feel free to reach out!</p>
    </div>
  );
}

function Projects() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <div className="hover:shadow-lg p-4 border rounded-lg transition duration-200">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-sm text-gray-600">{project.shortDesc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="p-8">Project not found.</div>;

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-3xl font-bold">{project.name}</h2>
      <p>{project.details}</p>
      <div className="space-x-4">
        {project.github && <a href={project.github} target="_blank" className="text-blue-600 underline">GitHub</a>}
        {project.demoLink && <a href={project.demoLink} target="_blank" className="text-green-600 underline">Live Demo</a>}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="bg-gray-100 p-4 flex justify-between">
        <Link to="/" className="text-xl font-semibold">Tobias' Portfolio</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

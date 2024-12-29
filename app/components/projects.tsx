function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

type Project = {
  title: string;
  description: string;
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "TicketMango",
    description:
      "Flexible and simple ticket management system for shuttle services.",
    link: "https://ticketmango.dev",
    github: "https://github.com/meme8383/ticketmango",
  },
  {
    title: "Meepo Skateboard ARGB",
    description: "Custom PCB for ARGB control and power on Meepo V3s.",
    github: "https://github.com/meme8383/board-lights",
  },
];

export function Projects() {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, index) => (
        <div className="flex flex-col">
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            {project.title}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
          <ul className="font-sm mt-1 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
            {project.link && (
              <li>
                <a
                  className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/meme8383"
                >
                  <ArrowIcon />
                  <p className="ml-2 h-7">link</p>
                </a>
              </li>
            )}
            {project.github && (
              <li>
                <a
                  className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/eduard-tanase/"
                >
                  <ArrowIcon />
                  <p className="ml-2 h-7">github</p>
                </a>
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

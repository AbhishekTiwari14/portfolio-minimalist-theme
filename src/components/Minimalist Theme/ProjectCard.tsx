import { colorPalette } from "../../lib/colorPalette"
import { Palette } from "../../types"

export default function ProjectCard({
  title,
  description,
  keyFeatures,
  technologies,
  demoLink,
  codeLink,
  palette,
}: {
  title: string
  description: string
  keyFeatures: string[]
  technologies: string[]
  demoLink: string
  codeLink: string
  palette: Palette
}) {
  const colors = colorPalette[palette]
  return (
    <div
      className={`bg-slate-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:translate-y-[-5px] border-t-4 ${colors?.bdr} my-5`}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">
          {title ? title : "Movie Ticket Booking App"}
        </h3>
        <div
          className="text-gray-50 mb-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="text-slate-300 text-sm space-y-2 pt-2 py-6">
          <h3 className="font-medium text-cyan-300">Key Features:</h3>
          <ul className="list-disc pl-5 space-y-1">
            {keyFeatures.map((_, index) => (
              <li key={index}>{keyFeatures[index]}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`flex items-center rounded-full ${colors?.btn} px-3 py-1 text-xs font-medium leading-5`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-6 mt-6 ml-2">
          <a
            href={demoLink ? demoLink : "/"}
            target="_blank"
            className="text-teal-400 font-medium hover:text-teal-600"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Interface / External_Link">
                  <path
                    id="Vector"
                    d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
          <a
            href={codeLink ? codeLink : "/"}
            target="_blank"
            className="text-teal-400 font-medium hover:text-teal-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

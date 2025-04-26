import { colorPalette } from "../../lib/colorPalette"
import { Palette } from "../../types"

export default function ExperienceCard({
  fromYear,
  toYear,
  designation,
  company,
  workSummary,
  palette,
  technologies,
}: {
  fromYear: string
  toYear: string
  designation: string
  company: string
  workSummary: string
  palette: Palette
  technologies: string[]
}) {
  const colors = colorPalette[palette]
  return (
    <div
      className={`flex flex-col lg:flex-row lg:gap-8 lg:p-4 ${colors?.cardHover} hover:shadow-md hover:cursor-pointer group rounded-md justify-start`}
    >
      <p className={`${colors?.secondary} text-sm font-light whitespace-nowrap`}>
        {fromYear ? fromYear : "2024"}-{toYear ? toYear : "PRESENT"}
      </p>
      <div className="flex flex-col justify-between gap-4">
        <p
          className={`font-semibold text-md ${colors?.primary} ${colors?.groupHover} lg:text-lg`}
        >
          {designation
            ? designation
            : "Senior Frontend Engineer, Accessibility"}{" "}
          · {company ? company : "Klaviyo"}
        </p>
        <div
          className={`${colors?.secondary} group-hover:${colors?.primary} text-sm`}
          dangerouslySetInnerHTML={{ __html: workSummary }}
        />

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <button
              key={tech}
              className={`flex items-center rounded-full ${colors?.btn} px-3 py-1 text-xs font-medium leading-5`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

import { site } from "@/content/site";
import Copy, { isTodo } from "./Copy";

// Email, LinkedIn, and GitHub. The phone number stays off the site on purpose.
export default function ContactLinks({ className }) {
  return (
    <ul className={className}>
      <li>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </li>
      <li>
        <a href={site.linkedin}>{site.linkedinLabel}</a>
      </li>
      <li>
        {isTodo(site.github) ? (
          <Copy text={site.github} />
        ) : (
          <a href={site.github}>{site.githubLabel}</a>
        )}
      </li>
    </ul>
  );
}

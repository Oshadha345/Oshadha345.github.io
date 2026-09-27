import { FileDown, Github, GraduationCap, Linkedin, Mail, Smile } from "lucide-react";

function Orcid({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9.25" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <text x="12" y="15.6" textAnchor="middle" fontSize="9.5" fontWeight="700" fontFamily="var(--font-display)" fill="currentColor">iD</text>
    </svg>
  );
}

export const profileIcons = {
  Email: Mail,
  "Google Scholar": GraduationCap,
  GitHub: Github,
  ORCID: Orcid,
  "Hugging Face": Smile,
  LinkedIn: Linkedin,
  CV: FileDown,
};

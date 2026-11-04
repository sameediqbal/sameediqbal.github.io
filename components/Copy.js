// Renders text from the content files, and marks anything starting with "TODO:".
export function isTodo(text) {
  return typeof text === "string" && text.startsWith("TODO:");
}

export default function Copy({ text }) {
  return isTodo(text) ? <span className="todo">{text}</span> : text;
}

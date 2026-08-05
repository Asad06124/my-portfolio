import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ReactNode } from "react";

type ChatMarkdownProps = {
  content: string;
  variant?: "assistant" | "user";
};

const components: Components = {
  h1: ({ children }) => (
    <h3 className="chat-md-h chat-md-h1">{children}</h3>
  ),
  h2: ({ children }) => (
    <h3 className="chat-md-h chat-md-h2">{children}</h3>
  ),
  h3: ({ children }) => (
    <h4 className="chat-md-h chat-md-h3">{children}</h4>
  ),
  h4: ({ children }) => (
    <h4 className="chat-md-h chat-md-h4">{children}</h4>
  ),
  h5: ({ children }) => (
    <h5 className="chat-md-h chat-md-h4">{children}</h5>
  ),
  h6: ({ children }) => (
    <h5 className="chat-md-h chat-md-h4">{children}</h5>
  ),
  p: ({ children }) => <p className="chat-md-p">{children}</p>,
  strong: ({ children }) => <strong className="chat-md-strong">{children}</strong>,
  em: ({ children }) => <em className="chat-md-em">{children}</em>,
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="chat-md-a"
      >
        {children}
      </a>
    );
  },
  ul: ({ children }) => <ul className="chat-md-ul">{children}</ul>,
  ol: ({ children }) => <ol className="chat-md-ol">{children}</ol>,
  li: ({ children }) => <li className="chat-md-li">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="chat-md-blockquote">{children}</blockquote>
  ),
  hr: () => <hr className="chat-md-hr" />,
  code: ({ className, children }) => {
    const isBlock = Boolean(className?.includes("language-"));
    if (isBlock) {
      return <code className="chat-md-code-block-inner">{children}</code>;
    }
    return <code className="chat-md-code-inline">{children}</code>;
  },
  pre: ({ children }) => <pre className="chat-md-pre">{children}</pre>,
  table: ({ children }) => (
    <div className="chat-md-table-wrap">
      <table className="chat-md-table">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="chat-md-thead">{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr className="chat-md-tr">{children}</tr>,
  th: ({ children }) => <th className="chat-md-th">{children}</th>,
  td: ({ children }) => <td className="chat-md-td">{children}</td>,
};

function linkifyBareEmails(text: string): string {
  // Convert bare emails to mailto links without clobbering existing markdown links.
  return text.replace(
    /(^|[\s(])([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(?=$|[\s).,!?])/g,
    "$1[$2](mailto:$2)",
  );
}

export default function ChatMarkdown({
  content,
  variant = "assistant",
}: ChatMarkdownProps): ReactNode {
  if (!content.trim()) {
    return null;
  }

  return (
    <div className={`chat-md chat-md--${variant}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {linkifyBareEmails(content)}
      </ReactMarkdown>
    </div>
  );
}

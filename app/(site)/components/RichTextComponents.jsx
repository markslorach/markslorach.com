export const RichTextComponents = {
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
  },

  block: {
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2 className="my-5">{children}</h2>,

    normal: ({ children }) => <p className="text-white/70 text-base font-light tracking-wide pt-4">{children}</p>,

    blockquote: ({ children }) => (
      <blockquote className="border-l-blue-400">{children}</blockquote>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="list-disc ml-6 text-white/70 mt-2.5">{children}</li>,
  },
};

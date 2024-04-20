export const commaFormat = (number: string | number) => {
    // toLocalString only works with numbers so cast number to a number data type
    // if it's not a number
    if (typeof number === "undefined") return number;
    if (typeof number === "string") {
      // try to cast to number
      number = Number(number);
      if (Number.isNaN(number)) {
        // can't be casted, return as it is
        return number;
      }
    }
    return number.toLocaleString();
  };

  export const markdownToHtml = (markdown: string): string => {
    markdown = markdown?.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    markdown = markdown?.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    markdown = markdown?.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    markdown = markdown?.replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>");
    markdown = markdown?.replace(/__(.*)__/gim, "<strong>$1</strong>");

    markdown = markdown?.replace(/\*(.*)\*/gim, "<em>$1</em>");
    markdown = markdown?.replace(/_(.*)_/gim, "<em>$1</em>");

    markdown = markdown?.replace(
        /\[([^\[]+)\]\(([^\)]+)\)/gim,
        '<a href="$2">$1</a>'
    );

    markdown = markdown?.replace(/^\s*\n\*(.*)/gim, "<ul>\n<li>$1</li>\n</ul>");
    markdown = markdown?.replace(/^\s*\n-(.*)/gim, "<ul>\n<li>$1</li>\n</ul>");
    markdown = markdown?.split("\n</ul>\n<ul>").join("\n");

    markdown = markdown?.replace(
        /^\s*\n\d+\.(.*)/gim,
        "<ol>\n<li>$1</li>\n</ol>"
    );
    markdown = markdown?.split("\n</ol>\n<ol>").join("\n");

    markdown = markdown?.replace(/\n/gim, "<br />");

    return markdown;
};

// Example usage of the component

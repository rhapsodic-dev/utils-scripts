/**
 * Converts markdown-style links and plain URLs in a text string into HTML anchor elements.
 *
 * The function recognizes two types of links:
 * 1. Markdown-style links in the format [text](url).
 * 2. Plain URLs starting with http or https.
 *
 * Both types of links are converted into anchor (`<a>`) elements with the attributes
 * `target="_blank"` and `rel="noopener noreferrer"` for security.
 *
 * @param {string} text - The input text containing markdown links or plain URLs.
 * @returns {string} - The input text with links converted to HTML anchor elements.
 *
 * @example
 * const inputText = "Check this [link](https://example.com) and this one: https://another-example.com.";
 * const outputText = linkify(inputText);
 * console.log(outputText);
 * // Output: 'Check this <a href="https://example.com" target="_blank" rel="noopener noreferrer">link</a> and this one: <a href="https://another-example.com" target="_blank" rel="noopener noreferrer">https://another-example.com</a>.'
 */
export function linkify(text: string): string {
  const markdownLinkRegex = /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g;
  const plainLinkRegex = /(?<!["'\]])(https?:\/\/[^\s#$./?].\S*[^\s!),.:;?])/g;

  return text
    .replaceAll(markdownLinkRegex, (_, content, url) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${content}</a>`)
    .replaceAll(plainLinkRegex, (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`);
}

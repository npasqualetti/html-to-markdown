import { NodeHtmlMarkdown } from 'node-html-markdown';

export const TranslateStream = async (inputCode: string) => {
  const markdown = NodeHtmlMarkdown.translate(`${inputCode}`);
  return markdown;
};

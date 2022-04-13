import VueMarkdownEditor, { xss } from '@kangc/v-md-editor'
export function md2text(mdText: string) {
  const html = xss.process(VueMarkdownEditor.vMdParser.themeConfig.markdownParser.render(mdText))

  return html.replace(/<[^>]+>/g, '')
}

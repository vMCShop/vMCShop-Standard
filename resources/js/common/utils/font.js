export default function fontFace(
    name,
    src,
    fontWeight = 'normal',
    fontStyle = 'normal'
) {
    return `
        @font-face{
            font-family: "${name}";
            src: url(${require('@font/' + src + '.ttf')}) format("truetype");

            font-style: ${fontStyle};
            font-weight: ${fontWeight};
        }
    `;
}

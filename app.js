const htmlPage = document.documentElement;
const selfClosingTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'];

function printElementTagsWithIndentation(element, depth = 0) {
    const elementArr = Array.from(element.children);
    const indentation = '   '.repeat(depth);
    const attributes = Array.from(element.attributes)
        .map(attr => `${attr.name}="${attr.value}"`)
        .join(' ');

    const openingTag = `<${element.tagName.toLowerCase()}${attributes ? " " + attributes : ""}>`;

    if (elementArr.length === 0 && !selfClosingTags.includes(element.tagName.toLowerCase())) {
        console.log(`${indentation}${openingTag}</${element.tagName.toLowerCase()}>`);
    } else {
        console.log(`${indentation}${openingTag}`);

        elementArr.forEach(child => {
            printElementTagsWithIndentation(child, depth + 1);
        });

        if (!selfClosingTags.includes(element.tagName.toLowerCase())) {
            console.log(`${indentation}</${element.tagName.toLowerCase()}>`);
        }
    }
}


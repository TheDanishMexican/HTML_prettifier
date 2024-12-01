const htmlPage = document.documentElement;

function printElementTagsWithIndentation(element, depth = 0) {
    const elementArr = Array.from(element.children);
    const indentation = '   '.repeat(depth);
    const attributes = Array.from(element.attributes)
        .map(attr => `${attr.name}="${attr.value}"`)
        .join(' ');

    console.log(`${indentation}<${element.tagName.toLowerCase()}${attributes ? " " + attributes : ""}>`);


    elementArr.forEach(child => {
        printElementTagsWithIndentation(child, depth + 1);
    });
}



const mainContainer = document.querySelector("#root")

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)

    if (reactElement.children) {
        domElement.textContent = reactElement.children
    }

    if (reactElement.props) {
        for (const [key, value] of Object.entries(reactElement.props)) {
            domElement.setAttribute(key, value)
        }
    }

    container.appendChild(domElement)
}

// Call the customRender function
customRender(reactElement, mainContainer)

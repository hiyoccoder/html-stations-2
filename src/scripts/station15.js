function displayList() {
    const list = document.querySelector('#fruits');
    const items = document.querySelectorAll('#fruits p');
    const ul_element = document.createElement('ul'); // またはlistElement
    items.forEach(item => {
        const li_element = document.createElement('li');
        li_element.textContent = item.textContent;
        ul_element.appendChild(li_element);
    });
    list.replaceWith(ul_element);
}
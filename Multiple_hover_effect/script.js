const items = document.querySelectorAll('.list .item');

items.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        items.forEach(i => i.classList.remove('hover', 'prev1', 'prev2'));

        item.classList.add('hover');
        if (index > 0) {
            items[index - 1].classList.add('prev1');
        }
        if (index > 1) {
            items[index - 2].classList.add('prev2');
        }
    });

    item.addEventListener('mouseout', () => {
        items.forEach(i => i.classList.remove('hover', 'prev1', 'prev2'));
    });
});
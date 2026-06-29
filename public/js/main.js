document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggle-btn');
    const list = document.getElementById('item-list');

    btn.addEventListener('click', () => {
        if (list.style.display === 'none') {
            list.style.display = 'block';
            btn.textContent = 'ซ่อนรายการ';
        } else {
            list.style.display = 'none';
            btn.textContent = 'แสดงรายการ';
        }
    });
});
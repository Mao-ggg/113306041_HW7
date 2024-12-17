// 編輯名稱功能
const editable = document.getElementById('editable');
const editButton = document.getElementById('editButton');

editButton.addEventListener('click', () => {
    const isEditable = editable.contentEditable === 'true';
    editable.contentEditable = !isEditable;
    editButton.textContent = isEditable ? 'Edit' : 'Save';
    if (!isEditable) editable.focus();
});

// 添加音樂功能
const addMusicButton = document.getElementById('addMusicButton');
const musicArea = document.getElementById('musicArea');

addMusicButton.addEventListener('click', () => {
    const link = prompt('請輸入音樂連結:');
    const name = prompt('請輸入音樂名稱:');

    if (link && name) {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="${link}" target="_blank">
                <img src="applemusiclogo.jpg" alt="音樂圖片">
                <span>${name}</span>
            </a>
        `;
        musicArea.appendChild(li);
    } else {
        alert('請填寫所有欄位！');
    }
});

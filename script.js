//your JS code here. If required.
const color = document.getElementById('colorSelect')
const removeCol = document.querySelector('input[type="button"]')

removeCol.addEventListener('click', () => {
	const selectedIndex = color.selectedIndex;
    if (selectedIndex !== -1) {
        color.remove(selectedIndex);
    }
})

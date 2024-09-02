//your JS code here. If required.
const color = document.getElementById('colorSelect')
const removeCol = document.querySelector('input[type="button"]')

removeCol.addEventListener('click', () => {
	const select = color.select;

	if(select !== -1) {
		color.remove(select);
	}
})

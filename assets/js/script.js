// DOM elements
const shareBtn = document.getElementById('share-btn')
const shareBtnContent = document.getElementById('share-btn-content')
const shareArrow = document.getElementById('share-arrow')

// Interacting with share button element
shareBtn.addEventListener('click', () => {
    if(shareBtnContent.classList.contains('hidden') && shareArrow.classList.contains('hidden')){
        shareBtnContent.classList.remove('hidden')
        shareArrow.classList.remove('hidden')
    } else{
        shareBtnContent.classList.add('hidden')
        shareArrow.classList.add('hidden')
    }
})
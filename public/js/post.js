newCommentFormEl = document.getElementById('new-comment');

newCommentFormEl.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const textAreaEl = document.getElementById('new-comment-content')
    const contentEl = textAreaEl.value
    const post_id = textAreaEl.getAttribute('data-post_id')

    if(contentEl){
    const resp = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ content:contentEl, post_id }),
        headers: { 'Content-Type': 'application/json' }
    })

    if(resp.ok){
        console.log(resp);
        location.reload();
    } else {
        console.log(resp)
        alert("Sorry, we couldn't create your comment")
    }
    }

});
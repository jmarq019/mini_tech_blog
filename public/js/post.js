newCommentFormEl = document.getElementById('new-comment');

newCommentFormEl.addEventListener('submit', async (e)=>{
    e.preventDefault()

    const contentEl = document.getElementById('new-comment-content').value

    const resp = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ content:contentEl }),
        headers: { 'Content-Type': 'application/json' }
    })

    if(resp.ok){
        console.log(resp);
        location.reload();
    } else {
        console.log(resp)
        alert("Sorry, we couldn't create your comment")
    }

});
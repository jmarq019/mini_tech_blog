newPostFormEl = document.getElementById('new-post-form');

newPostFormEl.addEventListener('submit', async (e)=>{
    e.preventDefault()

    const titleEl = document.getElementById('new-post-title').value
    const contentEl = document.getElementById('new-post-content').value

    const resp = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title:titleEl, content:contentEl}),
        headers: { 'Content-Type': 'application/json' }
    })

    if(resp.ok){
        console.log(resp);
        location.replace('/profile')
    } else {
        console.log(resp)
        alert("Sorry, we couldn't create your post")
    }

});

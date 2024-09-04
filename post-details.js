const post = JSON.parse(localStorage.getItem(`post`));
const main = document.createElement(`main`);
const section = document.createElement(`section`)
document.body.append(main, section);
for (const key in post) {
    const keyOfPost = document.createElement(`h2`);
    keyOfPost.innerText = key[0].toUpperCase() + key.slice(1) + `: ${post[key]}`;
    main.append(keyOfPost);
}
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(comments => comments.json())
    .then(comments => {
        for (const comment of comments) {
            const div = document.createElement(`div`);
            for (const key in comment){
                const keyOfComment = document.createElement(`h3`);
                keyOfComment.innerText = key[0].toUpperCase() + key.slice(1) + `: ${comment[key]}`;
                div.append(keyOfComment)
            }
            section.append(div)
        }
    })
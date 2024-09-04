// Отримуємо дані з локального сховища та створюємо обгортки
const post = JSON.parse(localStorage.getItem(`post`));
const main = document.createElement(`main`);
const section = document.createElement(`section`)
document.body.append(main, section);
// Для кожного ключа формуємо заголовок та поміщаємо в main
for (const key in post) {
    const keyOfPost = document.createElement(`h2`);
    keyOfPost.innerText = key[0].toUpperCase() + key.slice(1) + `: ${post[key]}`;
    main.append(keyOfPost);
}
// Отримуємо дані про коментарі
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(comments => comments.json())
    .then(comments => {
        // Для кожного коментаря створюємо окрему коробку
        for (const comment of comments) {
            const div = document.createElement(`div`);
            // Для кожного ключа створюємо заголовок та кладемо його в коробку
            for (const key in comment){
                const keyOfComment = document.createElement(`h3`);
                keyOfComment.innerText = key[0].toUpperCase() + key.slice(1) + `: ${comment[key]}`;
                div.append(keyOfComment)
            }
            // ...і коробки в коробку
            section.append(div)
        }
    })
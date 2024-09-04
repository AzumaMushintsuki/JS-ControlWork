const user = JSON.parse(localStorage.getItem(`user`));
const main = document.createElement(`main`);
document.body.appendChild(main);
for (const key in user) {
    const keyOfUser = document.createElement(`h2`);
    keyOfUser.innerText = key[0].toUpperCase() +key.slice(1) + ':';
    main.append(keyOfUser);
    if (typeof user[key] !== `object`){keyOfUser.innerText +=` ${user[key]}`;}
    else{
        for (const keys in user[key]){
            const keyOfKey = document.createElement(`h2`);
            keyOfKey.innerText = keys[0].toUpperCase() +keys.slice(1) + `:`;
            keyOfKey.classList.add(`second-stage`);
            main.append(keyOfKey);
            if (typeof user[key][keys] !== `object`){keyOfKey.innerText +=`  ${user[key][keys]}`;}
            else {
                for (const nextStageKey in user[key][keys]){
                    const nextKey = document.createElement(`h2`);
                    nextKey.innerText = nextStageKey[0].toUpperCase() + nextStageKey.slice(1) + `:  ` + user[key][keys][nextStageKey];
                    nextKey.classList.add(`third-stage`)
                    main.append(nextKey);
                }
            }
        }

    }

}
const button = document.createElement(`button`);
button.innerText = `Posts of current user`;
let counter = 0
const section = document.createElement(`section`)
button.onclick = function (){
    if (counter < 1){
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(posts => posts.json())
            .then(posts => {
                const container = document.createElement(`div`);
                container.classList.add(`container`);
                for (const post of posts) {
                    const postDiv = document.createElement(`div`);
                    postDiv.classList.add(`post`);
                    const title = document.createElement(`p`);
                    title.innerText = post.title;
                    const button = document.createElement(`button`)
                    button.innerText = `Read more`;
                    button.onclick = function (){
                        localStorage.setItem(`post`, JSON.stringify(post));
                        location.href = `post-details.html`;
                    }
                    postDiv.append(title, button);
                    container.appendChild(postDiv);
                }
                section.appendChild(container);
                counter++;
            })
    }
}
section.append(button);
document.body.appendChild(section);
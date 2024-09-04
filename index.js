fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(users => users.json())
    .then(users => {
        const main = document.createElement(`main`)
        document.body.appendChild(main)
        for (const user of users) {
            const userDiv = document.createElement(`div`);
            userDiv.classList.add(`user`);
            const id = document.createElement(`h3`);
            id.innerText = `Id: ${user.id}`;
            const name = document.createElement(`h2`);
            name.innerText = `${user.name}`;
            const button = document.createElement(`button`);
            button.innerText = `User Info`;
            button.onclick = function () {
                localStorage.setItem(`user`, JSON.stringify(user));
                location.href = `user-details.html`
            }
            userDiv.append(id, name, button);
            main.appendChild(userDiv);

        }
    })
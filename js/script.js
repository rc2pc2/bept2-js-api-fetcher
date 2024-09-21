// Make a request for a user with a given ID
axios.get('http://localhost:8080/api/books')
    .then(function (response) {
        console.log(response.data);

        const wrapperElement = document.querySelector("section#books-container");

        response.data.forEach((book) => {
            const newBookCard = document.createElement("article");
            newBookCard.classList.add("col-3", "card", "mb-3");
            newBookCard.innerHTML = ` 
                <img src="https://images.unsplash.com/photo-1489421471208-251cc68284b8?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="Old book image">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${book.author}</h6>
                    <p class="card-text"> ISBN: ${book.isbn} </p>
                </div>`;

            wrapperElement.appendChild(newBookCard);
        });

    })
    .catch(function (error) {
        console.log(error);
    });

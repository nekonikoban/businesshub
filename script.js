    document.addEventListener('DOMContentLoaded', function () {
        const pageTransitionElements = document.querySelectorAll('.page-transition');
        pageTransitionElements.forEach(element => {
            element.classList.add('active');
        });

        // Sample data for articles
        const articlesData = [
            {
                title: 'Article 1',
                imageSrc: './assets/carousel_1.jpg',
                description: 'Short description of Article 1.',
                link: 'article1.html',
                comments: 10,
                stars: 9
            },
            {
                title: 'Article 2',
                imageSrc: './assets/carousel_1.jpg',
                description: 'Short description of Article 2.',
                link: 'article2.html',
                comments: 10,
                stars: 5
            },
            {
                title: 'Article 3',
                imageSrc: './assets/carousel_1.jpg',
                description: 'Short description of Article 3.',
                link: 'article3.html',
                comments: 1,
                stars: 1
            },
            {
                title: 'Article 4',
                imageSrc: './assets/carousel_1.jpg',
                description: 'Short description of Article 4.',
                link: 'article4.html',
                comments: 5,
                stars: 10
            },
            {
                title: 'Article 5',
                imageSrc: './assets/carousel_1.jpg',
                description: 'Short description of Article 5.',
                link: 'article5.html',
                comments: 0,
                stars: 7
            },
            {
                title: 'Article 6',
                imageSrc: './assets/carousel_1.jpg',
                description: 'Short description of Article 6.',
                link: 'article6.html',
                comments: 0,
                stars: 43
            },
        ];

        // Function to create an article element
        function createArticle(articleData) {
            const articleBlock = document.createElement('div');
            articleBlock.className = 'col-md-4';
            articleBlock.innerHTML = `
                <div class="article-block">
                    <h3>${articleData.title}</h3>
                    <img src="${articleData.imageSrc}" class="img-fluid" alt="${articleData.title} Image">
                    <p>${articleData.description}</p>
                    <div class="comment-review-icons">
                        <div>
                            <svg class="bi bi-chat-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1.535l-.977 1.955a1 1 0 0 1-1.789.21L7.61 12H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h9zM2 4v8H1a1 1 0 0 0 0 2h3.61l1.553 1.553a1 1 0 0 0 1.789-.21L10.348 12H14a1 1 0 0 0 1-1V4H2z" />
                            </svg>
                            <span>${articleData.comments}</span>
                        </div>
                        <div>
                            <svg class="bi bi-star-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8 .7l1.1 3.3h3.6l-2.9 2.3 1.1 3.3-2.9-2.2-2.9 2.2 1.1-3.3-2.9-2.3h3.6L8 .7zm0 2.8L6.3 5.8 2 6.4l2.2 1.9L4.1 11l2.9-2.2 2.9 2.2.7-2.2 3-2.5-2.3-.2L8 3.5z" />
                            </svg>
                            <span>${articleData.stars}</span>
                        </div>
                    </div>
                    <a href="${articleData.link}" class="btn btn-custom">Read More</a>
                </div>
            `;
            return articleBlock;
        }

        // Get the article container and row
        const articleContainer = document.getElementById('articleContainer');
        const articleRow = document.getElementById('articleRow');

        // Loop through articlesData and append articles to the row
        articlesData.forEach(articleData => {
            const articleElement = createArticle(articleData);
            articleRow.appendChild(articleElement);
        });
    });
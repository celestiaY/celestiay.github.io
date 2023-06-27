fetch('dataset_instagram-scraper_2023-06-27_17-09-00-515.json')
    .then(response => response.json())
    .then(data => {
        const jsonContainer = document.getElementById('json-container');
        jsonContainer.textContent = JSON.stringify(data, null, 4);
    })
    .catch(error => console.error('Error:', error));

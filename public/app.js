
var api_url = 'http://localhost:3000/';

function createPostItem(data) {
    let item = `
      <div class="card card-body bg-light mb-4">
        <div>${data.username}</div>
        <div>${data.email}</div>
        <div>${data.image}</div>
        <div>${data.text}</div>

      </div>
`;

    return item;
}

  function insertIntoFeed(item) {
    $('#displayUserInput').append(item);
}
    //document.getElementById(feed).append(item);

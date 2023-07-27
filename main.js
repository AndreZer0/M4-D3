
const url="https://api.pexels.com/v1/search?query="

const getData=(query) => {
    fetch(url + query, {
      headers: {
        Authorization: "1siCSFBi4r40h9qoR3vl9BKkvIUflSMbauRbxoGqRWvRER4C5tGqBv9M"
      }
    })

    .then((res) => res.json())
   
   
    .then ((data) => { 
        let foto = document.querySelector(".row")
      console.log(data);

      foto.innerHTML = data.photos.map((photo) => {
        return ` <div class='col col-4'>
                    <div class="card mb-4">
                      <img src='${photo.src.medium}'/>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                              <p>${photo.id}</p>
                             </div>
                        </div>
                      </div>
                  </div>`
                  
      }).join("")
    })
    .catch((err) => console.error(err))

}




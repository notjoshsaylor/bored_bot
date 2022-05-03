

function getActivity(){
    fetch ("http://www.boredapi.com/api/activity/")
        .then(res => res.json())
        .then(data => {
            document.getElementById('idea').textContent = data.activity
            document.getElementById('title').textContent = " 👾  BoredBot  👾 "
            document.body.classList.add("fun")
        })
}

document.getElementById('activity').addEventListener('click', getActivity)
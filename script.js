const profile = document.querySelector("#div-user-card")
const img = document.querySelector("#img-profile")
const btnRandom = document.querySelector("#btn-random")
const name = document.getElementById("p-name");
const bottom = doc.querySelector("#div-loading-card")

btnRandom.onclick = async () =>{
  profile.style.display = "";
  bottom.style.display = "none";
  
  btnRandom.disabled = true

  const resp = await axios.get("https://randomuser.me/api/")
  img.src = resp.data;
  name.src = resp.data.name;
}

img.onload = () =>{
  btnRandom.disabled = false
  profile.style.display = "none";
  bottom.style.display = "";
  setTimeout(()=>{
      img.className = ""
},1000)
}

// 


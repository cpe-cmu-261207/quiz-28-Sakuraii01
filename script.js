const profile = document.querySelector("#div-user-card")
const img = document.querySelector("#img-profile")
const btnRandom = document.querySelector("#btn-random")

btnRandom.onclick = async () =>{
  profile.style.display = "none";
  btnRandom.disabled = true

  const resp = await axios.get("https://randomuser.me/api/")
  img.src = resp.data;
  
}

img.onload = () =>{
  btnRandom.disabled = false
  profile.style.display = "";
  setTimeout(()=>{
      img.className = ""
},1000)
}
// 


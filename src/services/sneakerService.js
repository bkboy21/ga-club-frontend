import Sneakers from "../pages/Sneakers";


//const URL = 'http://localhost:4000/sneakers'
const URL = "https://ga-club.herokuapp.com/sneakers" // for when we deploy

const getSneakers = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const ret = await data;
    return (ret);
}

const getOneSneaker = async (id) => {
    const response = await fetch(URL+'/'+id);
    const data = await response.json();
    const ret = await data;
    return (ret);
}

const createSneak = async (data) => {
  await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(data),
   
  });
  getSneakers();
}



const deleteSneaker = async (id) => {
  await fetch(URL +'/'+ id, {
    method: "DELETE",
  });

  // update list of people
  getSneakers();
}

export {
  getSneakers,
  getOneSneaker,
  createSneak,
  deleteSneaker

}
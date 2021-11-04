

const URL = 'http://localhost:4000/sneakers'
// const URL = "" // for when we deploy

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

export {
  getSneakers,
  getOneSneaker
}
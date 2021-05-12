import request from 'superagent';

const URL = 'https://sheltered-beyond-60460.herokuapp.com/api/mortalkombat';

export async function getMortalKombat() {
  const response = await request.get(URL);
  return response.body;
}

export async function getCharacter(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}

export async function addChar(char) {
  const response = await request.post(URL).send(char);
  return response.body;
}

export async function deleteChar(id) {
  const response = await request.delete(`${URL}/${id}`);
  return response.body;
}

export async function updateCat(char) {
  const response = await request.put(`${URL}/${char.id}`).send(char);
  return response.body;
}
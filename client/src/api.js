const url= "http://localhost:2000/api/v1";
async function getPosts() {
  const response = await fetch(`${url}/posts`);
 return await response.json();
}
async function login(user) {
  const response = await fetch(`${url}/auth`,{
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body : JSON.stringify(user)
  });
 return await response.json();
}

async function register(user) {
  const response = await fetch(`${url}/users`,{
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body : JSON.stringify(user)
  });
 return await response.json();
}
async function createPost(post) {
  const response = await fetch(`${url}/posts`,{
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body : JSON.stringify(post)
  });
 return await response.json();
}
async function getJwt(token) {
  const response = await fetch(`${url}/users/decodeToken?token=${token}`);
 return await response.json();
}
async function updateUser(user) {
  const response = await fetch(`${url}/users`);
 return await response.json();
}
async function getUsers() {
  const response = await fetch(`${url}/users`);
 return await response.json();
}

export{
  getPosts,
  login,
  register,
  createPost,
  getJwt,
  getUsers
}
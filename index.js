require('dotenv').config()
const express = require('express');
const app = express()
const port = 4000

const githubData = {
  "login": "Kaushik28525",
  "id": 189736749,
  "node_id": "U_kgDOC08nLQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/189736749?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Kaushik28525",
  "html_url": "https://github.com/Kaushik28525",
  "followers_url": "https://api.github.com/users/Kaushik28525/followers",
  "following_url": "https://api.github.com/users/Kaushik28525/following{/other_user}",
  "gists_url": "https://api.github.com/users/Kaushik28525/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Kaushik28525/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Kaushik28525/subscriptions",
  "organizations_url": "https://api.github.com/users/Kaushik28525/orgs",
  "repos_url": "https://api.github.com/users/Kaushik28525/repos",
  "events_url": "https://api.github.com/users/Kaushik28525/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Kaushik28525/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Kaushik Anand",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "i am a student who loves to code ",
  "twitter_username": null,
  "public_repos": 14,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-11-26T11:50:24Z",
  "updated_at": "2026-08-03T17:48:32Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
  res.send("<h1>Login Page</h1>" )
})
app.get('/kaush', (req, res) => {
  res.send("<h2>Kaush Page</h2>")
})

app.get('/github', (req, res) => {
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 
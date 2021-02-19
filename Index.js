var githubhook = require('githubhook');
var child_process = require('child_process');
let local_path = "D:/Projects/New_Clone_path"
let tag = "docker_auto_node_server:latest"
let tag_push = "latestV"
let flag =4;
let docker_hb_reponame ="nileshacharya9047/new_docker-123"
// configure listener for github changes
var github = githubhook({/* options */
  host: "0.0.0.0",
  port: 5000,
  path: "/webhost",
  secret: "123456"
});

// listen to push on github on branch master
github.on('push', function (repo, ref, data) {
  // console.log("Repo Name : ", data.repository.name)
  // console.log("Repo full name : ",data.repository.full_name)
  // console.log("Repo owner Name : ", data.repository.owner.name)
  // console.log("Repo URL : ", data.repository.html_url)
  // console.log("Repo Master branchName : ",data.repository.master_branch)
  // console.log("Pusher Name : ", data.pusher.name)
  tag_push = "latestV" + (flag);
  
  console.log("Clone URL : ", data.repository.clone_url)
  child_process.exec(`"D://Projects//image_creation.bat" "${data.repository.clone_url}" "${local_path}" "${tag}" "${tag_push}" "${docker_hb_reponame}"`, function(error, stdout, stderr) {
    console.log(error);
    console.log(stderr);
    console.log(stdout);
  });
});

// listen to github push
github.listen();



/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/
//CODE HERE

const gitDefinition = `Git is a version control system that allows you to work through your directory (create or delete folders/files and move around your directory) without using the GUI`

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = `GitHub is a site that keeps track of files of code and allows you to commit and push your code directly from your code editor`

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

const init = {
    description: `creates and empty repository`,
    code: `git init`
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

const clone = {
    description: `allows you to copy and paste an existing repository into gitbash and then open in vsc`,
    code: `git clone`
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

const status = {
    description: `shows what changes have been saved and what isn't being tracked`,
    code: `git status`
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

const add = {
    description: `adds a change, but isn't saved without committing`,
    code: `git add .`
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

const commit = {
    description: `saves a change to the repository and allows for a comment to be added to keep track of committed changes`,
    code: `git commit -m "comment"`
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE

const addRemote = {
    description: `makes a new connection record to a remote repository`,
    code: `git remote add origin https://github.com/user/repo.git`
}

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/


const push = {
    description: `push publishes a repository to github`,
    code: `git push`
}
//CODE HERE

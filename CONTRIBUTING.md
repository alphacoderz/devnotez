# Contribution Rules :books: :

- Do NOT remove other content.
- Try to keep pull requests small to minimize merge conflicts.
- Don't push `yarn.lock` and `package-lock.json` or `pnpm-lock.yaml` in your commit.

## Getting started 🤩:

- Fork this repo (button on top).
- Clone on your local machine.

        git clone https://github.com/<your_username>/repo_name.git

- Navigate to the project directory. And start coding.

        cd your_cloned_dir

- Add a new remote branch

        git remote add <repo_alias> or origin https://github.com/<YourUsername>/<repoName>.git

- Create a new _branch_ (Always try to work in separated branches)

        git checkout -b <new_branch>

- Add all the changes that you have made

        git add .

- Commit your changes

        git commit -m "{Message}"

- Then push

        git push <remote_repo_tag_name> <new_branch or target_branch>

- Create a new pull request from your forked repository by clicking New-Pull-Request.


## How can you contribute?

> \# Search for issues created in this repo & try to solve them (if not yet).

> \# Or, You can just be a note writter. create a new file in `./src/pages/note/your_note.mdx`. Write your note in `.mdx` or `.md` markdown syntax format. Check how it looks in development server. Then push to github.

> \# Implement a new necessary feature according to our issue listed.
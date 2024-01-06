// This is a configuration file for CommitLint, a tool that enforces commit message conventions.
// Commit messages are important for tracking changes in version control systems like Git.

// These comments provide explanations for different commit message types and their scopes.
// They help developers understand when to use each type of commit message.

// 'build': Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)

// 'chore': General maintenance tasks or small, non-user-facing changes

// 'docs': Changes that only affect documentation

// 'feat': Introduces a new feature or functionality to the codebase

// 'fix': Addresses and fixes a bug or issue in the code

// 'perf': A code change that aims to improve performance

// 'refactor': Code changes that neither fix a bug nor introduce a new feature but improve code structure or readability

// 'revert': Reverts a previous commit or change

// 'rebase': Change path and structure of file

// 'style': Changes that do not affect the functionality of the code, such as whitespace, formatting, or semicolons

// 'test': Additions of missing tests or corrections of existing tests

// 'translation': Changes related to translations or internationalization

// 'security': Changes addressing security issues or vulnerabilities

// 'anim': Added or modified animations

//klnedwljknfwe

module.exports = {
  extends: ["@commitlint/config-conventional"], // Extend the default conventional commit rules.

  rules: {
    "body-leading-blank": [1, "always"], // Enforce a blank line between the header and the body of the commit message.
    "body-max-line-length": [2, "always", 100], // Limit the body of the commit message to 100 characters.
    "footer-leading-blank": [1, "always"], // Enforce a blank line between the body and the footer (if present).
    "footer-max-line-length": [2, "always", 100], // Limit the footer to 100 characters.
    "header-max-length": [2, "always", 100], // Limit the header to 100 characters.
    "scope-case": [2, "always", "lower-case"], // Enforce lowercase for commit message scopes (if present).
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ], // Enforce general case for the commit message subject.
    "subject-empty": [2, "never"], // Enforce a non-empty subject for the commit message.
    "subject-full-stop": [2, "never", "."], // Enforce no period at the end of the subject.
    "type-case": [2, "always", "lower-case"], // Enforce lowercase for commit message types.
    "type-empty": [2, "never"], // Enforce a non-empty commit type.
    "type-enum": [
      2,
      "always",
      [
        // Enforce that the commit type must be one of the specified values.
        "build",
        "chore",
        "docs",
        "merge",
        "feat",
        "fix",
        "perf",
        "rebase",
        "refactor",
        "revert",
        "style",
        "test",
        "translation",
        "security",
        "anim",
      ],
    ],
  },
}

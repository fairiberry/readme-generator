// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let message = license.replace(/ /g, "%20");
  if (license !== "Other/None") {
    return `![License](https://img.shields.io/badge/license-${message}-green.svg)`;
  }
  else return "";
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
  if (license !== "Other/None") {
    return `## License
    This repository is licensed under ${renderLicenseLink(license)}`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ${renderLicenseBadge(data.license)}
  
  ## Description

  ${data.projectDescription}

  ## Installation

  ${data.projectInstallation}

  ## Usage

  ${data.projectUsage}

  
  ${renderLicenseSection(data.license)}

  ## Questions

  If you have any questions, please email me at ${data.emailAddress}, or on [GitHub](https://github.com/${data.githubUsername}).
  
  Thanks for visiting! Have a wonderful day. - ${data.name}`;
};

module.exports = generateMarkdown;

// Function to render a license badge
function renderLicenseBadge(license) {
  if (license === "None" || !license) return "";
  const badges = {
    "MIT": "![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)",
    "Apache 2.0": "![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
    "GPL 3.0": "![GPL 3.0 License](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    "BSD 3": "![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)",
  };
  return badges[license] || "";
}

// Function to render a license link
function renderLicenseLink(license) {
  if (license === "None" || !license) return "";
  const links = {
    "MIT": "https://opensource.org/licenses/MIT",
    "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
    "GPL 3.0": "https://www.gnu.org/licenses/gpl-3.0",
    "BSD 3": "https://opensource.org/licenses/BSD-3-Clause",
  };
  return links[license] || "";
}

// Function to render the license section
function renderLicenseSection(license) {
  if (license === "None" || !license) return "";
  return `This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// Main function to generate Markdown
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
GitHub: [${data.github}](https://github.com/${data.github})  
Email: ${data.email}
`;
}

// Export using CommonJS
module.exports = generateMarkdown;
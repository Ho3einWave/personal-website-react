# Personal Website ✨

A personal website showcasing my portfolio, link shortner, and contact information. 🌐

<div align="center">

[![stars - personal-website-react](https://img.shields.io/github/stars/ho3einwave/personal-website-react?style=social)](https://github.com/ho3einwave/personal-website-react) [![forks - personal-website-react](https://img.shields.io/github/forks/ho3einwave/personal-website-react?style=social)](https://github.com/ho3einwave/personal-website-react) [![Netlify Status](https://api.netlify.com/api/v1/badges/f7913753-5016-4c0e-b0ed-2f06d6cd89de/deploy-status)](https://app.netlify.com/sites/hoseinwave/deploys)


</div>

## Table of Contents 📚

- [Personal Website ✨](#personal-website-)
  - [Table of Contents 📚](#table-of-contents-)
  - [Description 📝](#description-)
  - [Features ✨](#features-)
  - [Installation ⚙️](#installation-️)
  - [Contact Form Setup 📑](#contact-form-setup-)
    - [1. ReCaptcha Key and Secret 🔐](#1-recaptcha-key-and-secret-)
    - [2. Discord Webhook URL 📡](#2-discord-webhook-url-)
  - [Usage 🚀](#usage-)
  - [Customization 🎨](#customization-)
  - [Special Thanks 🙌](#special-thanks-)
  - [Contributing 🤝](#contributing-)
  - [License 📄](#license-)

## Description 📝

My personal website is a platform to showcase my skills, projects, blog posts, and provide a means for visitors to contact me. It serves as an online representation of my professional identity and acts as a central hub for all my online presence. 🚀

## Features ✨

- **Home Page:** An introduction to who I am and an overview of my skills and areas of expertise. 🏠
- **Portfolio:** A collection of my projects, including descriptions, screenshots, and links to live demos or GitHub repositories. 💼
- **Link Shortner:** You can shorten your links using the format hoseinwave.ir/instagram. When a user clicks on the shortened link, the app will automatically redirect them to the specific destination you have defined in `src/utils/constants.jsx`. ✍️
- **Contact:** A contact form or links to my social media profiles, allowing visitors to get in touch with me easily. 📧
- **Responsive Design:** The website is designed to be responsive, ensuring a seamless experience across different devices. 📱

## Installation ⚙️

To run the personal website locally, follow these steps:

1. Clone the repository: `git clone https://github.com/ho3einwave/personal-website-react.git`
2. Navigate to the project directory: `cd personal-website-react`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your web browser and visit `http://localhost:5173` to view the website. 🌐


## Contact Form Setup 📑

To make the contact form work, you'll need to follow these steps:

### 1. ReCaptcha Key and Secret 🔐

- Go to the [ReCaptcha Admin Console](https://www.google.com/recaptcha/admin/) and sign in with your Google account.
- Register a new site by providing a label and domain name.
- Once registered, you receive a **Captcha key** and **Captcha secret**- Open the `src/utils/constants.jsx` file in your project and replace the value of `recaptcha_key` with your Captcha key.
- In the Netlify panel for your site, go to "Site Configuration" > "Environment Variables" > "Add a Variable" and add a new environment variable named `RECAPTCHA_SECRET` with the value of your Captcha secret.

### 2. Discord Webhook URL 📡

- Obtain the Discord webhook URL where you want to receive the contact form submissions.
- In the Netlify panel for your site, go to "Site Configuration" > "Environment Variables" > "Add a Variable" and add a new environment variable named `DISCORD_WEBHOOK` with the value of your Discord webhook URL.

Once you have completed these steps, your contact form should be ready to use. When a user submits the form, the data will be validated using ReCaptcha and then sent to the specified Discord webhook URL.

Make sure to save your changes and redeploy your site for the updates to take effect.

Feel free to customize the instructions based on your specific setup or requirements. ✨

## Usage 🚀

Once the website is up and running, you can explore different sections:

- On the home page, you will find an introduction to who I am and an overview of my skills and expertise. 🏠
- The portfolio section showcases my projects. Clicking on a project will provide more details, including descriptions, screenshots, and links to live demos or GitHub repositories. 💼
- With the link shortener feature, you can shorten other links using your own domain.✍️
- To contact me, you can use the contact form or find links to my social media profiles. 📧

Feel free to navigate through the website, explore my portfolio, read my blog posts, and get in touch! 🌟

Certainly! Here's an updated customization section with emojis added:

## Customization 🎨

The personal website project is designed to be easily customizable to suit your specific needs. You can follow the instructions below to customize the website according to your preferences:

1. **Personalize Content:** 📝 Open the project files and update the content to reflect your own information. Modify the text, images, and links in the relevant sections such as the home page, portfolio, and contact sections. Add your own projects, or any other content you want to showcase.

2. **Styling and Theming:** 🎨 Customize the website's appearance by modifying the CSS styles (in `src/index.css`) and `tailwind.config.js` file. You can change colors, fonts, spacing, or any other visual aspects to match your personal branding or preferred design.

3. **Layout and Structure:** 🏗️ Adjust the website layout and structure to meet your requirements. You can modify the navigation menu, add or remove sections, or rearrange the order of elements to create a layout that suits your needs.

4. **Configuration Options:** ⚙️ Explore the project configuration files to customize various aspects of the website. For example, you can update the contact form settings, add or remove social media links, or configure the blog post display settings.

Feel free to experiment and make the necessary changes to make the personal website truly your own. Don't hesitate to explore the codebase and leverage your web development skills to add new features or functionalities.

Remember to document any customizations you make for future reference or for the benefit of other contributors.

Please note that while customizing the personal website, it is important to ensure compliance with the project's license and any applicable laws or regulations.

Enjoy customizing your personal website and make it a reflection of your unique identity and style! 🌟🚀

## Special Thanks 🙌
Thank you, [SklyerX](https://github.com/SklyerX), for your invaluable support throughout this project. Your expertise, dedication, and positive attitude made a significant impact. 🌟

I appreciate your guidance, ideas, and feedback, which elevated the project's quality. Your belief in me and willingness to help were truly inspiring. 🤝

## Contributing 🤝

If you'd like to contribute to my personal website, I appreciate your interest! Here's how you can get involved:

- Report any issues or bugs by creating a new issue in the repository. 🐛
- Suggest improvements or new features by creating a new issue and describing your ideas. 💡
- Fork the repository, make changes, and submit a pull request for review. 🛠️

Please follow the guidelines in the CONTRIBUTING.md file for a smooth collaboration process.

## License 📄

The personal website project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code for your own personal website. Attribution is appreciated but not required. 📝

Feel free to further customize the sections, add more emojis, or modify the content as per your preferences. Good luck with your personal website! 🌟
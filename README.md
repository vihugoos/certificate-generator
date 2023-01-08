<div id="top"> </div>


<!---- PROJECT LOGO ----> 
<div align="center">
  <h2 align="center"> 
    AWS Lambda Functions  
  </h2>
  
  <p align="center">
    Two AWS Lambda Functions, developed with Node.js <br/>
    Explore <a href="https://nodejs.org/en/docs/">Node.js</a> docs &#187; <br/> <br/>
    <a href="https://github.com/vihugoos/certificate-generator/issues"> Report Bug </a> &nbsp;•&nbsp;
    <a href="https://github.com/vihugoos/certificate-generator/issues"> Request Feature </a>
  </p>
</div>


<!---- TABLE OF CONTENTS ----> 
<details>
  <summary> Table of Contents </summary>
  <ol>
    <li>
      <a href="#about-the-project"> About The Project </a>
      <ul>
        <li><a href="#built-with"> Built With </a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started"> Getting Started </a>
      <ul>
        <li><a href="#prerequisites"> Prerequisites </a></li>
        <li><a href="#installation"> Installation </a></li>
        <li><a href="#usage"> Usage </a></li>
      </ul>
    </li>
    <li><a href="#contributing"> Contributing </a></li>
    <li><a href="#contact"> Contact </a></li>
  </ol>
</details>


<!---- THE PROJECT ---->
## About The Project 

<img src="" align="center" alt="Project Home Page">
Two AWS Lambda functions for generating and verifying a course certificate (Serverless with Node.js). The <b>generateCertificate</b> function is responsible for receiving the data, generating a certificate, storing it in Amazon S3 and returning the pdf link in the request response. The <b>verifyCertificate</b> function receives the user ID to verify if the certificate is valid, if valid, it returns the pdf link.

### Built With 

<div style="display: inline_block">
    <!-- Icon Node.js --> 
    <a href="https://nodejs.org/en/"> 
      <img align="center" alt="Icon-Node.js" height="33" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"> 
    </a> &nbsp;
    <!-- Icon Yarn --> 
    <a href="https://yarnpkg.com/"> 
      <img align="center" alt="Icon-Yarn" height="33" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"> 
    </a> &nbsp;
    <!-- Icon TypeScript --> 
    <a href="https://www.typescriptlang.org/"> 
      <img align="center" alt="Icon-TypeScript" height="33" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"> 
    </a> &nbsp;
    <!-- Icon AWS Lambda -->
    <a href="https://aws.amazon.com/lambda/?nc1=h_ls"> 
      <img align="center" alt="Icon-AWS-Lambda" height="34" src="https://user-images.githubusercontent.com/44311634/211214155-5ab98b96-b3bd-4fd4-ab0d-2ca9362e5497.png"> 
    </a> &nbsp;
    <!-- Icon AWS --> 
    <a href="https://aws.amazon.com/"> 
      <img align="center" alt="Icon-Jest" height="37" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"> 
    </a> &nbsp;
    <!-- Icon Serverless --> 
    <a href="https://www.serverless.com/"> 
      <img align="center" alt="Icon-Jest" height="33" src="https://user-images.githubusercontent.com/44311634/208251603-52add6e2-a6a0-4928-a1ce-a07ba1b786b0.png"> 
    </a> 
</div>

<br/>
<br/>


<!---- GETTING STARTED ----> 
## Getting Started

To get started, you need to have <strong>Node.js 18+</strong> installed on your machine, for more information visit <a href="https://nodejs.org/en/download/"> Node.js Downloads</a>. 

<strong>Obs:</strong> This guide will only serve to run the project locally (development environment), initially based on linux systems. 


### Prerequisites 

In addition to node.js, you will need to have <a href="https://www.google.com/chrome/">Google Chrome</a> installed on your machine as it will be used for PDF conversion. 


### Installation 

1. Open terminal and install Serverless Framework globally  
   ```cmd
   npm install -g serverless 
   ```
2. If you haven't installed it yet, you will need to install the JDK (Java Development Kit)
   ```
   sudo apt install default-jdk 
   ```
3. Clone the repo 
   ```bash
   git clone https://github.com/vihugoos/certificate-generator.git
   ```
4. Inside the project root directory install all project dependencies 
   ```bash
   yarn install 
   ```
5. Install amazon dynamodb 
   ```bash
   yarn dynamodb:install 
   ```


<!---- USAGE EXAMPLES ----> 
## Usage

With the installation complete, we can start the project. <b>IMPORTANT:</b> Run the two commands below in different tabs, both need to be running at the same time.

1. Starting database 
   ```bash
   yarn dynamodb:start  
   ```
2. Open a new terminal tab and run the project  
   ```bash
   yarn dev  
   ```

<br/> <br/> 

<!---- CONTRIBUTING ---->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br/> 


<!---- CONTACT ---->
## Contact

Developer @vihugoos - victorhugoos@live.com  

<p align="right"><a href="#top"> &#129045; back to top </a></p> 

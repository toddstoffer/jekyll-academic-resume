# Jekyll Academic Resume

This is a resume template built with [Jekyll](https://jekyllrb.com/) that is ready for use with [GitHub Pages](https://pages.github.com/). There are sections for employment history, education, publications and presentations. It also includes [Reveal.js](https://revealjs.com/#/) allowing you to create and host presentations directly from your GitHub Pages User page.


### Getting Started
Follow these steps to use import this template into your GitHub User Page repository.

1. Sign In to GitHub
2. Select the + sign in the top right corner, and Import repository.
3. In the first field enter the URL for this repository [NEED URL]
4. Name your repo [USERNAME].github.io Replacing [USERNAME] with your individual GitHub.com username
5. Click Begin Import
6. Once complete visit [USERNAME].github.io in your browser to see your new site


### Site Setup
#### Site Configuration
Site configuration options are set in the [\_config.yml](/_config.yml) file. There are three main sections in the configuration file that you will want to pay attention to:

1. url [NEED TO TEST]
2. theme_skin - There are a variety of themes to choose from which will change the colors used on the resume.
3. display - This section can be used to display or hide any of the sections of the resume. If there is a section that you do not plan on using (e.g. publications) set the value for they key to false in this section of the \_config.yml file.

### Adding Content
Content for each of the sections of the website are find in the \_data directory. Each file is written in [YAML](https://en.wikipedia.org/wiki/YAML) which is a markup language that is both human and machine readable. It is based on using key-value pairs. In the sidebar.yml file you will see ```name: Alan Doe``` on line 2, where ```name:``` is the key and ```Alan Doe``` is the value. **Be careful to only edit the values in all of the YAML files and NOT the keys**. Also be sure to maintain the existing spacing, indentation and use of colons in the keys, changes to these could cause your site to not build properly.

#### sidebar.yml
This file contains is where you set all of the information that is on the left hand column of the site. You can add links to a variety of online services in the contact section - if you want to omit one of the services simply leave the value blank.

#### career-profile.yml
This is the top section of the right-hand column of the site, where you can enter a short summary of your skills and career objectives.

#### presentations.yml
This section is used to add links and short excerpts to presentations that you have given. The links can be to external sources (e.g. Google Slides) or you can use Reveal.js to build presentations directly within your resume site. More information on how to do that is found in the [Creating Presentations](#) section below. You will want to enter information in this section in revers chronological order (most recent first).

#### professional-experience.yml
This section is where you list your prior work experience. You will want to enter information in this section in reverse chronological order (most recent first). You can enter your experience as a written summary, using bullet points or both. If you wish to omit the summary simply delete the placeholder text in the summary section (leaving the summary key).

#### publications.yml
This section is used to add citations for your publications. They can be entered manually (again in reverse chronological order) and can contain links to anywhere the publication can be found online. If the publication is not available online you can simply omit the link. You can also add PDF documents to the assets folder and link to those PDFs if you wish to host your own publications.

  > **NCSU Citation Index Integration** - If you have added your publications to the [NCSU Citation Index](https://ci.lib.ncsu.edu) you can connect this resume to that service to display all of your publications. To do so you will want to edit the \_config.yml setting the ```citation_index value``` to true and the ```citation_index_username``` to your unity ID. If using the Citation Index Integration you can continue to add any publications not in your Citation Index profile in the publications.yml file.

#### Creating Presentations
This Jekyll theme includes [Reveal.js](https://revealjs.com/#/) which is a lightweight framework that enables you to create slide decks using HTML and Markdown, and to host and present those slide decks from your website. To create a new presentation using Reveal.js make a copy of the example-presentation.md file in the \_presentations and begin editing it following the instructions found in the [Reveal.js repository](https://github.com/hakimel/reveal.js/).


## Credits
Based off of the [online-cv](https://github.com/sharu725/online-cv) project by [Sharath Kumar](https://github.com/sharu725)


## License

This project is licensed under the [MIT license](LICENSE.txt).

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Hi Babes!';
  whatDescription = "Like I said above, I have skills across the full tech stack but have developed a passion for front-end.  " +
    "There's nothing quite like the gratification of seeing your creations in the browser and out on the web!";
  star = true;

  languages = [
    {
      name: "JavaScript",
      logoPath: "../assets/logos/javascript-logo.png",
      star: true
    },
    {
      name: "Java",
      logoPath: "../assets/logos/java-logo.png",
      star: true
    },
    {
      name: "HTML",
      logoPath: "../assets/logos/HTML5-logo.png",
      star: true
    },
    {
      name: "CSS",
      logoPath: "../assets/logos/css-logo.png",
      star: true
    },
    {
      name: "Python",
      logoPath: "../assets/logos/python-logo.png",
      star: false
    },
    {
      name: "C/C++",
      logoPath: "../assets/logos/Cplusplus-logo.png",
      star: false
    }
  ];

  frameworks = [
    {
      name: "Angular",
      logoPath: "../assets/logos/angular.svg",
      star: true
    },
    {
      name: "React",
      logoPath: "../assets/logos/react-logo.png",
      star: true
    },
    {
      name: "Bootstrap",
      logoPath: "../assets/logos/bootstrap-solid-logo.svg",
      star: true
    },
    {
      name: "Less",
      logoPath: "../assets/logos/less-logo.png",
      star: true
    },
    {
      name: "jQuery",
      logoPath: "../assets/logos/jquery-logo.png",
      star: true
    },
    {
      name: "Sass",
      logoPath: "../assets/logos/sass-logo.svg",
      star: true
    },
    {
      name: "Grunt",
      logoPath: "../assets/logos/grunt-logo.png",
      star: true
    },
    {
      name: "Webpack",
      logoPath: "../assets/logos/webpack-logo.png",
      star: true
    },
    {
      name: "Node",
      logoPath: "../assets/logos/nodejs-logo.png",
      star: true
    },
    {
      name: "Express",
      logoPath: "../assets/logos/express-logo.png",
      star: true
    },
    {
      name: "TypeScript",
      logoPath: "../assets/logos/typescript-logo.png",
      star: false
    },
    {
      name: "Jasmine",
      logoPath: "../assets/logos/jasmine-logo.png",
      star: true
    },
    {
      name: "Karma",
      logoPath: "../assets/logos/karma-logo.png",
      star: true
    },
    {
      name: "Spring",
      logoPath: "../assets/logos/spring-logo.png",
      star: false
    }
  ];
}

import { defineMessages } from "react-intl";

const messages = defineMessages({
  title: {
    id: "app.portfolio.headline",
    defaultMessage:
      "I am a software engineer specializing in building maintainable and high performance e-commerce applications."
  },
  workCurrent: {
    id: "app.portfolio.workCurrent",
    defaultMessage:
      "These days, I disrupt the online retail space with {linkZalando}."
  },
  workPrevious: {
    id: "app.portfolio.workPrevious",
    defaultMessage:
      "Previously, I was developing front end architectures at {linkAmplifi}."
  },
  living: {
    id: "app.portfolio.living",
    defaultMessage:
      "After living in Bangalore and Dubai for many years, I now live in Berlin."
  },
  interests: {
    id: "app.portfolio.interests",
    defaultMessage:
      "Besides technology, I thoroughly enjoy studying Anthropology."
  },
  projects: {
    id: "app.portfolio.projects",
    defaultMessage: "Some of the things I have built with great teams are"
  },
  github: {
    id: "app.portfolio.github",
    defaultMessage: "My open-source work can be found on {linkGitHub}."
  },
  contact: {
    id: "app.portfolio.contact",
    defaultMessage: "The best way to contact me is by {linkEmail}."
  },
  linkEmail: {
    id: "app.linkEmail",
    defaultMessage:
      '<a class="link" href="mailto:hello@larrydalmeida.com" target="_blank" rel="noopener noreferrer">e-mail</a>'
  },
  linkGitHub: {
    id: "app.linkGitHub",
    defaultMessage:
      '<a class="link" href="https://github.com/larry-dalmeida" target="_blank" rel="noopener noreferrer">GitHub</a>'
  },
  linkZalando: {
    id: "app.linkZalando",
    defaultMessage:
      '<a class="link" href="http://zalando.de" target="_blank" rel="noopener noreferrer">Zalando</a>'
  },
  linkAmplifi: {
    id: "app.linkAmplifi",
    defaultMessage:
      '<a class="link" href="https://goamplifi.com" target="_blank" rel="noopener noreferrer">Amplifi</a>'
  }
});

export default messages;

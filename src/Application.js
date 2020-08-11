import Nullstack from 'nullstack';

import './Application.css';

class Application extends Nullstack {

  static async start({project}) {
    project.name = "League Info Cards Tutorial";
    project.domain = "codase.com.br";
    project.color = "#6B46C1";
  }

  initialize({project, page}) {
    page.title = `${project.name} - Welcome to Nullstack!`;
    page.locale = "pt-BR";
  }

  render({page}) {
    return (
      <main>
        <h1> {page.title} </h1>
        <a href="https://github.com/nullstack/nullstack" target="_blank"> Read the documentation </a>
      </main>
    )
  }


}

export default Application;
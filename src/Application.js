import Nullstack from 'nullstack';
import './Application.css';
import Header from './Header';
import ChampionList from './ChampionList';

class Application extends Nullstack {

  static async start(context) {
    const project = context.project;
    project.name = "League Info Cards Tutorial";
    project.domain = "codase.com.br";
    project.color = "#6B46C1";
    const {readFileSync} = await import('fs');
    const data = readFileSync('versions.json', 'utf-8');
    context.versions = JSON.parse(data);
  }

  initialize({project, page}) {
    page.title = `${project.name} - Welcome to Nullstack!`;
    page.locale = "pt-BR";
  }

  static async loadInitialContext({versions}) {
    const version = versions[0];
    const champions = [
      {name: 'Caitlyn', slug: 'caitlyn'},
      {name: 'Ashe', slug: 'ashe'}
    ];
    return {champions, versions, version};
  }

  async initiate(context) {
    const {champions, versions, version} = await this.loadInitialContext();
    context.versions = versions;
    context.version = version;
    context.champions = champions;
  }

  render({page}) {
    return (
      <main class="sm-p10t sm-p2x md+p8t pt:p0t">
        <Header />
        <ChampionList />
      </main>
    )
  }


}

export default Application;
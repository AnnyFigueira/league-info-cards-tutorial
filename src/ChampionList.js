import Nullstack from 'nullstack';

class ChampionList extends Nullstack {
  
  filteredName = "";

  renderChampion({name, slug}) {
    if(this.filteredName && name.indexOf(this.filteredName) == -1) {
      return false;
    }
    return (
      <li class="xl bg1 p3 m2b">
        <a href={`/champions/${slug}`}>{name}</a>
      </li>
    )
  }

  render({champions}) {
    return (
      <div class="xxx">
        <h1 class="xl c3 m3y">Champion List</h1>
        <form class="xl m2b">
          {!!champions.length && <input type="search" bind="filteredName" placeholder="Search champions" class="xl p3 bc1" />}
        </form>
        <ul class="xl">
          {champions.map((champion) => <Champion {...champion} />)}
        </ul>
      </div>
    )
  }

}

export default ChampionList;
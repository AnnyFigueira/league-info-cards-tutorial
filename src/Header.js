import Nullstack from 'nullstack';

class Header extends Nullstack {
  
  async changeVersion(context) {
    const version = context.event.target.value;
    context.version = version;
  }
  
  render({versions, version}) {
    return (
      <div class="ftl bg4 s1 pt:off">
        <div class="xxl">
          <div class="md+xl md+x6">
            <a href="/" class="p4y ff5 f4 c0"> League Info Cards </a>
          </div>
          <div class="sm-xx sm-p2 md+xr md+x6 yy">
            <select value={version} onchange={this.changeVersion} class="xl bg3 p3 c0 md+x0">
              {versions.map((version) => <option> {version} </option>)}
            </select>
          </div>
        </div>
      </div>
    )
  }

}

export default Header;
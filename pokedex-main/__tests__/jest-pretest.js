const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const { window } = new JSDOM(`<form>
<button id="home" >Home</button>
<button id="previous" disabled="true" >Previous</button>
<button id="next" >Next</button>
</form>
<div>
<br>
<table id="table" class="inner-text">
    <tr>
        <td id="col1a">Loading...</td>
        <td id="col2a"><a href="">Loading...</a></td>
        <td id="col3a">Loading image...</td>
        <td id="col4a"></td>

    </tr>
    <tr>
        <td id="col1b">Loading...</td>
        <td id="col2b"><a href="">Loading...</a></td>
        <td id="col3b"><a href="">Loading image...</a></td>
        <td id="col4b"></td>
    </tr>
    <tr>
        <td id="col1c">Loading...</td>
        <td id="col2c"><a href="">Loading...</a></td>
        <td id="col3c"><a href="">Loading image...</a></td>
        <td id="col4c"></td>
    </tr>
    <tr>
        <td id="col1d">Loading...</td>
        <td id="col2d"><a href="">Loading...</a></td>
        <td id="col3d"><a href="">Loading image...</a></td>
        <td id="col4d"></td>
    </tr>
    <tr>
        <td id="col1e">Loading...</td>
        <td id="col2e"><a href="">Loading...</a></td>
        <td id="col3e"><a href="">Loading image...</a></td>
        <td id="col4e"></td>
    </tr>
    <tr>
        <td id="col1f">Loading...</td>
        <td id="col2f"><a href="">Loading...</a></td>
        <td id="col3f"><a href="">Loading image...</a></td>
        <td id="col4f"></td>
    </tr>
    <tr>
        <td id="col1g">Loading...</td>
        <td id="col2g"><a href="">Loading...</a></td>
        <td id="col3g"><a href="">Loading image...</a></td>
        <td id="col4g"></td>
    </tr>
    <tr>
        <td id="col1h">Loading...</td>
        <td id="col2h"><a href="">Loading...</a></td>
        <td id="col3h"><a href="">Loading image...</a></td>
        <td id="col4h"></td>
    </tr>
    <tr>
        <td id="col1i">Loading...</td>
        <td id="col2i"><a href="">Loading...</a></td>
        <td id="col3i"><a href="">Loading image...</a></td>
        <td id="col4i"></td>
    </tr>
    <tr>
        <td id="col1j">Loading...</td>
        <td id="col2j"><a href="">Loading...</a></td>
        <td id="col3j"><a href="">Loading image...</a></td>
        <td id="col4j"></td>
    </tr>
    <tr>
        <td id="col1k">Loading...</td>
        <td id="col2k"><a href="">Loading...</a></td>
        <td id="col3k"><a href="">Loading image...</a></td>
        <td id="col4k"></td>
    </tr>
    <tr>
        <td id="col1l">Loading...</td>
        <td id="col2l"><a href="">Loading...</a></td>
        <td id="col3l"><a href="">Loading image...</a></td>
        <td id="col4l"></td>
    </tr>
    <tr>
        <td id="col1m">Loading...</td>
        <td id="col2m"><a href="">Loading...</a></td>
        <td id="col3m"><a href="">Loading image...</a></td>
        <td id="col4m"></td>
    </tr>
    <tr>
        <td id="col1n">Loading...</td>
        <td id="col2n"><a href="">Loading...</a></td>
        <td id="col3n"><a href="">Loading image...</a></td>
        <td id="col4n"></td>
    </tr>
    <tr>
        <td id="col1ñ">Loading...</td>
        <td id="col2ñ"><a href="">Loading...</a></td>
        <td id="col3ñ"><a href="">Loading image...</a></td>
        <td id="col4ñ"></td>
    </tr>
    <tr>
        <td id="col1o">Loading...</td>
        <td id="col2o"><a href="">Loading...</a></td>
        <td id="col3o"><a href="">Loading image...</a></td>
        <td id="col4o"></td>
    </tr>
    <tr>
        <td id="col1p">Loading...</td>
        <td id="col2p"><a href="">Loading...</a></td>
        <td id="col3p"><a href="">Loading image...</a></td>
        <td id="col4p"></td>
    </tr>
    <tr>
        <td id="col1q">Loading...</td>
        <td id="col2q"><a href="">Loading...</a></td>
        <td id="col3q"><a href="">Loading image...</a></td>
        <td id="col4q"></td>
    </tr>
    <tr>
        <td id="col1r">Loading...</td>
        <td id="col2r"><a href="">Loading...</a></td>
        <td id="col3r"><a href="">Loading image...</a></td>
        <td id="col4r"></td>
    </tr>
    <tr>
        <td id="col1s">Loading...</td>
        <td id="col2s"><a href="">Loading...</a></td>
        <td id="col3s"><a href="">Loading image...</a></td>
        <td id="col4s"></td>
    </tr>
</table>
<br>
</div>
<div>
</div>
<script src='../node_modules/jquery/dist/jquery.min.js'></script>
<script src="pokedex.js" type="module"></script>
</body>
</HTML>
`, {
  contentType: 'text/html',
  includeNodeLocations: true,
  resources: 'usable',
  storageQuota: '10000000',
  runScripts: 'dangerously',
});

const $ = require('jquery')(window);

global.window = window;
global.document = window.document;

global.jQuery = $;
global.$ = $;

/* eslint-disable linebreak-style */

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const { window } = new JSDOM(`<header>
<link href="styles.css" rel="stylesheet" type="text/css">
</header>

<style>
#simon-says {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 80%;
    height: 80%; 
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;

}

</style>

<form>
<button id="launch" class="highlighted">Start</button>
<button id="cancel" class="highlighted" disabled="true">Cancel</button>
<input type="text" id="round-number" class="highlighted" disabled="true" value="Hit Start (I don't wish you good luck)"/>
<label id= "server-messages" class= "highlighted2">------------</label>
</form>

<table id= "simon-says">
<tr style="background-color:#BDB76B;color:#ffffff;">
</tr>
<tr>
    <td style="background-color:#106D02;" width="50%" height="35%" id="green-square" class="highlighted"></td><td style="background-color:#FA2F2F;" id="red-square"></td>
</tr>
<tr>
    <td style="background-color:#FAE82F;" height="35%" width="50%" id="yellow-square"></td><td style="background-color:#5081F3;"  id="blue-square"></td>
</tr>
</table>
<script src="./source/index.js" type="module"></script>
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

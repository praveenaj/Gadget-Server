<ul class="gadget_list">
    {{#each gadgets}}
    <div style="border:solid 1px;">
        <li>{{this.name}}</li>
        <li>{{this.author}}</li>
        <li>{{this.url}}</li>
        <li>{{this.path}}</li>
        <input type="button" onclick="GadgetStore.addGadgetToUser('default', 'main', '{{this.path}}', '{{this.name}}')" value="add gadget">
    </div>
    {{/each}}
</ul>
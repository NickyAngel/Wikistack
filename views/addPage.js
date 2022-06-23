const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div class="form-group">
        <label for="authorName" class="col-sm-2 control-label"
          >Author Name</label
        >
        <div class="col-sm-10">
          <input
            id="authorName"
            name="authorName"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="authorEmail" class="col-sm-2 control-label"
          >Author Email</label
        >
        <div class="col-sm-10">
          <input
            id="authorEmail"
            name="authorEmail"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <label for="content" class="col-sm-2 control-label">Content</label>
        <div class="col-sm-10">
          <textarea
            id="content"
            name="content"
            type="textarea"
            class="form-control"
          /></textarea>
        </div>
      </div>

      <div class="form-group">
      <label for="status" class="col-sm-2 control-label">Page Status</label>
      <div class="col-sm-10">
      
        <input type="radio" id="open" name="placeholder" class="form-control" value="open"/>
        <label for="open">OPEN</label><br>
        <input type="radio" id="closed' name="placeholder" class="form-control" value="closed"/>
        <label for="closed">CLOSED</label><br>
        
      </div>
    </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);

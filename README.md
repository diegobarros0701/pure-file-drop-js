## Pure File Drop
Pure File Drop is a JS plugin made only with Vanilla JS. It has no dependencies which helps to make it fastest as possible.

## Usage
Creating a div with the following class
```html
<div class="pure-file-drop"></div>
```
And then instantiate a new **PureFileDrop**
```javascript
var pure_file_drop = new PureFileDrop({
  form_ajax: {
		enabled: false,
	  selector: 'form',
	},
	submit_button: {
		title: 'Send',
		classes: 'btn btn-success'
	},
  file_drop_selector: '.pure-file-drop', // default
  file_drop_area_text: 'Drag and drop the files or click here',
  upload_url: null, // default is the form action attribute
  async_request: true, // default
  param_name: 'file', // default
  form_ajax: true, // TO DO
  upload_on_drop: false, // TO DO
  select_by_click: true, // default
  onSuccess: function (response) {},
  onError: function (response) {},
  onComplete: function (response) {}
})
```

### Form ajax
By default this option is setted to **false**. This means that the files will not be sended along with the form. You'll have to send then separately. It is useful when you wanna upload files before send the form.  
Set to **true** if the files must be sended only when submit the form. In this case the data of your form and the files will be sended to the server.

#### Submit button
This option is only if you set the **form_ajax.enabled** to **false**, then a button will appear for your submit your files.

### Events
You can set the events when create a new **PureFileDrop** or after that.  
First one
```javascript
var pure_file_drop = new PureFileDrop({
  // Another options...
  onSuccess: function (response) {},
  onError: function (response) {},
  onComplete: function (response) {}
})
```  
And second one
```javascript
var pure_file_drop = new PureFileDrop();
pure_file_drop.onSuccess(function(response) {
 // Do something...
})

pure_file_drop.onError(function(response) {
 // Do something...
})

pure_file_drop.onComplete(function(response) {
 // Do something...
})
```  

#### onSuccess(response)
Called after the form are sended or the files are uploaded successfully.

#### onError(response)
Called after after form are sended or the files are uploaded occurs an error.

#### onComplete(response)
Called after the form are sended or the files are uploaded, regardless of error or success.

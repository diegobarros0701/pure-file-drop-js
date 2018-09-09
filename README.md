## Pure File Drop
Pure File Drop is a JS plugin made only with Vanilla JS. It has no dependencies which helps to make it fastest as possible.

## Usage

```javascript
var pure_file_drop = new PureFileDrop({
  form_selector: 'form[data-file-choose-form]', // default
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

### Form ajax (Always will be true, for now)
By default this option is setted to **false**. This means that the files will not be sended along with the form. You'll have to send then separately. It is useful when you wanna upload files before send the form.  
Set to **true** if the files must be sended only when submit the form.

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

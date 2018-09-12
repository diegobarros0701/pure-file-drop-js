## Pure File Drop
Pure File Drop is a JS plugin made only with Vanilla JS. It has no dependencies which helps to make it fastest as possible.

## Usage
Creating a div with the following class. 
```html
<div class="pure-file-drop"></div>
```
If you want to use another selector, change the value of the property **file_drop_selector** .  
  
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
  file_drop_selector: '.pure-file-drop',
  file_drop_area_text: 'Drag and drop the files or click here',
  upload_url: null,
  async_request: true,
  param_name: 'file',
  upload_on_drop: false, // TO DO
  select_by_click: true,
  onSuccess: function (response) {},
  onError: function (response) {},
  onComplete: function (response) {},
  onAddFile: function(files_info) {},
  onRemoveFile: function(files_info, response) {},
  initialFiles: {
    url: null,
    method: 'GET',
    params: null,
    onSuccess: function(response) {},
    onError: function(response) {}
   },
   remove_options: {
     url: null,
     method: 'DELETE',
     params: null,
     onError: function(response) {}
   },
})
```

#### # options.form_ajax
By default **options.form_ajax.enabled** is setted to **false**. This means that the files will not be sended along with the form. You'll have to send then separately. It is useful when you wanna upload files before send the form.  
Set to **true** if the files must be sended only when submit the form. In this case the data of your form and the files will be sended to the server.

#### # options.submit_button
This option is only if you set the **options.form_ajax.enabled** to **false**, then a button will appear for your submit your files.

#### # options.initialFiles
Set this option if you have initial files to load. If you set this, you must return a JSON.
Example:
```javascript
initialFiles: {
  url: 'https://mywebsite/attachments.json',
  method: 'GET',
  params: {
    service_id: 23
  },
  onSuccess: function(response) {
    console.log("Files loaded!");
  },
  onError: function(response) {
    console.log("Can't get the files.")
  }
}
```

The JSON structure is the following
```javascript
[
  {
    name: 'first.txt',
    remove_options: {
      url: 'https://mywebsite/attachments',
      method: 'DELETE',
      params: {
        service_id: 23
      },
      onSuccess: function(response) {
        // Do something...
      },
      onError: function(response) {
        // Do something...
      }
    }
  },
  {
    name: 'second.png',
    remove_options: {
      url: 'https://mywebsite/attachments'
    }
  },
  // more files...
]
```

The property **remove_options** of the JSON is not required. If you do not set it, the default will be the settings inside the **options.remove_options** property.

#### # options.remove_options
```javascript
remove_options: {
  url: 'https://myawesomewebsite.com/attachments',
  method: 'DELETE',
  params: {
    authenticity_token: 'jSAs=J=++SF+C123+AAMnAOLLOpswqq0==**axAsT'
  },
  onSuccess: function(response) {
    // Do something...
  },
  onError: function(response) {
    // Do something...
  }
}
```
With that options setted you can override them in **remove_options** of the JSON just as shown before or you can use then and set only the necessary in **remove_options** of the JSON. Like that:
```javascript
[
  {
    name: 'MyAwesomeFile.txt',
    remove_options: {
      params: {
        id: 1
      }
    }
  },
  {
    name: 'MyAwesomePhoto.jpg',
    remove_options: {
      params: {
        id: 2
      }
    }
  },
  {
    name: 'MyAwesomeMusic.mp3',
    remove_options: {
      params: {
        id: 3
      }
    }
  },
  // And more...
]
```

## Events
List of available events

#### # options.onSuccess(response)
Called after the form are sended or the files are uploaded successfully.

#### # options.onError(response)
Called after after form are sended or the files are uploaded occurs an error.

#### # options.onComplete(response)
Called after the form are sended or the files are uploaded, regardless of error or success.

#### # options.onAddFile(files_info)
Called after add a file

#### # options.onRemoveFile(files_info, response)
Called after remove a file.  
**Important:** The param **response** will only be available if you remove a file from the server, otherwise **response** will return **undefined**.

#### # options.initialFiles.onSuccess(response)
Called if the request to get the initial files was successfully

#### # options.initialFiles.onError(response)
Called if the request to get the initial files was not successfully

#### # options.remove_options.onSuccess(response)
Called if the request to remove a file was successfully

#### # options.remove_options.onError(response)
Called if the request to remove a file was not successfully

#### # (initialFiles JSON structure) remove_options.onSuccess(response)
Called if the request to remove an specific file was successfully

#### # (initialFiles JSON structure) remove_options.onError(response)
Called if the request to remove an specific file was not successfully

## To do
* Allow to set directly an array with the values to the property **options.initialFiles**.
* Allow to upload a file on drop.

function doNotify(){
    Notification.requestPermission().then(function(result){
        var myNotification = new Notification('Electorn Notification',{
            'body': 'Hi, Electorn',
            'icon' : 'http://placekitten.com/g/300/300'
        });
    });
}
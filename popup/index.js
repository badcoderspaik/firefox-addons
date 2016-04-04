
var data = require('sdk/self').data,
    button = require('sdk/ui/button/action');

var panel = require('sdk/panel').Panel({
  width: 1200,
  height: 600,
  contentURL: data.url('http://yk.kz/announce/show/68')
});

var toggleButton = button.ActionButton({
  id: 'show-panel',
  label:'gmail',
  icon: {
    '16': './16.png',
    '32': './32.png',
    '64': './64.png'
  },
  onClick: function(){
    panel.show({position: toggleButton});
  }
});
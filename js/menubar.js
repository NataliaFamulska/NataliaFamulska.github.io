    document.getElementById('menu-bar').onclick = function()
    {
    var element = document.getElementById('navigation');
        if (element.className === 'hide')
      {
        element.className = 'show';
      }
        else
      {
        element.className = 'hide';
        document.getElementById('menu-bar').className = 'show';
      }
    }

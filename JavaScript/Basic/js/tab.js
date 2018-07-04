var tabBox = document.getElementById('tabBox');
var tabList = tabBox.getElementsByTagName('li');
var divList = tabBox.getElementsByTagName('div');

function changeTab(n) {
    for (var i = 0; i < tabList.length; i++) {
        tabList[i].className = '';
        divList[i].className = '';
    }
    tabList[n].className = 'active';
    divList[n].className = 'active';
}



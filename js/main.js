var btn = $('.btn');
var box = $('.box');

btn.on('click', function () {
  box.fadeToggle(2000);
})

var btnAchievements = $('.btn-achievements');
var boxAchievements = $('.box-achievements');

btnAchievements.on('click', function () {
  boxAchievements.fadeToggle(2000);
})

var btnAchievements2 = $('.btn-achievements2');
var boxAchievements2 = $('.box-achievements2');

btnAchievements2.on('click', function () {
  boxAchievements2.fadeToggle(2000);
})

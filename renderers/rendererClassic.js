$(() => {
    const Mousetrap = require('mousetrap');
    const Data = require('./data.js');

    const {Howl} = require('howler');

    for(let i = 1;i <= 9 ;i++)
        bindAction(i)

    function changeColor(id){
        const col = $('#pad'+id)
        col.css("backgroundColor","rgb("+getRandomInt(256)+", "+getRandomInt(256)+", "+getRandomInt(256)+")")
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function bindAction(key){
        Mousetrap.bind(""+key, function() { 
            changeColor(key); 

            var sound = new Howl({
                src: [Data.getSoundClassic()[key]]
              });
               
              sound.play();
        
        }, 'keyup');
    }
})

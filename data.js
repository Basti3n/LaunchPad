'use strict';

const Mousetrap = require('mousetrap');

class Data{
     getSoundClassic (){
        const sound =  [
            "nothing",
            "./sound/classique/kick.mp3",
            "./sound/classique/bass.wav",
            "./sound/classique/snare.wav",
            "./sound/classique/do.wav",
            "./sound/classique/re.wav",
            "./sound/classique/mi.wav",
            "./sound/classique/fa.wav",
            "./sound/classique/sol.wav",
            "./sound/classique/la.wav",
        ]
        return sound;
    }

    getSoundInsect (){
        const sound =  [
            "nothing",
            "./sound/insect/bee.mp3",
            "./sound/insect/cat.wav",
            "./sound/insect/cigale.mp3",
            "./sound/insect/dog.wav",
            "./sound/insect/elephant.mp3",
            "./sound/insect/lion.flac",
            "./sound/insect/moustique.wav",
            "./sound/insect/snake.ogg",
            "./sound/insect/tiger.wav",
        ]
        return sound;
    }

    getSoundOrgue (){
        const sound =  [
            "nothing",
            "./sound/orgue/orgue1.wav",
            "./sound/orgue/orgue2.wav",
            "./sound/orgue/orgue3.wav",
            "./sound/orgue/orgue4.wav",
            "./sound/orgue/orgue5.wav",
            "./sound/orgue/orgue6.wav",
            "./sound/orgue/orgue7.wav",
            "./sound/orgue/orgue8.wav",
            "./sound/orgue/orgue9.wav",
        ]
        return sound;
    }
    
    reset(){
        Mousetrap.reset();
    }
}

  

module.exports = new Data();
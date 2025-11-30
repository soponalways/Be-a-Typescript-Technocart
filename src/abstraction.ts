  //* oop --> Abstractions 

  //* idea

  // ? Implement Amra pore korbo 


  /* 
  //* 1. Interface 
  //* 2. Abstract Class  
*/



 //? 1. interface ; Genarate idea from here

//  interface MediaPlayer {
//     play(): void; 
//     pause(): void; 
//     stop(): void; 
//  }


//  class MusicPlayer implements MediaPlayer {
//     play() {
//         console.log(`Music has playing`);
//     }   
//      pause() {
//          console.log(`Music has paused`);
//      }   

//      stop() {
//          console.log(`Music has stoped`);
//      }   

//  }
// const rokeyaPlayer = new MusicPlayer(); 

// rokeyaPlayer.stop()


abstract class MediaPlayer {
    abstract play(): void; 
    abstract pause(): void; 
    abstract stop(): void; 
}; 

class MusicPlayer extends MediaPlayer {
    play(): void {
        console.log(`Music has playing`);
    }   
    pause(): void {
        console.log(`Music Paused`);
    }
    stop(): void {
        console.log(`Music has  stopped !`);
    }
}; 

const rokeyaPlayer = new MusicPlayer(); 
rokeyaPlayer.pause(); 
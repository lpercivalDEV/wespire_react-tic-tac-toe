//  ** ~ Wespire Code Challenge - Tic Tac Toe Gameboard ~ ** //

//** Logic**//
// Check List - build the board
//                   - fill box w/user symbol on click
//                   - switch to other user when square's clicked
//                   - clicked squres can't be reclicked
//                   - install mocha test framework
//                   - write test to validate how users alternate
//                   - commit the code to github and send out link
//
/*
           TITLE
    P1 x    |     P2 0
        | ALERT |
    .  __   .  __   .  __   .                  *React Components?*
        x        0        x                         - App/view component
    .  __   .  __   .  __   .                   - Symbol compnents
        0        x        0                        - board component
    .  __   .  __   .  __   .                   - score component
        x        0        0                        - title component
    .  __   .  __   .  __   .                   - win/tie/alert component
    p1 score |  p2 score

*/
//
// ** TO DO/Notes ** //
// Front end only - HTML/CSS/JS
// Look up Mocha and how to write unit tests
// Use react? - yes...no...?
// Keep code dry and add comments!!!
// Have mentor(s) review my code and help me with questions
// Logic out the next possible steps!!!!!!
//        --> win, lose, tie, score keeping, audio, visuals, etc.
// -------------------------------------------------------------------------//

let test = document.getElementById("testjs");

test.addEventListener("click", function(){
    alert("I work!");
}, false);

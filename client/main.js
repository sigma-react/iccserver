import { Template } from 'meteor/templating';

import './main.html';

import './views/mainmenu.html';
import './views/mainmenu';

import './views/login.html';
import './views/login';

function onResize(){
    var barsOffset  = $("#top_player_info_bar").outerHeight() + $("#bottom_player_info_bar").outerHeight();
    var h = $( window ).height()-barsOffset;
    $("#chess-board-area").css( "max-width", h );
    var movesAreaHeight  = $("#profile").outerHeight() + $("#clocks").outerHeight() + $("#bottom-controls").outerHeight();
    var h2 = $( window ).height() - movesAreaHeight;
    $("#moves-box").css( "height", h2 );
    var sq = $('.square');
    var squareHeight = sq.width(); //SQUARES RESIZE Controls
    sq.height(squareHeight);
    $('.piece').height(squareHeight);//CHESS piece Controls
}

Meteor.startup(function(){
    Meteor.subscribe('userData');
    Meteor.subscribe('realtime_messages');
});

Template.chessboard.onRendered(function() {
    $(window).resize(onResize);
    onResize();
});

Template.chessboard.helpers({
    squareColor(row, col) {
        if(row % 2 === 0) {
            if(col % 2 === 0) {
                return 'chess-field-light';
            } else {
                return 'chess-field-dark';
            }
        } else {
            if(col % 2 === 0) {
                return 'chess-field-dark';
            } else {
                return 'chess-field-light';
            }
        }
    },
    TopPlayer() {
        return {
            name: 'David Johnson',
            rating: 2999,
            profile_image: 'image.gif',
            flag_image: 'images/flags/us.jpg'
        }
    },
    BottomPlayer() {
        return {
            name: 'Steven Slovskowski',
            rating: 2111,
            profile_image: 'image.gif',
            flag_image: 'images/flags/us.jpg'
        }
    },
    TopTime() {
        return '2:28'
    },
    BottomTime() {
        return '2:28'
    },
    Board() {
        return [
            ['black-rook', 'black-knight', 'black-bishop', 'black-king', 'black-queen', 'black-bishop', 'black-knight', 'black-rook'],
            ['black-pawn', 'black-pawn', 'black-pawn', 'black-pawn', 'black-pawn', 'black-pawn', 'black-pawn', 'black-pawn'],
            [null,  null, null, null, null, null, null, null],
            [null,  null, null, null, null, null, null, null],
            [null,  null, null, null, null, null, null, null],
            [null,  null, null, null, null, null, null, null],
            ['white-pawn', 'white-pawn', 'white-pawn', 'white-pawn', 'white-pawn', 'white-pawn', 'white-pawn', 'white-pawn'],
            ['white-rook', 'white-knight', 'white-bishop', 'white-king', 'white-queen', 'white-bishop', 'white-knight', 'white-rook']
        ]
    }
});

//Template.chessboard.events({
    //'click button'(event, templateInstance) {
    // increment the counter when button is clicked
        //templateInstance.counter.set(templateInstance.counter.get() + 1);
    //},
//});

Template.rightmenu.helpers({
    WhitePlayer() {
        return {
            name: 'white xxx',
            rating: 1234,
            won: 12,
            draws: 23,
            lost: 34,
            flag_image: 'images/flags/us.jpg'
        }
    },
    BlackPlayer() {
        return {
            name: 'black xxx',
            rating: 2345,
            won: 23,
            draws: 34,
            lost: 45,
            flag_image: 'images/flags/us.jpg'
        }
    },
    WhiteTime() {
        return '12:23'
    },
    BlackTime() {
        return '23:34'
    },
    Opening() {
        return 'Opening goes here'
    },
    MoveList() {
        return [
            {box: 2, move: 1, white: 'e4', black: 'e5'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
            {box: 1, move: 2, white: 'Bd3', black: 'Nd6'},
            {box: 2, move: 3, white: 'Qf3', black: 'e6'},
        ]
    }
});
// 'use strict';
// (function () {
//     $(document).on('ready',function () {
//         //navs active
//         var navs = $('.navs');
//
//         navs.children('li').on('click', function () {
//             navs.children('li').removeClass('activeLink');
//             $(this).addClass('activeLink');
//         });
//
//         //>>>>>>>>>>>>>>>>>>ALL POKERS GAMES SCRIPT<<<<<<<<<<<<<<<<<<
//
//         //Card deck
//         var cardsArr = [
//     ['cardsT1',
//         ['0 0']
//     ],
//     ['cardsT2',
//         ['-46px 0']
//     ],
//     ['cardsT3',
//         ['-92px 0']
//     ],
//     ['cardsT4',
//         ['-138px 0']
//     ],
//     ['cardsT5',
//         ['-184px 0']
//     ],
//     ['cardsT6',
//         ['-230px 0']
//     ],
//     ['cardsT7',
//         ['-276px 0']
//     ],
//     ['cardsT8',
//         ['-322px 0']
//     ],
//     ['cardsT9',
//         ['-370px 0']
//     ],
//     ['cardsT10',
//         ['-416px 0']
//     ],
//     ['cardsT11',
//         ['-462px 0']
//     ],
//     ['cardsT12',
//         ['-508px 0']
//     ],
//     ['cardsT13',
//         ['-554px 0']
//     ],
//     ['cardsB1',
//         ['0 -67px']
//     ],
//     ['cardsB2',
//         ['-46px -67px']
//     ],
//     ['cardsB3',
//         ['-92px -67px']
//     ],
//     ['cardsB4',
//         ['-138px -67px']
//     ],
//     ['cardsB5',
//         ['-184px -67px']
//     ],
//     ['cardsB6',
//         ['-230px -67px']
//     ],
//     ['cardsB7',
//         ['-276px -67px']
//     ],
//     ['cardsB8',
//         ['-322px -67px']
//     ],
//     ['cardsB9',
//         ['-370px -67px']
//     ],
//     ['cardsB10',
//         ['-416px -67px']
//     ],
//     ['cardsB11',
//         ['-462px -67px']
//     ],
//     ['cardsB12',
//         ['-508px -67px']
//     ],
//     ['cardsB13',
//         ['-554px -67px']
//     ],
//     ['cardsC1',
//         ['0 -134px']
//     ],
//     ['cardsC2',
//         ['-46px -134px']
//     ],
//     ['cardsC3',
//         ['-92px -134px']
//     ],
//     ['cardsC4',
//         ['-138px -134px']
//     ],
//     ['cardsC5',
//         ['-184px -134px']
//     ],
//     ['cardsC6',
//         ['-230px -134px']
//     ],
//     ['cardsC7',
//         ['-276px -134px']
//     ],
//     ['cardsC8',
//         ['-322px -134px']
//     ],
//     ['cardsC9',
//         ['-370px -134px']
//     ],
//     ['cardsC10',
//         ['-416px -134px']
//     ],
//     ['cardsC11',
//         ['-462px -134px']
//     ],
//     ['cardsC12',
//         ['-508px -134px']
//     ],
//     ['cardsC13',
//         ['-554px -134px']
//     ],
//     ['cardsP1',
//         ['0 -200px']
//     ],
//     ['cardsP2',
//         ['-46px -200px']
//     ],
//     ['cardsP3',
//         ['-92px -200px']
//     ],
//     ['cardsP4',
//         ['-138px -200px']
//     ],
//     ['cardsP5',
//         ['-184px -200px']
//     ],
//     ['cardsP6',
//         ['-230px -200px']
//     ],
//     ['cardsP7',
//         ['-276px -200px']
//     ],
//     ['cardsP8',
//         ['-322px -200px']
//     ],
//     ['cardsP9',
//         ['-370px -200px']
//     ],
//     ['cardsP10',
//         ['-416px -200px']
//     ],
//     ['cardsP11',
//         ['-462px -200px']
//     ],
//     ['cardsP12',
//         ['-508px -200px']
//     ],
//     ['cardsP13',
//         ['-554px -200px']
//     ]
// ],
//             firstCards = $('.firstCards'),
//             secondCards = $('.secondCards'),
//             thirdCards = $('.thirdCards'),
//             fourthCards = $('.fourthCards'),
//             fifthCards = $('.fivethCards'),
//             callINput = $('.callButton'),
//             raiseButton = $('.raiseButton'),
//             foldButton = $('.foldButton'),
//             checkButton = $('.checkButton'),
//             resetButton = $('.resetButton'),
//             moneyFirst = $('.firstPlayersPosition').find('.pointsPlayers').children('span'),
//             bigBlandsPlayers = 2,
//             bigBlands = $('.blendsBlocBig'),
//             smallBlands = $('.blendsBlocSmall'),
//             indexBB = $('.blendsBlocBig').closest('.playersBlockAll').attr('data-position-blands');
//
//         $('.rand').on('click', function () {
//             dealerDistribution();
//             self.rate(firstPlayer.points());
//         });
//
//         var self;
//         // Players created constructor
//         function Players(positionCards,firstCards,secondCards,money) {
//             self = this;
//             var firstCardsOnly = firstCards;
//             var secondCardsOnly = secondCards;
//             var pointsPlayer = positionCards;
//             this.points = function () {
//                 return pointsPlayer;
//             };
//             var allMoney = money;
//             this.money = function () {
//                 return allMoney;
//             };
//             playersDistribution(positionCards.find('.firstCardsPlayers'),firstCardsOnly);
//             playersDistribution(positionCards.find('.secondCardsPlayers'),secondCardsOnly);
//             rateBlinds(positionCards);
//         };
//
//         Players.prototype.rate = function (pointsPlayers) {
//             var moneyPlayers = Number(pointsPlayers.find('.manyPlayers').text().match(/[0-9]+/)[0]),
//                 ratesPlayer = pointsPlayers.find('.pointsPlayers').children('span'),
//                 inputRates = pointsPlayers.find('.pointsPlayers').children('.ratesInput');
//
//             raiseButton.on('click', function () {
//                 inputRates.on('focus', function () {
//                     $('.okeyInput').show();
//                 });
//                 inputRates.show();
//
//                 $('.okeyInput').on('click', function () {
//                     $('.okeyInput').hide();
//                     var inputNUmbers = inputRates.val();
//
//                     if(inputRates != '') {
//                         if(moneyPlayers >= inputNUmbers) {
//                             ratesPlayer.text(inputNUmbers);
//                             inputRates.val('');
//                             pointsPlayers.find('.manyPlayers').children('span').text(moneyPlayers - inputNUmbers);
//                         } else {
//                             inputNUmbers = moneyPlayers;
//                             pointsPlayers.find('.manyPlayers').children('span').text(moneyPlayers - inputNUmbers);
//                             ratesPlayer.text(inputNUmbers);
//                             inputRates.val('');
//                             moneyPlayers -= inputNUmbers;
//                         }
//                     }
//                 });
//             });
//         };
//
//         Players.prototype.folds = function (firstPlayer) {
//             foldsCards(firstPlayer);
//         };
//
//         Players.prototype.calls = function (money,players) {
//             callsIteration(money.text(),players);
//         };
//
//         Players.prototype.blandsObt = function (players) {
//             blainsDisplacement(players);
//         };
//
//         // Created Players
//         var firstPlayer = new Players($('.firstPlayersPosition'),randomCards()[0][1],randomCards()[0][1],moneyFirst);
//         var secondPlayer = new Players($('.secondPlayersPosition'),randomCards()[0][1],randomCards()[0][1]);
//         var thirdPlayer = new Players($('.thirdPlayersPosition'),randomCards()[0][1],randomCards()[0][1]);
//         var fourthPlayer = new Players($('.fourthPlayersPosition'),randomCards()[0][1],randomCards()[0][1]);
//
//
//
//
//         // Game function all <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//
//         // Displacement blands
//         function blainsDisplacement(players) {
//             var bigBlands = $('.blendsBlocBig'),
//                 smallBlands = $('.blendsBlocSmall'),
//                 indexBB = $('.blendsBlocBig').closest('.playersBlockAll').attr('data-position-blands');
//
//             if(indexBB == 1 && indexBB <= $('.playersBlockAll').length) {
//                 $('.playersBlockAll').eq(1).find('.playersInfo').after(bigBlands);
//                 $('.playersBlockAll').eq(0).find('.playersInfo').after(smallBlands);
//                 rateBlinds(players);
//             }
//             if(indexBB == 2 && indexBB <= $('.playersBlockAll').length) {
//                 $('.playersBlockAll').eq(2).find('.playersInfo').after(bigBlands);
//                 $('.playersBlockAll').eq(1).find('.playersInfo').after(smallBlands);
//                 rateBlinds(players);
//             }
//             if(indexBB == 3 && indexBB <= $('.playersBlockAll').length) {
//                 $('.playersBlockAll').eq(3).find('.playersInfo').after(bigBlands);
//                 $('.playersBlockAll').eq(2).find('.playersInfo').after(smallBlands);
//                 rateBlinds(players);
//             }
//             if(indexBB == 4 && indexBB <= $('.playersBlockAll').length) {
//                 $('.playersBlockAll').eq(0).find('.playersInfo').after(bigBlands);
//                 $('.playersBlockAll').eq(3).find('.playersInfo').after(smallBlands);
//                 rateBlinds(players);
//             }
//             if(indexBB == $('.playersBlockAll').length) {
//                 $('.playersBlockAll').eq(0).find('.playersInfo').after(bigBlands);
//                 $('.playersBlockAll').eq(3).find('.playersInfo').after(smallBlands);
//                 rateBlinds(players);
//             }
//         }
//
//         // Players obtained cards
//         function playersDistribution(elem,firstCards) {
//             elem.css({
//                 'background-position':firstCards
//             });
//         }
//
//         // Obtained blinds
//         function rateBlinds(position) {
//             $('.playersBlockAll').find('.pointsPlayers').children('span').text('0');
//             $('.playersBlockAll').find(bigBlands).parent().find('.pointsPlayers').children('span').text('2');
//             $('.playersBlockAll').find(smallBlands).parent().find('.pointsPlayers').children('span').text('1');
//         };
//
//         //Folds cards
//         function foldsCards(firstPlayer) {
//             firstPlayer.find('.plaersCardsOnly').addClass('foldsCards');
//         }
//
//         // Calls
//         function callsIteration(money, player) {
//             if(player.find(bigBlands)) {
//
//             } else if(player.find(smallBlands)) {
//
//             }
//
//             console.log(player);
//         };
//
//         // Check
//         function checked() {
//             var activeParent = $('.activePlayers').parent();
//             var indexActive = Number($('.activePlayers').parent().attr('data-position-blands'));
//
//             if(bigBlandsPlayers == Number(activeParent.find('.pointsPlayers').text())) {
//                 $('.playersBlockAll').find('.activesLine').removeClass('activePlayers');
//                 if(indexActive == $('.playersBlockAll').length) {
//                     $('.playersBlockAll').eq(0).find('.activesLine').addClass('activePlayers');
//                 } else {
//                     $('.playersBlockAll').eq(indexActive).find('.activesLine').addClass('activePlayers');
//                 }
//             }
//         };
//
//         // First distribution
//         function dealerDistribution() {
//             firstCards.css({
//                 'background-position':randomCards()[0][1]
//             });
//             secondCards.css({
//                 'background-position':randomCards()[0][1]
//             });
//             thirdCards.css({
//                 'background-position':randomCards()[0][1]
//             });
//         };
//
//         // Obtaining the fourth card
//         function fourthCard() {
//             fourthCards.css({
//                 'background-position':randomCards()[0][1]
//             });
//         };
//
//         // Obtaining the fifth card
//         function fifthCard() {
//             fifthCards.css({
//                 'background-position':randomCards()[0][1]
//             });
//         };
//
//         // Obtaining random cards
//         function randomCards() {
//             var randomNumber = getRandomInt(0,cardsArr.length-1),
//                 randomCard;
//                 randomCard = cardsArr.splice(randomNumber,1);
//             return randomCard;
//         };
//
//         // Obtaining random numbers
//         function getRandomInt(min, max) {
//             var rand = min + Math.random() * (max + 1 - min);
//             rand = Math.floor(rand);
//             return rand;
//         };
//
//         // Reset game
//         function resetGame() {
//
//         };
//
//
//         // Game scenario <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//
//         // Folds
//         foldButton.on('click', function () {
//             self.folds(firstPlayer.points());
//         });
//
//         // Calls
//         callINput.on('click', function () {
//             self.calls(firstPlayer.money(),firstPlayer.points());
//         });
//
//         // Raise
//         raiseButton.on('click', function () {
//             //self.calls(firstPlayer.money(),firstPlayer.points());
//         });
//
//         // Reset
//         resetButton.on('click', function () {
//             resetGame();
//         });
//
//         // Check
//         checkButton.on('click', function () {
//             checked();
//         });
//
//         $('.rand').on('click', function () {
//             // dealerDistribution();
//             blainsDisplacement();
//             self.rate(firstPlayer.points());
//             // self.blandsObt(firstPlayer.points());
//         });
//     });
// })();
var figure = prompt('Which geometric figure u prefer?','triangel or rectangel');
console.log(figure);
for ( ;!(figure == null && figure != 'triangel' && figure != 'rectangel'); ) {
    var figure = prompt('Which geometric figure u prefer?','triangel or rectangel');
}

if (figure == 'triangel') {
    var triangel_width = prompt('Which triangels width you woluid like?','');
    var triangel_height = prompt('Which triangels height you would like?','');
    var S = ( triangel_width * triangel_height) / 2;
    alert(S);
}
else if (figure == 'rectangel') {
    var rectangel_width = prompt('Which rectangels width you woluid like?','');
    var rectangel_height = prompt('Which rectangels height you would like?','');
    var S = rectangel_width * rectangel_height;
    alert(S);
}
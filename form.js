class Form {
  constructor() {}
  display() {
    color("red");
    var title = createElement("h1");
    title.html("Is your city sustainable?");
    title.position(600, 100);
    var Ques1 = createElement("h2");
    Ques1.html("Does your city have proper water supply? ");
    Ques1.position(450, 150);
    var input1 = createInput("YES/NO");
    var button1 = createButton("NEXT>");
    button1.position(450, 240);
    input1.position(450, 200);

    button1.mousePressed(function () {
      input1.hide();
      button1.hide();

      var name = input1.value();
      playerCount += 1;
      player.update(name);
      player.updateCount(playerCount);
    });
    var Ques2 = createElement("h2");
    Ques2.html("Does your city have usual electric cut-offs?? ");
    Ques2.position(450, 250);
    var input2 = createInput("YES/NO");
    var button2 = createButton("NEXT>");
    button2.position(450, 340);
    input2.position(450, 300);

    button2.mousePressed(function () {
      input2.hide();
      button2.hide();

      var name = input.value();
      playerCount += 1;
      player.update(name);
      player.updateCount(playerCount);

      //   var greeting = createElement("h3");
      //    greeting.html("Hello " + name);
      //     greeting.position(130, 160);
    });
    var Ques3 = createElement("h2");
    Ques3.html("Is garbage disposal done regularly? ");
    Ques3.position(450, 350);
    var input3 = createInput("YES/NO");
    var button3 = createButton("NEXT>");
    button3.position(450, 440);
    input3.position(450, 400);

    button3.mousePressed(function () {
      input3.hide();
      button3.hide();

      var name = input3.value();
      playerCount += 1;
      player.update(name);
      player.updateCount(playerCount);

      //   var greeting = createElement("h3");
      //    greeting.html("Hello " + name);
      //     greeting.position(130, 160);
    });
    var Ques4 = createElement("h2");
    Ques4.html("Are you happy with the amount of greenery in your city?");
    Ques4.position(450, 450);
    var input4 = createInput("YES/NO");
    var button4 = createButton("NEXT>");
    button4.position(450, 540);
    input4.position(450, 500);

    button4.mousePressed(function () {
      input4.hide();
      button4.hide();

      var name = input4.value();
      playerCount += 1;
      player.update(name);
      player.updateCount(playerCount);

      //   var greeting = createElement("h3");
      //    greeting.html("Hello " + name);
      //     greeting.position(130, 160);
    });
    var Ques5 = createElement("h2");
    Ques5.html("Do the local traders encourage use of plastic?  ");
    Ques5.position(450, 550);
    var input5 = createInput("YES/NO");
    var button5 = createButton("NEXT>");
    button5.position(450, 640);
    input5.position(450, 600);

    button5.mousePressed(function () {
      input5.hide();
      button5.hide();

      var name = input5.value();
      playerCount += 1;
      player.update(name);
      player.updateCount(playerCount);

      //   var greeting = createElement("h3");
      //    greeting.html("Hello " + name);
      //     greeting.position(130, 160);
    });
    var button6 = createButton("END!");
    button6.position(600, 750);
    button6.mousePressed(function () {
      button6.hide();

      var thankyou = createElement("h1");
      thankyou.html("Thank you for spending your valuable time!");
      thankyou.position(450, 750);
      //   var greeting = createElement("h3");
      //    greeting.html("Hello " + name);
      //     greeting.position(130, 160);
    });
  }
}

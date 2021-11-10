class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input = createInput("Enter Correct Option No.")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3')
    this.option1 = createElement('h4')
    this.option2 = createElement('h4')
    this.option3 = createElement('h4')
    this.option4 = createElement('h4')

    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Question: What is the Silicon Valley of India??")
    this.question.position(150,80)

    this.option1.html("1.Delhi")
    this.option1.position(150,110)
    this.option2.html("2.Pune")
    this.option2.position(150,140)
    this.option3.html("3.Mumbai")
    this.option3.position(150,170)
    this.option4.html("4.Banglore")
    this.option4.position(150,200)

    this.input1.position(150, 280);
    this.input.position(450, 280);
    this.button.position(350, 350);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

    })


  }
}

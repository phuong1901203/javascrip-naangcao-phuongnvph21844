const poll = {
    question: 'what is your favourite progrmaming language? ',
    options: ['0:JavaScrip','1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),

    registerNewAnswer(){
        const answer = Number(
            promtp(
                `${this.question}\n${this.options.join('\n')}\n(write option number)`
            )
        );
        console.log(answer);
        // Register answer
        typeof answer === 'number' && 
        this.answers[answer]++;
        this.displayResults();7
        this.displayResults('string');

    },
    displayResults( type = 'array'){
        if(type === 'array'){
            console.log(this.answers);
        } else if (type === 'string'){
            console.log (`Poll results are ${this.answers.join(',')}`);
        }
    }
};

 document
   .querySelector('.poll')
   .addEventListener('click', poll.registerNewAnswer.bind(poll));
   poll.displayResults.call({answer: [5,2,3]}, 'string');
   poll.displayResults.call({answer: [1,5,3,9,6,1]}, 'string');
const generate_num=Math.floor(Math.random()*100)+1;

let guess_count=0;

let guess_num=prompt("Enetr the number between 1 to 100.");
while(generate_num!=guess_num){
    if (generate_num>guess_num){
        guess_num=prompt("Please Enter Greater number.");
    }
    else{
        guess_num=prompt("Please Enetr Lower number.");
    }
    guess_count+=1;
}
const message="Congratulation.....\nTotal Attempt: "+ String(guess_count);
alert(message);
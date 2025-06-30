function greeting(para1, para2){
      para1(para2);
     
}

function greetingHandler(name){
    console.log('Good Morning,', name);
}

function greetingNight(name){
    console.log('Good Night,', name)
}

greeting(greetingHandler, 'tom sir');

greeting(greetingNight, 'rasel viper');

greeting(greetingNight, 'hong kong')
function sayHello3(message)  {
  return name => {
    console.log(`${message} ${name}`);
  };
}

let Hello = sayHello3('You are not alone');
Hello('JSC');
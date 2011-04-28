var hello, helloHello, notInterpolated, sayHello;
hello = "hello";
sayHello = "say " + hello;
helloHello = "" + sayHello + " " + hello;
notInterpolated = 'dont #{sayHello}';
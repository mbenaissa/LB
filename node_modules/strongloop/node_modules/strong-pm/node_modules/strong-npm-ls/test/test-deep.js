require('./helpers');

assertPrintable('deep-deps', 0, 'deep-0.txt');
assertPrintable('deep-deps', 1, 'deep-1.txt');
assertPrintable('deep-deps', 2, 'deep-2.txt');
assertPrintable('deep-deps', 3, 'deep-3.txt');
assertPrintable('deep-deps', 4, 'deep-4.txt');
assertPrintable('deep-deps', 5, 'deep-5.txt');
assertPrintable('deep-deps', Number.MAX_VALUE, 'deep-inf.txt');

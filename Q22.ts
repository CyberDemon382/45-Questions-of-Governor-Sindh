const numbers= [10, 20, 30, 40, 50, 60];

const invalidIndex= 10;

if (invalidIndex < numbers.length) {
    const value = numbers[invalidIndex];
    console.log(`Value at index ${invalidIndex}: ${value}`);
} else {
    console.error("Invalid index. Array length exceeded.");
}
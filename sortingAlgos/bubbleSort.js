const arr = [1, 2, 9, 6, 5, 4, 3, 0, -1];

bubbleSort(arr);

function bubbleSort(arr) {
    let aux;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux ; 
            };
        }
    }
}

function swap(a, b) {
    let aux;

    aux = a;
    a = b;
    b = aux;
}

console.log(arr);
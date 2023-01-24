//merge 2 array เข้าด้วยกัน --> ส้งเข้า function sort
export function merge(arr1: number[], arr2: number[]) {
    let merge: number[] = [...arr1, ...arr2];
    return Sort(merge);
}
//function sort min - max
export function Sort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}




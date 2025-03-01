Operations and Time Complexity for Arrays

Access - O(1)
Insert(end) - O(1)
Insert(index) - O(n)
Delet(end) - O(1)
Delete(index) - O(n)
Search - O(n)
Search(sorted array) - O(logn)
Update - O(1)

Native Javascript arrays are always dyamic by nature. Even if you set them using something like const staticArray = new Array(5) you will still be able to edit the size of the array afterwards. If you want an array to perform in a truly static fashion there is a technique that you can use. You can ellect to use a TypedArray instead

TypedArrays:
-----------------------------------------
Int8Array: -128 to 127
Uint8Array: 0 to 255 
Int16Array: -32768 to 32767
Uint16Array: 0 to 65535
Int32Array: -2147483648 to 2147483647
Uint32Array: 0 to 4294967295
Float32Array: 7 decimal digits of precision
Float64Array: 16 decimal digits of precision


Use Cases:
-----------------------------------------
Uint8Array: Image data (e.g., RGB values).
Uint8ClampedArray: Canvas pixel data where color values are clamped.
Int16Array / Uint16Array: Audio or high-resolution image data.
Float32Array / Float64Array: Graphics, simulations, or scientific computations.
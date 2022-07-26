/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let temp = queue.dequeue();
  if (temp === undefined) return temp;
  let count = 0;
  while (count < index) {
    count++;
    queue.enqueue(temp);
    temp = queue.dequeue();
  }
  return temp;
}

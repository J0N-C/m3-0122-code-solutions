/* exported take2nd */

function take2nd(queue) {
  const first = queue.dequeue();
  if (first === undefined) return first;
  const second = queue.dequeue();
  if (second === undefined) return first;
  queue.enqueue(first);
  return second;
}
